//Verifica se palavra é palindromo.
function vfrPalindromo(palavra) {
    //verifica se está vazio..
    if(!palavra) return "não é um palindromo!";

    //Separa, inverte e junta os elementos.
    return palavra.split().reverse().join(" ") == palavra;
}

//armazena valores nas variáveis.
let palavra2 = "'Anotaram a data da maratona'";
let palavra3 = 0;

//retorna os valores concatenados em uma mesma frase.
console.log(`A palavra ${palavra2} é ${vfrPalindromo(palavra2)} para palindromo!\n
Porém, ${palavra3} ${vfrPalindromo(palavra3)}\n`);

//Verifica se palavra é palindromo.
function vfrPalindromo2(novaPalavra) {
    //verifica se está vazio
    if(!novaPalavra) return "não existe palavra"

    //percorre palvra armazenda nas variaveis.
    for(let i = 0; i < novaPalavra.length / 2; i++) {
    
        //verifica se é palindromo.
        if(novaPalavra[i] !== novaPalavra[novaPalavra.length - 1 - i]) {
            return "não é um palindromo!";
        } 
    }
    return true;
}

//armazena palavras.
let palindromo1 = "'omissíssimo'";
let palindromo2 = "'bobo'";

//retorna valores concatenados em uma frase.
console.log(`A palavra ${palindromo1} é ${vfrPalindromo2(palindromo1)} para palindromo! \n
Já a palavra ${palindromo2}, ${vfrPalindromo2(palindromo2)}`);
