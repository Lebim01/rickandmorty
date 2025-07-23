## Getting Started

Primero, instalar deprendencias:

```bash
yarn install
```

Segundo, ambiente local:

```bash
npm run dev
# or
yarn dev
```

Mejoras que haria si tuviese mas tiempo:
- Cancelación de peticiones innecesarias, cuando el input de filtro cambia constantemente puede que a veces una petición de busqueda quede obsoleta si no se completo antes del siguiente cambio
- Redux persistencia (localstorage)
- Loading screen user friendly 
- Paginación de todos los personajes, el api tiene una limitación de cantidad de items de la funcion getAll, seria ideal implementar una paginacion para poder visualizar todas las paginas disponibles
- Filter UX, se puede mejorar la experiencia de interacción con el filtro si se agregan animaciones como desvanecimiento


Bug que me tope y como lo solucione:
1. Imagenes del api daban error 502, eso hacia que el diseño se quebrara asi que agregue un fallback de las imagenes y un cargando
2. Next.js estaba detectando un fallo de hidratación debido al cambio de layout entre desktop y mobile, tuve que usar dynamic ssr:false