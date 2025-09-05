// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    // Create overlay div
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking overlay
        overlay.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
        
        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                overlay.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
});

// Language Management
let currentLanguage = 'fr';

function switchLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    
    // Update language button text
    document.getElementById('current-lang').textContent = currentLanguage.toUpperCase();
    
    // Toggle content visibility
    const frContent = document.querySelectorAll('.fr-content');
    const enContent = document.querySelectorAll('.en-content');
    
    if (currentLanguage === 'fr') {
        frContent.forEach(el => el.classList.remove('hidden'));
        enContent.forEach(el => el.classList.add('hidden'));
        document.documentElement.lang = 'fr';
    } else {
        frContent.forEach(el => el.classList.add('hidden'));
        enContent.forEach(el => el.classList.remove('hidden'));
        document.documentElement.lang = 'en';
    }
    
    // Update navigation links based on language
    updateNavigationLinks();
}

// Update navigation links based on current language
function updateNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const translations = {
        'fr': {
            'Accueil': 'Accueil',
            'Home': 'Accueil',
            'Nos Formules': 'Nos Formules',
            'Our Packages': 'Nos Formules',
            'À Propos': 'À Propos',
            'About': 'À Propos',
            'Contact': 'Contact'
        },
        'en': {
            'Accueil': 'Home',
            'Home': 'Home',
            'Nos Formules': 'Our Packages',
            'Our Packages': 'Our Packages',
            'À Propos': 'About',
            'About': 'About',
            'Contact': 'Contact'
        }
    };
    
    navLinks.forEach(link => {
        const currentText = link.textContent.trim();
        if (translations[currentLanguage][currentText]) {
            link.textContent = translations[currentLanguage][currentText];
        }
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .package-card, .process-step, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form Validation (for contact page)
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
        
        // Email validation
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Video Optimization for Mobile
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    // Pause video on mobile to save bandwidth
    if (window.innerWidth <= 768) {
        heroVideo.pause();
        
        // Replace with static image on very small screens
        if (window.innerWidth <= 480) {
            const videoContainer = document.querySelector('.hero-video-container');
            videoContainer.innerHTML = '<img src="Image/hero-documents-clean-dubai.png.png" alt="Dubai Business Setup" class="hero-image">';
        }
    }
}

// Currency Converter (optional feature)
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Simplified conversion rates (should be fetched from API in production)
    const rates = {
        'EUR': { 'AED': 3.98, 'USD': 1.08 },
        'AED': { 'EUR': 0.25, 'USD': 0.27 },
        'USD': { 'EUR': 0.93, 'AED': 3.67 }
    };
    
    if (fromCurrency === toCurrency) return amount;
    return (amount * rates[fromCurrency][toCurrency]).toFixed(2);
}

// WhatsApp Message Pre-fill
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    const message = currentLanguage === 'fr' 
        ? "Bonjour, je souhaite créer ma société à Dubaï. Pouvez-vous m'aider ?"
        : "Hello, I want to set up my company in Dubai. Can you help me?";
    
    const whatsappUrl = whatsappButton.href.split('?')[0];
    whatsappButton.href = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

// Performance Optimization - Lazy Load Images
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.lazy;
                img.removeAttribute('data-lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Active Navigation Link Based on Current Page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    
    // Check if user has language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        switchLanguage();
    }
});

// Save language preference
window.addEventListener('beforeunload', () => {
    localStorage.setItem('preferredLanguage', currentLanguage);
}); 