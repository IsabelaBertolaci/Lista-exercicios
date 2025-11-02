function verificarPrimo() {
    const n = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    let primo = true;

      if (isNaN(n) || n <= 1) {
        primo = false;
      } else {
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) {
            primo = false;
            break;
          }
        }
      }

      if (primo) {
        resultado.innerHTML = "✅ <span class='sim'>S!</span>";
      } else {
        resultado.innerHTML = "❌ <span class='nao'>N.</span>";
      }
    }
