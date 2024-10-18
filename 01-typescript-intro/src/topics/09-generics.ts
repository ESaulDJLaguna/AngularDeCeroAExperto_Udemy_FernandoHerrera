export function whatsMyType<T>(argument: T): T {
  return argument;
}

//! La función tiene la capacidad de recibir cualquier tipo de dato. Por lo tanto, recibe un tipo de dato y devuelve ese mismo tipo de dato, pero, ¿qué pasa si amINotRestriction quiero que maneje sí o sí un tipo de dato específico, es decir, que no sea un string sino que reciba y devuelva un número? Como se observa, está recibiendo un string y por lo tanto retornando un string, para solucionar esto se "restringe" el tipo de dato que va a manejar la función como los ejemplos siguientes.
let amINotRestriction = whatsMyType("string");
let amINotRestriction2 = whatsMyType(10);
let amINotRestriction3 = whatsMyType([1, 2, 3, 4, 5]);

//! En estos ejemplos, la misma función sigue permitiendo manejar diferentes tipos de datos, pero ahora "obligamos" a manejar un tipo de dato específico, en amIString obligamos a siempre pasar como argumento una cadena y si se le manda un número va a marcar un error.
let amIString = whatsMyType<string>("Hola Mundo");
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

//! Ahora el Intellisense nos recomienda métodos de acuerdo al tipo de dato
console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
