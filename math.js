console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado
  }
}
console.log(
  {
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
  }
);
console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: (lado1 + lado2 + base),
    area: (base * altura) / 2
  }
}

function calcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn('Este no es un triángulo isosceles')
  } else {
    const h = Math.sqrt(lado1 ** 2 - (base ** 2) / 4)
    return h
  }
  
}
console.log(
  {
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    perimetroTriangulo,
    areaTriangulo
  }
);
console.groupEnd('Triangulo')

console.group('circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = Math.PI * (radioCirculo ** 2);

console.log({
  radioCirculo,
  diametroCirculo,
  circunferencia,
  areaCirculo
})
function calcularCirculo(radio) {
  return {
    circunferencia: Math.PI * radio * 2,
    area: Math.PI * radio ** 2
  }
}

console.groupEnd('circulo')

