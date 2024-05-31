import { Data } from "./Data";

//DATOS PRIMITIVOS
let nombre : string = "Ana";
let edad : number = 28;
let profesion : string = "marketing";
let ubicacion : string = "Ica";
let esEstudiante : boolean = true;

console.log("Tipo de dato de nombre:", typeof nombre);
console.log("Tipo de dato de edad:", typeof edad);
console.log("Tipo de dato de esEstudiante:", typeof esEstudiante);

let data: Data = {
    nombre,
    edad,
    profesion,
    ubicacion,
    esEstudiante,
}
console.log("Tipo de dato de Data es:", typeof data); 

let fam1: Data = {
    nombre: "issac",
    edad: 38,
    profesion: "docente",
    ubicacion: "Lima",
    esEstudiante: false,
}

let fam2: Data = {
    nombre: "alva",
    edad: 32,
    profesion: "administracion",
    ubicacion: "Ica",
    esEstudiante: false,
}

console.log("El tipo de dato del objeto fam1 es:", typeof fam1);
console.log("El tipo de dato del objeto fam2 es:", typeof fam2.edad);


let family: Array<Data> = [data, fam1, fam2];
console.log("El tipo de dato del array family[0]:", typeof family[0].esEstudiante);

//operador IN
if ("ubicacion" in fam1) {
    console.log("La propiedad 'ubicacion' está en fam1");
} else {
    console.log("La propiedad 'ubicacion' no está en fam1.");
}

console.log("La propiedad 'apellido' está en fam1:", `apellido` in fam1);
console.log("La propiedad 'edad' está en fam2:", `edad` in fam2);
console.log("La propiedad 'esEstudiante' está en family[1]:", `edad` in family[1]);

//operador IS
function isString(valor: any): valor is string {
    return typeof valor === "string";
    }
console.log('¿nombre es de tipo string?', isString(nombre));
console.log('¿esEstudiante es de tipo string?', isString(esEstudiante));

function isNumber(valor:any): valor is number {
    return typeof valor === "number";
}
console.log('¿edad es de tipo number?', isNumber(edad));
console.log('¿data es de tipo number?', isNumber(data));

//generics I
function firstElement<T>(arg: T[]): T {
    return arg[0];
    }
console.log("Primer elemento de family:", firstElement(family));
console.log("Primer elemento de data:", firstElement([data]));

//generics II
class Portfolio <T> {
    private items: T[] = [];

    add(item:T):void{
        this.items.push(item);
    }

    get(): T[] {
        return this.items;
    }

    sum(): number {
        return this.items.reduce((acc: number, item:any) => acc + item, 0);
    }

    concat(): string  {
        return this.items.reduce((acc: string, item:any) => acc+ item, "");
    }
}

const numbersPortfolio = new Portfolio<number>();
numbersPortfolio.add(1);
numbersPortfolio.add(2);
numbersPortfolio.add(3);
console.log('Elementos del portfolio:', numbersPortfolio.get());
console.log('Suma de los elementos del portfolio:', numbersPortfolio.sum());

const textPortfolio = new Portfolio<string>();
textPortfolio.add("hola");
textPortfolio.add(" ");
textPortfolio.add("mundo");
console.log('Elementos del portfolio:', textPortfolio.get());
console.log('Suma de los elementos del portfolio:', textPortfolio.concat());





