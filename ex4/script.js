function calcularMedalhas() {
  const t1 = parseInt(document.getElementById("t1").value);
  const t2 = parseInt(document.getElementById("t2").value);
  const t3 = parseInt(document.getElementById("t3").value);

  if (isNaN(t1) || isNaN(t2) || isNaN(t3)) {
    alert("Por favor, insira os três tempos corretamente.");
    return;
  }

  const tempos = [
    { nadador: 1, tempo: t1 },
    { nadador: 2, tempo: t2 },
    { nadador: 3, tempo: t3 }
  ];

  tempos.sort((a, b) => a.tempo - b.tempo);

  const resultado = `
    🥇 Ouro: Nadador ${tempos[0].nadador}<br>
    🥈 Prata: Nadador ${tempos[1].nadador}<br>
    🥉 Bronze: Nadador ${tempos[2].nadador}
  `;

  document.getElementById("resultado").innerHTML = resultado;
}

function voltar() {
  window.location.href = "../index.html"; 
}