const hobbies = {
  enPareja: [
    "Ver películas juntos",
    "Salir a cenar",
    "Viajar juntos",
    "Hacer ejercicio en pareja",
    "Bailar",
  ],
  conAmigos: [
    "Jugar videojuegos",
    "Ir a fiestas",
    "Ir a conciertos",
    "Practicar deportes en equipo",
    "Hacer barbacoas",
  ],
  conFamilia: [
    "Hacer manualidades",
    "Cocinar en familia",
    "Ir de excursión",
    "Jugar juegos de mesa",
    "Ver series en familia",
  ],
};

const [, , tres, ,] = hobbies.enPareja;
const [, , , cuatro] = hobbies.conFamilia;

let mensaje = `el hobbie favorito para hacer en pareja es ${tres} y el favorito en familia es ${cuatro} `;

function pageMensaje() {
  const hobbiesFav = document.getElementById("hobbies-seleccionados");
  hobbiesFav.innerHTML = mensaje;
}
pageMensaje();

const { enPareja, conAmigos, conFamilia } = hobbies;

var todos = {
  hobbies: [...enPareja, ...conAmigos, ...conFamilia],
};

console.log(todos);

const [,dospareja, , ,] = enPareja;
const [, , trespareja, cuatropareja,] = enPareja;
const [primeramigo, ...restoamigos] = conAmigos;
const [primerfamilia, ...restofamilia] = conFamilia;

var algunos = [dospareja,trespareja,cuatropareja,primeramigo,primerfamilia];
console.log(algunos);
