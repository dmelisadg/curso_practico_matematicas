const button = document.querySelector('#calcular');
const buttonCoupon = document.querySelector('#couponDiscount');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const finalPrice = document.querySelector('#result');
const inputCoupon = document.querySelector('#coupon');

button.addEventListener('click', calcularPrecioDescuento);
buttonCoupon.addEventListener('click', calcularPrecioDescuentoCupon);

// const couponObj ={
//     'primera_compra':15,
//     'black_friday':25,
//     'cupon1':10,
//     'cupon2':20,
//     'cupon3':30
// } ;

const couponList = [];
couponList.push({
    name: 'primera_compra',
    discount: 15
})
couponList.push({
    name: 'black_friday',
    discount: 25
})


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

function calcularPrecioDescuentoCupon() {
    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value

    if (!price || !coupon) {
        finalPrice.innerText = 'Por favor llena los campos correspondientes'
        return;
    }

    let discount;
    // con arrays de objetos
    function findCoupon(couponElement) {
        return couponElement.name == coupon
    }

    const isCouponValid = couponList.find(findCoupon)

    if (isCouponValid) {
        discount = isCouponValid.discount
    } else {
        finalPrice.innerText = 'Cupón no válido!'
        return;
    }

    // con objetos
    // if (couponObj[coupon]) {
    //     discount = couponObj[coupon];
    // } else {
    //     finalPrice.innerText = 'Cupón no válido!'
    //    return;
    // }

    // hardcodeado
    // if (coupon == 'primera_compra') {
    //     discount = 15;
    // } else if( coupon == 'black_friday'){
    //     discount =20;
    // }else{
    //     finalPrice.innerText = 'Cupón no válido!'
    //     return;
    // }

    const newPrice = (price * (100 - discount)) / 100;
    finalPrice.innerText = 'El nuevo precio con descuento es $' + newPrice

}

const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

function solution(users, id) {
    const idUser = id;
    const arrayUser = users; 
    function findUser(userElement) {
        return userElement.id == idUser
    }
    const isUser = arrayUser.find(findUser);
    if (isUser) {
        return isUser.name
    } else {
        return false;
    }


}