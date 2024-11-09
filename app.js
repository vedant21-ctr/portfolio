/* Particles.js configuration */
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#bb86fc'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#bb86fc',
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        }
    },
    retina_detect: true
});

/* About Me, Skills, Projects, and Contact Section Glow Animation */
const sections = ['.about-section', '.skills-section', '.projects-section', '.contact-section'];
sections.forEach((section) => {
    document.querySelector(section).addEventListener('click', function() {
        const title = this.querySelector('h2');
        title.classList.add('glow-effect');
        setTimeout(() => {
            title.classList.remove('glow-effect');
        }, 1000);
    });
});

/* Name Glow and Dynamic Color Change on Hover/Click */
const nameTag = document.querySelector('.hero-content h1');

nameTag.addEventListener('mouseover', function() {
    this.classList.add('color-change');
});

nameTag.addEventListener('mouseout', function() {
    this.classList.remove('color-change');
});

nameTag.addEventListener('click', function() {
    this.classList.add('color-change');
});
