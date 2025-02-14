document.addEventListener('DOMContentLoaded', () => {

    // Typewriter effect
    const typewriter = document.getElementById('typewriter');
    const phrases = [
        'Dreamer',
        'Believer',
        'Builder',
        'Innovator'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        // Display the current phrase
        if (!isDeleting && charIndex <= currentPhrase.length) {
            typewriter.textContent = currentPhrase.substring(0, charIndex);
            charIndex++;
        }

        // Delete the current phrase
        if (isDeleting && charIndex >= 0) {
            typewriter.textContent = currentPhrase.substring(0, charIndex);
            charIndex--;
        }

        // Switch to the next phrase or start deleting
        if (!isDeleting && charIndex === currentPhrase.length + 1) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === -1) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
            setTimeout(type, 500); // Pause before typing the next phrase
        } else {
            const typingSpeed = isDeleting ? 100 : 200; // Adjust speed for typing and deleting
            setTimeout(type, typingSpeed);
        }
    }

    // Start the typewriter effect
    type();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Floating animation for profile image
    const profileImage = document.querySelector('.profile-image');
    profileImage.classList.add('floating');
});