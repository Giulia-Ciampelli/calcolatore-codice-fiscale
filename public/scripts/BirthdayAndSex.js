// A: Gennaio
// B: Febbraio
// C: Marzo
// D: Aprile
// E: Maggio
// H: Giugno
// L: Luglio
// M: Agosto
// P: Settembre
// R: Ottobre
// S: Novembre
// T: Dicembre

export default function BirthdayAndSex(dateOfBirth, sex) {
    let dateComponents = dateOfBirth.split('-');
    let year = dateComponents[0].slice(2); // L'anno di nascita prende le ultime due cifre.
    let month = dateComponents[1];
    let day = Number(dateComponents[2]);

    // Il mese è individuato da una lettera:
    let months = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'H',
        7: 'L',
        8: 'M',
        9: 'P',
        10: 'R',
        11: 'S',
        12: 'T'
    };
    let monthLetter = months[Number(month)];

    // Per le femmine, si sommano i giorni a 40 (41-71).
    // Per i maschi, prende solo le cifre dei giorni (01-31).
    if (sex === 'female') {
        day += 40;
    }

    // Il giorno prende le due cifre del giorno di nascita (con uno 0 davanti nel caso di nascita prima del 10).
    return `${year}${monthLetter}${day < 10 ? '0' + day : day}`;
}