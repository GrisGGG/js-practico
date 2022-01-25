const list = [1,2,3,4,4,4,5,6,7,7,8,9];
const listaCount = {};

list.map(
    function(elemento){
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] =1
        }
    }
)

const lista1Array = Object.entries(listaCount);