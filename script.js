document.addEventListener('DOMContentLoaded', () => {
    // Particle.js initialization
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // Typewriter effect
    const typewriter = document.getElementById('typewriter');
    const phrases = [
        'Innovative Software Engineer',
        'Backend Development Expert',
        'Creative Problem Solver'
    ];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function loop() {
        isEnd = false;
        typewriter.innerHTML = currentPhrase.join('');

        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j]);
                j--;
            }

            if (j == phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i == phrases.length) {
                    i = 0;
                }
            }
        }
        const spedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
        setTimeout(loop, time);
    }

    loop();

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
