function showMenu() {
    const nav = document.querySelector(".nav");
    const menu = document.querySelector(".nav__menu");
    nav.addEventListener("click", (e) => {
      if (e.target.closest(".btn--menu")) {
        menu.classList.toggle("show--menu");
      }
      if (e.target.closest(".btn--close")) {
        menu.classList.remove("show--menu");
        menu.classList.add("hide--menu"); // Agrega la clase para ocultar el menú
      }
      if (e.target.closest(".nav__link")) {
        menu.classList.remove("show--menu");
        menu.classList.add("hide--menu"); // Agrega la clase para ocultar el menú
      }
    });
  }

export default showMenu;
