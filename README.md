# Evo Gadgets - Landing Page Premium & Interactiva

Evo Gadgets es un sitio web estático premium para una tienda de dispositivos tecnológicos de vanguardia y audio de alta fidelidad. 

Este proyecto fue extendido en la **Evaluación Sumativa 2** para incorporar interactividad dinâmica utilizando JavaScript puro (Vanilla JS), aplicando manipulación del DOM, programación funcional, estructuras de datos (arreglos y objetos) y estructuras de control dinámicas.

---

## 🚀 Características del Proyecto

- **HTML5 Semántico:** Estructura limpia y accesible utilizando etiquetas de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Diseño Premium (Glassmorphic):** Fondo oscuro con reflejos de luz y tarjetas semi-transparentes (efecto vidrio) con bordes brillantes en hover y sombras de neón.
- **Flexbox Layout:** Todo el sitio está estructurado y alineado usando Flexbox, garantizando una distribución óptima de los elementos de navegación, características, catálogo de productos y los controles de filtrado.
- **Renderizado Dinámico (JS):** Los productos del catálogo no están cableados en HTML; se renderizan dinámicamente desde un arreglo de objetos en JavaScript mediante plantillas de cadena (Template Literals).
- **Sistema de Favoritos (JS):** Permite marcar o desmarcar dispositivos favoritos haciendo clic en los botones de corazón en cada tarjeta. Cuenta con un filtro tipo checkbox para mostrar únicamente los productos marcados.
- **Búsqueda e Historial en Tiempo Real (JS):** Barra de búsqueda interactiva en la sección de catálogo que filtra productos de forma inmediata según el término ingresado.
- **Filtros por Categoría (JS):** Botones selectores para filtrar los dispositivos según su tipo (*Over-Ear*, *In-Ear*, *Accesorios* o *Todos*).
- **Interactividad del Carrito (JS):** Simulación de adición al carrito de compras con un contador dinámico animado en el badge de la cabecera.
- **Responsive Design:** Adaptado para una visualización perfecta en teléfonos móviles, tabletas y computadoras de escritorio mediante Media Queries y Flexbox responsivo.

---

## 📁 Estructura de Carpetas

```text
Evo FrontEnd/
│
├── assets/                     # Recursos visuales y multimedia
│   ├── hero-headphones.png     # Imagen destacada en sección Hero
│   ├── product-headphones.png  # Imagen de producto Evo Wave Pro
│   ├── product-buds.png        # Imagen de producto Evo Buds Air
│   ├── product-keyboard.png    # Imagen de producto Evo Keyboard Neon
│   ├── product-watch.png       # Imagen de producto Evo Smartwatch Fit
│   └── product-dock.png        # Imagen de producto Evo Charge Dock
│
├── css/                        # Hojas de estilo
│   └── style.css               # Estilos globales, controles de JS y diseño responsivo
│
├── js/                         # Lógica interactiva
│   └── main.js                 # Datos de catálogo, render dinámico y gestión de estado
│
├── .gitignore                  # Exclusiones de Git
├── index.html                  # Estructura HTML5 y controles interactivos
└── README.md                   # Documentación del proyecto (este archivo)
```

---

## 📝 Prompts Utilizados durante el Desarrollo

A continuación se detallan los prompts estructurados que guiaron el desarrollo de las diferentes fases del proyecto:

### 1. Planificación y Estructura (Evaluación 1)
> **Prompt:** *"Crear plan de implementación en español para el proyecto de evaluación Evo FrontEnd, detallando el diseño de la tienda tecnológica premium, la estructura HTML semántica, los estilos CSS y el flujo de ramas de Git."*
> - **Explicación:** Se utilizó para estructurar el alcance inicial, la temática y las ramas de Git del proyecto.

### 2. Estructura HTML5 Semántica (Evaluación 1)
> **Prompt:** *"Crear index.html con estructura HTML5 semántica que incluya secciones de Cabecera, Navegación, Héroe con banner promocional, Sección de Características destacadas, Galería de Productos con botones de carrito, Formulario de Pre-venta interactivo y Pie de página con enlaces."*

