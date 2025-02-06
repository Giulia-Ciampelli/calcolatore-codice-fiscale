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

// funzione per riempire le opzioni comune e stato
const fillSelect = (municipalitySelect, countrySelect, municipalityData, countryData) => {
    municipalitySelect.innerText = `<option value="">Seleziona un Comune</option>`;
    countrySelect.innerText = `<option value="">Seleziona uno Stato</option>`;
    
    // riempimento select comune
    municipalityData.forEach(element => {
        const option = document.createElement('option');
        option.value = element.codice_belfiore;
        option.innerText = element.denominazione_ita;
        municipalitySelect.appendChild(option);
    });

    // riempimento select stato
    countryData.forEach(element => {
        const option = document.createElement('option');
        option.value = element.codice_belfiore;
        option.innerText = element.denominazione_nazione;
        countrySelect.appendChild(option);
    });
}

// fetch per codici comuni e nazioni
const getBelfioreCodes = () => {
    fetch('/api/codici-belfiore')
    .then(res => {
        if (!res.ok) {
            return Promise.reject('Couldn\'t fetch data')
        }
        return res.json();
    })
    .then(data => {
        fillSelect(municipality, country, data.municipalities, data.nations);
    })
    .catch(error => {
        console.error('Error fetching municipalities and nations', error);
    })
}

// evento caricamento pagina
document.addEventListener('DOMContentLoaded', () => {
    getBelfioreCodes();
})

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