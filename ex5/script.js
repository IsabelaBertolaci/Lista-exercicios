function calcular() {
    const m = parseInt(document.getElementById('m').value);
    const f1 = parseInt(document.getElementById('f1').value);
    const f2 = parseInt(document.getElementById('f2').value);

    if (isNaN(m) || isNaN(f1) || isNaN(f2)){
        alert("Insira números em todas as caixas de texto")
    }
    else{
    const f3 = m - (f1 + f2); // idade do terceiro filho
    const maisVelho = Math.max(f1, f2, f3);

    document.getElementById('resultado').textContent = maisVelho + " anos" ;
    }
}

function voltar() {
  window.location.href = "../index.html"; 
}