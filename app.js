let nombres = [];


function agregarNombre() {
  let nombreAmigo = document.getElementById("nombreEntrada").value;

  if (nombreAmigo.trim() == "") {
    alert("No se ingreso ningun nombre, favor de ingresar alguno");
  } else {
    nombres.push(nombreAmigo);
    document.querySelector("#nombreEntrada").value = "";
    mostrarListaNombres();
  }
}

function mostrarListaNombres() {
  let listaAmigos = document.querySelector("#listaNombres");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < nombres.length; i++) {
    const element = nombres[i];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearNombres() {
  let cantidadAmigos = nombres.length;
  if (cantidadAmigos === 0) {
    alert("No hay nombres, favor de ingresar algun nombre");
  } else {
    let nombreSorteado = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#nombreSorteado");
    resultadoHTML.innerHTML = nombres[nombreSorteado];
  }
}
