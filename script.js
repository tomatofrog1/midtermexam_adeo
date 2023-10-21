const burger = document.querySelector(".burger");
const actions = document.querySelector(".actions")
const submit = document.querySelector(".submit")
const sign = document.querySelector(".sign")

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  actions.classList.toggle("open")
  submit.classList.toggle("open")
  sign.classList.toggle("open")
});
