const nombre = "Mara";
const correo = "mara123@gmail.com";
const estudiante = "si";
const edad = 35;
const altura = 1.75;
const peso = 68;

const user = {
  nombre,
  correo,
  estudiante,
  edad,
  fisico: {
    altura,
    peso,
  },
};

document.getElementById("nombre").textContent = `Nombre:${nombre}`;
document.getElementById("correo").textContent = `Correo:${correo}`;
document.getElementById("edad").textContent = `Edad:${edad}`;
document.getElementById("estudiante").textContent = `Estudia:${estudiante}`;

if (user.edad > 17 && user.estudiante.toUpperCase() === "SI") {
  document.getElementById("altura").textContent = `Altura:${altura}`;
  document.getElementById("peso").textContent = `Peso:${peso}`;
} else {
  document.getElementById("altura").textContent = `Información restringida`;
  document.getElementById("peso").textContent = `Información restringida`;
}
