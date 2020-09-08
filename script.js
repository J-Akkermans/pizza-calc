const klein = 5;
const middel = 7;
const groot = 10;


var countKlein = 0;
var countMiddel = 0;
var countGroot = 0;

var clicksPizzas = [0, 0, 0]
function pizzaCalc(id){
    clicksPizzas[id] += 1;
    if(id === 0){
        countKlein++
        var totaalKlein = countKlein*klein;
        console.log("ID = 0" +  " " +  countKlein + " " + totaalKlein)
    }
    else if (id === 1){
        countMiddel++
        var totaalMiddel = countMiddel*middel;
        console.log("ID = 1" +  " " +  countMiddel + " " + totaalMiddel)
    }
    else if (id === 2){
        countGroot++
        var totaalGroot = countGroot*groot;
        console.log("ID = 2" +  " " +  countGroot + " " + totaalGroot)
    }
 
    console.log(countKlein*klein +countMiddel*middel + countGroot*groot);

}
