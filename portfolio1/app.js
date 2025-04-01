// // Typewriter Effect for Hero Section
// const typewriter = (element, text, speed = 100) => {
//     let i = 0;
//     const interval = setInterval(() => {
//         if (i < text.length) {
//             element.textContent += text.charAt(i);
//             i++;
//         } else {
//             clearInterval(interval);
//         }
//     }, speed);
// };

// const heroText = document.querySelector('.hero-content p');
// if (heroText) {
//     const text = heroText.textContent;
//     heroText.textContent = ''; // Clear existing text
//     typewriter(heroText, text, 50);
// }

// // Scroll Animations
// const animateOnScroll = () => {
//     const sections = document.querySelectorAll('.about-section, .skills-section, .projects-section, .mini-projects-section, .contact-section');
//     sections.forEach(section => {
//         const sectionTop = section.getBoundingClientRect().top;
//         const sectionBottom = section.getBoundingClientRect().bottom;
//         const isVisible = (sectionTop < window.innerHeight) && (sectionBottom >= 0);

//         if (isVisible) {
//             section.classList.add('visible');
//         } else {
//             section.classList.remove('visible');
//         }
//     });
// };

// window.addEventListener('scroll', animateOnScroll);
// animateOnScroll(); // Initial check

// // Particles.js Customization
// particlesJS('particles-js', {
//     particles: {
//         number: {
//             value: 80,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: '#bb86fc'
//         },
//         shape: {
//             type: 'circle',
//             stroke: {
//                 width: 0,
//                 color: '#000000'
//             }
//         },
//         opacity: {
//             value: 0.5,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 1,
//                 opacity_min: 0.1
//             }
//         },
//         size: {
//             value: 3,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 3,
//                 size_min: 0.1
//             }
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: '#bb86fc',
//             opacity: 0.5,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 4,
//             direction: 'none',
//             random: true,
//             straight: false,
//             out_mode: 'out'
//         }
//     },
//     interactivity: {
//         detect_on: 'window',
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: 'repulse'
//             },
//             onclick: {
//                 enable: true,
//                 mode: 'push'
//             }
//         }
//     },
//     retina_detect: true
// });

// // Theme Toggle
// const themeSwitch = document.getElementById('theme-switch');
// if (themeSwitch) {
//     themeSwitch.addEventListener('change', () => {
//         document.body.classList.toggle('light-theme');
//         localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
//     });

//     // Load saved theme
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light') {
//         document.body.classList.add('light-theme');
//         themeSwitch.checked = true;
//     }
// }

// // Floating Action Button (FAB)
// const fab = document.querySelector('.fab');
// if (fab) {
//     fab.addEventListener('click', (e) => {
//         e.preventDefault();
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });

//     // Show/hide FAB on scroll
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 300) {
//             fab.style.display = 'flex';
//         } else {
//             fab.style.display = 'none';
//         }
//     });
// }

// // Mini Projects Hover Effect
// const miniProjectCards = document.querySelectorAll('.mini-project-card');
// miniProjectCards.forEach(card => {
//     card.addEventListener('mouseenter', () => {
//         card.style.transform = 'translateY(-10px)';
//         card.style.boxShadow = '0 10px 20px rgba(187, 134, 252, 0.7)';
//     });

//     card.addEventListener('mouseleave', () => {
//         card.style.transform = 'translateY(0)';
//         card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
//     });
// });