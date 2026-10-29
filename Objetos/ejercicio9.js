let cliente = {nombre: "Laura Gómez", telefonos: ["3104567890", "6077241234"], direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }};
let clienteNuevo = {nombre: "Pedro Ruiz", telefonos: [] };

const mostrarFicha = (objeto, comprobar) => {
    console.log(`Nombre: ${objeto.nombre}`);
    console.log(`Telefonos: `);
    if(objeto.telefonos.length!= 0){
        for(let i=0; i<objeto.telefonos.length; i++){
            console.log(`${i+1}. ${objeto.telefonos[i]} `);
        }
    }else{
        console.log(`No tiene telefonos`)
    }
    if(comprobar === true){
        console.log(`Calle: ${objeto.direccion.calle}`);
        console.log(`Barrio: ${objeto.direccion.barrio}`);
    }
}

const existeDireccion = (objeto) => {
    if("direccion" in objeto){
        return true;
    }else{
        return false;
    }
}

const mostrarCiudad = (objeto) => {
    if("direccion" in objeto){
        console.log(`Ciudad: ${objeto.direccion.ciudad}`);
    }else{
        console.log(`Sin direccion`)
    }
}

let direccion = existeDireccion(cliente);
mostrarFicha(cliente, direccion);
mostrarCiudad(cliente);

let i=1;

let continuar = "si"
console.log(`Ingrese el numero de telefono: `);
while(true){
    continuar = continuar.toLowerCase();
    if(continuar == "si" || continuar == "s"){
        i++;
        let telefono = prompt("Ingrese el nuevo numero");
        cliente.telefonos[i] = telefono;
        console.log(`Agregado`)
        continuar = prompt(`Desea agregar otro numero (S/N?`);
    }else{
        break;
    }
}

let calle = prompt("Ingrese la calle: ");
cliente.direccion.calle = calle;
let barrio = prompt("Ingrese el barrio: ");
cliente.direccion.barrio = barrio;

direccion = existeDireccion(cliente);
console.log(`Actualizacion: `)
mostrarFicha(cliente, direccion);
mostrarCiudad(cliente);
direccion = existeDireccion(clienteNuevo)
mostrarFicha(clienteNuevo, direccion);
mostrarCiudad(clienteNuevo);