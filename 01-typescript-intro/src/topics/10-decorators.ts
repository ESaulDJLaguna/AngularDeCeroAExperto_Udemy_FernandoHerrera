//! Un decorador no es más que una función que se puede adjuntar a las clases, a las propiedades y métodos de estas clases, etc.
function classDecorator<T extends {new (...args: any[]): {}}>(constructor: T) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  // @classDecorator;
  public myProperty: string = "Abc123";

  // @classDecorator;
  print() {
    console.log("Hola Mundo");
  }
}

//! Se imprime la definición de la clase
console.log(SuperClass);

const myClass = new SuperClass();

//! Se imprimie la instancia de la clase
console.log(myClass);
