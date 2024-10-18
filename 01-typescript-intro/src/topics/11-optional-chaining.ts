export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Fernando",
};

const passenger2: Passenger = {
  name: "Melissa",
  children: ["Natalia", "Elizabeth"],
};

const printChildren = (passenger: Passenger): void => {
  //! Si la propiedad 'children' existe, recupera la longitud del arreglo, en caso contrario (entonces será undefined y por lo tanto no existe length), devuelve un 0 (para eso se utiliza el ||)
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);
};

const returnChildrenNumber = (passenger: Passenger): number => {
  if (!passenger.children) return 0;

  //! Como ya se hizo una validación previa que confirma que children existe. Ahora estamos totalmente seguros que no va a ser un undefined, por lo tanto, aunque children es una propiedad opcional, nosotros estamos indicando con ! que estamos totalmente seguros que existe esa propiedad
  const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

printChildren(passenger1);
printChildren(passenger2);
console.log(passenger1.name, returnChildrenNumber(passenger1));
returnChildrenNumber(passenger2);
