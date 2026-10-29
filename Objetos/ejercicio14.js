let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

let claves = Object.keys(inventario);

const totalUnidades = (objeto) => {
    let valores = Object.values(objeto);
    let suma = valores.reduce((acumulado, producto,) => acumulado + producto, 0);
    return suma;
}

const stockBajo = (objeto) => {
    let stock = Object.entries(objeto).filter((par) => par[1]>0 && par[1]<10);
    return stock;
}

const unirConComas = (lista) => {
    return lista.reduce((texto, elemento, indice) => {
        if (indice === 0) {
            return elemento;
        }

        return texto + ", " + elemento;
    }, "");
};

const formatearPares = (pares) => {
    let textos = pares.map((par) => `${par[0]} (${par[1]})`);

    return unirConComas(textos);
}

console.log(`Productos: ${claves.length}`);
console.log(`Unidades en total: ${totalUnidades(inventario)}`);
console.log(`Stock bajo: ${formatearPares(stockBajo(inventario))}`);

let agotado = Object.entries(inventario).filter((par) => par[1] === 0);

agotado.forEach((par) => {
    console.log(`Agotados: ${par[0]}`);
});