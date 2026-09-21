let temperatura = parseInt(prompt("Inserisci una temperatura:"));//dichiarazione variabile temperatura scelta dall'utente

console.log(temperatura);//stampa il valore della variabile

if (temperatura < -10) {

    console.log(`copriti…ancora ti raffreddi`);

}//condizione variabile minore di -10

else if (temperatura < 0) {

console.log(`non è tanto il freddo quanto l’umidità`);

}//condizione variabile minore di 0

else if (temperatura < 20) {

console.log(`non ci sono più le mezze stagioni`);

}//condizione variabile minore di 20

else if (temperatura < 30) {


console.log(`mi dia una peroni sudata`);

}//condizione variabile minore di 30

else if (temperatura >= 30) {


console.log(`lu mare, lu sole, lu ientu`);

}//condizione variabile maggiore uguale di 30

