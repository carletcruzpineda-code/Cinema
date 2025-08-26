async function obtenerPeliculas() {
  try {
    const respuesta = await fetch("http://localhost:3001/peliculas");
    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener películas:", error);
  }
}

// Agregar película
async function agregarPelicula(pelicula) {
  try {
    const respuesta = await fetch("http://localhost:3001/peliculas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pelicula)
    });
    return await respuesta.json();
  } catch (error) {
    console.error("Error al agregar película:", error);
  }
}

export { obtenerPeliculas, agregarPelicula };