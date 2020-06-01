var alfredo ={
  nombre:'Alfredo',
  apellido:'Martinez',
  edad:28,
  altura: 168,
  peso: 80
}
var ixchel ={
  nombre: 'Ixchel',
  apellido: 'Blancas',
  edad:16,
  altura: 1.65,
  peso: 60
}
var amelia ={
  nombre: 'Amelia',
  apellido: 'García',
  edad:58,
  altura: 151,
  peso: 65
}
var personas = [alfredo,ixchel,amelia]

// para acceder al valor hay que poner la array con [] ejemplo: personas[0] y para un atributo es personas[0].altura /o personas[0]['altura']
for (var i = 0; i < personas.length; i++) {
  persona = personas [i]
  console.log(`${persona.nombre} mide ${persona.altura} cm`)

}
