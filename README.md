# Laboratorio de aplicaciones web cliente 🛒

Proyecto de e-commerce creado como parte del programa de estudio de la carrera
**Tecnicatura Superior en Desarrollo de Software**.

<p align="left">
  <a href="https://kikdras.github.io/laboratorio-web-app/" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-Ver_App-brightgreen?style=for-the-badge&logo=githubpages" alt="Live Demo">
  </a>
  <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fkikdras.github.io%2Flaboratorio-web-app%2F" target="_blank">
    <img src="https://img.shields.io/badge/w3c-validation-yellow?style=for-the-badge&logo=w3c" alt="W3C HTML Validation">
  </a>
  <a href="https://www.docker.com/" target="_blank">
    <img src="https://img.shields.io/badge/Docker-Compatible-blue?style=for-the-badge&logo=docker" alt="Docker Compatible">
  </a>
</p>

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando:

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white" alt="Sass">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white" alt="Redux">
</p>

---

## 🎯 Objetivos del Proyecto

La consigna principal fue la creación de un e-commerce funcional aplicando la
lógica de negocio necesaria y respetando los siguientes requisitos.

### 📋 Requisitos y Lógica de Negocio

- [x] Diseño responsivo y consistente.
- [x] Respeto de políticas de privacidad.
- [x] Consumir productos de una API y listarlos.
- [x] Abrir un modal para mostrar el producto seleccionado en mayor detalle.
- [x] Agregar el producto seleccionado al carrito de compras.
- [x] Almacenar y actualizar el carrito en el `localStorage`.
- [x] Permitir el acceso al carrito desde la barra de navegación.
- [x] Realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) a los
      productos del carrito.
- [x] Botón "Finalizar Compra" que limpia el carrito y el `localStorage`.
- [x] Botón "Vaciar" que limpia el carrito y el `localStorage`.
- [x] Barra de búsqueda por nombre con filtrado en tiempo real.

---

## 🚀 Despliegue y Ejecución

Puedes acceder a este proyecto de dos maneras:

### 1. GitHub Pages (Versión Live)

El proyecto está desplegado y disponible para su uso inmediato en la siguiente
URL:

[**Ver la aplicación en vivo**](https://kikdras.github.io/laboratorio-web-app/)

### 2. Ejecución local con Docker

Este método te permite ejecutar la aplicación en tu propia máquina usando un
contenedor de Docker, lo cual asegura un entorno de ejecución idéntico y
controlado.

#### Prerrequisitos

- Tener [Docker](https://www.docker.com/get-started) instalado en tu sistema.
- Tener [Git](https://git-scm.com/) instalado.

#### Pasos para la ejecución

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/KiKDraS/laboratorio-web-app.git](https://github.com/KiKDraS/laboratorio-web-app.git)
    cd laboratorio-web-app
    ```

2.  **Construir la imagen de Docker:** El siguiente comando leerá el
    `Dockerfile` y construirá la imagen necesaria.

    ```bash
    docker build -t laboratorio-web-app .
    ```

3.  **Ejecutar el contenedor:** Este comando creará y ejecutará un contenedor,
    haciendo la aplicación accesible en tu navegador local.

    ```bash
    docker run -d -p 8080:80 --name shopping-cart laboratorio-web-app
    ```

4.  **Acceder a la aplicación:** Abre tu navegador web y visita
    `http://localhost:8080` para ver la aplicación en funcionamiento.

5.  **Detener el contenedor:** Este comando creará y ejecutará un contenedor,
    haciendo la aplicación accesible en tu navegador local.

    ```bash
    docker stop shopping-cart
    ```

6.  **Remover el contenedor:** Este comando creará y ejecutará un contenedor,
    haciendo la aplicación accesible en tu navegador local.

    ```bash
    docker rm shopping-cart
    ```
