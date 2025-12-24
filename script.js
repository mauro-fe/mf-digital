// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

function toggleMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');

    // Alterna entre hamburger e X no SVG
    if (menuIcon) {
        const path = menuIcon.querySelector('path');
        if (mobileMenu.classList.contains('translate-x-full')) {
            // Hamburger menu
            path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            // X icon
            path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            // Fecha o menu ao clicar em um item
            mobileMenuItems.forEach(item => {
                item.addEventListener('click', () => {
                    toggleMobileMenu();
                });
            });

            // Fecha o menu ao clicar fora
            if (mobileMenu) {
                mobileMenu.addEventListener('click', (e) => {
                    if (e.target === mobileMenu) {
                        toggleMobileMenu();
                    }
                });
            }

            // Scroll to top button
            const scrollTopBtn = document.getElementById('scrollTop');

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.remove('hidden');
                } else {
                    scrollTopBtn.classList.add('hidden');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Fade in animation on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });

            // Parallax effect on hero
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('#home');
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            });