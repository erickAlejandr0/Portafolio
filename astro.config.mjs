import { defineConfig } from 'astro/config';

// Si el repositorio se llama "<usuario>.github.io", elimina `base`.
export default defineConfig({
  site: 'https://erickalejandr0.github.io',
  base: '/Portafolio',
});
