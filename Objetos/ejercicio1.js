persona={};

const verificacionEdad = (num) => {
    if(num<18){
        return false;
    }else{
        return true;
    }
}

let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese la edad: "));
let mayorDeEdad = verificacionEdad(edad);
let ficha = parseInt(prompt("Ingrese el numero de ficha: "));
let programa = prompt("Ingrese el nombre del programa: ");

persona [nombre] = nombre;
persona [edad] = edad;
if(mayorDeEdad === true){
    persona.mayorDeEdad = "Si";
}else{
    persona.mayorDeEdad = "No";
}
persona [ficha] = ficha;
persona[programa] = programa;

console.log(`----Ficha del Aprendiz----`);
console.log(`Nombre: ${persona[nombre]}`);
console.log(`Edad: ${persona[edad]}`);
console.log(`Ficha: ${persona[ficha]}`);
console.log(`Programa: ${persona[programa]}`);
console.log(`Mayor de edad: ${persona.mayorDeEdad}`);