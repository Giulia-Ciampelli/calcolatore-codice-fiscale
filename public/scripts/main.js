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
import FirstName from "./FirstName.js";
// #endregion import

console.log('im alive');

// evento submit
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    // prendi i valori del form
    let firstNameInput = firstName.value;
    let lastNameInput = lastName.value;
    let dateOfBirthInput = dateOfBirth.value;
    let sexInput = sex.value;
    let municipalityInput = municipality.value;
    let countryInput = country.value;

    // associa una funzione al suo valore
    FirstName(firstNameInput);

    console.log(firstNameInput);

    console.log(`the button's alive too`);

    // richiama le funzioni e stampale
})