function invertir(objeto) {
    let resultado = {};
    Object.entries(objeto).forEach(([clave, valor]) => {
        resultado[valor] = clave;
  });
  return resultado;
}

let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
let ciudadesPorCodigo = invertir(codigos);

let codigoBusqueda = prompt("Código:").toUpperCase();
while (codigoBusqueda !== "FIN") {
    if (codigoBusqueda in ciudadesPorCodigo) {
    console.log(codigoBusqueda + ": " + ciudadesPorCodigo[codigoBusqueda]);
  } else {
      console.log("No hay ciudad con el código " + codigoBusqueda);
    }
    codigoBusqueda = prompt("Código:").toUpperCase();
}

function invertirAgrupando(objeto) {
  let resultado = {};
  Object.entries(objeto).forEach(([clave, valor]) => {
    if (valor in resultado) {
        resultado[valor].push(clave);
    } else {
      resultado[valor] = [clave];
    }
});
return resultado;
}

const unirConComas = (lista) => {
    return lista.reduce((texto, elemento, indice) => {
        if (indice === 0) {
            return elemento;
        }

        return texto + ", " + elemento;
    }, "");
};

let zonas = { centro: "A", laplaya: "B", pabloVI: "A" };
let barriosPorZona = invertirAgrupando(zonas);

console.log("Zonas agrupadas:");
Object.entries(barriosPorZona).forEach(([zona, barrios]) => {
    console.log(zona + ": " + unirConComas(barrios));
});