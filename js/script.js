
//muestra en el menu la pag activo
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    let menuLinks = document.querySelectorAll(".nav-link");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnScrollTop = document.getElementById("btnScrollTop");
    window.addEventListener("scroll", function () {
        const btnScrollTop = document.getElementById("btnScrollTop");
        if (window.scrollY > 300) {
            btnScrollTop.classList.add("show");
        } else {
            btnScrollTop.classList.remove("show");
        }
    });

    // Hacer scroll hasta arriba cuando se hace clic en el botón
    btnScrollTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

 // Inicializar el modal de Materialize
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
});

function mostrarConfirmacion() {
    alert("¡Formulario enviado correctamente!");
}