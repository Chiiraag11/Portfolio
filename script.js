// ===========================
// Custom Cursor
// ===========================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * 0.3;
    cursorY += dy * 0.3;
    
    const fdx = mouseX - followerX;
    const fdy = mouseY - followerY;
    followerX += fdx * 0.15;
    followerY += fdy * 0.15;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
document.querySelectorAll('a, button, .project-card, .achievement-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(1.5)';
        cursorFollower.style.transform += ' scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
        cursorFollower.style.transform = cursorFollower.style.transform.replace(' scale(1.5)', '');
    });
});

// ===========================
// Navbar
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Typing Animation
// ===========================
const typingText = document.querySelector('.typing-text');
const roles = [
    'Full Stack Developer',
    'Cybersecurity Enthusiast',
    'Competitive Programmer',
    'Problem Solver',
    'Tech Innovator'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next role
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation
typeRole();

// ===========================
// Counter Animation
// ===========================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// ===========================
// Skill Progress Animation
// ===========================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ===========================
// Scroll Reveal Animation
// ===========================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
window.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySeriesAll(
        '.timeline-item, .experience-card, .project-card, .achievement-card, .leadership-card, .skills-category'
    );
    
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });
});

// ===========================
// Intersection Observer
// ===========================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate counters when about section is visible
            if (entry.target.classList.contains('about')) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        animateCounter(counter);
                    }
                });
            }
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skills')) {
                if (!entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateSkillBars();
                }
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe reveal elements
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Contact Form
// ===========================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show success message
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, subject, message });
});

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 107, 107, 0.2)'};
        color: ${type === 'success' ? '#00ff88' : '#ff6b6b'};
        padding: 15px 25px;
        border-radius: 10px;
        border: 1px solid ${type === 'success' ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255, 107, 107, 0.4)'};
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Parallax Effect
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===========================
// Project Card 3D Tilt Effect
// ===========================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===========================
// Achievement Cards Hover Effect
// ===========================
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Dynamic Year in Footer
// ===========================
window.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.footer-content p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});

// ===========================
// Preloader (Optional)
// ===========================
window.addEventListener('load', () => {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%c👋 Hey there, developer!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cLooks like you\'re curious about how this portfolio works!', 'font-size: 14px; color: #7b68ee;');
console.log('%cFeel free to explore the code and reach out if you have any questions.', 'font-size: 14px; color: #a8a8b8;');
console.log('%c- [Your Name]', 'font-size: 14px; font-style: italic; color: #00ff88;');

// ===========================
// Performance Monitoring
// ===========================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}

// ===========================
// Accessibility Enhancements
// ===========================
// Skip to main content
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        // Ensure keyboard navigation is visible
        focusableElements.forEach(el => {
            el.addEventListener('focus', () => {
                el.style.outline = '2px solid var(--accent-primary)';
                el.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', () => {
                el.style.outline = '';
                el.style.outlineOffset = '';
            });
        });
    }
});

// ===========================
// Handle Reduced Motion
// ===========================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-normal', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// ===========================
// Lazy Loading Images (if any)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Theme Toggle (Optional Enhancement)
// ===========================
// Uncomment if you want to add a light/dark theme toggle
/*
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.setAttribute('aria-label', 'Toggle theme');
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.className = document.body.classList.contains('light-theme') 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
});
*/

// ===========================
// Service Worker Registration (for PWA)
// ===========================
// Uncomment if you want to make this a Progressive Web App
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
*/

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal classes
    const elementsToReveal = document.querySelectorAll(
        '.timeline-item, .experience-card, .project-card, .achievement-card, .leadership-card, .skills-category'
    );
    
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });
    
    // Initial scroll reveal check
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    console.log('✅ Portfolio initialized successfully!');
});

// ===========================
// Error Handling
// ===========================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});
