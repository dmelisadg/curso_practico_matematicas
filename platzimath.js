const PlatziMath = {
    
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {

    let sumList = 0;

    for (let i = 0; i < lista.length; i++) {
        sumList = sumList + lista[i];
    }

    const promedio = sumList / lista.length;
    return promedio
}

PlatziMath.calcularPromedioReduce = function calcularPromedioReduce(lista) {

    function sumElements(sumValue, newValue) {
        return sumValue + newValue
    }

    const sumList = lista.reduce(sumElements);

    const promedio = sumList / lista.length;
    console.log(promedio);
    return promedio
}

PlatziMath.calcularPromedioArrow = function calcularPromedioArrow(lista) {

    const sumElements = (sumValue, newValue) => sumValue + newValue;

    const sumList = lista.reduce(sumElements);

    const promedio = sumList / lista.length;
    console.log(promedio);
    return promedio
}

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2)
}
PlatziMath.esImpar = function esImpar(lista) {
    return (lista.length % 2)
}

PlatziMath.calcularMediana = function calcularMediana(lista) {
    const listaSort = PlatziMath.ordenarLista(lista);
    const listaEsPar = PlatziMath.esPar(listaSort);
    if (listaEsPar) {
        const indexInferior = (lista.length / 2) - 1;
        const indexSuperior = (lista.length / 2)
        const listaMitades = [lista[indexInferior], lista[indexSuperior]]
        return PlatziMath.calcularPromedio(listaMitades)
    } else {
        const indiceMedianaImpar = Math.floor(lista.length / 2);

        return listaSort[indiceMedianaImpar]
    }
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    const lista = listaDesordenada.sort((a, b) => a - b);
    return lista
}
PlatziMath.ordenarListaBidim = function ordenarListaBidim(listaDesordenada) {
    const lista = listaDesordenada.sort((a, b) => a[1] - b[1]);
    return lista
}

PlatziMath.calcularModa = function calcularModa(lista) {
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
    const listaOrdenada = PlatziMath.ordenarListaBidim(listaArray);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaOrdenadaMaxNumber[0]
    console.log(listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber)
    return console.log('La moda es ' + listaOrdenadaMaxNumber[0] + ' y se repite ' + listaOrdenadaMaxNumber[1] + ' veces')
    // return moda
}

const obj = {
    123: 'Melisa DG',
    456: 'Daniela Z'
}

function solution(obj) {
    const objArray = Object.entries(obj)
    let a = [];
    objArray.forEach(element => {
        a.push(
            {
                id: element[0],
                name: element[1]
            })
    })
    return a
}