const mobilIcon = document.querySelector("#mobilIcon");
const mainMenu = document.querySelector("#mainMenu");

mobilIcon.addEventListener("click", () => {
  mainMenu.classList.toggle("invisible");
});
