/**
 * Evo Gadgets - Lógica de Interactividad y Control de Estado
 * Evaluación Sumativa 2 - FrontEnd INACAP
 */

// 1. ARREGLO DE OBJETOS: Datos de los productos (Requerimiento)
const productsList = [
    {
        id: "wave-pro",
        name: "Evo Wave Pro",
        category: "Over-Ear",
        price: 189990,
        description: "Auriculares inalámbricos premium con cancelación activa de ruido híbrida inteligente y sonido Hi-Res.",
        image: "assets/product-headphones.png",
        isFavorite: false
    },
    {
        id: "buds-air",
        name: "Evo Buds Air",
        category: "In-Ear",
        price: 89990,
        description: "Auriculares compactos resistentes al agua (IPX5), cancelación pasiva y estuche de carga inalámbrica.",
        image: "assets/product-buds.png",
        isFavorite: false
    },
    {
        id: "charge-dock",
        name: "Evo Charge Dock",
        category: "Accesorios",
        price: 49990,
        description: "Estación de carga rápida 3-en-1 fabricada de aluminio de grado aeronáutico para tus dispositivos Evo.",
        image: "assets/product-dock.png",
        isFavorite: false
    }
];

// 2. OBJETO: Estado de la aplicación (Requerimiento)
const appState = {
    searchQuery: "",
    selectedCategory: "todos",
    showFavoritesOnly: false,
    cartCount: 0
};

// 3. FUNCIÓN FLECHA (Arrow Function): Filtrado dinámico (Requerimiento)
const getFilteredProducts = () => {
    return productsList.filter(product => {
        // Validación de término de búsqueda (coincide con nombre o descripción)
        const matchesSearch = product.name.toLowerCase().includes(appState.searchQuery.toLowerCase()) || 
                              product.description.toLowerCase().includes(appState.searchQuery.toLowerCase());
        
        // Validación de categoría seleccionada
        const matchesCategory = appState.selectedCategory === "todos" || product.category === appState.selectedCategory;
        
        // Validación de favoritos
        const matchesFavorites = !appState.showFavoritesOnly || product.isFavorite;

        return matchesSearch && matchesCategory && matchesFavorites;
    });
};

// 4. FUNCIÓN PROPIA: Renderizado dinámico de productos en el DOM (Requerimiento)
function renderProducts() {
    // Obtener productos filtrados
    const filtered = getFilteredProducts();
    
    // Obtener contenedor usando querySelector (Requerimiento)
    const productsGrid = document.querySelector("#products-grid");
    
    if (!productsGrid) return;

    // Limpiar contenido previo del DOM (Requerimiento - modificación dinámica)
    productsGrid.innerHTML = "";

    // Estructura de Control (if) para mostrar mensaje si no hay resultados
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <p>No se encontraron dispositivos que coincidan con los filtros aplicados. 🔎</p>
            </div>
        `;
        return;
    }

    // Estructura de Control (forEach) para recorrer el arreglo renderizar las tarjetas (Requerimiento)
    filtered.forEach(product => {
        // Crear elemento de tarjeta
        const card = document.createElement("article");
        card.className = "product-card";

        // Estructura del HTML dinámico (Requerimiento - modificación dinámica)
        card.innerHTML = `
            <div class="product-image-container">
                <button class="fav-btn ${product.isFavorite ? 'active' : ''}" data-id="${product.id}" aria-label="Favorito">
                    ${product.isFavorite ? '❤️' : '🤍'}
                </button>
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString('es-CL')}</span>
                    <button class="btn btn-sm btn-outline btn-add-cart" data-id="${product.id}">Añadir al Carrito</button>
                </div>
            </div>
        `;

        // Añadir tarjeta al contenedor del DOM
        productsGrid.appendChild(card);
    });

    // Vincular event listeners de los elementos recién creados
    attachDynamicEvents();
}

// 5. FUNCIÓN PROPIA: Alternar el estado de favorito (Requerimiento)
function toggleFavorite(productId) {
    // Buscar el producto en el arreglo de datos
    const product = productsList.find(p => p.id === productId);
    
    // Estructura de Control (if)
    if (product) {
        // Invertir valor booleano
        product.isFavorite = !product.isFavorite;
        
        // Volver a renderizar para ver reflejado el cambio
        renderProducts();
    }
}

// 6. FUNCIÓN PROPIA: Simular añadir al carrito (Mejora visual)
function addToCart(productId) {
    let selectedProduct = productsList.find(p => p.id === productId);
    
    if (selectedProduct) {
        // Incrementar contador en estado
        appState.cartCount++;
        
        // Obtener el contador de la cabecera usando querySelector
        const cartBadge = document.querySelector(".cart-badge");
        if (cartBadge) {
            cartBadge.textContent = appState.cartCount;
            
            // Micro-animación de escala en el badge del carrito
            cartBadge.style.transform = "scale(1.2)";
            setTimeout(() => {
                cartBadge.style.transform = "scale(1)";
            }, 200);
        }
    }
}

// 7. FUNCIÓN PROPIA: Escuchar eventos de elementos dinámicos (Favoritos y Carrito)
function attachDynamicEvents() {
    // Botones de favoritos (corazón)
    const favButtons = document.querySelectorAll(".fav-btn");
    favButtons.forEach(btn => {
        // addEventListener (Requerimiento)
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            toggleFavorite(id);
        });
    });

    // Botones de añadir al carrito
    const cartButtons = document.querySelectorAll(".btn-add-cart");
    cartButtons.forEach(btn => {
        // addEventListener (Requerimiento)
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            addToCart(id);
        });
    });
}

// 8. INICIALIZACIÓN DE EVENTOS PRINCIPALES
document.addEventListener("DOMContentLoaded", () => {
    // Buscador por Texto
    const searchInput = document.querySelector("#search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            appState.searchQuery = e.target.value;
            renderProducts();
        });
    }

    // Botones de Categorías
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remover clase activa de todos los botones
            filterButtons.forEach(b => b.classList.remove("active"));
            
            // Añadir clase activa al botón presionado
            e.target.classList.add("active");
            
            // Actualizar estado y renderizar
            appState.selectedCategory = e.target.getAttribute("data-category");
            renderProducts();
        });
    });

    // Filtro por "Solo Favoritos"
    const favCheckbox = document.querySelector("#filter-favorites");
    if (favCheckbox) {
        favCheckbox.addEventListener("change", (e) => {
            appState.showFavoritesOnly = e.target.checked;
            renderProducts();
        });
    }

    // Primer renderizado de la tienda
    renderProducts();
});
