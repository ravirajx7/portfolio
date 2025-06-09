// ===== PERFORMANCE OPTIMIZED JAVASCRIPT =====

/**
 * Typewriter Effect Implementation
 * Creates a smooth typing animation with configurable speed and phrases
 * This class handles the visual typewriter effect seen in the hero section
 */
class TypewriterEffect {
    constructor(element, phrases, options = {}) {
        this.element = element; // DOM element to display text
        this.phrases = phrases; // Array of phrases to cycle through
        this.options = {
            typeSpeed: options.typeSpeed || 100, // Speed of typing in milliseconds
            deleteSpeed: options.deleteSpeed || 50, // Speed of deleting in milliseconds
            pauseTime: options.pauseTime || 2000, // Pause time between phrases
            ...options
        };
        
        this.currentPhraseIndex = 0; // Current phrase being displayed
        this.currentCharIndex = 0; // Current character position
        this.isDeleting = false; // Whether we're currently deleting
        this.isPaused = false; // Whether we're paused between phrases
        
        this.init();
    }
    
    init() {
        // Start the typing animation
        this.type();
    }
    
    type() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        
        // Handle pause between phrases
        if (this.isPaused) {
            setTimeout(() => {
                this.isPaused = false;
                this.type();
            }, this.options.pauseTime);
            return;
        }
        
        if (!this.isDeleting) {
            // Typing forward - add one character at a time
            this.element.textContent = currentPhrase.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            // If we've typed the full phrase, pause and start deleting
            if (this.currentCharIndex === currentPhrase.length) {
                this.isPaused = true;
                this.isDeleting = true;
            }
        } else {
            // Deleting backward - remove one character at a time
            this.element.textContent = currentPhrase.substring(0, this.currentCharIndex);
            this.currentCharIndex--;
            
            // If we've deleted everything, move to next phrase
            if (this.currentCharIndex < 0) {
                this.isDeleting = false;
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
                this.currentCharIndex = 0;
            }
        }
        
        // Calculate next timeout based on current action (typing vs deleting)
        const speed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        setTimeout(() => this.type(), speed);
    }
}

/**
 * Intersection Observer for scroll animations
 * Efficiently handles element visibility detection for animations
 * This improves performance by only animating elements when they're visible
 */
class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }
    
    init() {
        // Create intersection observer with optimized options
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
            }
        );
        
        // Observe all elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger CSS animation
                entry.target.classList.add('visible');
                // Stop observing this element to improve performance
                this.observer.unobserve(entry.target);
            }
        });
    }
}

/**
 * Smooth Scrolling Implementation
 * Provides smooth navigation between sections with proper offset calculation
 * Accounts for fixed header height to ensure proper positioning
 */
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add click listeners to all anchor links that start with #
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e));
        });
    }
    
    handleClick(e) {
        e.preventDefault();
        
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calculate offset for fixed header to ensure content isn't hidden
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // Smooth scroll to target position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

/**
 * Floating Particles Effect
 * Creates animated background particles for visual appeal
 * Generates random particles with varying sizes, positions, and animations
 */
class ParticleSystem {
    constructor(container, particleCount = 50) {
        this.container = container;
        this.particleCount = particleCount;
        this.particles = [];
        this.init();
    }
    
    init() {
        // Create specified number of particles with random properties
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Generate random properties for each particle
        const size = Math.random() * 3 + 1; // Size between 1-4px
        const x = Math.random() * window.innerWidth; // Random horizontal position
        const y = Math.random() * window.innerHeight; // Random vertical position
        const duration = Math.random() * 10 + 5; // Animation duration 5-15s
        const delay = Math.random() * 5; // Random animation delay
        
        // Apply styles using cssText for better performance
        particle.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }
}

/**
 * Header Scroll Effect
 * Adds dynamic styling to header based on scroll position
 * Changes header background opacity for better visual hierarchy
 */
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollY = window.scrollY;
        this.init();
    }
    
    init() {
        // Use throttled scroll listener for better performance
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                // Use requestAnimationFrame to throttle scroll events
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Adjust header background opacity based on scroll position
        if (currentScrollY > 100) {
            // More opaque background when scrolled down
            this.header.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            // More transparent background at top
            this.header.style.background = 'rgba(10, 10, 10, 0.8)';
        }
        
        this.lastScrollY = currentScrollY;
    }
}

