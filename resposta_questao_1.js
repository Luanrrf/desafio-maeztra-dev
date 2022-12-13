function verificaOrdenacao (numero) {
    let numAnterior;
    let numAtual = 0;
    let crescente = true;
    let decrescente = true;

    if(typeof(numero) === 'number'){
        if(Number.isInteger(numero)) {
            const numeroString = numero.toString().split("");

            numeroString.forEach(element => {
                numAnterior = numAtual;
                numAtual = element;

                if(numAtual < numAnterior) {
                    crescente = false;
                } 
            })

            numAtual = numeroString[0];

            numeroString.forEach(element => {
                numAnterior = numAtual;
                numAtual = element;

                if(numAtual > numAnterior) {
                    decrescente = false;
                } 
            })

            if((crescente) || (decrescente)) return 'Está ordenado';
            else return 'Não está ordenado'
        }
        else return 'Esse número não é inteiro, por favor informe um valor inteiro';
    }
    else return "Isso não é um número, por favor informe um número";
}

console.log(verificaOrdenacao(12));
