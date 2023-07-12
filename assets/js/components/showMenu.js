function showMenu() {
    const nav = document.querySelector(".nav");
    const menu = document.querySelector(".nav__menu");
    nav.addEventListener("click", (e) => {
      if (e.target.closest(".btn--menu")) {
        if (menu.classList.contains("show--menu")) {
            menu.classList.remove("show--menu");
            menu.classList.add("hide--menu");
          } else {
            menu.classList.add("show--menu");
            menu.classList.remove("hide--menu");
          }
        }
      if (e.target.closest(".btn--close") || e.target.closest(".nav__link")) {
        menu.classList.remove("show--menu");
        menu.classList.add("hide--menu"); // Agrega la clase para ocultar el menú
      }
    });
  }

export default showMenu;
