//* https://www.w3schools.com/js/js_array_methods.asp

let arr = ["perro", "gato", 15, true];
let arr2 = ["pera", "hamburguesa", 3345, true];

//*metodos:
//pop saca el último:
console.log(arr.pop()); //pop devuelve lo que sacó
console.log(arr);

//lo opuesto: push agrega al final:
console.log(arr2.push("papas fritas", "mayonesa")); // devuelve el LENGTH nuevo
console.log(arr2);

let arr3 = ["vaso", "celular", 45, false];

//splice: 3 parámetros: desde donde, cuantos, qué
arr3.splice(-2, 0, 'verde', 'colectivo')
console.log(arr3)

arr3.splice(1, 3) //con esto solo saco, porque no hay 3er param
console.log(arr3)

//slice: saca una parte y la convierte un nuevo array:
let arr4 = arr3.slice(1, 3) //posicion inicial, posicion final - no inclusive

console.log(arr4) //nuevo array creado con slice
console.log(arr3) //el arr 3 todavía existe