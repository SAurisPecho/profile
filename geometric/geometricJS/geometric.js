import { perimetro } from "./perimetro.js";
import { area } from "./area.js";
import { rectangulos } from "./rectangleData.js";

function imprimirResultados() {
  const tabla = document.getElementById("resultado");

  rectangulos.forEach((rect, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>Rectangulo ${index + 1}</td>
        <td>${rect.ancho}</td>
        <td>${rect.altura}</td>
        <td>${perimetro(rect.ancho, rect.altura)}</td>
        <td>${area(rect.ancho, rect.altura)}</td>
    `;
    tabla.appendChild(fila);
  });
}

document.addEventListener("DOMContentLoaded", imprimirResultados);
