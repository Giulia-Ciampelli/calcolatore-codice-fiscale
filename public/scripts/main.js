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
import ControlLetter from "./ControlLetter.js";
// #endregion import

// funzione per riempire le opzioni comune e stato
const fillSelect = (municipalitySelect, countrySelect, municipalityData, countryData) => {
    while (municipalitySelect.firstChild) {
        municipalitySelect.removeChild(municipalitySelect.firstChild);
    }
    while (countrySelect.firstChild) {
        countrySelect.removeChild(countrySelect.firstChild);
    }

    // creazione opzioni default
    const defaultMunicipalityOption = document.createElement('option');
    defaultMunicipalityOption.value = '';
    defaultMunicipalityOption.textContent = 'Seleziona un Comune';
    municipalitySelect.appendChild(defaultMunicipalityOption);

    const defaultCountryOption = document.createElement('option');
    defaultCountryOption.value = 'ITALIA';
    defaultCountryOption.textContent = 'ITALIA';
    countrySelect.appendChild(defaultCountryOption);

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
    let belfioreResult = municipalityInput || countryInput;

    // combinalo
    let fiscalCode = `${lastNameResult}${firstNameResult}${birthdayAndSexResult}${belfioreResult}`;

    // stampa tutto
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(dateOfBirthInput, sexInput);
    console.log(municipalityInput, countryInput);

    document.getElementById('output_text').innerText = fiscalCode;
})