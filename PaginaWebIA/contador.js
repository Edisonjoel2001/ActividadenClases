function actualizarContador() {
  const totalCards = document.querySelectorAll("#card-container .card").length;
  document.getElementById("contador-cursos").textContent = totalCards;
}

// Llamar al cargar la página
document.addEventListener("DOMContentLoaded", actualizarContador);
