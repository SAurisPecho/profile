const nombre = "Esteban";
const edad = 25;
const profesion = "Administrador";
const ubicacion = "Lima";
const hobby = "leer";

const mensaje = 
  `Hola ${nombre}, falta poco para tu cumpleaños y dejaras de tener ${edad} años. ¿Que tal tu trabajo como ${profesion} en la ciudad de ${ubicacion}?¿Haz encontrado tiempo para ${hobby}?`;

let isOnline = false;
let respuesta = prompt("¿Estas conectado? Responde SI o NO")
if (respuesta.toUpperCase() === "SI" && isOnline == false) {
    isOnline = true;
    if (respuesta.toUpperCase() === "SI" && isOnline == true) {
      console.log("el usuario esta conectado");
      console.log(`${mensaje}`)
    }
} else {
    console.log("el usuario no esta conectado");
}
