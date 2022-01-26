//helpers
const salaryMex = mexico.map(
    function (person) {
        return person.salary;
    }
);

const salaryListSorted = salaryMex.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

//**************Calculadora de Mediana General */
function mediana(lista) {
    const mitadLista = parseInt(lista.length / 2);

    if(lista % 2 === 0){
        const elemento1 =  lista[mitadLista] ;
        const elemento2 = lista[mitadLista - 1];
        const medianaN = (elemento1 + elemento2) / 2;
        return medianaN;
    }else{
        const mediana2 = lista[mitadLista];
        return mediana2;
    }
};

/***************Mediana del TOP 10%  */
const spliceStart = (salaryListSorted.length * 90) / 100;
const spliceCount = salaryListSorted.length - spliceStart;

const salariosTop10 = salaryListSorted.splice(spliceStart, spliceCount) //Para cortar un array y guardarlo en un nuevo array

console.log(salariosTop10);

const medianaGeneralMex = mediana(salaryListSorted);
const salariosMexTop10 = mediana(salariosTop10);

console.log({medianaGeneralMex,salariosMexTop10 });