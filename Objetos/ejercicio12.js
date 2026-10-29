let a = { nombre: "Morral", precio: 85000 };
let b = { nombre: "Morral", precio: 85000 };
const comparar = (objeto, objeto2) => {
    if(contar(objeto) != contar(objeto2)){
        return false;
    }
    for(let clave in objeto){
        if(!(clave in objeto2)){
            return false
        }else if(objeto[clave] !== objeto2[clave]){
            return false
        }
    }
    return true
}

const contar = (objeto) => {
    let j = 0;
    for(let clave in objeto){
        j++;
    }
    return j
}

let c = a;
let d = { nombre: a.nombre, precio: 70000 };
let e = {nombre: a.nombre}
let f = {precio: a.precio, nombre:a.nombre};

let comparacion = comparar(a, c);
console.log(`Caso 1: `);
console.log(comparacion);

comparacion = comparar(d, a);
console.log(`Caso 2: `);
console.log(comparacion);

comparacion = comparar(a, e);
console.log(`Caso 3`);
console.log(comparacion);

comparacion = comparar(f, a);
console.log(`Caso 4`);
console.log(comparacion);