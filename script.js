// Mobile Menu Toggle
console.log('Script carregado!');

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuIcon = document.getElementById('menuIcon');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

console.log('Elementos encontrados:', {
    mobileMenuBtn: !!mobileMenuBtn,
    closeMenuBtn: !!closeMenuBtn,
    mobileMenu: !!mobileMenu,
    menuOverlay: !!menuOverlay,
    menuIcon: !!menuIcon,
    mobileMenuItems: mobileMenuItems.length
});

function openMenu() {
    if (!mobileMenu || !menuOverlay) {
        console.log('Menu ou overlay não encontrado');
        return;
    }

    console.log('Abrindo menu...');

    // Remove as classes que ocultam
    mobileMenu.style.transform = 'translateX(0)';
    menuOverlay.style.opacity = '1';
    menuOverlay.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';

    // Muda ícone para X
    if (menuIcon) {
        const path = menuIcon.querySelector('path');
        if (path) {
            path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    }
}

function closeMenu() {
    if (!mobileMenu || !menuOverlay) return;

    console.log('Fechando menu...');

    // Adiciona as classes que ocultam
    mobileMenu.style.transform = 'translateX(100%)';
    menuOverlay.style.opacity = '0';
    menuOverlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';

    // Volta para hamburger
    if (menuIcon) {
        const path = menuIcon.querySelector('path');
        if (path) {
            path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    }
}

function toggleMobileMenu() {
    if (!mobileMenu) return;

    const isOpen = mobileMenu.style.transform === 'translateX(0px)' || mobileMenu.style.transform === 'translateX(0)';

    console.log('Toggle menu - Estado atual:', isOpen ? 'aberto' : 'fechado');

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Event listener no botão hamburger
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
}

// Event listener no botão X dentro do menu
if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });
}

// Fecha o menu ao clicar no overlay
if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        closeMenu();
    });
}

// Fecha o menu ao clicar em um item
mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
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
}

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
