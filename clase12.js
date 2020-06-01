var alfredo ={
  nombre:'Alfredo',
  apellido:'Martinez',
  edad:28,
  peso: 80
}
var ixchel ={
  nombre: 'Ixchel',
  apellido: 'Blancas',
  edad:16,
  peso: 60
}

console.log(`Al inicio del año ${alfredo.nombre} pesa ${alfredo.peso} kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;


for (var i = 1; i <=DIAS_DEL_ANO; i++) {
    var random = Math.random();
    if (random <0.25){
      aumentarDePeso(alfredo);
      // aumenta de peso
    } else if (random < 0.5){
      bajarDePeso(alfredo);
      // Adelgazar
    }
}
console.log (`Al final del año ${alfredo.nombre} pesa ${alfredo.peso.toFixed(1)} kg`);
