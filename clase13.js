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

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() <0.3
const realizaDeporte = () => Math.random() <0.4

const META = alfredo.peso - 3;
var dias = 0;

while (alfredo.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(alfredo)
  }
  if (realizaDeporte()){
    bajarDePeso(alfredo)
  }
  dias += 1;
}

console.log (`Pasaron ${dias} días hasta que ${alfredo.nombre} bajara 3 kilos`);
