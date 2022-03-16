const a = "soy un string";
const b = 15;
const c = true;
const arr = ["perro", "barrilete", true, 116, [15, 2, 14]];
const obj = {
    a: "comida",
    b: 18,
    c: 15,
    d: function(a, b) {
        console.log(a + b);
    },
};
const d = 19;

obj.d(1, 3);
obj.d(obj.c, obj.b);
obj.d(b, d);

console.log(arr[4][2]);

console.log(typeof obj.d);