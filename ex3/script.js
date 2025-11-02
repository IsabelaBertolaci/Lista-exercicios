function verificarPrimo() {
  const n = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  // Verifica se o campo está vazio ou inválido
  if (isNaN(n)) {
    resultado.innerHTML = "⚠️ <span class='nao'>Insira um número na caixa de texto!</span>";
    return;
  }

  // Verifica se o número é primo
  let primo = true;
  if (n <= 1) {
    primo = false;
  } else {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        primo = false;
        break;
      }
    }
  }

  // Mostra o resultado
  if (primo) {
    resultado.innerHTML = "✅ <span class='sim'>Sim, o número é primo!</span>";
  } else {
    resultado.innerHTML = "❌ <span class='nao'>Não, o número não é primo.</span>";
  }
}


function voltar() {
  window.location.href = "../index.html"; 
}
