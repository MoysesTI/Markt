// Dados dos Produtos BIOVIT (Expandido com Vitaminas)
const productsBiovit = [
    // WHEY PROTEIN (8 produtos)
    {
        id: 1,
        name: "100 Whey Protein Max Titanium 900g Baunilha",
        category: "whey",
        price: 149.90,
        oldPrice: 199.90,
        badge: "MAIS VENDIDO",
        image: "images/100-whey-protein-max-titanium-refil-900g-baunilha-1.webp"
    },
    {
        id: 2,
        name: "Whey Pro Max Titanium 1kg Chocolate",
        category: "whey",
        price: 119.90,
        oldPrice: 159.90,
        badge: "OFERTA",
        image: "images/whey-pro-max-titanium-1kg-chocolate-1.webp"
    },
    {
        id: 3,
        name: "MAX Clear Whey Abacaxi PDP",
        category: "whey",
        price: 159.90,
        oldPrice: 199.90,
        badge: "NOVO",
        image: "images/MAX-CLEAR-WHEY-ABACAXI-PDP1.webp"
    },
    {
        id: 4,
        name: "Max Titanium 100 Whey Protein Dr Peanut",
        category: "whey",
        price: 189.90,
        oldPrice: 239.90,
        badge: "PREMIUM",
        image: "images/max_titanium_100_whey_protein_dr_peanut_sabores_203691716_1_7a3525ad999abd99abd229ab33308962e01ea.webp"
    },
    {
        id: 5,
        name: "MAX Lançamentos Shook Manga",
        category: "whey",
        price: 159.90,
        oldPrice: 199.90,
        badge: "LANÇAMENTO",
        image: "images/MAX-IMAGENS-LANCAMENTOS-SHOOK-MANGA.jpg.webp"
    },
    {
        id: 6,
        name: "MAX Lançamentos TDZ",
        category: "whey",
        price: 169.90,
        oldPrice: 219.90,
        badge: null,
        image: "images/MAX-IMAGENS-LANCAMENTOS-TDZjpg.webp"
    },
    {
        id: 7,
        name: "Kit 2 Hot Shot Dry Max",
        category: "whey",
        price: 299.90,
        oldPrice: 399.90,
        badge: "COMBO",
        image: "images/MAX-KIT-2HOT-SHOTDRY.webp"
    },
    {
        id: 8,
        name: "Whey Protein Growth 1kg",
        category: "whey",
        price: 129.90,
        oldPrice: 179.90,
        badge: "ECONÔMICO",
        image: "images/100-whey-protein-max-titanium-refil-900g-baunilha-1.webp"
    },

    // CREATINA (5 produtos)
    {
        id: 9,
        name: "Creatina Max Titanium 300g",
        category: "creatina",
        price: 79.90,
        oldPrice: 119.90,
        badge: "OFERTA",
        image: "images/creatine-max-titanium-300g-1.webp"
    },
    {
        id: 10,
        name: "Creatina Monohidratada Pura 300g",
        category: "creatina",
        price: 89.90,
        oldPrice: 129.90,
        badge: null,
        image: "images/creatine-max-titanium-300g-1.webp"
    },
    {
        id: 11,
        name: "Creatina Creapure Importada",
        category: "creatina",
        price: 129.90,
        oldPrice: 179.90,
        badge: "IMPORTADA",
        image: "images/creatine-max-titanium-300g-1.webp"
    },
    {
        id: 12,
        name: "Creatina Growth Supplements 300g",
        category: "creatina",
        price: 74.90,
        oldPrice: 109.90,
        badge: "ECONÔMICO",
        image: "images/creatine-max-titanium-300g-1.webp"
    },
    {
        id: 13,
        name: "Creatina Mega Pack 600g",
        category: "creatina",
        price: 139.90,
        oldPrice: 199.90,
        badge: "MELHOR CUSTO",
        image: "images/creatine-max-titanium-300g-1.webp"
    },

    // PRÉ-TREINO (6 produtos)
    {
        id: 14,
        name: "Fire Black 60 Cápsulas",
        category: "pre-treino",
        price: 89.90,
        oldPrice: 129.90,
        badge: "POTENTE",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 15,
        name: "Shot Dry Max Titanium 150g Frutas Vermelhas",
        category: "pre-treino",
        price: 99.90,
        oldPrice: 139.90,
        badge: "MAIS VENDIDO",
        image: "images/shot-dry-max-titanium-150g-frutas-vermelhas-1.webp"
    },
    {
        id: 16,
        name: "Power Dark 90g Display",
        category: "pre-treino",
        price: 109.90,
        oldPrice: 149.90,
        badge: "HARDCORE",
        image: "images/POWER-DARK-90G-DISPLAY.png"
    },
    {
        id: 17,
        name: "Pré-Treino Venom Underground 300g Dark Lab",
        category: "pre-treino",
        price: 119.90,
        oldPrice: 169.90,
        badge: "NOVO",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 18,
        name: "Pré-Treino Pump Extreme",
        category: "pre-treino",
        price: 94.90,
        oldPrice: 134.90,
        badge: null,
        image: "images/shot-dry-max-titanium-150g-frutas-vermelhas-1.webp"
    },
    {
        id: 19,
        name: "Pré-Treino Energia Total",
        category: "pre-treino",
        price: 84.90,
        oldPrice: 119.90,
        badge: "OFERTA",
        image: "images/POWER-DARK-90G-DISPLAY.png"
    },

    // VITAMINAS (8 produtos) - NOVA CATEGORIA
    {
        id: 20,
        name: "Vitamina C 120 Cápsulas Growth Supplements V2",
        category: "vitaminas",
        price: 39.90,
        oldPrice: 59.90,
        badge: "ESSENCIAL",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 21,
        name: "Complexo Vitamínico B 60 Cápsulas",
        category: "vitaminas",
        price: 44.90,
        oldPrice: 69.90,
        badge: "COMPLETO",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 22,
        name: "Vitamina D3 2000UI 60 Cápsulas",
        category: "vitaminas",
        price: 49.90,
        oldPrice: 74.90,
        badge: "MAIS VENDIDO",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 23,
        name: "Multivitamínico Completo 100 Cápsulas",
        category: "vitaminas",
        price: 79.90,
        oldPrice: 119.90,
        badge: "OFERTA",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 24,
        name: "Ômega 3 1000mg 120 Cápsulas",
        category: "vitaminas",
        price: 89.90,
        oldPrice: 129.90,
        badge: "PREMIUM",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 25,
        name: "Vitamina E 400UI 60 Cápsulas",
        category: "vitaminas",
        price: 54.90,
        oldPrice: 79.90,
        badge: null,
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 26,
        name: "Magnésio Dimalato 500mg 60 Cápsulas",
        category: "vitaminas",
        price: 69.90,
        oldPrice: 99.90,
        badge: "NOVO",
        image: "images/Fire-black-60caps.png"
    },
    {
        id: 27,
        name: "Zinco Quelato 60 Cápsulas",
        category: "vitaminas",
        price: 34.90,
        oldPrice: 54.90,
        badge: "ECONÔMICO",
        image: "images/Fire-black-60caps.png"
    }
];

