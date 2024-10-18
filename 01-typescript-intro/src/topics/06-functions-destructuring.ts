interface Product {
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

function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;

  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//! Lo ideal sería pasar al objeto como argumento el tax de la siguiente manera 'tax: tax', pero EcmaScript 6 introdujo que si se tiene una propiedad que apunta a cuya variable es identico, para evitar "duplicidad", se puede obviar y solo pasar un solo nombre, como se realizó a continuación
const result = taxCalculation({products: shoppingCart, tax});

console.log("Total", result[0]);
console.log("Tax", result[1]);

export {};
