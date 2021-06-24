class Pracownik {
    constructor(id, nazwa, godziny, stawka) {
        this.id = id;
        this.nazwa = nazwa;
        this.godziny = godziny;
        this.stawka = stawka;
    }

    get wyplata() {
        return this.liczWyplate();
    }

    liczWyplate() {
        return( (this.godziny > 160) ? (( 160 * this.stawka ) + (this.godziny - 160) * 2 * this.stawka) : this.godziny * this.stawka);
    }
}

document.querySelectorAll("input").forEach( input => {
    input.onchange = (e) => { 
        console.log(e.target);
    }
})

// console.log(document.querySelectorAll("input"));




let pracownicy = [];

document.querySelectorAll("div[id^='pracownik']").forEach( (item, index) => {
    const nowyPracownik = new Pracownik(index, item.children[0].textContent, item.children[1].value, item.children[2].value)
    pracownicy.push(nowyPracownik);
})

// const test = new Pracownik(1, "Fifi", 162, 2)
// console.log(pracownicy);




document.getElementById("oblicz").onclick = () => {
    pracownicy.map( (pracownik) => {
        console.log(pracownik);
        [...document.querySelectorAll(".wyplata")][pracownik.id].innerHTML = pracownik.wyplata
    })
    
    
    // console.log();
    // document.querySelectorAll(".wyplata").forEach( (span, index) => {
        // console.log(span);
        // span.textContent = 
    // })




    // let pracownicy = document.querySelectorAll("div[id^='pracownik']");
    // pracownicy.forEach( item => {
    //     const godziny = item.children[1].value;
    //     const stawka = item.children[2].value;
    //     let zarobki = godziny * stawka;

    //     if (godziny > 160) {
    //         zarobki = ( 160 * stawka ) + (godziny - 160) * 2 * stawka;
    //     }
    //     item.children[3].textContent = zarobki;

    //     if (godziny < 100) {
    //         item.style.backgroundColor = "red";
    //     }else{
    //         item.style.backgroundColor = "limegreen";
    //     }
    // })

    // console.log(pracownicy[1].children[1].value);

}


