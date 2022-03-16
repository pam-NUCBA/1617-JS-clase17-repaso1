for (let i = 0; i <= 10;) {
    i++;
    console.log(i);
}

//qué pasaría? bucle infinitooooo (no lo corran)
for (let i = 0; i > 10; i++) {
    console.log(i);
}

//como lo soluciono?
for (let i = 0; i > 10; i--) {
    console.log(i);
}