### 3. Recursos Visuales (Evaluación 1)
> **Prompts de Imágenes:**
> - *Hero:* `"Premium high-tech over-ear headphones, dark futuristic background, neon purple and cyan glow highlights, product photography, studio light, cinematic render, isolated, sleek look, 3d render"`
> - *Productos:* Diseños de auriculares over-ear, in-ear y una base de carga de aluminio con fondos oscuros e iluminación de estudio.

### 4. Lógica de Interactividad JavaScript (Evaluación 2)
> **Prompt:** *"Ayúdame a estructurar un script js/main.js en Vanilla JS para una tienda de e-commerce que cargue dinámicamente sus productos desde un array de objetos, maneje un buscador en tiempo real, filtre por categorías y tenga un sistema para guardar o quitar favoritos (corazones). Debe utilizar variables const/let, funciones propias, funciones flecha y manipulación del DOM mediante innerHTML y addEventListener."*
> - **Explicación:** Se utilizó para implementar las funcionalidades fundamentales de JavaScript puro solicitadas en la rúbrica.

### 5. Estilos de Controles de Filtrado (Evaluación 2)
> **Prompt:** *"Crea estilos en CSS para un contenedor de controles de productos que alinee mediante Flexbox un buscador de texto moderno con icono de lupa, botones de filtro de categorías y un checkbox para filtrar por favoritos. Debe mantener el diseño oscuro y el efecto de desenfoque de fondo (glassmorphism) de las tarjetas."*
> - **Explicación:** Sirvió para dar una apariencia Premium a la barra de controles de búsqueda y el checkbox de favoritos en el sitio web.

---

## 🤖 Validación y Corrección de Código con IA

Durante el desarrollo de la interactividad en JavaScript, se utilizó la Inteligencia Artificial para auditar la calidad, verificar la compatibilidad del código y depurar errores comunes:

1. **Gestión de Event Listeners Dinámicos (Depuración):**
   - *Problema detectado:* Al vaciar e inyectar dinámicamente el HTML en la cuadrícula (`productsGrid.innerHTML = ""`), los event listeners asociados a los botones de "Añadir al Carrito" y "Favoritos" en las tarjetas dejaban de funcionar tras aplicar un filtro o realizar una búsqueda.
   - *Validación y Solución con IA:* La IA sugirió encapsular el anclaje de eventos de las tarjetas en una función separada (`attachDynamicEvents()`) y llamarla al final de la función `renderProducts()`, inmediatamente después de inyectar las nuevas tarjetas al DOM. Esto garantizó que la interactividad se mantenga activa en cada re-renderizado.
2. **Evitar Fugas en el Ámbito de Variables (Auditoría):**
   - *Validación con IA:* Se realizó un análisis estático del script para asegurar el uso consistente de `const` (para valores inmutables como la lista de productos y selectores del DOM) y `let` (para los contadores y estados mutables como `cartCount` o el texto de búsqueda), previniendo variables globales implícitas y problemas de hoisting.
3. **Compatibilidad en CSS para Recorte de Texto:**
   - *Depuración con IA:* Para solucionar una advertencia de VS Code en la propiedad propietaria `-webkit-line-clamp`, la IA recomendó definir de forma complementaria la propiedad estándar `line-clamp` para asegurar la compatibilidad futura en navegadores estándar y resolver la advertencia de linting.

---

## 🌿 Flujo de Ramas de Git

El proyecto sigue un orden sistemático de ramas de Git. Las ramas del repositorio son:
1. `main`: Rama de producción estable.
2. `develop`: Rama de integración de desarrollo.
3. `feature/estructura`: Desarrollo del HTML semántico y los assets iniciales.
4. `feature/estilos`: Creación de la hoja de estilos externa con diseño visual glassmorphic.
5. `feature/documentacion`: Redacción inicial del README.md.
6. `feature/interactividad`: Implementación de JavaScript, DOM dinámico, filtros y favoritos.
