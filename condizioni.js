let temperatura = parseInt(prompt("Inserisci la temperatura:"));//dichiarazione variabile temperatura scelta dall'utente

console.log(temperatura);//stampa il valore della variabile

let commento;//dichiarazione variabile commento

switch (true) {

    case temperatura < -10:

        commento = "copriti..ancora ti raffreddi"

        break;//condizione variabile minore di -10


    case temperatura < 0:

         commento = "non è tanto il freddo quanto l’umidità"

        break;//condizione variabile minore di 0

    case temperatura < 20:

        commento = "non ci sono più le mezze stagioni"
    
         break;//condizione variabile minore di 20


    case temperatura < 30:

         commento = "mi dia una peroni sudata"

         break;//condizione variabile minore di 30


    case temperatura >= 30:

        commento = "lu mare, lu sole, lu ientu"

         break;//condizione variabile maggiore uguale di 30

}

console.log(commento);//stampa variabile 