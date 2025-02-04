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
import LastName from "./LastName.js";
import BirthdayAndSex from "./BirthdayAndSex.js";
// #endregion import

// evento submit
formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    // prendi i valori del form
    let lastNameInput = lastName.value;
    let firstNameInput = firstName.value;
    let dateOfBirthInput = dateOfBirth.value;
    let sexInput = sex.value;
    let municipalityInput = municipality.value;
    let countryInput = country.value;

    // associa una funzione al suo valore
    let lastNameResult = LastName(lastNameInput).join('');
    let firstNameResult = FirstName(firstNameInput).join('');
    let birthdayAndSexResult = BirthdayAndSex(dateOfBirthInput, sexInput);

    // combinalo
    let fiscalCode = `${lastNameResult}${firstNameResult}${birthdayAndSexResult}`;

    // stampa tutto
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(dateOfBirthInput, sexInput);

    document.getElementById('output_text').innerText = fiscalCode;
})