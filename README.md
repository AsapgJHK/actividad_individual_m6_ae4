# 💻 Portafolio Personal Dinámico (Express & Handlebars)

Este es un proyecto de portafolio personal desarrollado utilizando **Node.js** con el *framework* **Express** y el motor de plantillas **Handlebars (HBS)**.

El objetivo principal es demostrar la configuración de un servidor web robusto capaz de manejar contenido dinámico, enrutamiento organizado y la reutilización de código mediante *layouts* y vistas parciales.

---

## ✨ Características Principales

* **Servidor Express:** Estructura de aplicación ligera y rápida para el *backend*.
* **Handlebars (HBS):** Utilizado como motor de vistas para el renderizado del lado del servidor (SSR).
* **Contenido Dinámico:** Los datos de los proyectos y la información personal se gestionan desde un objeto JavaScript en el servidor (`index.js`).
* **Componentización:** Implementación de **Vistas Parciales** para el *header*, *footer* y las tarjetas de proyecto, maximizando la reutilización de código.
* **Helper Personalizado:** Se incluye un *helper* de Handlebars (`getCurrentYear`) para mostrar el año actual dinámicamente en el *footer*.
* **Archivos Estáticos:** Servido de CSS, imágenes y JavaScript desde la carpeta `public/`.
* **Manejo de Errores:** Incluye una página de **Error 404** personalizada para rutas no encontradas.

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para poner el proyecto en marcha en tu máquina local.

### Prerrequisitos

Necesitas tener **Node.js** (que incluye `npm`) y **Git** instalados.

### 1. Clonar el Repositorio

Abre tu terminal y clona el repositorio:

`git clone [URL_DE_TU_REPOSITORIO]
cd portfolio-hbs`

### 2. Instalar Dependencias

Instala todas las librerías necesarias (Express y Express-Handlebars):

`npm install`

### 3. Ejecutar el Servidor
Inicia el servidor Node.js:

`node index.js`

### 4. Acceder al Portafolio
Abre tu navegador y visita la siguiente dirección:

`http://localhost:3000`

### 📁 Estructura del Proyecto
La estructura sigue un patrón estándar de Express/Handlebars para facilitar la navegación y el mantenimiento:

```portfolio-hbs/
├── public/                # Archivos estáticos (CSS, img, JS)
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── asuka.jpg
├── views/                 # Contiene todas las plantillas Handlebars
│   ├── layouts/           # Plantilla base (main.hbs)
│   ├── partials/          # Componentes reutilizables (header, footer, projectCard)
│   ├── 404.hbs            # Página de error
│   ├── about.hbs
│   ├── home.hbs
│   └── projects.hbs
├── index.js               # Archivo principal del servidor y la lógica de rutas
└── package.json           # Dependencias y metadatos del proyecto
