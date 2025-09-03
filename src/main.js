const mainCard = document.getElementById("mainCard");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const form = document.getElementById("form");
const successCard = document.getElementById("successCard");
const successForm = document.getElementById("successForm");

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

    console.log(successForm);
    return console.log("Email is required!");
  }
  mainCard.classList.add("hidden");
  successCard.classList.remove("hidden");
  successCard.classList.add("block");
}

form.addEventListener("submit", handleSubmit);

successForm.addEventListener("submit", () => {
  // mainCard.classList.remove("hidden");
  // mainCard.classList.add("block");
  // successCard.classList.remove("block");
  // successCard.classList.add("hidden");
});
