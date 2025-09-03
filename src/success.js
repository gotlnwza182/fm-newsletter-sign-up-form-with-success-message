const form = document.getElementById("form");

function handleSubmit(e) {
  e.preventDefault();

  window.location.href = "/index.html";
}

form.addEventListener("submit", handleSubmit);
