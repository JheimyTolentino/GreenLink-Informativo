// Seleccionar el botón del menú hamburguesa y el menú colapsable
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Añadir evento click al botón
navbarToggler.addEventListener('click', function() {
    // Alternar la clase 'show' en el menú colapsable
    navbarCollapse.classList.toggle('show');
    
    // Cambiar el ícono de hamburguesa a "X" y viceversa
    if (navbarCollapse.classList.contains('show')) {
        this.innerHTML = `
            <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </span>
        `;
    } else {
        this.innerHTML = `
            <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </span>
        `;
    }
});

// Cerrar el menú al hacer clic en un enlace (opcional)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
        navbarToggler.innerHTML = `
            <span class="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </span>
        `;
    });
});