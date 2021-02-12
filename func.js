function calcIdade() {
    var now = new Date(), ano = now.getFullYear();
    var mes = now.getMonth() + 1;
    if ((6 >= mes) && (19 <= now.getDate())) {
        ano = ano - 2005;
    } else {
        ano = ano - 2004;
    }
    document.getElementById("ida").innerHTML = " " + ano + " anos";
    if(mes<10) mes = "0" + mes;
    let dia = now.getDate();
    if(dia<10) dia = "0" + dia;
    document.getElementById("dat").innerHTML = dia + " / " + mes + " / " + now.getFullYear();
}

function trocaText(){
    document.getElementById("bD").innerHTML = "Clique Aqui!";
}
function trocText(){
    document.getElementById("bD").innerHTML = "Baixar em PDF!";
}

function horario(){
    var hor = new Date();
    let hour = hor.getHours();
    if(hour<10) hour = "0" + hour;
    let min = hor.getMinutes();
    if(min<10) min = "0" + min;
    let sec = hor.getSeconds();
    if(sec<10) sec = "0" + sec;
    document.getElementById("hora").innerHTML = hour + ":" + min + ":" + sec;
    var i = 1;
	var timer = setInterval(() => horario() , 1000);
}