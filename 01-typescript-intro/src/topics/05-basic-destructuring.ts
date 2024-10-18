interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const song = "New Song";

//! song es la propiedad que quiero extraer de mi objeto audioPlayer, pero, ¿qué pasa si ya tengo una variable song que es necesaria, se puede hacer de la segunda manera...
// const {song} = audioPlayer;
//! ..., el song antes de los dos puntos es la propiedad que quiero extraer de audioPlayer y ese valor lo quiero establecer a anotherSong
// const {song: anotherSong} = audioPlayer;

//! Para desestructurar una propiedad anidada, es decir, para recuperar el valor de author o year de dentro de details, hay dos posibles formas. La primera es hacerlo en la misma línea (aunque hace el código un poco más complicado de leer)...
// const {
//   song: anotherSong,
//   songDuration: duration,
//   details: {author: artist}, //! Podemos "cambiarle" el nombre, p.e., a artist
// } = audioPlayer;
//! La segunda forma es desestructurar en una variable details y realizar una segunda desestructuración (de igual manera se podría usar un nombre diferente haciendo 'details: newDetailName', pero se mantiene así para su facilidad de lectura)
const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
//! En caso de que NO existe el valor en el índice indicado con || le indicamos qué valor va a mostrar en lugar de undefined
// const trunks = dbz[3] || "No hay personaje";

//! Podemos recuperar el valor de cada elemento del arreglo en propiedades individuales, pero, ¿qué pasa si solo quiero el tercer elemento?
// const [p1, p2, trunks]: string[] = dbz;

//! En caso de querer un valor específico, se "ignoran" los elementos que no me interesan utiilzando comas y de igual manera se le pude establecer un valor por defecto en caso de que NO exista el tercer elemento
const [, , trunks = "Not Found"]: string[] = ["Goku", "Vegeta"];

console.error("Personaje 3: ", trunks);

export {};
