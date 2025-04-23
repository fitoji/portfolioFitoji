document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;

    // Header scroll effect
    const header = document.querySelector('.header');

    // Initialize state
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply saved theme
    if (isDarkMode) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    // Menu toggle functionality
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
        });
    }

    // Mobile menu links - close menu when clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
        });
    });

    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                htmlElement.setAttribute('data-theme', 'dark');
            } else {
                htmlElement.removeAttribute('data-theme');
            }
            localStorage.setItem('darkMode', isDarkMode);
        });
    }

    // Handle scroll events
    window.addEventListener('scroll', () => {
        // Header scroll effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Reveal animations on scroll
        revealElements();
    });

    // Reveal elements on scroll
    function revealElements() {
        const elements = document.querySelectorAll('.reveal-slide-left, .reveal-slide-right, .reveal-scale');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.85;

            if (elementPosition < screenPosition) {
                element.classList.add('active');
            }
        });
    }

    // Trigger reveal on initial load
    revealElements();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            let isValid = true;
            const formInputs = contactForm.querySelectorAll('input, textarea');

            formInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            // Email validation
            const emailInput = contactForm.querySelector('#email');
            if (emailInput && !validateEmail(emailInput.value)) {
                isValid = false;
                emailInput.classList.add('error');
            }

            // If valid, show success message
            if (isValid) {
                contactForm.reset();
                alert('¡Mensaje enviado correctamente! Gracias por contactarme.');
            }
        });
    }

    // Email validation helper
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});