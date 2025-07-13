
// funcion que retorna un string
function hello_world(){
return 'Hola Mundo';
}

// Print
console.log(hello_world());

// Funcion que retorna un numero
function get_sum(a,b){
 return a+b;
}
// Print
console.log(get_sum(1,2));

function calculator(a,b,operator){
    let result;
    switch (operator) {
        case '+':
            result=a+b;
            break;
        case '-':
            result=a-b;
            break;
        case '*':
            result=a*b;
            break;
        case '/':
            result=a/b;
            break;
    
        default:
            throw new Error('Operador Invalido');
    }

    return result;
}

//ejecucion de la calculadora
let result=calculator(2,3,'*');
console.log('Resultado de la operación calculadora '+result);

//ocurrencias
function countOcurrences(str,char){
    let count=0;
    for (let index = 0; index < str.length; index++) {
        if(str[index]===char){
            count++;
        }
    }
    return count;
}

console.log('ocurrencia: '+ countOcurrences("Holamundoo",'o'));

//Esta es otra forma de hacer las ocurrencias con lambdas
let ocurrencia=(str,char)=> str.split(char).length-1;

console.log(ocurrencia('hola mundo','o'));


// Encuentra el numero maximo en un arreglo

function findMaxNumber(arr){
    return Math.max(...arr);
}

arreglo=[1,2,4,5,8,24,31,3,7,9,43];

console.log(findMaxNumber(arreglo));

// tambien se puede hacer de la siguiente manera 
function findmax(array){
    let max=array[0];
    for (let index = 0; index < array.length; index++) {
        if(array[index]>max){
            max=array[index];
        }
        
    }
    return max;
}

console.log(findmax(arreglo));


//En esta clase haremos el Title Case

function title_case(string) {
    const words=string.toLowerCase().split(' ');

    for (let index = 0; index < words.length; index++) {
        words[index]=words[index][0].toUpperCase()+words[index].slice(1);
    }
    return words.join(' ');
}

console.log(title_case('este archivo es title case'));

//funcion de reverse string
function reverse_string(str){
    return str.split(' ').reverse().join(' ');
}

console.log(reverse_string('este es un string que se trabajara en reversa'));

//Otra solución es la siguiente.

const reversa=(str)=>str.split(' ').reverse().join(' ');

console.log(reversa('este es otra forma de reversa'));

//Una ultima forma mas 
function reversed(string){
    let reser='';
    for (let index = string.length-1; index>=0; index--) {
        reser += string[index];
        
    }
    return reser;
}

//probemos esta otra solución

console.log(reversed('probemos esta otra solucion'));