// Estado do Carrinho
let cart = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initModals();
    initProductFilters();
    renderProducts('all');
    loadCartFromStorage();
    updateCartCount();
});

// Modais
function initModals() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
        renderCart();
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Filtros de Produtos
function initProductFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            renderProducts(filter);
        });
    });
}

// Renderizar Produtos
function renderProducts(filter) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    let filteredProducts = productsBiovit;
    if (filter !== 'all') {
        filteredProducts = productsBiovit.filter(p => p.category === filter);
    }

    // Mostrar no máximo 12 produtos
    filteredProducts.slice(0, 12).forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Criar Card de Produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <div class="product-image">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" 
                 alt="${product.name}" 
                 onerror="this.style.display='none';">
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                ${product.oldPrice ? `<span class="price-old">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                <span class="price-current">R$ ${product.price.toFixed(2)}</span>
            </div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> ADICIONAR
                </button>
            </div>
        </div>
    `;

    return card;
}

// Helpers
function getCategoryName(category) {
    const names = {
        'whey': 'WHEY PROTEIN',
        'creatina': 'CREATINA',
        'pre-treino': 'PRÉ-TREINO',
        'vitaminas': 'VITAMINAS'
    };
    return names[category] || category.toUpperCase();
}

// Carrinho
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart-biovit');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCartToStorage() {
    localStorage.setItem('cart-biovit', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = productsBiovit.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartCount();
    showNotification('Produto adicionado ao carrinho!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        renderCart();
        updateCartCount();
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" 
                 alt="${item.name}"
                 style="width: 80px; height: 80px; border-radius: 8px; object-fit: contain; padding: 5px;"
                 onerror="this.style.display='none';">
            <div style="flex: 1;">
                <div style="font-weight: 700; margin-bottom: 5px;">${item.name}</div>
                <div style="color: var(--primary); font-weight: 700; font-size: 1.1rem;">R$ ${item.price.toFixed(2)}</div>
                <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                    <div style="display: flex; align-items: center; gap: 10px; background: var(--gray-100); border-radius: 8px; padding: 5px 10px;">
                        <button onclick="updateQuantity(${item.id}, -1)" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">-</button>
                        <span style="font-weight: 700;">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" style="background: none; border: none; font-size: 1.2rem; cursor: pointer;">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: var(--error); cursor: pointer; font-size: 1.2rem;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    cartFooter.style.display = 'block';
}

// Notificações
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Busca
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase();
            if (query) {
                showNotification(`Buscando por: "${query}"`);
            }
        }
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('🌿 BIOVIT carregado com sucesso! 27 produtos disponíveis.');
// === FUNCIONALIDADE DO HERO SLIDER ===
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('heroDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (!slides.length || !dotsContainer) return;
    
    let currentSlide = 0;
    let autoplayInterval;

    // Criar dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.hero-dot');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = n;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlideFunc() {
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlideFunc();
            stopAutoplay();
            startAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        });
    }

    startAutoplay();
}

// === NAVEGAÇÃO MOBILE ===
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
}

// === MODAL LOGIN ===
function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLogin = document.getElementById('closeLogin');
    
    if (loginBtn && loginModal && closeLogin) {
        loginBtn.addEventListener('click', () => {
            loginModal.classList.add('active');
        });

        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });

        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
            }
        });

        // Form de Login
        const loginForm = loginModal.querySelector('.login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showNotification('Login realizado com sucesso!');
                loginModal.classList.remove('active');
            });
        }
    }
}

// Atualizar a inicialização no DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    initNavigation();
    initModals();
    initLoginModal();
    initProductFilters();
    renderProducts('all');
    loadCartFromStorage();
    updateCartCount();
});

console.log('🌿 BIOVIT completo carregado com sucesso! Hero slider + 27 produtos disponíveis.');