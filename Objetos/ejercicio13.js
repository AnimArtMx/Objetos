let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };

const Promedio = (objeto) => {
    let valores = Object.values(objeto);
    let suma = 0;
    for(let i=0; i<valores.length; i++){
        suma += valores[i];
    }
    return suma/valores.length;
}

const Mejor = (objeto) =>{
    let claves = Object.keys(objeto);
    let materia = "";
    let mejor = -1;
    for(let i=0; i<claves.length; i++){
        if(objeto[claves[i]]>mejor){
            mejor = objeto[claves[i]];
            materia = claves[i];
        }
    }
    return materia;
}

const mejorar = (objeto) =>{
    let claves = Object.keys(objeto);
    let Mejorar = claves.filter((materia => objeto[materia] < 3.5));
    return Mejorar;
}

Object.keys(notas).forEach((materia) => {
    console.log(`${materia} : ${notas[materia]}`);
})

let promedio = Promedio(notas);
console.log(`Promedio: ${promedio.toFixed(1)}`);
let mejorMateria = Mejor(notas);
console.log(`Mejor materia: ${mejorMateria}`);
let materiasMejorar = mejorar(notas);
for(let i=0; i<materiasMejorar.length; i++){
    console.log(`Por mejorar: ${materiasMejorar[i]}`);
}