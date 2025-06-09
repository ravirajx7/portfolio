// ===== MULTI-THEME PORTFOLIO JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', () => {
    // This is the main entry point for all our JavaScript.
    try {
        initializeThemeSwitcher();
        // Run the initial theme's specific logic.
        runThemeSpecificScript(document.body.className);
        console.log("🎨 Interactive Triptych Portfolio Initialized.");
    } catch (error) {
        console.error("❌ Failed to initialize portfolio scripts:", error);
    }
});

/**
 * ===================================================================
 * THEME SWITCHER LOGIC
 * ===================================================================
 * This function handles the core functionality of changing the visual
 * theme of the entire page. It listens for clicks on the theme buttons,
 * updates the class on the <body> element, and manages the active
 * state of the buttons themselves.
 */
function initializeThemeSwitcher() {
    const themeButtons = document.querySelectorAll('.theme-button');
    const body = document.body;

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newTheme = button.dataset.theme;

            // Remove previous theme classes
            body.className = '';
            // Add the new theme class
            body.classList.add(newTheme);

            // Update the active state of the buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Run any JavaScript specific to the new theme
            runThemeSpecificScript(newTheme);
        });
    });

    // Set the initially active button
    const initialTheme = body.className;
    document.querySelector(`.theme-button[data-theme="${initialTheme}"]`).classList.add('active');
}

/**
 * ===================================================================
 * THEME-SPECIFIC SCRIPTS
 * ===================================================================
 * Some themes require JavaScript for their full effect. This function
 * acts as a router, executing the correct script based on the
 * currently active theme.
 * @param {string} themeName - The class name of the current theme.
 */
function runThemeSpecificScript(themeName) {
    // Clean up any previous theme's intervals or listeners first
    if (window.glitchInterval) {
        clearInterval(window.glitchInterval);
        window.glitchInterval = null;
    }

    // Route to the correct script
    if (themeName === 'theme-glitch') {
        initializeGlitchEffect();
    }
    // Other themes might have their own initializers here in the future
    // else if (themeName === 'theme-ink') { ... }
}


/**
 * ===================================================================
 * GLITCH EFFECT SCRIPT
 * ===================================================================
 * This script is ONLY for the 'theme-glitch'. It continuously
 * randomizes the text content of the hero title's pseudo-elements
 * to create a dynamic, "scrambled" text effect.
 */
function initializeGlitchEffect() {
    const heroTitle = document.querySelector('.theme-glitch .hero-title');
    if (!heroTitle) return;

    const originalText = heroTitle.textContent;
    heroTitle.setAttribute('data-text', originalText);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    // This interval will run continuously while the glitch theme is active
    window.glitchInterval = setInterval(() => {
        let scrambledText = '';
        for (let i = 0; i < originalText.length; i++) {
            // Randomly decide whether to show the original character or a random one
            scrambledText += Math.random() > 0.9 ? characters.charAt(Math.floor(Math.random() * characters.length)) : originalText[i];
        }
        // Update the 'data-text' attribute which the CSS uses for the glitch
        heroTitle.setAttribute('data-text', scrambledText);
    }, 100); // The effect updates every 100ms
}