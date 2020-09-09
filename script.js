//J Akkermans
//Software dev @da vinci


//CONSTANTEN voor vaste wardens 
const KLEIN = 5; //Prijs voor klein
const MIDDEL = 7; //Prijs voor middel
const GROOT = 10; //Prijs voor groot
const pizzaMeer = "pizza's" //Constant voro het veranderen van het woord pizza naar pizza's.

var countKlein = 0;     //aantal keer de knop is gedrukt (start op 0)
var countMiddel = 0;    //aantal keer de knop is gedrukt (start op 0)
var countGroot = 0;     //aantal keer de knop is gedrukt (start op 0)

var clicksPizzas = [0, 0, 0] //Array van 0 (3 buttons en dan op basis van id welke knop kan hij weten welke knop gedrukt is)
function pizzaCalc(id){ //ID parameter 
    clicksPizzas[id] += 1; //kijken welk id er op de knop zit meegegeven als parameter
    if(id === 0){ //kijken of id klopt bij de knop dus id 0 is de kleine knop. Dus staat binnen dit if statement de code voor knop 1 (klein)
        countKlein++ //kijken hoe veek er op de knop is gedrukt, per druk op de knop gaat de variable met 1 omhoog.
        if(countKlein == 2){ //Kijken of er meer dan 1 pizza is besteld, zo ja verander dan de tekst naar "Pizza's"
            document.getElementById("pizzaKlein").innerHTML = pizzaMeer //verander de span tekst naar "Pizza's"
        }
        var totaalKlein = countKlein*KLEIN; //Het eindbedrag van kleine pizza's berekenen
        document.getElementById("totaalPrijsKlein").innerHTML = totaalKlein + " Euro"; //Totaal prijs van kleine in html zetten.
        document.getElementById("totaalKlein").innerHTML = countKlein; //Totaal aantal keer een kleine pizza is aangedrukt.
    }
    else if (id === 1){ //Anders (else if) als id niet overeenkomt met knop 1 kijk of het knop 2 is (id 1)
        countMiddel++ //kijken hoe veek er op de knop is gedrukt, per druk op de knop gaat de variable met 1 omhoog.
        if(countMiddel == 2){
            document.getElementById("pizzaMiddel").innerHTML = pizzaMeer //verander de span tekst naar "Pizza's"
        }
        var totaalMiddel = countMiddel*MIDDEL;
        document.getElementById("totaalPrijsMiddel").innerHTML = totaalMiddel + " Euro"; //Totaal prijs van middelgrote in html zetten.
        document.getElementById("totaalMiddel").innerHTML = countMiddel; //Totaal aantal keer een middelgrote pizza is aangedrukt.
    }
    else if (id === 2){ //Anders (else if) als id niet overeenkomt met knop 1 of 2  kijk of het knop 3 is (id 2)
        countGroot++ //kijken hoe veek er op de knop is gedrukt, per druk op de knop gaat de variable met 1 omhoog.
        if(countGroot == 2){
            document.getElementById("pizzaGroot").innerHTML = pizzaMeer //verander de span tekst naar "Pizza's" 
        }
        var totaalGroot = countGroot*GROOT;
        document.getElementById("totaalPrijsGroot").innerHTML = totaalGroot + " Euro"; //Totaal prijs van middelgrote in html zetten.
        document.getElementById("totaalGroot").innerHTML = countGroot; //Totaal aantal keer een middelgrote pizza is aangedrukt.
    }
 
    var totaal = countKlein*KLEIN +countMiddel*MIDDEL + countGroot*GROOT; //totaal berekenen door het aantal keer een knop is gedrukt x zijn constante waarde een totaal te maken.
    document.getElementById("totaal").innerHTML = totaal + " Euro"; //Totaal in html zetten.
}
