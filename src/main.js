const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const form = document.getElementById("form");

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (data.email === "") {
    emailError.classList.add("block");
    emailError.classList.remove("hidden");
    email.classList.add("error");
    email.classList.remove("border-grey");
    email.classList.remove("focus:border-black");

    return console.log("Email is required!");
  }

  window.location.href = "/src/pages/success.html";
  console.log(data);
}

form.addEventListener("submit", handleSubmit);
