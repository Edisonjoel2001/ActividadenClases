// Cambiar entre tema claro y oscuro
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

// Añadir curso dinámicamente
function agregarCurso() {
  const titulo = document.getElementById("tituloCurso").value.trim();
  const descripcion = document.getElementById("descripcionCurso").value.trim();
  const imagen = document.getElementById("imagenCurso").value.trim();

  if (titulo && descripcion && imagen) {
    const contenedor = document.getElementById("card-container");

    const nuevaCard = document.createElement("div");
    nuevaCard.className = "col-md-4 mb-4";
    nuevaCard.innerHTML = `
      <div class="card">
        <img src="${imagen}" class="card-img-top" alt="${titulo}">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(nuevaCard);

    // Limpiar inputs
    document.getElementById("tituloCurso").value = "";
    document.getElementById("descripcionCurso").value = "";
    document.getElementById("imagenCurso").value = "";

    // Actualizar contador
    actualizarContador();
  } else {
    alert("Por favor, completa todos los campos.");
  }
}
