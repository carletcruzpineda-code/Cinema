import { obtenerPeliculas, agregarPelicula } from "../services/services.js";

const contenedor = document.getElementById("contenedorPeliculas");
const btnAgregar = document.getElementById("btnAgregar");

// Inputs del formulario según tus IDs
const inputTitulo = document.getElementById("Search");
const inputPoster = document.getElementById("poster");
const inputGenero = document.getElementById("film genre");
const inputAnio = document.getElementById("release year");

// Mostrar películas en tarjetas
async function mostrarPeliculas() {
  contenedor.innerHTML = "Cargando...";
  const peliculas = await obtenerPeliculas();
  contenedor.innerHTML = "";

  if (!peliculas || peliculas.length === 0) {
    contenedor.innerHTML = "<p>No hay películas para mostrar.</p>";
    return;
  }

  peliculas.forEach(function(peli) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    let contenido = '<img src="' + peli.poster + '" alt="' + peli.titulo + '">' +
                    '<h3>' + peli.titulo + '</h3>' +
                    '<p><b>Género:</b> ' + peli.genero + '</p>' +
                    '<p><b>Año:</b> ' + peli.anio_lanzamiento + '</p>';

    tarjeta.innerHTML = contenido;
    contenedor.appendChild(tarjeta);
  });
}

// Evento para agregar películas
btnAgregar.addEventListener("click", async function() {
  let nuevaPelicula = {
    titulo: inputTitulo.value.trim(),
    poster: inputPoster.value.trim(),
    genero: inputGenero.value.trim(),
    anio_lanzamiento: parseInt(inputAnio.value)
  };

  if (!nuevaPelicula.titulo || !nuevaPelicula.poster || !nuevaPelicula.genero || !nuevaPelicula.anio_lanzamiento) {
    alert("Por favor completa todos los campos.");
    return;
  }

  await agregarPelicula(nuevaPelicula);

  // Limpiar inputs
  inputTitulo.value = "";
  inputPoster.value = "";
  inputGenero.value = "";
  inputAnio.value = "";

  mostrarPeliculas();
});

// Al cargar la página
mostrarPeliculas();
