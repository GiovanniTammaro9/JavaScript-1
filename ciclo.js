let totale3 = 0;
const LimiteDelFor = 20;

for (let riga = 0; riga <= LimiteDelFor; riga = riga + 2) {
    if(riga % 2 == 0) {
        alert(riga);
    }
    totale3 = totale3 + riga;
}

console.log(totale3);