var contador = 0;

const LLUEVE = () => Math.random() <0.25;

do {
  contador ++
} while(!LLUEVE())

if (contador === 1){
  console.log (`fui a ver si llovía ${contador} vez`);
} else{
  console.log (`fui a ver si llovía ${contador} veces`);
}

// console.log (`fui a ver si llovía ${contador} veces`);
