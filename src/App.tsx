import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './constants';
import { CalculationResult, Product, PackSize } from './types';
import { 
  Calculator, 
  Package, 
  Layers, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  ChevronRight,
  Info,
  Beaker
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [selectedPackSizeIndex, setSelectedPackSizeIndex] = useState<number>(0);
  const [units, setUnits] = useState<number>(100);
  const [profitMargin, setProfitMargin] = useState<number>(20);

  const selectedProduct = useMemo(() => 
    PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0],
    [selectedProductId]
  );

  const selectedPackSize = useMemo(() => 
    selectedProduct.packSizes[selectedPackSizeIndex] || selectedProduct.packSizes[0],
    [selectedProduct, selectedPackSizeIndex]
  );

  const results = useMemo((): CalculationResult => {
    const totalBatchQty = selectedPackSize.value * units;
    
    let totalRawCost = 0;
    const ingredients = selectedProduct.formula.map(ing => {
      const qtyRequired = (ing.amount / selectedProduct.batchBase) * totalBatchQty;
      
      // Price is per kg or per L. 1kg = 1000g, 1L = 1000ml.
      // If amount is in g/ml and price is in kg/L, we divide by 1000.
      const cost = (qtyRequired / 1000) * ing.price;
      totalRawCost += cost;

      return {
        name: ing.name,
        qtyRequired,
        qtyUnit: ing.unit,
        unitPrice: ing.price,
        priceUnit: ing.priceUnit,
        totalCost: cost
      };
    });

    const totalPackagingCost = selectedPackSize.packagingCost * units;
    const overhead = totalRawCost * 0.05;
    const totalProductionCost = totalRawCost + totalPackagingCost + overhead;
    const costPerUnit = totalProductionCost / units;
    const sellingPrice = costPerUnit * (1 + profitMargin / 100);
    const totalRevenue = sellingPrice * units;
    const expectedProfit = totalRevenue - totalProductionCost;

    return {
      totalBatchQty,
      ingredients,
      totalRawCost,
      totalPackagingCost,
      overhead,
      totalProductionCost,
      costPerUnit,
      sellingPrice,
      totalRevenue,
      expectedProfit
    };
  }, [selectedProduct, selectedPackSize, units, profitMargin]);

  const formatCurrency = (val: number) => val.toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 border-b border-[#141414] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif italic tracking-tight mb-2">VetCalc</h1>
            <p className="text-sm uppercase tracking-widest opacity-60 font-mono">Veterinary Manufacturing & Profit Calculator</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#141414] text-[#E4E3E0] px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            SYSTEM ACTIVE / CURRENCY: BDT
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Panel */}
          <aside className="lg:col-span-4 space-y-6">
            <section className="bg-white/50 backdrop-blur-sm border border-[#141414]/10 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 mb-6 opacity-60">
                <Calculator size={18} />
                <h2 className="text-xs uppercase tracking-widest font-mono font-bold">Parameters</h2>
              </div>

              <div className="space-y-5">
                {/* Product Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono mb-2 opacity-50">Select Product</label>
                  <select 
                    value={selectedProductId}
                    onChange={(e) => {
                      setSelectedProductId(e.target.value);
                      setSelectedPackSizeIndex(0);
                    }}
                    className="w-full bg-white border border-[#141414] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#141414]/10 transition-all appearance-none cursor-pointer"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                {/* Pack Size Selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono mb-2 opacity-50">Pack Size</label>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.packSizes.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPackSizeIndex(idx)}
                        className={`px-4 py-3 rounded-xl border transition-all text-sm font-medium ${
                          selectedPackSizeIndex === idx 
                            ? 'bg-[#141414] text-[#E4E3E0] border-[#141414]' 
                            : 'bg-white border-[#141414]/20 hover:border-[#141414]'
                        }`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Units Input */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-mono mb-2 opacity-50">Units</label>
                    <input 
                      type="number"
                      value={units}
                      onChange={(e) => setUnits(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-white border border-[#141414] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#141414]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-mono mb-2 opacity-50">Profit %</label>
                    <input 
                      type="number"
                      value={profitMargin}
                      onChange={(e) => setProfitMargin(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-white border border-[#141414] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#141414]/10 transition-all"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#141414] text-[#E4E3E0] p-5 rounded-2xl">
                <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-mono">Cost / Unit</p>
                <p className="text-2xl font-mono">৳{formatCurrency(results.costPerUnit)}</p>
              </div>
              <div className="bg-emerald-600 text-white p-5 rounded-2xl">
                <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1 font-mono">Profit</p>
                <p className="text-2xl font-mono">৳{formatCurrency(results.expectedProfit)}</p>
              </div>
            </div>
          </aside>

          {/* Main Display Area */}
          <main className="lg:col-span-8 space-y-8">
            {/* Ingredients Table */}
            <section className="bg-white border border-[#141414] rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-[#141414] text-[#E4E3E0] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Beaker size={20} className="opacity-60" />
                  <h2 className="text-sm uppercase tracking-widest font-mono font-bold">Raw Material Breakdown</h2>
                </div>
                <div className="text-[10px] font-mono opacity-60">
                  BATCH: {results.totalBatchQty.toLocaleString()} {selectedProduct.batchUnit}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-bottom border-[#141414]/10 bg-[#F5F5F3]">
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono opacity-50">Ingredient</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono opacity-50">Qty Required</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono opacity-50">Unit Price</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono opacity-50 text-right">Total Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#141414]/5">
                    {results.ingredients.map((ing, i) => (
                      <tr key={i} className="hover:bg-[#F5F5F3] transition-colors">
                        <td className="px-6 py-4 font-medium">{ing.name}</td>
                        <td className="px-6 py-4 font-mono text-sm">
                          {ing.qtyRequired >= 1000 
                            ? `${(ing.qtyRequired / 1000).toFixed(2)} ${ing.priceUnit}`
                            : `${ing.qtyRequired.toFixed(2)} ${ing.qtyUnit}`}
                        </td>
                        <td className="px-6 py-4 font-mono text-sm opacity-60">৳{ing.unitPrice}/{ing.priceUnit}</td>
                        <td className="px-6 py-4 font-mono text-right font-bold">৳{formatCurrency(ing.totalCost)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Financial Summary */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cost Analysis */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-60 mb-2">
                  <Layers size={16} />
                  <h3 className="text-[10px] uppercase tracking-widest font-mono font-bold">Cost Analysis</h3>
                </div>
                <div className="bg-white border border-[#141414] rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-[#141414]/5">
                    <span className="text-sm opacity-60">Total Raw Cost</span>
                    <span className="font-mono">৳{formatCurrency(results.totalRawCost)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#141414]/5">
                    <span className="text-sm opacity-60">Packaging Cost</span>
                    <span className="font-mono">৳{formatCurrency(results.totalPackagingCost)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#141414]/5">
                    <span className="text-sm opacity-60">Overhead (5%)</span>
                    <span className="font-mono">৳{formatCurrency(results.overhead)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-bold uppercase tracking-wider">Total Production</span>
                    <span className="text-xl font-mono font-bold">৳{formatCurrency(results.totalProductionCost)}</span>
                  </div>
                </div>
              </div>

              {/* Revenue Analysis */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-60 mb-2">
                  <TrendingUp size={16} />
                  <h3 className="text-[10px] uppercase tracking-widest font-mono font-bold">Revenue Projections</h3>
                </div>
                <div className="bg-[#141414] text-[#E4E3E0] border border-[#141414] rounded-2xl p-6 space-y-4 shadow-xl">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-sm opacity-60">Selling Price / Unit</span>
                    <span className="font-mono">৳{formatCurrency(results.sellingPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-sm opacity-60">Total Revenue</span>
                    <span className="font-mono">৳{formatCurrency(results.totalRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">Net Profit</span>
                    <span className="text-2xl font-mono font-bold text-emerald-400">৳{formatCurrency(results.expectedProfit)}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Info Footer */}
            <footer className="bg-[#141414]/5 border border-[#141414]/10 rounded-2xl p-6 flex items-start gap-4">
              <Info size={20} className="mt-1 opacity-40 shrink-0" />
              <div className="text-xs opacity-60 leading-relaxed font-mono">
                <p className="mb-2">Calculations are based on the standard formulas provided in the product database. Manufacturing overhead is fixed at 5% of raw material costs.</p>
                <p>Ensure all raw material prices are updated to current market rates in BDT for accurate profit estimation.</p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
