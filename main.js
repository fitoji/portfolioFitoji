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

    // Typewriter effect — types title then description
    function initTypewriter() {
        const titleEl = document.querySelector('.typewriter');
        const descEl = document.querySelector('.description');
        if (!titleEl) return;

        // Hide description until its turn; title hidden via CSS
        if (descEl) descEl.style.visibility = 'hidden';

        const speed = 100;
        const titlePrefix = 'Soy ';
        const highlightWord = 'Fitoji';
        const descText = 'Desarrollo Páginas Web Modernas';

        // Respect reduced motion — show full text immediately
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            titleEl.style.visibility = 'visible';
            if (descEl) descEl.style.visibility = 'visible';
            return;
        }

        // --- Phase 1: type the title ---
        titleEl.innerHTML = '';
        titleEl.style.visibility = 'visible';

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';

        let charIndex = 0;
        const titleChars = titlePrefix.length + highlightWord.length;

        function typeTitle() {
            if (charIndex < titlePrefix.length) {
                titleEl.textContent = titlePrefix.slice(0, charIndex + 1);
            } else if (charIndex === titlePrefix.length) {
                titleEl.textContent = titlePrefix;
                const span = document.createElement('span');
                span.className = 'highlight';
                titleEl.appendChild(span);
                titleEl.appendChild(cursor);
            } else {
                const span = titleEl.querySelector('.highlight');
                span.textContent = highlightWord.slice(0, charIndex - titlePrefix.length + 1);
            }

            charIndex++;

            if (charIndex <= titleChars) {
                setTimeout(typeTitle, speed);
            } else {
                // Title done — move to description after a pause
                setTimeout(typeDescription, 600);
            }
        }

        // --- Phase 2: type the description ---
        function typeDescription() {
            if (!descEl) return;

            // Remove cursor from title
            const titleCursor = titleEl.querySelector('.cursor');
            if (titleCursor) titleCursor.remove();

            descEl.innerHTML = '';
            descEl.style.visibility = 'visible';
            descEl.classList.remove('reveal-item');

            let idx = 0;

            function type() {
                descEl.innerHTML = descText.slice(0, idx + 1) + '<span class="cursor">|</span>';
                idx++;
                if (idx < descText.length) {
                    setTimeout(type, speed);
                }
            }

            type();
        }

        setTimeout(typeTitle, 600);
    }

    initTypewriter();

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