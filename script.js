document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");
    const hero = document.getElementById("hero");
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const pedidoForm = document.getElementById("pedido-form");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        reveals.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    function heroParallax() {
        if (!hero) return;
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.25 + "px";
    }

    function handleHeaderScroll() {
        if (!header) return;

        if (window.pageYOffset > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    if (navItems.length > 0 && navLinks) {
        navItems.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    if (pedidoForm) {
        pedidoForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const tipo = document.getElementById("tipo").value.trim();
            const categoria = document.getElementById("categoria").value.trim();
            const platillo = document.getElementById("platillo").value.trim();
            const dia = document.getElementById("dia").value.trim();
            const turno = document.getElementById("turno").value.trim();
            const detalle = document.getElementById("detalle").value.trim();

            const mensaje = `Hola.%0A%0A` +
                `Quiero enviar una solicitud al restaurante.%0A%0A` +
                `Nombre: ${nombre || "No especificado"}%0A` +
                `Teléfono: ${telefono || "No especificado"}%0A` +
                `Tipo de solicitud: ${tipo || "No especificado"}%0A` +
                `Categoría principal: ${categoria || "No especificado"}%0A` +
                `Platillo o pedido principal: ${platillo || "No especificado"}%0A` +
                `Día preferido: ${dia || "No especificado"}%0A` +
                `Hora o turno: ${turno || "No especificado"}%0A` +
                `Detalles adicionales: ${detalle || "No especificado"}`;

            const whatsappURL = `https://wa.me/5215512345678?text=${mensaje}`;
            window.open(whatsappURL, "_blank");
        });
    }

    window.addEventListener("scroll", function () {
        revealOnScroll();
        heroParallax();
        handleHeaderScroll();
    });

    revealOnScroll();
    heroParallax();
    handleHeaderScroll();
});