
function calculaFormasDistintas (numeroPessoas) {
    let i;
    let resultado = 1;
    for(i = 0; numeroPessoas > 0; numeroPessoas--) {
        resultado = resultado * numeroPessoas;
    }
    return resultado;
}

console.log(calculaFormasDistintas(5));