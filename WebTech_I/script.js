document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("urlapForm");
    const nev = document.getElementById("nev");
    const esp = document.getElementById("espID");
    const cap = document.getElementById("capID");
    const nevError = document.createElement("span");
    const radioError = document.createElement("span");

    nevError.id = "nev-error";
    nevError.className = "error-message";
    nev.insertAdjacentElement("afterend", nevError);

    radioError.id = "radio-error";
    radioError.className = "error-message";
    esp.insertAdjacentElement("afterend", radioError);
    cap.insertAdjacentElement("afterend", radioError);

    const kaveElems = document.getElementsByName("kave");
    const datum = document.getElementById("datum");

    function showError(elem, message) {
        elem.textContent = message;
        elem.style.opacity = "0";
        elem.style.transition = "opacity 0.3s";
        setTimeout(() => {
            elem.style.opacity = "1";
        }, 10);
    }

    form.addEventListener("submit", function (event) {
        let valid = true;

        if (!nev.value.trim()) {
            valid = false;
            showError(nevError, "Kérjük, adja meg a nevét!");
            nev.style.border = "2px solid red";
        } else {
            nevError.textContent = "";
            nev.style.border = "1px solid black";
        }

        /*if (!esp.value.trim()) {
            valid = false;
            showError(radioError, "Kérjük válasszon az alábbi opciók közül!");
            esp.style.border = "2px solid red";
        } else {
            radioError.textContent = "";
            esp.style.border = "1px solid black";
        }

        if (!cap.value.trim()) {
            valid = false;
            showError(radioError, "Kérjük válasszon az alábbi opciók közül!");
            cap.style.border = "2px solid red";
        } else {
            radioError.textContent = "";
            cap.style.border = "1px solid black";
        }*/

        let kaveSelected = false;
        for (let i = 0; i < kaveElems.length; i++) {
            if (kaveElems[i].checked) {
                kaveSelected = true;
                break;
            }
        }
        if (!kaveSelected) {
            valid = false;
            showError(radioError, "Kérjük válasszon az alábbi opciók közül!");
        }

        // Dátum ellenőrzése
        if (!datum.value) {
            valid = false;
            datum.style.border = "2px solid red";
        } else {
            datum.style.border = "1px solid black";
        }

        if (!valid) {
            event.preventDefault(); // Megakadályozza az űrlap elküldését
        }
    });

    // Elemek kiválasztása példa
    let allInputs = document.getElementsByTagName("input"); // Összes input mező
    let errorMessages = document.getElementsByClassName("error-message"); // Összes hibaüzenet
    let specificElem = document.getElementById("nev"); // Konkrét elem azonosító alapján

    let newElem = document.createElement("footer");
    newElem.textContent = "KávéKatt © 2023";
    document.body.appendChild(newElem);
});