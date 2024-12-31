function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open-sidebar');
}

// Menutup sidebar jika pengguna mengklik di luar sidebar
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open-sidebar');
    }
});

window.onload = function() {
    const welcomeMessage = document.querySelector('.welcome-message');
    setTimeout(() => {
        welcomeMessage.style.animation = 'fadeIn 2s forwards';
    }, 500);
};

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.mission-vision, .info-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');

    const handleScrollAnimation = () => {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});

window.addEventListener('scroll', () => {
    const contactItems = document.querySelectorAll('.contact-item');
    const contactForm = document.querySelector('.contact-form');

    contactItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            item.classList.add('visible');
        }
    });

    const rectForm = contactForm.getBoundingClientRect();
    if (rectForm.top < window.innerHeight && rectForm.bottom >= 0) {
        contactForm.classList.add('visible');
    }
});

function resetForm() {
    const form = document.querySelector('form');
    form.reset(); 
    alert('Kolom telah direset.');
}
