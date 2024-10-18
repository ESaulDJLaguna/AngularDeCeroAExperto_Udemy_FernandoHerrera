function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};
//! Otra forma de utilizar la función flecha sin el return explícito
// const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

//! Se recomienda poner los parámetros en el orde: obligatorios, opciones y opcionales que tienen un valor por defecto
function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({result, result2, multiplyResult});

interface Charecter {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharecter = (charecter: Charecter, amount: number) => {
  charecter.hp += amount;
};

const strider: Charecter = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

healCharecter(strider, 10);
healCharecter(strider, 20);

strider.showHp();

export {};
