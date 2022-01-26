function calcularMedia(lista){
    const sumaLista =  lista.reduce( 
        function (valorAcumuladao = 0, elementoActual){
            return valorAcumuladao + elementoActual;
        }
    )  
    const promedio = sumaLista / lista.length;
    return promedio; 
    }

function mediana(lista){
    lista.sort(function (a,b) {
        return a - b;
    }
    

    );//ordena el array
    console.log(lista);
    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if(lista.length % 2 === 0){
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];

        const promedio1y2 = calcularMedia([elemento1,elemento2]);
        console.log(promedio1y2);
    }else{
        mediana = lista[mitadLista ];
        console.log(mediana);
    }
}




