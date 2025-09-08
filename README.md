# Modak Clone

Este proyecto es una réplica del sitio web de Modak ([modakmakers.com](https://modakmakers.com/)), desarrollada con React, Vite y TypeScript. El objetivo principal es servir como un caso de estudio práctico para la implementación de arquitecturas de frontend modernas, escalables y de alto rendimiento.

## 🚀 Acerca del Proyecto

El propósito de este clon es aplicar y demostrar un conjunto de principios de arquitectura de software y metodologías de diseño en un contexto real. Se enfoca en:

-   **Arquitectura Limpia (Clean Architecture):** Separación estricta de intereses para desacoplar la lógica de la UI de la lógica de negocio.
-   **Atomic Design:** Construcción de una biblioteca de componentes UI modular, reutilizable y consistente.
-   **MVVM (Model-View-ViewModel):** Un patrón para organizar la lógica de estado y la obtención de datos de manera eficiente.
-   **Rendimiento y Optimización:** Implementación de las mejores prácticas para asegurar tiempos de carga rápidos y una experiencia de usuario fluida.

---

## 🏛️ Descripción Arquitectónica

La aplicación sigue una arquitectura híbrida que combina varios patrones modernos para lograr mantenibilidad y escalabilidad.

-   **Clean Architecture (adaptada a Frontend):** La estructura del proyecto está dividida en capas (`app`, `core`, `features`, `pages`, `ui`) para aislar responsabilidades.
-   **Atomic Design:** Los componentes de la UI están organizados por complejidad (`atoms`, `molecules`, `organisms`, `templates`), promoviendo la reutilización y el desarrollo basado en un sistema de diseño.
-   **MVVM:** Los custom hooks actúan como `ViewModels`, conectando los componentes (`Views`) con la lógica de datos (`Models`) gestionada por Tanstack Query.

---

## 💻 Stack Tecnológico

-   **Framework:** [React 19](https://react.dev/)
-   **Bundler:** [Vite](https://vitejs.dev/)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [Material UI](https://mui.com/) (para componentes base)
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Gestión de Datos y Estado Asíncrono:** [Tanstack Query](https://tanstack.com/query/latest)

---

## 🛠️ Primeros Pasos (Getting Started)

Sigue estos pasos para levantar el entorno de desarrollo local.

### Prerrequisitos

-   Node.js (v18 o superior)
-   npm, pnpm o yarn

### Instalación

1.  **Clona el repositorio (o inicia tu proyecto):**
    ```bash
    # Si estás clonando desde un repo
    git clone https://tu-repositorio.git
    cd modak-clone
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique).

---

## 📜 Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
-   `npm run build`: Compila la aplicación para producción en la carpeta `/dist`.
-   `npm run lint`: Ejecuta el linter (ESLint) para analizar el código en busca de errores.
-   `npm run preview`: Sirve localmente el build de producción para previsualización.

---

## 📁 Estructura de Carpetas

La estructura del proyecto está diseñada para la escalabilidad y la separación de intereses.