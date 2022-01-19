const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

//Para imrpimir nuestras variables como un objeto
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});

 function buttonPriceDiscount(){
     const inputPrice = document.getElementById("inputPrice");
     const priceValue = inputPrice.value;
     const inputDiscount = document.getElementById("inputDiscount");
     const priceDiscount = inputDiscount.value;

     const porcentajePrecioConDescuento = 100 - priceDiscount;
     const precioConDescuento = (priceValue * porcentajePrecioConDescuento)/100;

     const textResult = document.getElementById("Resultp")
     textResult.innerHTML = "Este es el precio " + precioConDescuento;
 }

 const coupons =[{
     name: "cupon de luz y amor",
     discount: 15
 },
 {
    name: "cupon de luz y amor",
    discount: 15
},
]