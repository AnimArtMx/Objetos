let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
let mejor = 0;
let mejorMateria = "";
let mejorarMateria = "";

const Promedio = (objeto) => {
    let j = 0;
    let suma = 0;
    for(let materia in objeto){
        suma += objeto[materia];
        j++;
    }
    return suma/j;
}

const Mejor = (objeto, mejor) =>{
    let Mejor = "";
    for(let materia in objeto){
        if(objeto[materia]>mejor){
            mejor = objeto[materia];
            Mejor = materia;
        }
    }
    return Mejor;
}

const mejorar = (objeto) =>{
    let Mejorar = [];
    for(let materia in objeto){
        if(objeto[materia]<3.5){
            Mejorar.push(materia);
        }
    }
    return Mejorar;
}

for(let materia in notas){
    console.log(`${materia} : ${notas[materia]}`);
}

let promedio = Promedio(notas);
console.log(`Promedio: ${promedio.toFixed(1)}`);
mejorMateria = Mejor(notas, mejor);
console.log(`Mejor materia: ${mejorMateria}`);
let materiasMejorar = mejorar(notas);
for(let i=0; i<materiasMejorar.length; i++){
    console.log(`Por mejorar: ${materiasMejorar[i]}`);
}