var nombre = 'Alfredo', apellido = 'Martínez';
var nombreEnMayuscula = nombre.toUpperCase(); //Mayusculas
var apellidoEnMinusculas = apellido.toLowerCase(); //Minúsculas
var primeraLetraDelNombre = nombre.charAt(0); // Selecionar un caracter del string
var cantidadDeLetrasDelNombre = nombre.length;// cantidad de caracteres
var nombreCompleto = `${nombre.toLowerCase()} ${apellido.toUpperCase()}`; //concatenar para usa JS
var str = nombre.substr(4, 3);

var ultimaLetra = nombre.charAt(cantidadDeLetrasDelNombre -1);//concatenar normal
alert (' la Última letra es ' + ultimaLetra);
