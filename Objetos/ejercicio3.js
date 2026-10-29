let producto = { nombre: "Morral", precio: 85000, stock: 12 };

let descuento = parseInt(prompt("Ingrese el descuento a aplicar: "));

const objetoNuevo = (objeto, descuento) => {
    let producto2 = {};
    producto2.nombre = objeto.nombre;
    producto2.precio = (objeto.precio - (objeto.precio*descuento/100));
    producto2.precioAnterior = objeto.precio;
    producto2.stock = objeto.stock;
    return producto2
}

let producto_2 = objetoNuevo(producto, descuento);
console.log(`Original: ${producto.nombre} | ${producto.precio} | ${producto.stock} unidades`);
console.log(`Final: ${producto_2.nombre} - ${producto_2.precio} (antes ${producto_2.precioAnterior}) - ${producto_2.stock} unidades `);