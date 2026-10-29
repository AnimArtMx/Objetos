let conteo = {};
let frase = prompt("Ingrese la frase: ");
let palabras = frase.toLowerCase().split(" ");

const consultarPalabra = (objeto, palabra) => {
    if(palabra in objeto){
        return true
    }else{
        return false
    }
}

const palabraRepetida = (objeto) =>{
    let cantidad = 0;
    let palabra = "";
    for(let repetida in objeto){
        if(objeto[repetida]>cantidad){
            cantidad = objeto[repetida];
            palabra = repetida;
        }
    }
    return palabra;
}

const cantidadPalabras = (objeto) => {
    let i=0;
    for(let palabra in objeto){
        i++;
    }
    return i;
}

for(let i=0; i<palabras.length; i++){
    let consulta = consultarPalabra(conteo, palabras[i]);
    if(consulta === true){
        conteo[palabras[i]] += 1;
    }else {
        conteo[palabras[i]] = 1;
    }
}

let canPalabras = cantidadPalabras(conteo);
let masRepetida = palabraRepetida(conteo)

for(let palabra in conteo){
    console.log(`${palabra}: ${conteo[palabra]}`);
}
console.log(`Cantidad total de palabras: ${canPalabras}`);
console.log(`Palabra mas repetida: ${masRepetida}`);