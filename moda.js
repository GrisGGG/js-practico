const list = [1,2,3,4,4,4,5,6,7,7,8,9];
const listaCount = {};

list.map(
    function(elemento){
        if (listaCount[elemento]) { //de acuerdo a la posición del elemento si ya sse encuentra en el objeto
            listaCount[elemento] += 1; //se sumara 1
        }else{
            listaCount[elemento] =1// si no esta se pondra un uno
        }
    }
)

//entries convierte el objeto en array
const lista1Array = Object.entries(listaCount).sort(function (a,b) {
    return a [1] - b [1];
});

const moda = lista1Array[lista1Array.length - 1];
