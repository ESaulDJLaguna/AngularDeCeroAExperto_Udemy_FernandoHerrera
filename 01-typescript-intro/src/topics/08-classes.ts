export class Person {
  public name: string;
  private address: string;

  constructor() {
    this.name = "Fernando";
    this.address = "Costarica";
  }
}

export class FastPerson {
  constructor(public name: string, private address: string = "No Address") {}
}

//! Cómo extender una clase
// export class Hero extends FastPerson {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  // public person: FastPerson;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: FastPerson //! Es recomendable inyectar el parámetro que depender de él
  ) {
    // this.person = new FastPerson(realName);
  }
}

const fernando = new Person();
const ironman = new FastPerson("Iron-Man");
// const blackWidow = new Hero("Black Widow", 45, "Natasha");

const natasha = new FastPerson("Natasha");
const blackWidow = new Hero("Black Widow", 45, "Natasha", natasha);

console.log(fernando);
console.log(ironman);
console.log(blackWidow);
