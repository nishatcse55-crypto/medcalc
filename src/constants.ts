import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'mineral-mixture',
    name: 'Mineral Mixture Powder',
    type: 'Powder',
    batchBase: 1000,
    batchUnit: 'g',
    packSizes: [
      { label: '500g Pouch', value: 500, unit: 'g', packagingCost: 12 },
      { label: '1kg Pouch', value: 1000, unit: 'g', packagingCost: 18 },
    ],
    formula: [
      { name: 'DCP', amount: 400, unit: 'g', price: 60, priceUnit: 'kg' },
      { name: 'Salt', amount: 300, unit: 'g', price: 20, priceUnit: 'kg' },
      { name: 'MgSO4', amount: 100, unit: 'g', price: 50, priceUnit: 'kg' },
      { name: 'Trace Mix', amount: 200, unit: 'g', price: 120, priceUnit: 'kg' },
    ],
  },
  {
    id: 'calcium-phosphorus',
    name: 'Calcium + Phosphorus Powder',
    type: 'Powder',
    batchBase: 1000,
    batchUnit: 'g',
    packSizes: [
      { label: '500g Pouch', value: 500, unit: 'g', packagingCost: 12 },
      { label: '1kg Pouch', value: 1000, unit: 'g', packagingCost: 18 },
    ],
    formula: [
      { name: 'Calcium Carbonate', amount: 600, unit: 'g', price: 25, priceUnit: 'kg' },
      { name: 'DCP', amount: 300, unit: 'g', price: 60, priceUnit: 'kg' },
      { name: 'Flavor', amount: 10, unit: 'g', price: 400, priceUnit: 'kg' },
      { name: 'Filler', amount: 90, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'electrolyte',
    name: 'Electrolyte Powder',
    type: 'Powder',
    batchBase: 1000,
    batchUnit: 'g',
    packSizes: [
      { label: '100g Sachet', value: 100, unit: 'g', packagingCost: 6 },
      { label: '500g Pouch', value: 500, unit: 'g', packagingCost: 14 },
    ],
    formula: [
      { name: 'Glucose', amount: 500, unit: 'g', price: 70, priceUnit: 'kg' },
      { name: 'NaCl', amount: 200, unit: 'g', price: 20, priceUnit: 'kg' },
      { name: 'KCl', amount: 100, unit: 'g', price: 90, priceUnit: 'kg' },
      { name: 'NaHCO3', amount: 200, unit: 'g', price: 60, priceUnit: 'kg' },
    ],
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C Powder',
    type: 'Powder',
    batchBase: 1000,
    batchUnit: 'g',
    packSizes: [
      { label: '100g Jar', value: 100, unit: 'g', packagingCost: 15 },
    ],
    formula: [
      { name: 'Ascorbic Acid', amount: 950, unit: 'g', price: 850, priceUnit: 'kg' },
      { name: 'Carrier', amount: 50, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'toxin-binder',
    name: 'Toxin Binder',
    type: 'Powder',
    batchBase: 1000,
    batchUnit: 'g',
    packSizes: [
      { label: '1kg Bag', value: 1000, unit: 'g', packagingCost: 18 },
    ],
    formula: [
      { name: 'Bentonite', amount: 800, unit: 'g', price: 18, priceUnit: 'kg' },
      { name: 'HSCAS', amount: 200, unit: 'g', price: 120, priceUnit: 'kg' },
    ],
  },
  {
    id: 'liver-tonic-powder',
    name: 'Liver Tonic Powder',
    type: 'Powder',
    batchBase: 1000,
    batchUnit: 'g',
    packSizes: [
      { label: '100g Pouch', value: 100, unit: 'g', packagingCost: 10 },
      { label: '500g Pouch', value: 500, unit: 'g', packagingCost: 16 },
    ],
    formula: [
      { name: 'Choline', amount: 300, unit: 'g', price: 180, priceUnit: 'kg' },
      { name: 'Methionine', amount: 200, unit: 'g', price: 220, priceUnit: 'kg' },
      { name: 'Carrier', amount: 500, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'calcium-bolus',
    name: 'Calcium Bolus',
    type: 'Bolus',
    batchBase: 1,
    batchUnit: 'pcs',
    packSizes: [
      { label: '4 Bolus Box', value: 4, unit: 'pcs', packagingCost: 25 },
    ],
    formula: [
      { name: 'Calcium Carbonate', amount: 80, unit: 'g', price: 25, priceUnit: 'kg' },
      { name: 'Vitamin D3', amount: 0.1, unit: 'g', price: 15000, priceUnit: 'kg' },
      { name: 'Binder', amount: 19.9, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'multivitamin-bolus',
    name: 'Multivitamin Bolus',
    type: 'Bolus',
    batchBase: 1,
    batchUnit: 'pcs',
    packSizes: [
      { label: '4 Bolus Box', value: 4, unit: 'pcs', packagingCost: 25 },
    ],
    formula: [
      { name: 'Vitamin Premix', amount: 10, unit: 'g', price: 800, priceUnit: 'kg' },
      { name: 'Filler', amount: 90, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'liver-stimulant-bolus',
    name: 'Liver Stimulant Bolus',
    type: 'Bolus',
    batchBase: 1,
    batchUnit: 'pcs',
    packSizes: [
      { label: '4 Bolus Box', value: 4, unit: 'pcs', packagingCost: 25 },
    ],
    formula: [
      { name: 'Silymarin', amount: 5, unit: 'g', price: 1200, priceUnit: 'kg' },
      { name: 'Choline', amount: 20, unit: 'g', price: 180, priceUnit: 'kg' },
      { name: 'Base', amount: 75, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'anti-diarrheal-bolus',
    name: 'Anti-diarrheal Bolus',
    type: 'Bolus',
    batchBase: 1,
    batchUnit: 'pcs',
    packSizes: [
      { label: '4 Bolus Box', value: 4, unit: 'pcs', packagingCost: 25 },
    ],
    formula: [
      { name: 'Kaolin', amount: 70, unit: 'g', price: 35, priceUnit: 'kg' },
      { name: 'Pectin', amount: 10, unit: 'g', price: 500, priceUnit: 'kg' },
      { name: 'Binder', amount: 20, unit: 'g', price: 40, priceUnit: 'kg' },
    ],
  },
  {
    id: 'multivitamin-liquid',
    name: 'Multivitamin Liquid',
    type: 'Liquid',
    batchBase: 1000,
    batchUnit: 'ml',
    packSizes: [
      { label: '100ml Bottle', value: 100, unit: 'ml', packagingCost: 12 },
      { label: '1L Bottle', value: 1000, unit: 'ml', packagingCost: 28 },
    ],
    formula: [
      { name: 'Vitamin Mix', amount: 50, unit: 'ml', price: 900, priceUnit: 'L' },
      { name: 'Syrup Base', amount: 950, unit: 'ml', price: 60, priceUnit: 'L' },
    ],
  },
  {
    id: 'oral-calcium-liquid',
    name: 'Oral Calcium Liquid',
    type: 'Liquid',
    batchBase: 1000,
    batchUnit: 'ml',
    packSizes: [
      { label: '500ml Bottle', value: 500, unit: 'ml', packagingCost: 18 },
      { label: '1L Bottle', value: 1000, unit: 'ml', packagingCost: 28 },
    ],
    formula: [
      { name: 'Calcium Gluconate', amount: 200, unit: 'g', price: 180, priceUnit: 'kg' },
      { name: 'Water base', amount: 800, unit: 'ml', price: 0, priceUnit: 'L' }, // q.s. to 1L, so 800ml water
    ],
  },
  {
    id: 'liver-tonic-liquid',
    name: 'Liver Tonic Liquid',
    type: 'Liquid',
    batchBase: 1000,
    batchUnit: 'ml',
    packSizes: [
      { label: '100ml Bottle', value: 100, unit: 'ml', packagingCost: 12 },
      { label: '500ml Bottle', value: 500, unit: 'ml', packagingCost: 20 },
    ],
    formula: [
      { name: 'Choline', amount: 200, unit: 'ml', price: 180, priceUnit: 'L' },
      { name: 'Sorbitol', amount: 300, unit: 'ml', price: 120, priceUnit: 'L' },
      { name: 'Water base', amount: 500, unit: 'ml', price: 0, priceUnit: 'L' },
    ],
  },
  {
    id: 'amino-acid-liquid',
    name: 'Amino Acid Liquid',
    type: 'Liquid',
    batchBase: 1000,
    batchUnit: 'ml',
    packSizes: [
      { label: '500ml Bottle', value: 500, unit: 'ml', packagingCost: 20 },
    ],
    formula: [
      { name: 'Amino Mix', amount: 300, unit: 'ml', price: 450, priceUnit: 'L' },
      { name: 'Water base', amount: 700, unit: 'ml', price: 0, priceUnit: 'L' },
    ],
  },
];
