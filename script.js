const klein = 5;
const middel = 7;
const groot = 10;

var countKlein = 0;
var countMiddel = 0;
var countGroot = 0;

function pizzaKlein(){
    if(countKlein > 0){
        document.getElementById("pizzaKlein").innerHTML = "pizza's"
    }

    countKlein++;
    totalKlein = countKlein*klein

    document.getElementById("klein").innerHTML = countKlein;
    document.getElementById("totalKlein").innerHTML = totalKlein + " Euro";
}

function pizzaMiddel(){
    if(countMiddel > 0){
        document.getElementById("pizzaMiddel").innerHTML = "pizza's"
    }

    countMiddel++;
    totalMiddel = countMiddel*middel
    console.log(countMiddel);
    document.getElementById("middel").innerHTML = countMiddel;
    document.getElementById("totalMiddel").innerHTML = totalMiddel + " Euro";
}

function pizzaGroot(){
    countGroot++;
    totalGroot = countGroot*groot
    console.log(countGroot);
    document.getElementById("groot").innerHTML = countGroot;
    document.getElementById("totalGroot").innerHTML = totalGroot + " Euro";
}

