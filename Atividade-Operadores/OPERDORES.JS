//Função principal, ''if'' verifica se numeros são vazios
function comparaNumero(numero1, numero2) {
    if(!numero1 || !numero2) return "Por favor, insira valores válidos. Somente números.";
    
    //Concatena ''fraseP1'' com ''fraseP2'' das funções a baixo
    const fraseP1 = criaFrase1(numero1, numero2);
    const fraseP2 = criaFrase2(numero1, numero2);
    return `${fraseP1} ${fraseP2}`;
}

//Armazena valores na frase 1
function criaFrase1(numero1, numero2) {
    let frase1 = `Os números ${numero1} e ${numero2}`;
    let iguais = "Não";
    //compara ''numero1'' e ''numero2'' e armazena valor vazio na variável ''iguais''
    if(numero1 === numero2){
        iguais = "";
    }
    return `${frase1} ${iguais} são iguais.`;
}

//Soma valores e armazena string ''menos'' se valor menor que 15 e30
function criaFrase2(numero1, numero2) {
    const soma = numero1 + numero2;
    compara15 = "menos";
    compara30 = "menos";

    //limita valor em 15 e atribui string ''mais''
    if(soma > 15 ) {
        compara15 = "mais";
    }
    
    //limita valor em 30 e atribui string ''mais''
    if(soma > 30 ) {
        compara30 = 'mais';
    }

    //output com valores tratados
    return `A soma totaliza ${soma}, sendo ${compara15} que 15 e ${compara30} que 30 `;

}

//chama a operação
console.log(comparaNumero(25, 70));