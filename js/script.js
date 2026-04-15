// Smooth scrolling for nav links
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar mobile toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.fade-in, .degree-item, .service-card').forEach(el => {
  observer.observe(el);
});

// Booking form handling
document.querySelectorAll('.booking-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#dc3545';
        isValid = false;
      } else {
        field.style.borderColor = '#28a745';
      }
    });

    if (isValid) {
      alert('Booking submitted successfully! We will contact you soon.');
      form.reset();
    }
  });
});

// Contact form handling
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
  });
});

// Active nav link highlight (for multi-page, use URL)
function setActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNav();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255,255,255,0.98)';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.background = 'rgba(255,255,255,0.95)';
    header.style.boxShadow = '0 10px 30px rgba(0,123,255,0.2)';
  }
});
