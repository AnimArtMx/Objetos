let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };
let agotados = [];

const restarInventarios = (objeto, producto, cantidad) => {
    objeto[producto] -= cantidad;
}

while(true){
    let producto = prompt("Ingrese el producto: ");
    producto = producto.toLowerCase();
    if(producto != "fin"){
        if(producto in inventario){
            if(inventario[producto] != 0){
                let cantidad = parseInt(prompt("Ingrese la cantidad: "));
                    restarInventarios(inventario, producto, cantidad);
            }else{
                agotados.push(producto);
                console.log(`Inventario insuficiente`);
            }
        }else{
            console.log(`El producto no existe en el inventario`);
        }
    }else{
        break;
    }
}

let i=1;
for(let producto in inventario){
    console.log(`${i}. ${producto}: ${inventario[producto]}`);
    i++;
}

if(agotados.length != 0){
    console.log(`Productos agotados: `);
    for(let j=0; j<agotados.length; j++){
        console.log(`${agotados[j]}`);
    }
}