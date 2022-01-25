

//const lista = parseInt(prompt("Ingresa tu array"));
//const lista1 = lista.sort();//Ordena el array

//const mitadLista = parseInt(lista1.length / 2);





function calcularMedia(lista){
    const sumaLista =  lista.reduce( 
        function (valorAcumuladao = 0, elementoActual){
            return valorAcumuladao + elementoActual;
        }
    )  
    const promedio = sumaLista / lista.length;
    return promedio; 
    }
function esPar(numerito){
    numerito.sort();
    console.log(numerito);
    const mitadLista = parseInt(numerito.length / 2);
    console.log(mitadLista + "mitad de la lista");

    let mediana;

    if(numerito.length % 2 === 0){
        const elemento1 = numerito[mitadLista];
        console.log(elemento1);
        const elemento2 = numerito[mitadLista - 1];
        console.log(elemento2);

        const promedio1y2 = calcularMedia([elemento1,elemento2]);
        console.log(promedio1y2);
        console.log("hello");
    }else{
        mediana = numerito[mitadLista ];
        console.log(mediana);
        console.log("heñy");

    }
}




