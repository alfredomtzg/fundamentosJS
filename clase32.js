const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
// para llamar a jQuery  se tiene que poner $.get, el primero parametro es url y el segunfo es el crossDomain:true despues viene la funcion

const opts = { crossDomain:true};



function obtenerPersonaje(id) {
  return new Promise((resolve, reject)=>{
    let url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url,opts,function (data) {
      resolve(data)
    })
    .fail(()=>reject (id))
  })
}
function onError(id) {
  console.log(`sucedio un error al obtener el personjae ${id}`);
}

async function obtenerPersonajes() {
  var ids =[1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id=> obtenerPersonaje(id))
    try {
      var personajes = await Promise.all(promesas)
      console.log(personajes);
    } catch (id) {
      onError(id)
    } finally {

    }

}

obtenerPersonajes()















// obtenerPersonaje(1)
// .then( personaje => {
//   console.log(`El personaje 1 es ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)
// return obtenerPersonaje(2)
// })
// .then(personaje =>{
//   console.log(`El personaje 2 es ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`);
//
//   return obtenerPersonaje(3)
// })
// .then(personaje =>{
//   console.log(`El personaje 3 es ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`);
//
//   return obtenerPersonaje(4)
// })
// .then(personaje =>{
//   console.log(`El personaje 4 es ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`);
//
//   return obtenerPersonaje(5)
// })
// .then(personaje =>{
//   console.log(`El personaje 5 es ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`);
//
// })
// .catch(onError)

// for (var i = 1; i < 11; i++) {
//   obtenerPersonaje(i)
// }
