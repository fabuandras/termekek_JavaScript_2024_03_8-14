import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat

/*
    MINTA:
            
            alma    100     50
            korte   120     60
            szilva  80      40
            banan   150     70
*/

function letrehozTablazat(GYUMOLCSOK) {
    let txt = "<table style='border: 1px solid gray;'>"
    txt += "<h3>Gyümölcskosár</h3>"
    for (let index = 0; index < GYUMOLCSOK.length; index++) {
        txt += `<tr>`
        txt += `<td><b>Gyümölcs neve:</b> <span>${GYUMOLCSOK[index].nev}</span></td>`
        txt += `<td><b>Gyümölcs Tömege:</b> <span>${GYUMOLCSOK[index].tomeg}g</span></td>`
        txt += `<td><b>Gyümölcs Ára:</b> <span>${GYUMOLCSOK[index].ar}Ft</span></td>`
        txt += `</tr>`

    }
    txt += "</table>"
    console.log(txt)
    return txt
}

const gyumolcsTablazat = document.querySelector("#feladat_1")
console.log(gyumolcsTablazat)
gyumolcsTablazat.innerHTML = letrehozTablazat(GYUMOLCSOK)

// 2. feladat

/*
    MINTA:
            
            A gyümölcsök súlya összesen: 450g
*/

document.getElementById("feladat_2").innerHTML = `<p>A gyümölcsök súlya összesen: <span>${osszesit(GYUMOLCSOK)}g</span></p>`;

function osszesit(tomb) {
    var szam = tomb.length;
    var osszeg = 0;
    for (let i = 0; i < szam; i++) {
        osszeg += tomb[i].tomeg;
    }
    return osszeg;
}

// 3. feladat

/*
    MINTA:
        
            A gyümölcsök ára összesen: 220Ft
*/

document.getElementById("feladat_3").innerHTML = `<p>A gyümölcsök ára összesen: <span>${vasarol(GYUMOLCSOK)}Ft</span></p>`;

function vasarol(zoldseg) {
    var ar = zoldseg.length;
    var osszeg = 0;
    for (let i = 0; i < ar; i++) {
        osszeg += zoldseg[i].ar;
    }
    return osszeg;
}

const vasaroltLista = []
const trELEM = document.querySelectorAll("tr");
for (let index = 0; index < trELEM.length; index++) {
    trELEM[index].addEventListener("click", function() {
        GYUMOLCSOK[index].nev
        vasaroltLista.push(GYUMOLCSOK[index].nev);
    })
}


// 4. feladat

/*
    MINTA (gomb elhelyezése):

            [ Töröl ]
*/


function torolEsemeny() {

}

