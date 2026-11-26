// Edita este archivo para cambiar los datos personales del sitio.
// Deja un campo vacío ('') para ocultarlo.

export const site = {
  name: 'Erick Bellido',
  title: 'Erick Bellido, desarrollador de software',
  description:
    'Portafolio de Erick Bellido, desarrollador de software en Panamá: backend y full stack con Python y TypeScript, arquitectura en AWS e IA aplicada. Proyectos: Panalogix y Sistema de Verificación Documental.',
  // Texto de la insignia del inicio. Vacío = no se muestra.
  availability: 'Disponible desde enero de 2027',
  links: {
    github: 'https://github.com/erickAlejandr0',
    email: 'e.alejandro1705@gmail.com',
    linkedin: 'https://www.linkedin.com/in/erick-bellido',
    // Para mostrar un botón de CV, copia el PDF a /public (por ejemplo cv.pdf) y escribe 'cv.pdf'.
    cv: '',
  },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Construye una URL interna respetando el `base` de astro.config.mjs. */
export const href = (path = '') => `${base}/${path.replace(/^\//, '')}`;
