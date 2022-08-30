let isim= prompt("isminizi giriniz")

let prt =document.querySelector("#myName")

prt.innerHTML = `${isim}`;


function showTime (){

    var date = new Date().toLocaleString("tr-TR");
    document.querySelector("#myClock").innerHTML=date;
}

setInterval(showTime,1000)