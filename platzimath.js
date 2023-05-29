function calcularPromedio(lista) {

    let sumList = 0;

    for (let i = 0; i < lista.length; i++) {
        sumList = sumList + lista[i];
    }

    const promedio = sumList / lista.length;
    return promedio
}

function calcularPromedioReduce(lista) {

    function sumElements(sumValue, newValue) {
        return sumValue + newValue
    }

    const sumList = lista.reduce(sumElements);

    const promedio = sumList / lista.length;
    console.log(promedio);
    return promedio
}

function calcularPromedioArrow(lista) {

    const sumElements = (sumValue, newValue) => sumValue + newValue;

    const sumList = lista.reduce(sumElements);

    const promedio = sumList / lista.length;
    console.log(promedio);
    return promedio
}

function esPar(lista) {
    return !(lista.length % 2)
}
function esImpar(lista) {
    return (lista.length % 2)
}

function calcularMediana(lista) {
    const listaSort = ordenarLista(lista);
    const listaEsPar = esPar(listaSort);
    if (listaEsPar) {
        const indexInferior = (lista.length / 2) - 1;
        const indexSuperior = (lista.length / 2)
        const listaMitades = [lista[indexInferior], lista[indexSuperior]]
        return calcularPromedio(listaMitades)
    } else {
        const indiceMedianaImpar = Math.floor(lista.length / 2);

        return listaSort[indiceMedianaImpar]
    }
}

function ordenarLista(listaDesordenada) {
    const lista = listaDesordenada.sort((a, b) => a - b);
    return lista
}
function ordenarListaBidim(listaDesordenada) {
    const lista = listaDesordenada.sort((a, b) => a[1] - b[1]);
    return lista
}

function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidim(listaArray);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaOrdenadaMaxNumber[0]
    // console.log(listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber)
    return console.log('La moda es ' + listaOrdenadaMaxNumber[0] + ' y se repite ' + listaOrdenadaMaxNumber[1] + ' veces')
    // return moda
}