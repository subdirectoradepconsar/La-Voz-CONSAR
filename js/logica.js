const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Función para alternar el menú
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic llegue al document inmediatamente
    navMenu.classList.toggle('navegacion--active');
});

// Cerrar al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', (e) => {
    // Si el menú está activo Y el clic no fue dentro del menú ni en la hamburguesa
    if (navMenu.classList.contains('navegacion--active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('navegacion--active');
        }
    }
});

// Opcional: Cerrar el menú al hacer clic en un enlace (para SPAs o anclas)
const navLinks = document.querySelectorAll('.navegacion__enlace');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('navegacion--active');
    });
});