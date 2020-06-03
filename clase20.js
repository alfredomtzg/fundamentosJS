 // para definir un prototipo, se tiene que crear una funcion
 // la funcion se va a ejecutar cuando se cree una nueva persona con 'new'
 // 'new' es una palabra reservada del lenguaja de javascrip no se puede usa como funcion, variable, let, const,
 // "es una palabra que se usa para crear nuevo objetos dado un prototipo"
 function Persona(nombre, apellido,altura) {
   this.nombre = nombre;
   this.apellido = apellido;
   this.altura = altura;
 };
 Persona.prototype.saludar = function(){
   console.log (`hola me llamo ${this.nombre} ${this.apellido}`);
 };

 Persona.prototype.soyAlto = function (){
   if (this.altura >= altura) {
     console.log (`y soy alto`);
   }else {
     console.log (`y no soy alto`);
   }
 }
 var altura = 1.8;
 var alfredo = new Persona('Alfredo', 'Martinez',1.8);
 var ixchel = new Persona ('Ixchel', 'López', 1.5);
 var arturo = new Persona ('Arturo', 'Luna', 1.9);
