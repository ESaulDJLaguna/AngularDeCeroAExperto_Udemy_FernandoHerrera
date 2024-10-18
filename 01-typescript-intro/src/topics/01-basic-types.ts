const name: string = "Strider";

//! Permite que la variable acepte números o strings
//let hpPoints: number | string = 95;
//! Permite que la variable acepte números u obligatoriamente la cadena FULL (ningún otro string)
let hpPoints: number | "FULL" = 95;
const isAlive: boolean = true;

hpPoints = "FULL";

console.log({name, hpPoints, isAlive});

//! Define este archivo como un módulo
export {};
