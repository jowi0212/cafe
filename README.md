# jowiscr — sitio estático para GitHub Pages

Este paquete contiene una recreación estática de la landing page de jowiscr.wordpress.com.

## Cómo publicarlo en GitHub Pages

1. Descomprime este ZIP.
2. Crea un repositorio en GitHub o abre uno existente.
3. Sube estos archivos a la raíz del repositorio: `index.html`, `styles.css`, `script.js` y `.nojekyll`.
4. En GitHub, ve a **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Escoge la rama `main` y la carpeta `/root`.
7. Guarda los cambios.

GitHub Pages publicará el sitio en una URL similar a `https://usuario.github.io/repositorio/`.

## Notas

- El sitio no requiere build, Node.js ni dependencias locales.
- Las fuentes se cargan desde Google Fonts para reproducir el estilo tipográfico de la página original.
- El botón mantiene el enlace original al formulario de Google.
