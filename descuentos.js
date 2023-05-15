const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const finalPrice = document.querySelector('#result')
button.addEventListener('click', calcularPrecioDescuento);

function calcularPrecioDescuento() {
    const price = Number(inputPrice.value)
    const discount = Number(inputDiscount.value)

    if (!price || !discount) {
        finalPrice.innerText = 'Por favor llena los campos correspondientes'
        return;
    }
    if (discount > 100) {
        finalPrice.innerText = 'No puedes tener un descuento mayor al 100%'
        return;
    }
    const newPrice = (price * (100 - discount)) / 100;
    finalPrice.innerText = 'El nuevo precio con descuento es $' + newPrice

}