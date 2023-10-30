# Información de incendios en Castilla y León

This is a work in progress project that shows the public information of fires in the region of Castilla y León (Spain). It presents a table with its details, where you can use different filters that will be saved. At the same time, it presents a map showing their geographical location, which also responds to the filters.

The next steps are: adding some more tests, adding more interactive features to the map and showing both the table and the map on full screen (in different pages) when clicking on them. 

## Tech

This project is built with React. It also uses MaterialUI library for some components and React-Leaflet for the map.
The state is managed with ContextAPI. 
The filters are saved in the local storage.
It uses the public Castilla y León API:  https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/console

### Frameworks and tools
- React.js (https://es.react.dev)
- React Testing Library (https://testing-library.com/docs/react-testing-library/intro/)
- MaterialUI (and its dependencies)
- Axios (https://axios-http.com/es/docs/intro)
- Nanoid (https://github.com/ai/nanoid)
- Leaflet (https://leafletjs.com/)
- React-leaflet (https://react-leaflet.js.org/)

### Prerrequisites
- Node LTS version
- Npm 10.2.1 or above

### Scripts
- npm start
Runs the app in the development mode.

- npm test
Test app using Jest and React Testing Library


