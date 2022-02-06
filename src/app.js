const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const data = new Date();

    const horarioMinutosSegundos = zeroFill(data.getHours()) + ' : ' + zeroFill(data.getMinutes()) + ' : ' + zeroFill(data.getSeconds());

    document.getElementById('relogio').innerHTML = horarioMinutosSegundos;
}, 1000)