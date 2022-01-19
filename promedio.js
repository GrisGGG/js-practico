/*const lista1 = [
    100, 200, 300, 500
];

let sumaLista = 0;
for(let i = 0; i < lista1.length; i++){
    sumaLista = sumaLista + lista1[i];
}*/

function calcularMedia(lista){
    const sumaLista =  lista.reduce(
        function (valorAcumuladao = 0, elementoActual){
            return valorAcumuladao + elementoActual;
        }
    )  
    const promedio = sumaLista / lista.length;
    return promedio; 
    }
  



