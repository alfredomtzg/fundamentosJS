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

obtenerPersonaje(1)
.then(function (personaje) {
  console.log(`El personaje 1 es ${personaje.name} y mi cumpleaños es ${personaje.birth_year}`)
})
.catch(onError)

// for (var i = 1; i < 11; i++) {
//   obtenerPersonaje(i)
// }
