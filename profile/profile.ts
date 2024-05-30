import { Data } from "./Data";

let nombre : string = "Ana";
let edad : number = 28;
let profesion : string = "marketing";
let ubicacion : string = "Ica";
let esEstudiante : boolean = true;

let data: Data = {
    nombre,
    edad,
    profesion,
    ubicacion,
    esEstudiante,
}

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

let family: Array<Data> = [data, fam1, fam2];
console.log(family);
