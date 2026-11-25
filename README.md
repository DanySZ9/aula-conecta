# Aula Conecta

Estrategias para mejorar la participación estudiantil.

Sitio del proyecto Aula Conecta: un modelo de intervención que combina estrategias
psicopedagógicas, aprendizaje colaborativo y Blooket para mejorar la participación,
la motivación y la integración de los estudiantes.

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Formulario de contacto (MockAPI)

1. En [mockapi.io](https://mockapi.io) crea un proyecto y un recurso llamado `contacts`.
2. Define los campos `name`, `institution`, `email`, `message` y `createdAt` (el `id` es automático).
3. Copia `.env.example` como `.env` y pega la URL del recurso en `VITE_API_URL`.
4. Reinicia `npm run dev`. Al publicar, define también `VITE_API_URL` en el hosting antes de compilar.

La URL es visible en el navegador y cualquiera que la tenga puede leer los registros:
MockAPI sirve para demostraciones, no para guardar datos personales reales.

## Video promocional

Guarda el archivo como `public/video-promocional.mp4` (MP4, H.264). Mientras no exista,
la sección muestra el aviso "Video disponible próximamente".

## Logo e iconos

- `public/logo.svg`: logo completo, vectorial y con fondo transparente.
- `public/favicon.svg`: isotipo, usado también en el encabezado y el pie de página.
- `public/favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`: iconos.
- `public/og-image.png`: imagen para compartir en redes.
