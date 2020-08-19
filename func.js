function calcIdade() {
    var now = new Date(), ano = now.getFullYear();
    if ((6 <= now.getMonth()) && (19 < now.getDate())) {
        ano = ano - 2005;
    } else {
        ano = ano - 2004;
    }
    document.getElementById("ida").innerHTML = " " + ano + " anos";
}

function trocaText(){
    document.getElementById("bD").innerHTML = "Clique Aqui!";
}
function trocText(){
    document.getElementById("bD").innerHTML = "Baixar em PDF!";
}