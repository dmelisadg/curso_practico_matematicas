//console.log(salarios)
// Análisis por persona
function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}
function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salariosPersona = trabajos.map(function (elemento) {
        return elemento.salario;
    })
    const medianaSalarios = PlatziMath.calcularMediana(salariosPersona)
    return medianaSalarios
}
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];
    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterior = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeCrecimiento = crecimiento / salarioAnterior;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)
    //console.log(porcentajesCrecimiento, medianaPorcentajeCrecimiento);
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const nuevoSalario = ultimoSalario * (medianaPorcentajeCrecimiento + 1)
    return nuevoSalario
}

// Análisis por empresa
const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }

}

console.log({ empresas })

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe')
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dió salarios ese año')
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
        const empresaYears = Object.keys(empresas[nombre])
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre, year)
        });
        //console.log({ listaMedianaYears })

        let porcentajesCrecimiento = [];
        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioAnterior = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioAnterior;
            const porcentajeCrecimiento = crecimiento / salarioAnterior;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
        const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
        const ultimoSalario = listaMedianaYears[listaMedianaYears.length - 1];
        const ultimaMediana = ultimoSalario * (medianaPorcentajeCrecimiento + 1)
        return ultimaMediana
    }
}

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name))
    const medianaTodos = PlatziMath.calcularMediana(listaMedianas);
    //console.log({listaMedianas})
    return medianaTodos
}

function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name))
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas)

    const cantidad = listaMedianas.length /10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    
    const medianaTop10 = PlatziMath.calcularMediana(top10)
    return medianaTop10
}