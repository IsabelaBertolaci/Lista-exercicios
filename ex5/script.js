function calcular() {
    const m = parseInt(document.getElementById('m').value);
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);

    const c = m - (a + b); // idade do terceiro filho
    const maisVelho = Math.max(a, b, c);

    document.getElementById('resultado').textContent = maisVelho;
}
