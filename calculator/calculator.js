function solicitarNumeros() {
  const num1 = prompt("Introduce el primer numero:");
  const num2 = prompt("Introduce el segundo numero:");
  dividir(num1, num2, manejarError);
}

function dividir(num1, num2, callback) {
  if (isNaN(num1) || isNaN(num2)) {
    callback("Error: los parametros no son numericos");
    return;
  }
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (num2 === 0) {
    callback("Error: no se puede dividir por cero");
    return;
  }
  const resultado = num1 / num2;
  mostraResultado(resultado);
}

function manejarError(mensaje) {
  alert(mensaje);
}

function mostraResultado(resultado) {
  const contenedor = document.querySelector("#resultado");
  contenedor.innerHTML = `El resultado de la division es ${resultado}`;
}

document.addEventListener("DOMContentLoaded", solicitarNumeros);
