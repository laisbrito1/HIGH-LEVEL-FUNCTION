//função de alta ordem traz outra função como parametro

function welcome(courname){
    return(studentname)=>{
        console.log(`Welcome ${studentname} to the class of ${courname}`);
    }
}

const displaywelcomefront = welcome('React-js');

const displaywelcomeback = welcome('node-js');


displaywelcomefront('Lais Brito');


//forEach é uma função que para por cada elemento que recebe uma função



const numeros=[40,32, 12,2,3,23]

//function comum:
function imprimir(elemento){
    console.log(`${elemento}`) //imprime o valor do array
}
numeros.forEach(imprimir)


//modo melhor de fazer:
numeros.forEach((elemento)=>{
    console.log (`${elemento}`);//imprime os valores dos elementos dentro da function forEach
});