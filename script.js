function agradecimento() {
    var agora = new Date()
    var h = agora.getHours()
    var msg = window.document.getElementById('msg')


if (h >= 6 && h < 12 ) {
        //bom dia
        msg.innerHTML = `Obrigado e tenha um bom dia!`

    } else if (h >= 12 && h < 18 ) {
        //boa tarde
        msg.innerHTML = `Obrigado e tenha uma boa tarde!`
        
    } else {
        //boa noite
        msg.innerHTML = `Obrigado e tenha uma boa noite`
    }
}

function calcular() {
    var totalconta = document.getElementById('vconta').value;
    var taxaservico = document.getElementById('atendimento').value;
    var npessoas = document.getElementById('npessoas').value;

    if (totalconta === "" || isNaN(totalconta) || isNaN(npessoas)) {
        alert("[ ERROR ] : Digite valor válido!");
        return;
        }

    var gorjeta = (totalconta * taxaservico);
    var vpp = (parseFloat(totalconta) + parseFloat(gorjeta)) / npessoas;
    var valortotal = parseInt(gorjeta) + parseInt(totalconta);

    vpp = vpp.toFixed(2);
    gorjeta = gorjeta.toFixed(2);
    valortotal = valortotal.toFixed(2);

    document.getElementById('vporpes').innerHTML = vpp
    document.getElementById('gorj').innerHTML = gorjeta
    document.getElementById('vfin').innerHTML = valortotal

}