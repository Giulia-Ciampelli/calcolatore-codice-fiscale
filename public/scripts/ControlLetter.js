export default function ControlLetter(lastNameResult, firstNameResult, birthdayAndSexResult, municipalityInput, countryInput) {
    let selectInput = municipalityInput ? municipalityInput : countryInput;

    const letters = new Map([
        ['lastNameResult', lastNameResult.split("")],
        ['firstNameResult', firstNameResult.split("")],
        ['birthdayAndSexResult', birthdayAndSexResult.split("")],
        ['selectInput', selectInput.split("")]
    ]);

    console.log(letters);

    const oddLetters = {
        0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21, A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21, K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14, U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23
    };

    const evenLetters = {
        0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25
    };

    const remainderLetters = {
        0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z'
    };

    // somma iniziale di caratteri pari e dispari
    let oddSum = 0;
    let evenSum = 0;

    const allStrings = [
        ...letters.get('lastNameResult'),
        ...letters.get('firstNameResult'),
        ...letters.get('birthdayAndSexResult'),
        ...letters.get('selectInput')
    ];

    // conta tutti i caratteri in tutte le stringhe e assegnali alla tabella corrispondente

    allStrings.forEach((char, idx) => {
        const adjustIndex = idx + 1; // altrimenti conta da 0

        const oddChar = oddLetters[char.toUpperCase()] || 0;
        const evenChar = evenLetters[char.toUpperCase()] || 0;

        console.log(`Char: ${char}, index: ${idx}, odd: ${oddChar}, even: ${evenChar}`);

        if (adjustIndex % 2 === 0) {
            evenSum += evenChar;
        }
        else {
            oddSum += oddChar;
        }
    })

    // somma le somme iniziali e dividila per 26
    const totalSum = oddSum + evenSum;
    console.log(totalSum);
    const remainder = totalSum % 26;
    console.log(remainder);

    // converti il resto con la tabella finale
    const result = remainderLetters[remainder];

    return result;
}