let pedido = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00pm" } };
let copia1 = pedido;
copia1.total = 45000;
let copia2 = { cliente: pedido.cliente, total: pedido.total, entrega: pedido.entrega};
copia2.cliente = "Luis";
copia2.entrega.barrio = "La Playa";
console.log(pedido.total, pedido.cliente, pedido.entrega.barrio);

let pedido1 = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00pm" } };

const crearCopia = (objeto) => {
    let copia = {};
    copia.cliente = objeto.cliente;
    copia.total = objeto.total;
    copia.entrega = {};
    copia.entrega.barrio = objeto.entrega.barrio;
    copia.entrega.hora = objeto.entrega.hora;
    return copia;
}

let copia3 = crearCopia(pedido1)

let barrio = prompt("Ingrese un nuevo barrio: ");
copia3.entrega.barrio = barrio;

console.log(`Cliente: ${copia3.cliente}`);
console.log(`Total: ${copia3.total}`);
for(let clave in copia3.entrega){
    console.log(`${clave}: ${copia3.entrega[clave]}`)
}

console.log(`Cliente: ${pedido1.cliente}`);
console.log(`Total: ${pedido1.total}`);
for(let clave in pedido1.entrega){
    console.log(`${clave}: ${pedido1.entrega[clave]}`)
}