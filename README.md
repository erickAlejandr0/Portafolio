# Portafolio de Erick Bellido

Sitio hecho con [Astro](https://astro.build). Estático, sin dependencias de servidor.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321/Portafolio/
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Dónde editar el contenido

| Qué | Archivo |
|---|---|
| Nombre, insignia de disponibilidad, enlaces de contacto, CV | `src/data/site.ts` |
| Inicio: otros proyectos, herramientas, trayectoria | `src/pages/index.astro` |
| Páginas de proyecto | `src/pages/proyectos/` |
| Colores y tipografía | `src/styles/global.css` (variables en `:root`) |
| Capturas de Panalogix | `src/assets/panalogix/` |

## Despliegue en GitHub Pages

1. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
2. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`.
3. El sitio queda en `https://erickalejandr0.github.io/Portafolio/`.

`astro.config.mjs` define `site` y `base`. Si el repositorio se renombra a `<usuario>.github.io`, elimina `base`.

GitHub Pages en cuentas gratuitas solo funciona con repositorios públicos.
