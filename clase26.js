const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
// para llamar a jQuery  se tiene que poner $.get, el primero parametro es url y el segunfo es el crossDomain:true despues viene la funcion
const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain:true};

$.get(lukeUrl,opts, function (luke) {
  console.log(`hola soy ${luke.name} y mi cumpleaños es ${luke.birth_year}`);
});
