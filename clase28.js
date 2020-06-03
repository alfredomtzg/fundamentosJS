const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
// para llamar a jQuery  se tiene que poner $.get, el primero parametro es url y el segunfo es el crossDomain:true despues viene la funcion

const opts = { crossDomain:true};



function obtenerPersonaje(id, callback) {

  let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $.get(url,opts, function (persona) {
    console.log(`hola soy ${persona.name} y mi cumpleaños es ${persona.birth_year}`)

    if (callback){
      callback()
    }
  })

}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5)

      })

    })

  })

})

// for (var i = 1; i < 11; i++) {
//   obtenerPersonaje(i)
// }
