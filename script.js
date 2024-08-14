const mobilIcon = document.querySelector("#mobilIcon");
const mainMenu = document.querySelector("#mainMenu");
const singInPage = document.querySelector("#singInPage");

mobilIcon.addEventListener("click", () => {
  mainMenu.classList.toggle("invisible");
});

singInPage.addEventListener("click", function () {
  window.location = "../singIn.html";
});
