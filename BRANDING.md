## Branding de EA Tech Company

Resumen práctico del diseño actual para uso de marca: colores, tipografías, logos/íconos y metadatos.

### Identidad
- Nombre: EA Tech Company
- Tono visual: neutro-profesional, uso de grises y negro con acentos verdes/azules; gradientes negro→gris.

### Logos e imágenes clave (en uso)
- Logo navegación / favicon / OG: https://i.imgur.com/p5QcCPf.png



### Paleta de colores (según uso real en Tailwind y CSS)
- Primario: Negro #000000; Gradiente negro→gris (grayscale Tailwind)
- Neutros (Tailwind gray):
  - gray-900 #111827, gray-800 #1F2937, gray-700 #374151, gray-600 #4B5563
    - gray-500 #6B7280, gray-400 #9CA3AF, gray-300 #D1D5DB, gray-200 #E5E7EB, gray-100 #F3F4F6, gray-50 #F9FAFB
    - Texto y fondos: White #FFFFFF; Backgrounds: #FFFFFF, gradientes a grises
    - Acentos en UI:
      - Verde (CTAs/precios): green-600 #16A34A, green-700 #15803D
        - Azul (links/botón ver más): blue-600 #2563EB
          - Rojo (etiquetas oferta): red-500 #EF4444, red-700 #B91C1C
            - Amarillo (icono curso BI): yellow-600 #CA8A04
              - Morado (icono SQL): purple-600 #9333EA
              - Legado de plantilla CRA en `App.css`:
                - Header: #282C34, Link: #61DAFB

                ### Tipografía
                - Sistema (por defecto):
                  - -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
                  - Recomendación (opcional): definir una familia titular (p. ej., Inter, Poppins o SF Pro) y declararla en Tailwind `theme.extend.fontFamily` para consistencia.

                  ### Componentes / estilo UI detectado
                  - Esquinas redondeadas: `rounded-xl`, `rounded-2xl`
                  - Sombra suave: `shadow-md`, `shadow-lg`
                  - Bordes sutiles: `border-gray-100/200/300`
                  - Gradientes: `bg-gradient-to-br from-black to-gray-600`
                  - Texto: `text-gray-700/800/900`, títulos con `font-bold`
                  - Botones de acción: verde (WhatsApp y precios), azul para acciones secundarias


                  ### Sugerencia de `tailwind.config.js` (opcional)
                  ```js
                  // Extender paleta y tipografías
                  module.exports = {
                    theme: {
                        extend: {
                              colors: {
                                      brand: {
                                                DEFAULT: '#111827', // base oscuro
                                                          light: '#374151',
                                                                  },
                                                                          accent: {
                                                                                    green: '#16A34A',
                                                                                              blue: '#2563EB',
                                                                                                      },
                                                                                                            },
                                                                                                                  fontFamily: {
                                                                                                                          sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
                                                                                                                                },
                                                                                                                                      borderRadius: { xl: '0.75rem', '2xl': '1rem' },
                                                                                                                                          },
                                                                                                                                            },
                                                                                                                                            }
                                                                                                                                            ```

                                                                                                                                            ### Do's / recomendaciones rápidas
                                                                                                                                            - Usar SIEMPRE el mismo logo (SVG/PNG) en navbar, footer y meta OG.
                                                                                                                                            - Mantener acento verde para llamadas a la acción y azul para enlaces.
                                                                                                                                            - Usar gradiente negro→gris para bloques destacados o íconos redondos.

                                                                                                                                            ### Don'ts
                                                                                                                                            - No mezclar múltiples versiones del logo ni hotlinks externos en producción.
                                                                                                                                            - Evitar nombres de archivos con espacios/acentos para íconos PWA.
