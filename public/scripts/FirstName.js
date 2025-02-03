export default function FirstName(firstName) {
    let nome = firstName;
    let regexSearch = nome.match(/[^aeiou]/gi); // trova tutto ciò che non è vocale
    let regexVowels = nome.match(/[aeiou]/gi); // trova tutte le vocali

    // RICORDA: il match rende un array, non una stringa!
    let result = [];

    switch (true) {
        case (regexSearch.length > 3):

            // Si prendono tutte le consonanti, se sono più di 3 si prendono la 1^, 3^ e 4^.
            result = [
                regexSearch[0],
                regexSearch[2],
                regexSearch[3]
            ].map(letter => letter.toUpperCase());
            break;

        case (regexSearch.length === 3):

            // Si prendono tutte le consonanti
            result = regexSearch.map(letter => letter.toUpperCase());
            break;

        case (regexSearch.length < 3):

            // Se il nome ha meno di 3 consonanti, si prendono anche le vocali.
            let consonants = regexSearch.map(letter => letter.toUpperCase());
            let vowels = [regexVowels[0]].map(letter => letter.toUpperCase());
            result = [...consonants, ...vowels];
            break;

    }

    // Se un nome ha meno di 3 lettere, si aggiunge una X alla fine.
    if (nome.length < 3) {
        result = [nome.toUpperCase() + 'X'];
    }

    console.log(result);

    return result;
}