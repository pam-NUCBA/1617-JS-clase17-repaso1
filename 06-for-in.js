//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

let comidas = {
    carnivoro: 'hamburguesa',
    infantil: 'sandwich',
    liquido: 'gaseosa',
    vegano: 'arroz yamani',
    postre: 'pavlova',
    desayuno: 'tostado y cafe'
}

for (const comida in comidas) {
    console.log(comida) //nos trae los key! no los valores

    //pero yo quiero el valor!
    console.log(comidas[comida]) //los convertimos en strings!
        //ahora quiero usar ambos!
    console.log(`la comida de ${comida} es: ${comidas[comida]}`)

}