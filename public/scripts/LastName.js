export default function LastName(lastName) {
    let cognome = lastName;
    let regexSearch = cognome.match(/[^aeiou]/gi); // trova tutto ciò che non è vocale
    let regexVowels = cognome.match(/[aeiou]/gi); // trova tutte le vocali

    // RICORDA: il match rende un array, non una stringa!
    let result = [];

    switch (true) {
        case (regexSearch.length >= 3):

            // Si prendono tutte le consonanti, se sono più di 3 si prendono le prime 3.
            result = [
                regexSearch[0],
                regexSearch[1],
                regexSearch[2]
            ].map(letter => letter.toUpperCase());
            break;

        case (regexSearch.length < 3):

            // Se il cognome ha meno di 3 consonanti si prendono anche le vocali, partendo dall'inizio.
            let consonants = regexSearch.map(letter => letter.toUpperCase());
            let vowels = [regexVowels[0]].map(letter => letter.toUpperCase());
            result = [...consonants, ...vowels];
            break;

    }

    // Se un cognome ha meno di 3 lettere, si aggiunge una X alla fine.
    if (cognome.length < 3) {
        result = [cognome.toUpperCase() + 'X'];
    }

    console.log(result);

    return result;
}