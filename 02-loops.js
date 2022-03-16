//* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
//   instrucción

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let numeroInicial = 15;
let numeroFinal = 28;

for (let cosa = numeroInicial; cosa <= numeroFinal; cosa = cosa + 2) {
    console.log(cosa);
}