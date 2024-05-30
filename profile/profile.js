"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Ana";
var edad = 28;
var profesion = "marketing";
var ubicacion = "Ica";
var esEstudiante = true;
var data = {
    nombre: nombre,
    edad: edad,
    profesion: profesion,
    ubicacion: ubicacion,
    esEstudiante: esEstudiante,
};
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
var family = [data, fam1, fam2];
console.log("Familia:", family);
