function calcIdade() {
    var now = new Date(), ano = now.getFullYear();
    var mes = now.getMonth() + 1;
    if ((6 >= mes) && (19 <= now.getDate())) {
        ano = ano - 2005;
    } else {
        ano = ano - 2004;
    }
    document.getElementById("ida").innerHTML = " " + ano + " anos";
    document.getElementById("dat").innerHTML = now.getDate() + " / " + mes + " / " + now.getFullYear();
}

function trocaText(){
    document.getElementById("bD").innerHTML = "Clique Aqui!";
}
function trocText(){
    document.getElementById("bD").innerHTML = "Baixar em PDF!";
}

function horario(){
    var hor = new Date();
    document.getElementById("hora").innerHTML = hor.getHours() + ":" + hor.getMinutes() + ":" + hor.getSeconds();
    var i = 1;
	var timer = setInterval(function() { horario() }, 1000);
}