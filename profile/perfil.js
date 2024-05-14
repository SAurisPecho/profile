// const misDatosFisicos = {
//   nombre: "Rosa Pérez",
//   edad : 27,
//   direccion :{
//     calle : "Av.America", 
//     numero : 114, 
//     ciudad : "Ica",
//   },
//   altura : 160,
//   peso : "61",
//   hobby :"leer",
// };

// let imprimirDatos = document.getElementById("perfil");
// let contenidoPerfil = `
// <h2>${misDatosFisicos.nombre}</h2>
// <p>Edad: ${misDatosFisicos.edad}</p>
// <p>Direccion: ${misDatosFisicos.direccion.calle},${misDatosFisicos.direccion.numero},${misDatosFisicos.direccion.ciudad} </p>
// <p>Altura: ${misDatosFisicos.altura || "No especificado"} cm </p>
// <p>Peso: ${(misDatosFisicos.peso ? misDatosFisicos.peso + " kg" : "No especificado")} </p>
// <p>Hobby: ${misDatosFisicos.hobby || "No especificado"}</p>
// `;
// imprimirDatos.innerHTML = contenidoPerfil;

function imp (id = "etiq3") {
  const misDatosFisicos = {
    nombre: "Rosa Pérez",
    edad : 27,
    altura : 160,
    peso : "61",
    hobby :"leer",
  };
let contenidoPerfil = `
${misDatosFisicos.nombre}
Edad: ${misDatosFisicos.edad}
Altura: ${misDatosFisicos.altura || "No especificado"} cm 
Peso: ${(misDatosFisicos.peso ? misDatosFisicos.peso + " kg" : "No especificado")}
Hobby: ${misDatosFisicos.hobby || "No especificado"}
`;
const elementoPre = document.getElementById(id).textContent =contenidoPerfil;

}
imp("etiq2");
imp("etiq1");
imp("etiq4");
imp()