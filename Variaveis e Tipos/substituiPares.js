//função irá transformar todos os números pares de um array em 0.
function substPares(array) {
    //Verifica se array é vaio
    if(!array.length) return console.log(-1);

        //Armazena os números pares.
        const numImpar = (numbers) => numbers !== 0;
        //Armazena os números impares.
        const numPar = (numbers) => numbers % 2 === 0;

        //Percorrendo array
        for(let i = 0; i < array.length; i++) {

            //Modifica todos os pares para 0.
            if(numPar(array[i]) && numImpar(array[i])) {
                console.log(`${array[i]} modificado para 0`);
                array[i] = 0;
                //Retorna números impares.
            }   else if (!numPar(array[i])) {
                    console.log(`Número é 0.`);
                    
            }

        }
    
    //Mostrando o array.  
    console.log(array);
}

//Variaveis armazena os valores dos arrays.
let numbers = [1, 3, 4, 6, 80, 33, 23, 90];
let numberEmpty = [];

//Chama a função substpares.
substPares(numbers);
substPares(numberEmpty);
