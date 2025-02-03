// Si prendono tutte le consonanti, se sono più di 3 si prendono la 1^, 3^ e 4^.
// Se il nome ha meno di 3 consonanti, si prendono anche le vocali.
// Se un nome ha meno di 3 lettere, si aggiunge una X alla fine.

export default function FirstName() {
    console.log('import works!');

    let nome = 'Gianmarco';
    let regexSearch = nome.match(/[^aeiou]/gi); // trova tutto ciò che non è vocale

    // RICORDA: il match rende un array, non una stringa!

    let result = regexSearch.map(letter => letter.toUpperCase());

    console.log(result);

}