// Animations.js - Handles all animation-related functionality

document.addEventListener('DOMContentLoaded', () => {
  // Animation on scroll functionality
  const animatedElements = document.querySelectorAll(
    '.reveal-text, .reveal-item, .reveal-slide-left, .reveal-slide-right, .reveal-scale'
  );
  
  // Typing effect for headings
  const typingElements = document.querySelectorAll('.typing-effect');
  
  // Counters for stats
  const counters = document.querySelectorAll('.counter');
  
  // Scroll indicator
  const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.classList.add('scroll-indicator');
    document.body.appendChild(indicator);
    
    // Hide on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        indicator.style.opacity = '0';
      } else {
        indicator.style.opacity = '0.8';
      }
    });
  };
  
  // Animate on scroll function
  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('active');
      }
    });
  };
  
  // Initialize counters
  const initCounters = () => {
    counters.forEach(counter => {
      counter.innerText = '0';
      
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      
      // Start counter when in view
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            updateCounter();
            observer.unobserve(counter);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(counter);
    });
  };
  
  // Animate skills bars
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            bar.style.width = `${percentage}%`;
            observer.unobserve(bar);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(bar);
    });
  };
  
  // Initialize animations
  const initAnimations = () => {
    // Run animations on initial load
    setTimeout(() => {
      animateOnScroll();
      if (counters.length > 0) initCounters();
      animateSkillBars();
    }, 100);
    
    // Run animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Create scroll indicator if on home section
    if (document.querySelector('.hero')) {
      createScrollIndicator();
    }
  };
  
  // Initialize all animations
  initAnimations();
  
  // Parallax effect for hero section
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.1;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  }
  
  // Button hover effect
  const buttons = document.querySelectorAll('.button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
      const x = e.clientX - button.getBoundingClientRect().left;
      const y = e.clientY - button.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Project hover effects
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const image = card.querySelector('img');
    
    card.addEventListener('mouseenter', () => {
      if (image) {
        image.style.transform = 'scale(1.1)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      if (image) {
        image.style.transform = 'scale(1)';
      }
    });
  });
  
  // Animated background shapes
  const createAnimatedShapes = () => {
    const shapesContainer = document.createElement('div');
    shapesContainer.classList.add('animated-shapes');
    
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.classList.add('animated-shape');
      
      // Random size
      const size = Math.random() * 100 + 50;
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      
      // Random position
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      const duration = Math.random() * 20 + 10;
      shape.style.animationDuration = `${duration}s`;
      
      // Random delay
      const delay = Math.random() * 10;
      shape.style.animationDelay = `${delay}s`;
      
      shapesContainer.appendChild(shape);
    }
    
    document.body.appendChild(shapesContainer);
  };
  
  // Create animated shapes if needed
  // createAnimatedShapes();
});