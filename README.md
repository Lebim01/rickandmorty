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
- Paginación de listado, en ese caso el listado es pequeño por lo que no hay problemas de memoria o de red, pero en el caso de ser mas grande lo ideal seria una UX con paginación, quizas agregar un infinite scroll o flechas
- Filter UX, se puede mejorar la experiencia de interacción con el filtro si se agregan animaciones como desvanecimiento