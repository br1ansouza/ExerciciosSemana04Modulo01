function calcularNumeros(numeroUm, numeroDois) {
    var somaNotas = (numeroUm + numeroDois)
    return somaNotas
}

function execForm(event) {

    event.preventDefault()

    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)

    alert(calcularNumeros(numero1, numero2).toFixed(2))
}

document
        .getElementById('calculadora')
        .addEventListener('submit', execForm)