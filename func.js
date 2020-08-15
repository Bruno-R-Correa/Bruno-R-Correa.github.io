function calcIdade() {
    var age = 0;
    var now = new Date();
    var ano = now.getFullYear();
    if ((6 <= now.getMonth()) && (19 < now.getDate())) {
        age = ano - 2005;
    }  else age = ano - 2004;
    console.log(age);
}
