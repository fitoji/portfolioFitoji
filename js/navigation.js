// Navigation.js - Handles navigation-related functionality

document.addEventListener('DOMContentLoaded', () => {
  // Get navigation elements
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
  
  // Initialize state
  let isMenuOpen = false;
  let prevScrollPos = window.pageYOffset;

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    menuToggle.classList.toggle('active', isMenuOpen);
    navMobile.classList.toggle('active', isMenuOpen);
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    if (isMenuOpen) {
      isMenuOpen = false;
      menuToggle.classList.remove('active');
      navMobile.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  // Update header on scroll
  function updateHeader() {
    const currentScrollPos = window.pageYOffset;
    
    // Add scrolled class when scrolled down
    if (currentScrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Show/hide header on scroll
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up - show header
      header.style.transform = 'translateY(0)';
    } else if (currentScrollPos > 100) {
      // Scrolling down past threshold - hide header
      header.style.transform = 'translateY(-100%)';
      
      // Also close mobile menu when scrolling down
      closeMobileMenu();
    }
    
    prevScrollPos = currentScrollPos;
  }
  
  // Smooth scroll to section
  function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu
      closeMobileMenu();
      
      // Update URL
      history.pushState(null, null, targetId);
    }
  }
  
  // Highlight active section in navigation
  function highlightActiveSection() {
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset;
    
    // Find current section
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = `#${section.getAttribute('id')}`;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        document.querySelectorAll(`a[href="${sectionId}"]`).forEach(link => {
          link.classList.add('active');
        });
      }
    });
  }
  
  // Add event listeners
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  // Handle clicks on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        smoothScrollTo(targetId);
      } else {
        window.location.href = targetId;
      }
    });
  });
  
  // Handle scroll events
  window.addEventListener('scroll', () => {
    updateHeader();
    highlightActiveSection();
  });
  
  // Handle escape key to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
  
  // Handle clicks outside menu to close it
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !e.target.closest('.nav-mobile') && !e.target.closest('.menu-toggle')) {
      closeMobileMenu();
    }
  });
  
  // Handle resize event
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      closeMobileMenu();
    }
  });
  
  // Handle page load - scroll to hash if present
  window.addEventListener('load', () => {
    if (window.location.hash) {
      setTimeout(() => {
        smoothScrollTo(window.location.hash);
      }, 100);
    }
    
    // Initial highlight
    highlightActiveSection();
  });
  
  // Intersection Observer for section animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
  });
});