/**
 * Mobile Menu Handler
 * Manages mobile navigation menu toggle functionality
 * Handles hamburger menu animation and navigation visibility
 */
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.querySelector('.nav-links');
        this.isOpen = false;
        this.init();
    }
    
    init() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Close menu when clicking on nav links
        if (this.navLinks) {
            this.navLinks.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    this.closeMenu();
                }
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.menuToggle.contains(e.target) && !this.navLinks.contains(e.target)) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        this.isOpen ? this.closeMenu() : this.openMenu();
    }
    
    openMenu() {
        this.isOpen = true;
        this.menuToggle.classList.add('active');
        this.navLinks.classList.add('mobile-open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    closeMenu() {
        this.isOpen = false;
        this.menuToggle.classList.remove('active');
        this.navLinks.classList.remove('mobile-open');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

/**
 * Performance Monitor
 * Tracks and logs performance metrics for optimization
 * Helps identify loading bottlenecks and optimization opportunities
 */
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            this.logPerformanceMetrics();
        });
        
        // Monitor Core Web Vitals if supported
        if ('web-vital' in window) {
            this.monitorWebVitals();
        }
    }
    
    logPerformanceMetrics() {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
            
            console.log(`⚡ Page loaded in ${loadTime}ms`);
            
            // Log additional metrics for debugging
            console.log('Performance Metrics:', {
                'DNS Lookup': Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
                'TCP Connection': Math.round(perfData.connectEnd - perfData.connectStart),
                'Server Response': Math.round(perfData.responseEnd - perfData.requestStart),
                'DOM Processing': Math.round(perfData.domContentLoadedEventEnd - perfData.responseEnd),
                'Resource Loading': Math.round(perfData.loadEventEnd - perfData.domContentLoadedEventEnd)
            });
        }
    }
    
    monitorWebVitals() {
        // This would integrate with web-vitals library if available
        // For now, we'll use basic performance API
        console.log('Web Vitals monitoring initialized');
    }
}

/**
 * Application Initialization
 * Main application class that coordinates all components
 * Ensures proper initialization order and error handling
 */
class App {
    constructor() {
        this.components = [];
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded before initializing components
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }
    
    initializeComponents() {
        try {
            // Initialize typewriter effect for hero section
            const typewriterElement = document.getElementById('typewriter');
            if (typewriterElement) {
                this.components.push(
                    new TypewriterEffect(typewriterElement, [
                        'Dreamer',
                        'Believer', 
                        'Builder',
                        'Innovator',
                        'Problem Solver'
                    ])
                );
            }
            
            // Initialize scroll-based animations
            this.components.push(new ScrollAnimations());
            
            // Initialize smooth scrolling navigation
            this.components.push(new SmoothScroll());
            
            // Initialize floating particle system
            const particlesContainer = document.getElementById('particles');
            if (particlesContainer) {
                this.components.push(new ParticleSystem(particlesContainer, 30));
            }
            
            // Initialize header scroll effects
            this.components.push(new HeaderScrollEffect());
            
            // Initialize mobile menu functionality
            this.components.push(new MobileMenu());
            
            // Initialize performance monitoring
            this.components.push(new PerformanceMonitor());
            
            console.log('🚀 Portfolio initialized successfully');
            console.log(`📊 ${this.components.length} components loaded`);
            
        } catch (error) {
            console.error('❌ Error initializing portfolio:', error);
            // Graceful degradation - site should still work without JS enhancements
        }
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====

/**
 * Keyboard Navigation Support
 * Enhances accessibility for keyboard users
 * Provides skip links and focus management
 */
document.addEventListener('keydown', (e) => {
    // Skip to main content with Tab key when focused on body
    if (e.key === 'Tab' && e.target === document.body) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.focus();
            e.preventDefault();
        }
    }
    
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.mobile-menu-open');
        if (mobileMenu) {
            // Trigger close menu functionality
            const menuToggle = document.getElementById('menuToggle');
            if (menuToggle) {
                menuToggle.click();
            }
        }
    }
});

/**
 * Reduced Motion Support
 * Respects user's motion preferences for accessibility
 * Disables animations for users who prefer reduced motion
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function handleReducedMotion(mediaQuery) {
    if (mediaQuery.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--duration-fast', '0ms');
        document.documentElement.style.setProperty('--duration-normal', '0ms');
        document.documentElement.style.setProperty('--duration-slow', '0ms');
        
        console.log('🎯 Reduced motion mode enabled');
    } else {
        // Restore normal animation durations
        document.documentElement.style.removeProperty('--duration-fast');
        document.documentElement.style.removeProperty('--duration-normal');
        document.documentElement.style.removeProperty('--duration-slow');
    }
}

// Check initial preference and listen for changes
handleReducedMotion(prefersReducedMotion);
prefersReducedMotion.addListener(handleReducedMotion);

/**
 * Focus Management
 * Improves keyboard navigation experience
 * Ensures proper focus indicators and tab order
 */
document.addEventListener('focusin', (e) => {
    // Add custom focus styles if needed
    e.target.classList.add('js-focus');
});

document.addEventListener('focusout', (e) => {
    // Remove custom focus styles
    e.target.classList.remove('js-focus');
});

// ===== ERROR HANDLING =====

/**
 * Global Error Handler
 * Catches and logs JavaScript errors for debugging
 * Provides graceful degradation when JS fails
 */
window.addEventListener('error', (e) => {
    console.error('💥 JavaScript Error:', {
        message: e.message,
        filename: e.filename,
        line: e.lineno,
        column: e.colno,
        error: e.error
    });
    
    // Could send error reports to analytics service here
});

/**
 * Unhandled Promise Rejection Handler
 * Catches async errors that might otherwise go unnoticed
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('🚫 Unhandled Promise Rejection:', e.reason);
    e.preventDefault(); // Prevent default browser error handling
});

// ===== INITIALIZE APPLICATION =====

// Create and start the main application
const portfolio = new App();

// Export for potential external use or testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, TypewriterEffect, ScrollAnimations, SmoothScroll };
}