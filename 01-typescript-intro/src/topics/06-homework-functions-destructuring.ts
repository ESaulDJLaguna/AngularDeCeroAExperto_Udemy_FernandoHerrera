export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

//! Dos formas de desestructurar aquí serían: desestructurar cada argumento en los parámetros, aunque el incoveniente es que si son muchos cada vez se hará más grande
// function taxCalculation({
//   tax,
//   products,
// }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions) {
  //! La segunda forma de hacerlo es desestructurar dentro del método, lo cual hace más limpio el código
  const {tax, products} = options;
  let total = 0;

  //! Desestructuramos dentro del forEach
  products.forEach(({price}) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, finalTax] = taxCalculation({products: shoppingCart, tax});

console.log("Total", total);
console.log("Tax", finalTax);

//x export {};
