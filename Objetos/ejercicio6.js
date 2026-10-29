let glosario = {
 api: "Conjunto de reglas para que dos programas se comuniquen.",
 servidor: "Programa que recibe peticiones y devuelve respuestas.",
 ruta: "Dirección a la que llega una petición, como /productos.",
 middleware: "Función que se ejecuta entre la petición y la respuesta.",
 endpoint: "Combinación de un método HTTP y una ruta."
};

const agregarTermino = (objeto, termino, significado) => {
    objeto[termino] = significado
}

const consultarTermino = (objeto, termino) => {
    if(termino in objeto){
        return true;
    }else{
        return false;
    }
}

while (true){
    let termino = prompt("Ingrese el termino a consultar: ");
    termino = termino.toLowerCase();
    if(termino!= "fin"){
        let busqueda = consultarTermino(glosario, termino);
        if(busqueda === true){
            console.log(`${[termino]}: ${glosario[termino]}`);
        }else{
            console.log("Termino no encontrado");
            let agregar = prompt("Desea agregar el termino (S/N)?  ");
            agregar = agregar.toLowerCase();
            if(agregar == "si" || agregar == "s"){
                let significado = prompt("Ingrese el significado del termino: ");
                agregarTermino(glosario, termino, significado);
                console.log("Agregado");
            }
        }
    }else{
        break;
    }
}
let i = 1;
for(let termino in glosario){
    console.log(`${i}. ${[termino]}: ${glosario[termino]} `);
    i++;
}