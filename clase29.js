const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
// para llamar a jQuery  se tiene que poner $.get, el primero parametro es url y el segunfo es el crossDomain:true despues viene la funcion

const opts = { crossDomain:true};



function obtenerPersonaje(id, callback) {

  let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url,opts, callback).fail(function () {
    console.log(`sucedio un error. No se puede mostrar el personaje `);
  })

}

obtenerPersonaje (1, function (personaje) {
    console.log(`hola soy ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)

    obtenerPersonaje (2, function (personaje) {
        console.log(`hola soy ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)

        obtenerPersonaje (3, function (personaje) {
            console.log(`hola soy ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)

            obtenerPersonaje (4, function (personaje) {
                console.log(`hola soy ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)

                obtenerPersonaje (5, function (personaje) {
                    console.log(`hola soy ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)

                    obtenerPersonaje (6, function (personaje) {
                        console.log(`hola soy ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)
                    })
                })
            })
        })
    })
})
// for (var i = 1; i < 11; i++) {
//   obtenerPersonaje(i)
// }
