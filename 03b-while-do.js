let inicial = 30;

//primero chequea, después ejecuta, SI ES TRUE la condicion
console.log("while:");
while (inicial < 10) {
    inicial++;
    console.log(inicial);
}

//reasigno, no puedo redeclarar
inicial = 30;

//ejecuta al menos una vez, después chequea la condición
console.log("do while:");
do {
    inicial++;
    console.log(inicial);
} while (inicial < 10);

//https://i.redd.it/6wksqjmmyw321.jpg