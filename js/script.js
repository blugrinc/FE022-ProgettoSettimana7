"use strict";
/* Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
Tale interfaccia prevede due variabili d'istanza.
La prima variabile d'istanza e' definita come carica: number, e rappresenta il quantitativo di euro
disponibile per le chiamate.
La seconda variabile d'istanza e' definita come numeroChiamate: number, e rappresenta il numero di chiamate effettuate con
il cellulare.

Classe User che deve implementare l'interfaccia Smartphone e definire i seguenti metodi:
Un metodo definito come public ricarica(unaRicarica: number): void, che ricarica il telefonino.
Un metodo definito come public chiamata(minutiDurata: number): void,

Che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino.
Si assuma un costo di 0.20 euro per ogni minuto di chiamata,

Un metodo public numero404(): number, che restituisce il valore della carica disponibile.
Un metodo public getNumeroChiamate(): number, che restituisce il valore della variabile d'istanza numeroChiamate.

Infine, un metodo public azzeraChiamate(): void , che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.
Le istanze FirstUser-SecondUser-ThirdUser della classe User.

Provare i metodi e verificare
- il saldo residuo di ogni utente
- e quante chiamate sono state effettuate. */
class User {
    constructor(carica, numeroChiamate) {
        this.tariffa = 0.003; //centesimi al secondo , circa 0,20 al minuto 
        this.carica = carica,
            this.numeroChiamate = numeroChiamate; //inizializzando
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica -= minutiDurata * this.tariffa;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
;
let FirstUser = new User(15, 0);
let SecondUser = new User(2, 0);
let ThirdUser = new User(5, 0);
// ********************************************* PROFILO PRIMO UTENTE
let s1 = 0;
let m1 = 10;
let o1 = 0;
let cronometro1;
function timer1() {
    s1++;
    if (s1 == 60) {
        s1 = 0;
        m1++;
    }
    if (m1 == 60) {
        m1 = 0;
        o1++;
    }
}
;
function start1() {
    cronometro1 = setInterval(timer1, 1000);
}
function chiudiChiamata1() {
    clearInterval(cronometro1);
    s1 = 0;
    m1 = 0;
    o1 = 0;
}
;
// TASTO PER CHIAMARE 
let chiama1 = document.getElementById("chiama1");
chiama1 === null || chiama1 === void 0 ? void 0 : chiama1.addEventListener('click', () => {
    start1();
});
// TASTO PER CHIUDERE CHIAMATA
let chiudi1 = document.getElementById("chiudi1");
chiudi1 === null || chiudi1 === void 0 ? void 0 : chiudi1.addEventListener('click', () => {
    let trascorso = o1 * 60 + m1 * 60 + s1;
    FirstUser.chiamata(trascorso);
    let saldoResiduo1 = document.getElementById("credito1");
    saldoResiduo1.innerHTML =
        `<p>Costo chiamata: -${trascorso * 0.003}€ - <br> Residuo: ${FirstUser.numero404()}€ </p>`; //costo e credito residuo    
    chiudiChiamata1();
    let nChiamate1 = document.getElementById("nChiamate1");
    nChiamate1.innerHTML =
        `<p>N° Chiamate:${FirstUser.getNumeroChiamate()}</p>`;
});
function U1r10() {
    FirstUser.ricarica(10);
    let saldoResiduo1 = document.getElementById("credito1");
    saldoResiduo1.innerHTML =
        `<p> Ricarica 10€ effettuata <br> Credito residuo = ${FirstUser.numero404()}€ </p>`;
}
function U1r20() {
    FirstUser.ricarica(20);
    let saldoResiduo1 = document.getElementById("credito1");
    saldoResiduo1.innerHTML =
        `<p> Ricarica 20€ effettuata <br> Credito residuo = ${FirstUser.numero404()}€ </p>`;
}
function U1r50() {
    FirstUser.ricarica(50);
    let saldoResiduo1 = document.getElementById("credito1");
    saldoResiduo1.innerHTML =
        `<p> Ricarica 50€ effettuata <br> Credito residuo = ${FirstUser.numero404()}€ </p>`;
}
// ********************************************* PROFILO SECONDO UTENTE 
let s2 = 0;
let m2 = 2;
let o2 = 0;
let cronometro2;
function timer2() {
    s2++;
    if (s2 == 60) {
        s2 = 0;
        m2++;
    }
    if (m2 == 60) {
        m2 = 0;
        o2++;
    }
}
;
function start2() {
    cronometro2 = setInterval(timer2, 1000);
}
function chiudiChiamata2() {
    clearInterval(cronometro2);
    s2 = 0;
    m2 = 0;
    o2 = 0;
}
;
// TASTO PER CHIAMARE 
let chiama2 = document.getElementById("chiama2");
chiama2 === null || chiama2 === void 0 ? void 0 : chiama2.addEventListener('click', () => {
    start2();
});
// TASTO PER CHIUDERE
let chiudi2 = document.getElementById("chiudi2");
chiudi2 === null || chiudi2 === void 0 ? void 0 : chiudi2.addEventListener('click', () => {
    let trascorso = o2 * 60 + m2 * 60 + s2;
    SecondUser.chiamata(trascorso);
    let saldoResiduo2 = document.getElementById("credito2");
    saldoResiduo2.innerHTML =
        `<p>Costo chiamata: - ${trascorso * 0.003}€ - <br> Residuo: ${SecondUser.numero404()}€ </p>`; //costo e credito residuo
    chiudiChiamata2();
    let nChiamate2 = document.getElementById("nChiamate2");
    nChiamate2.innerHTML =
        `<p>N° Chiamate:${SecondUser.getNumeroChiamate()}</p>`;
});
function U2r10() {
    SecondUser.ricarica(10);
    let saldoResiduo2 = document.getElementById("credito2");
    saldoResiduo2.innerHTML =
        `<p> Ricarica 10€ effettuata <br> Credito residuo = ${SecondUser.numero404()}€ </p>`;
}
function U2r20() {
    SecondUser.ricarica(20);
    let saldoResiduo2 = document.getElementById("credito2");
    saldoResiduo2.innerHTML =
        `<p> Ricarica 20€ effettuata <br> Credito residuo = ${SecondUser.numero404()}€ </p>`;
}
function U2r50() {
    SecondUser.ricarica(50);
    let saldoResiduo2 = document.getElementById("credito2");
    saldoResiduo2.innerHTML =
        `<p> Ricarica 50€ effettuata <br> Credito residuo = ${SecondUser.numero404()}€ </p>`;
}
// *********************************************  PROFILO TERZO UTENTE 
let s3 = 0;
let m3 = 6;
let o3 = 0;
let cronometro3;
function timer3() {
    s3++;
    if (s3 == 60) {
        s3 = 0;
        m3++;
    }
    if (m3 == 60) {
        m3 = 0;
        o3++;
    }
}
;
function start3() {
    cronometro3 = setInterval(timer3, 1000);
}
function chiudiChiamata3() {
    clearInterval(cronometro3);
    s3 = 0;
    m3 = 0;
    o3 = 0;
}
;
// TASTO PER CHIAMARE 
let chiama3 = document.getElementById("chiama3");
chiama3 === null || chiama3 === void 0 ? void 0 : chiama3.addEventListener('click', () => {
    start3();
});
// TASTO PER CHIUDERE
let chiudi3 = document.getElementById("chiudi3");
chiudi3 === null || chiudi3 === void 0 ? void 0 : chiudi3.addEventListener('click', () => {
    let trascorso = o3 * 60 + m3 + 60 + s3;
    ThirdUser.chiamata(trascorso);
    let saldoResiduo3 = document.getElementById("credito3");
    saldoResiduo3.innerHTML =
        `<p>Costo chiamata: - ${trascorso * 0.003}€ - <br> Residuo: ${ThirdUser.numero404()}€ </p>`; //costo e credito residuo   
    chiudiChiamata3();
    let nChiamate3 = document.getElementById("nChiamate3");
    nChiamate3.innerHTML =
        `<p>N° Chiamate:${ThirdUser.getNumeroChiamate()}</p>`;
});
//FUNZIONE RICARICA
function U3r10() {
    ThirdUser.ricarica(10);
    let saldoResiduo3 = document.getElementById("credito3");
    saldoResiduo3.innerHTML =
        `<p> Ricarica 10€ effettuata <br> Credito residuo = ${ThirdUser.numero404()}€ </p>`;
}
function U3r20() {
    ThirdUser.ricarica(20);
    let saldoResiduo3 = document.getElementById("credito3");
    saldoResiduo3.innerHTML =
        `<p> Ricarica 20€ effettuata <br> Credito residuo = ${ThirdUser.numero404()}€ </p>`;
}
function U3r50() {
    ThirdUser.ricarica(50);
    let saldoResiduo3 = document.getElementById("credito3");
    saldoResiduo3.innerHTML =
        `<p> Ricarica 50€ effettuata <br> Credito residuo = ${ThirdUser.numero404()}€ </p>`;
}
// STAMPA OROLOGIO 
function orologio1() {
    let orologio1 = document.getElementById("time1");
    orologio1.innerHTML =
        `<p>Durata chiamata: <br> ${o1}:${m1}:${s1}</p>`;
}
;
setInterval(orologio1, 1000);
function orologio2() {
    let orologio2 = document.getElementById("time2");
    orologio2.innerHTML =
        `<p>Durata chiamata: <br> ${o2}:${m2}:${s2}</p>`;
}
;
setInterval(orologio2, 1000);
function orologio3() {
    let orologio3 = document.getElementById("time3");
    orologio3.innerHTML =
        `<p>Durata chiamata: <br> <p>${o3}:${m3}:${s3}</p>`;
}
;
orologio3();
setInterval(orologio3, 1000);
// MUOVERSI TRA LE PAGINE HTML
function UTENTE1() {
    window.location.href = "http://127.0.0.1:5500/UTENTE%201.html";
}
function UTENTE2() {
    window.location.href = "http://127.0.0.1:5500/UTENTE%202.html";
}
function UTENTE3() {
    window.location.href = "http://127.0.0.1:5500/UTENTE%203.html";
}
function home() {
    window.location.href = "http://127.0.0.1:5500/index.html";
}
