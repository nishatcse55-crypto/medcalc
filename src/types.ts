export type ProductType = 'Powder' | 'Bolus' | 'Liquid';

export interface Ingredient {
  name: string;
  amount: number; // per batchBase (1kg, 1L, or 1 bolus)
  unit: string;   // g, ml, etc.
  price: number;  // per priceUnit (kg or L)
  priceUnit: string; // kg or L
}

export interface PackSize {
  label: string;
  value: number; // in grams, ml, or pieces
  unit: string;
  packagingCost: number;
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  packSizes: PackSize[];
  formula: Ingredient[];
  batchBase: number; // 1000 (for 1kg/1L) or 1 (for bolus)
  batchUnit: string; // g, ml, or pcs
}

export interface CalculationResult {
  totalBatchQty: number;
  ingredients: Array<{
    name: string;
    qtyRequired: number;
    qtyUnit: string;
    unitPrice: number;
    priceUnit: string;
    totalCost: number;
  }>;
  totalRawCost: number;
  totalPackagingCost: number;
  overhead: number;
  totalProductionCost: number;
  costPerUnit: number;
  sellingPrice: number;
  totalRevenue: number;
  expectedProfit: number;
}
