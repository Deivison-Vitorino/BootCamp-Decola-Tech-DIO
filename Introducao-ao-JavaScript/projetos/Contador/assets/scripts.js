let currentNumero = 0


const currentNumeroWrapper = document.getElementById('numero');

function somar() {
        currentNumero++;
        currentNumeroWrapper.innerHTML = currentNumero;
}


function subtrair() {
    currentNumero--;
    currentNumeroWrapper.innerHTML = currentNumero;
}
