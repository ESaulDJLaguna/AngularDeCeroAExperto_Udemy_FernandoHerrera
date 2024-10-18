//! Nos obliga a solo agregar strings en el arreglo
const skills: string[] = ["Bash", "Counter", "Healing"];

//! Una interfaz al ser transpilada a JS no tiene representación física en JavaScript, es decir, no genera NINGUNA línea de código en JavaScript
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //! Propiedad opcional
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendell";

console.table({strider});

export {};
