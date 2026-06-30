// ========== DADOS DAS TATUAGENS ==========
const tattooWorks = [
    { id: 1, category: "urbana", size: "Grande", src: "img/tatto1.jpg" },
    { id: 2, name: "Águia Realista", category: "animais", size: "Grande", duration: "7h", src: "img/tatto2.jpg" },
    { id: 3, name: "Coringa - Joker", category: "logos", size: "Grande", duration: "10h", src: "img/tatto3.jpg" },
    { id: 4, name: "Leão Majestoso", category: "urbana", size: "Grande", duration: "9h", src: "img/tatto4.jpg" },
    { id: 5, name: "Logo Flamengo", category: "animais", size: "Média", duration: "4h", src: "img/tatto5.jpg" },
    { id: 6, name: "Arte KAWS", category: "flores", size: "Grande", duration: "6h", src: "img/tatto6.jpg" },
    { id: 7, name: "Rosa Realista", category: "personagens", size: "Média", duration: "5h", src: "img/tatto7.jpg" },
    { id: 8, name: "Querubim", category: "animais", size: "Média", duration: "6h", src: "img/tatto8.jpg" },
    { id: 9, name: "Lobo Selvagem", category: "urbana", size: "Grande", duration: "8h", src: "img/tatto9.jpg" },
    { id: 10, name: "Caveira Mexicana", category: "personagens", size: "Média", duration: "5h", src: "img/tatto10.jpg" },
    { id: 11, name: "Mandala Floral", category: "personagens", size: "Grande", duration: "7h", src: "img/tatto11.jpg" },
    { id: 12, name: "Cristo Redentor", category: "religiosa", size: "Grande", duration: "9h", src: "img/tatto12.jpg" },
    { id: 13, name: "Tigre Feroz", category: "personagens", size: "Grande", duration: "10h", src: "img/tatto13.jpg" },
    { id: 14, name: "Grafite Urbano", category: "personagens", size: "Média", duration: "5h", src: "img/tatto14.jpg" },
    { id: 15, name: "Escudo de Time", category: "animais", size: "Pequena", duration: "3h", src: "img/tatto15.jpg" },
    { id: 16, name: "Arte Moderna", category: "urbana", size: "Grande", duration: "6h", src: "img/tatto16.jpg" },
    { id: 17, name: "Flor de Lótus", category: "religiosa", size: "Média", duration: "5h", src: "img/tatto17.jpg" },
    { id: 18, name: "Anjo da Guarda", category: "flores", size: "Média", duration: "6h", src: "img/tatto18.jpg" },
    { id: 19, name: "Dragão Oriental", category: "animais", size: "Grande", duration: "8h", src: "img/tatto19.jpg" },
    { id: 20, name: "Palhaço Sinistro", category: "personagens", size: "Média", duration: "5h", src: "img/tatto20.jpg" },
    { id: 21, name: "Mandala Geométrica", category: "flores", size: "Grande", duration: "7h", src: "img/tatto21.jpg" },
    { id: 22, name: "Nossa Senhora", category: "religiosa", size: "Grande", duration: "9h", src: "img/tatto22.jpg" },
    { id: 23, name: "Leão Tribal", category: "animais", size: "Grande", duration: "10h", src: "img/tatto23.jpg" },
    { id: 24, name: "Street Art", category: "logos", size: "Média", duration: "5h", src: "img/tatto24.jpg" },
    { id: 25, name: "Escudo Corinthians", category: "logos", size: "Pequena", duration: "3h", src: "img/tatto25.jpg" },
    { id: 26, name: "Logo Personalizado", category: "logos", size: "Pequena", duration: "3h", src: "img/tatto26.jpg" }
];

// ========== SELEÇÃO DE ELEMENTOS ==========
const list = document.querySelector('.portfolio-grid');
const buttonShowAll = document.querySelectorAll('.btn-filtro');
const countNumber = document.querySelector('.count-number');

// ========== DICIONÁRIO DE CATEGORIAS ==========
const categories = {
    religiosa: '🙏 Religiosa',
    animais: '🦅 Animais',
    personagens: '🃏 Personagens',
    logos: '⚽ Logos',
    flores: '🌹 Flores',
    urbana: '🎨 Arte Urbana'
};


// ========== MOSTRAR TRABALHOS ==========
function showAll(worksArray) {
    let myList = '';
    
    if (worksArray.length === 0) {
        list.innerHTML = '<li class="no-results"><p>😔 Nenhum trabalho encontrado nesta categoria.</p></li>';
        countNumber.textContent = 0;
        return;
    }

    worksArray.forEach((work, index) => {
        myList += `
            <li data-category="${work.category}" style="animation-delay: ${index * 0.05}s">
                <img src="${work.src}" 
                     alt="${work.name}" 
                     loading="lazy">
                <div class="portfolio-item-info">
                    <span class="portfolio-item-category">${categories[work.category]}</span>
                </div>
            </li>
        `;
    });

    list.innerHTML = myList;
    countNumber.textContent = worksArray.length;
}

// ========== FILTRAR POR CATEGORIA ==========
function filterByCategory(category) {
    const filtered = category === 'todos' 
        ? tattooWorks 
        : tattooWorks.filter(work => work.category === category);
    
    showAll(filtered);
}

// ========== EVENTOS DOS FILTROS ==========
buttonShowAll.forEach((button) => {
    button.addEventListener('click', () => {
        buttonShowAll.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterByCategory(button.getAttribute('data-filter'));
    });
});

// ========== CONTADOR ANIMADO ==========
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current >= target ? target : Math.floor(current);
        if (current >= target) clearInterval(timer);
    }, 16);
}

// ========== ANIMAR STATS NO HERO ==========
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

const hero = document.querySelector('.hero');
if (hero) statsObserver.observe(hero);



// ========== FORMULÁRIO PARA WHATSAPP ==========
const formContato = document.getElementById('formContato');
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const estilo = document.getElementById('estilo').value;
        const mensagem = document.getElementById('mensagem').value;
        
        const texto = `*📝 Nova Solicitação*\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Estilo:* ${categories[estilo] || estilo}\n*Mensagem:* ${mensagem}`;
        
        window.open(`https://wa.me/5555996979374?text=${encodeURIComponent(texto)}`, '_blank');
        e.target.reset();
    });
}

// ========== SCROLL SUAVE ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    });
});

// ========== HEADER COM SCROLL ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 100);
    }
});

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.sobre, .contato, .diferencial-item');

    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index * 0.1}s`;
        revealObserver.observe(el);
    });
}

// ========== MENU MOBILE ==========
const btnMobile = document.querySelector('.btn-mobile-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function toggleMenu() {
    const isActive = nav.classList.toggle('active');
    btnMobile.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
}

if (btnMobile) btnMobile.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
        toggleMenu();
    }
});

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    showAll(tattooWorks);
    initScrollReveal();
    console.log(`✅ ${tattooWorks.length} trabalhos carregados!`);
});