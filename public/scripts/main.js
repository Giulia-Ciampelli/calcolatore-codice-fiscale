// #region variabili
let formElement = document.querySelector('form');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let dateOfBirth = document.getElementById('date_of_birth');
let sex = document.getElementById('sex');
let municipality = document.getElementById('municipality');
let country = document.getElementById('country');
// #endregion variabili

// #region import
import FirstName from "./firstName.js";
// #endregion import

console.log('im alive');

// importa funzioni da altri script? Sono tante

// funzione nome

// funzione cognome

// funzione data di nascita

// funzione sesso

// funzione luogo di nascita

// evento submit
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    FirstName();

    console.log(`the button's alive too`);

    // richiama le funzioni e stampale
})