## Getting Started

#### Primero, instalar deprendencias:

```bash
yarn install
```

#### Segundo, ambiente local:

Levantar api

```bash
yarn mock:api
```

Ejecutar frontend

```bash
yarn dev
```
## Testing

```bash
yarn test
```

## Notas del desarrollador

### Lo que mas me gusto del desarrollo

es crear la logica de mapear items del api, me parece una parte muuy satisfactoria de ver en desarrollo, tanto la parte de diseñar el acomodo de los items para que se vean bien en diferentes resoluciones


### Mejoras que haria si tuviese mas tiempo:

- Cancelación de peticiones innecesarias, cuando el input de filtro cambia constantemente puede que a veces una petición de busqueda quede obsoleta si no se completo antes del siguiente cambio
- Redux persistencia (localstorage)
- Loading screen user friendly 
- Paginación de todos los personajes, el api tiene una limitación de cantidad de items de la funcion getAll, seria ideal implementar una paginacion para poder visualizar todas las paginas disponibles
- Filter UX, se puede mejorar la experiencia de interacción con el filtro si se agregan animaciones como desvanecimiento
- Para agregar el soporte de SSR y evitar que la primera carga de la pantalla venga vacia, se pueden obtener las cabeceras del browser para saber si iniciar la carga desde el layout de mobile o de desktop antes de que llegue al cliente a obtener las dimensiones del dispositivo


### Bug que me tope y como lo solucione:

1. Imagenes del api daban error 502, eso hacia que el diseño se quebrara asi que agregue un fallback de las imagenes y un cargando
2. Next.js estaba detectando un fallo de hidratación debido al cambio de layout entre desktop y mobile, tuve que usar dynamic ssr:false
