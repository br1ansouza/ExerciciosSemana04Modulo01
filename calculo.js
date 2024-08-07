//console.log(“Script funcionando“)

function gerarResultado(numeroUm, numeroDois) {
    var somaNotas = (numeroUm + numeroDois)
    return somaNotas
}

function execForm(event) {

    event.preventDefault()

    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)

    var resultado = gerarResultado(numero1, numero2).toFixed(2);

    
    document.getElementById('txt-resultado').innerText = 'Resultado: ' + resultado;
}

document.getElementById('calculadora').addEventListener('submit', execForm);
