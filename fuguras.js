//Código del cuadrado
console.group("Cuadrado");

//const ladoDelCuadrado =5;
//console.log('Cada lado del cuadrado mide:' + ladoDelCuadrado);

//const perimetroDelCuadrado = ladoDelCuadrado * 4;
//console.log('El perimetro del cuadrado es:' + ladoDelCuadrado);

//const areaDelCuadrado = ladoDelCuadrado * ladoDelCuadrado;
//console.log('El área del cuadrado es:' + ladoDelCuadrado);

console.groupEnd();

//código del triángulo

 console.group("Triángulo");
/*
const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const baseTriangulo =4;
console.log("Los lados del triángulo miden: " 
+ ladoTriangulo1 +" cm, " 
+ ladoTriangulo2 + " cm, "
+ baseTriangulo + " cm"
);

const alturaTrinagulo =5.5;
console.log("La altura del triángulo es de: " + alturaTrinagulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es de: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTrinagulo)/2;
console.log("El área del triángulo es de: " + areaTriangulo);
*/
console.groupEnd();


//Circulo
console.group("Circulo");
/*
const radioCirculo = 4;
console.log("El radio del circulo: " + radioCirculo);

const diametroCirculo = radioCirculo *2;
console.log("El diametro del circulo: " + diametroCirculo);
const pi = Math.PI;

const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es de: " + perimetroCirculo);

const areaDelCirculo = pi * (radioCirculo * radioCirculo);
*/
console.groupEnd();



function perimetroDelCuadrado(lado){
    return lado *4
}
function areaDelCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo (lado1,lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo (altura, base){
    return (base * altura)/2;
}
function diametroDelCirculo(radio){
    return radio *2 ;
}
const pi = Math.PI;
function perimetroCirculo(radio){
    const diametro =  diametroDelCirculo(radio);
    return diametro * pi;
}


/* */

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroDelCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaDelCuadrado(value);
    alert(area);
    
}

function perimetroTrianguloIsoseles(lado1, lado2, base){
    if(lado1 === lado2){
        const perimetrIsoseles = lado1 + lado2 + base;
        console.log(perimetrIsoseles);

    }else{
        console.log("Estas medidas no corresponden a un triágulo Isoseles");
    }
    
}

function areaTrianguloIsoseles(lado1, lado2, base){
    if(lado1 === lado2){
        const altura =  Math.sqrt(((lado1 * lado2) - ((base*base)/4)) )  ;
        console.log(altura);

        const area = (base * altura)/2;

    }else{
        console.log("Estas medidas no corresponden a un triágulo Isoseles");
    }
    
}

