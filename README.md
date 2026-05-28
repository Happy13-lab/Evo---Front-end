# Evo Gadgets - Landing Page Premium

Evo Gadgets es un sitio web estático premium para una tienda ficticia de dispositivos tecnológicos de vanguardia y audio de alta fidelidad. Este proyecto fue desarrollado para la **Evaluación Sumativa 1 de FrontEnd** y está diseñado pensando en la escalabilidad a futuro, integrando un diseño moderno responsivo y la preparación para funcionalidades interactivas (como carrito de compras y formularios).

---

## 🚀 Características del Proyecto

- **HTML5 Semántico:** Estructura limpia y accesible utilizando etiquetas de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Diseño Premium (Glassmorphic):** Fondo oscuro con reflejos de luz y tarjetas semi-transparentes (efecto vidrio) con bordes brillantes en hover.
- **Flexbox Layout:** Todo el sitio está estructurado y alineado usando Flexbox, garantizando una distribución óptima de los elementos de navegación, características, y productos.
- **Micro-animaciones:** Transiciones suaves de hover en enlaces, botones interactivos y elevación 3D para tarjetas.
- **Formulario de Pre-venta:** Un formulario responsivo diseñado para recopilar información de reservas de productos con validaciones HTML5.
- **Responsive Design:** Adaptado para una visualización perfecta en teléfonos móviles, tabletas y computadoras de escritorio mediante Media Queries.

---

## 📁 Estructura de Carpetas

```text
Evo FrontEnd/
│
├── assets/                     # Recursos visuales y multimedia
│   ├── hero-headphones.png     # Imagen destacada en sección Hero
│   ├── product-headphones.png  # Imagen de producto Evo Wave Pro
│   ├── product-buds.png        # Imagen de producto Evo Buds Air
│   └── product-dock.png        # Imagen de producto Evo Charge Dock
│
├── css/                        # Hojas de estilo
│   └── style.css               # Estilos globales y diseño responsivo
│
├── .gitignore                  # Exclusiones de Git
├── index.html                  # Estructura HTML5 del landing page
└── README.md                   # Documentación del proyecto (este archivo)
```

---

## 📝 Prompts Utilizados durante el Desarrollo

A continuación se detallan los prompts estructurados que guiaron el desarrollo de este proyecto, junto con su propósito correspondiente:

### 1. Planificación y Concepto de Diseño
> **Prompt:** *"Crear plan de implementación en español para el proyecto de evaluación Evo FrontEnd, detallando el diseño de la tienda tecnológica premium, la estructura HTML semántica, los estilos CSS y el flujo de ramas de Git."*
> - **Explicación:** Se utilizó para estructurar el alcance del proyecto, definir la temática de la tienda ("Evo Gadgets") en coherencia con el nombre del espacio de trabajo, y planificar el flujo de ramas de Git.

### 2. Estructura HTML5 Semántica
> **Prompt:** *"Crear index.html con estructura HTML5 semántica que incluya secciones de Cabecera, Navegación, Héroe con banner promocional, Sección de Características destacadas, Galería de Productos con botones de carrito, Formulario de Pre-venta interactivo y Pie de página con enlaces."*
> - **Explicación:** Este prompt generó el esqueleto estructural y los textos del sitio web utilizando etiquetas semánticas de HTML5 para optimizar la estructura y SEO básico.

### 3. Generación de Recursos Visuales (Imágenes de Producto)
> **Prompts de Imágenes:**
> - *Hero:* `"Premium high-tech over-ear headphones, dark futuristic background, neon purple and cyan glow highlights, product photography, studio light, cinematic render, isolated, sleek look, 3d render"`
> - *Producto 1:* `"Sleek metallic over-ear headphones on a dark podium, studio lighting, neon highlights, isolated product shot"`
> - *Producto 2:* `"Futuristic true wireless in-ear earbuds with a glowing charging case on a dark high-tech surface, studio lighting"`
> - *Producto 3:* `"Futuristic aluminum wireless charging dock for phone, watch, and earbuds, minimal premium tech product shot, neon purple highlights"`
> - **Explicación:** Estos prompts permitieron generar imágenes de alta definición y estilo unificado para usarse como los activos reales del sitio, evitando el uso de placeholders vacíos.

### 4. Estilos Visuales y Flexbox
> **Prompt:** *"Crear hoja de estilos CSS externa (style.css) con diseño premium de tipo Glassmorphism, alineación Flexbox para todos los contenedores y micro-animaciones en botones y tarjetas en hover. Definir variables CSS para los colores neón morado y cian, fondo oscuro y tipografía Outfit de Google Fonts."*
> - **Explicación:** Con este prompt se le otorgó el aspecto visual "Wow" al sitio web, estableciendo la paleta de colores, sombras de neón, desenfoques y el sistema de Flexbox responsivo.

---

## 🌿 Flujo de Ramas de Git

El proyecto sigue las directrices de Git Flow simplificado para la entrega, conteniendo las siguientes ramas:
1. `main`: Rama de producción estable.
2. `develop`: Rama de integración para desarrollo.
3. `feature/estructura`: Desarrollo del HTML semántico y los assets iniciales.
4. `feature/estilos`: Creación de la hoja de estilos externa con diseño visual completo.
5. `feature/documentacion`: Redacción y finalización de la documentación (README.md).
