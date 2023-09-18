document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("urlapForm");
    const nev = document.getElementById("nev");
    const nevError = document.createElement("span");
    nevError.id = "nev-error";
    nevError.className = "error-message";
    nev.insertAdjacentElement("afterend", nevError);

    const kaveElems = document.getElementsByName("kave");
    const datum = document.getElementById("datum");

    // Animáció funkció hibaüzenethez
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

        // Név ellenőrzése
        if (!nev.value.trim()) {
            valid = false;
            showError(nevError, "Kérjük, adja meg a nevét!");
            nev.style.border = "2px solid red";
        } else {
            nevError.textContent = "";
            nev.style.border = "1px solid black";
        }

        // Kávé választás ellenőrzése
        let kaveSelected = false;
        for (let i = 0; i < kaveElems.length; i++) {
            if (kaveElems[i].checked) {
                kaveSelected = true;
                break;
            }
        }
        if (!kaveSelected) {
            valid = false;
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