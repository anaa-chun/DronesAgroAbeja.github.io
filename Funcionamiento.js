
/* Cambio de color al pasar el raton y luego vuelve al color original */
window.addEventListener("load", () => {
    var MenuNavegacion = document.querySelectorAll("nav ul li a");

    MenuNavegacion.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.color = "yellow";
      });

      link.addEventListener("mouseout", () => {
        link.style.color = "";
      });

    });
  });