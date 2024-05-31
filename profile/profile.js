"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DATOS PRIMITIVOS
var nombre = "Ana";
var edad = 28;
var profesion = "marketing";
var ubicacion = "Ica";
var esEstudiante = true;
console.log("Tipo de dato de nombre:", typeof nombre);
console.log("Tipo de dato de edad:", typeof edad);
console.log("Tipo de dato de esEstudiante:", typeof esEstudiante);
var data = {
    nombre: nombre,
    edad: edad,
    profesion: profesion,
    ubicacion: ubicacion,
    esEstudiante: esEstudiante,
};
console.log("Tipo de dato de Data es:", typeof data);
var fam1 = {
    nombre: "issac",
    edad: 38,
    profesion: "docente",
    ubicacion: "Lima",
    esEstudiante: false,
};
var fam2 = {
    nombre: "alva",
    edad: 32,
    profesion: "administracion",
    ubicacion: "Ica",
    esEstudiante: false,
};
console.log("El tipo de dato del objeto fam1 es:", typeof fam1);
console.log("El tipo de dato del objeto fam2 es:", typeof fam2.edad);
var family = [data, fam1, fam2];
console.log("El tipo de dato del array family[0]:", typeof family[0].esEstudiante);
//operador IN
if ("ubicacion" in fam1) {
    console.log("La propiedad 'ubicacion' está en fam1");
}
else {
    console.log("La propiedad 'ubicacion' no está en fam1.");
}
console.log("La propiedad 'apellido' está en fam1:", "apellido" in fam1);
console.log("La propiedad 'edad' está en fam2:", "edad" in fam2);
console.log("La propiedad 'esEstudiante' está en family[1]:", "edad" in family[1]);
//operador IS
function isString(valor) {
    return typeof valor === "string";
}
console.log('¿nombre es de tipo string?', isString(nombre));
console.log('¿esEstudiante es de tipo string?', isString(esEstudiante));
function isNumber(valor) {
    return typeof valor === "number";
}
console.log('¿edad es de tipo number?', isNumber(edad));
console.log('¿data es de tipo number?', isNumber(data));
//generics I
function firstElement(arg) {
    return arg[0];
}
console.log("Primer elemento de family:", firstElement(family));
console.log("Primer elemento de data:", firstElement([data]));
//generics II
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.items = [];
    }
    Portfolio.prototype.add = function (item) {
        this.items.push(item);
    };
    Portfolio.prototype.get = function () {
        return this.items;
    };
    Portfolio.prototype.sum = function () {
        return this.items.reduce(function (acc, item) { return acc + item; }, 0);
    };
    Portfolio.prototype.concat = function () {
        return this.items.reduce(function (acc, item) { return acc + item; }, "");
    };
    return Portfolio;
}());
var numbersPortfolio = new Portfolio();
numbersPortfolio.add(1);
numbersPortfolio.add(2);
numbersPortfolio.add(3);
console.log('Elementos del portfolio:', numbersPortfolio.get());
console.log('Suma de los elementos del portfolio:', numbersPortfolio.sum());
var textPortfolio = new Portfolio();
textPortfolio.add("hola");
textPortfolio.add(" ");
textPortfolio.add("mundo");
console.log('Elementos del portfolio:', textPortfolio.get());
console.log('Suma de los elementos del portfolio:', textPortfolio.concat());
