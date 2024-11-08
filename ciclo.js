let totale3 = 0;
const LimiteDelFor = 20;

for (let riga = 0; riga <= LimiteDelFor; riga = riga + 2) {
    if(riga % 2 == 0) {
        console.log(riga);
        
    }
    
}

console.log(totale3);

let a;

do {
    a = prompt("Salve");

}while(a.length<5);

console.log("hai inserito una parola valida",a);