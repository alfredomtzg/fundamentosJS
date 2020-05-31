var nombre = 'Alfredo';//Variable Global, se ejecuta en todos los function
function imprimirNombreEnMayusculas (n)//variable local, sólo se ejecuta en la function
{
  n = n.toUpperCase(); //pueden existir variables globales y locales con el mismo nombre
  console.log (n);
}
imprimirNombreEnMayusculas(nombre);
imprimirNombreEnMayusculas('porfiro');
imprimirNombreEnMayusculas('brenda');
imprimirNombreEnMayusculas('alice');
