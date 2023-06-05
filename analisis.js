//console.log(salarios)

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
    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const nuevoSalario = ultimoSalario*(medianaPorcentajeCrecimiento+1)
    return nuevoSalario
}