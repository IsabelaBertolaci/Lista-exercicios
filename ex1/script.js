function Calculo() {
    const valorTabuada = document.querySelector("#Tabuada").value;
    let multi = "";
    const resultado = document.querySelector(".valor");

    // Limpa o conteúdo anterior
    resultado.innerHTML = "";

    // Gera a nova tabuada
    for (let i = 1; i <= 10; i++) {
        let multi = i * valorTabuada;
        resultado.innerHTML += `${valorTabuada} × ${i} = ${multi} <br>`;
    }
}

function voltar() {
  window.location.href = "../index.html"; 
}