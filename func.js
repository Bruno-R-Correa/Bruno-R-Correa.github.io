function calcIdade() {
    var now = new Date(), ano = now.getFullYear();
    var mes = now.getMonth() + 1;
    if ((mes <= 6) && (19 <= now.getDate())) {
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

function dark(){
    // if(localStorage.getItem("modo") === "lightMode") localStorage.setItem("modo","darkMode");
    // else localStorage.setItem("modo","lightMode");
    // document.body.className = localStorage.getItem("modo");
    let f = document.getElementsByClassName("lightMode");
    if(f.length != -1)
    {
        let i = 0;
        while (i < f.length)
        {
            let j = (f[i].className.length) - 10, classes = "";
            for(let a = 0; a < j;a++) classes += f[i].className[a];
            f[i].className = classes + " darkMode";
            console.log("i = ",i, "f = ",f[i].className);
        }
    }
    f = document.getElementsByClassName("darkMode");
    if( f.length != -1)
    {
        let i = 0;
        while (i < f.length)
        {
                let j = (f[i].className.length) - 9, classes = "";
                for(let a = 0;a<j;a++) classes += f[i].className[a];
                f[i].className = classes + " lightMode";
        }
    }
}