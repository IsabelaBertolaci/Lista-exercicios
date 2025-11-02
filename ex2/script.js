function verificarNumero() {
    let valor = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (valor > 0) {
        resultado.textContent = "Positivo";
    } else if (valor < 0) {
        resultado.textContent = "Negativo";
    } else if (valor === 0) {
        resultado.textContent = "Nulo";
    }
    else{
        resultado.textContent = "O valor inserido não é válido para verificação"
        alert("Insira um número válido")
    }
}