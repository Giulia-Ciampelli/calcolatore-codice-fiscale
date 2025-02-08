// 1. Dividere l'intero codice in caratteri pari e caratteri dispari
// 2. Associare i caratteri alle seguenti tabelle:

// Tabella caratteri dispari:
// 0:	1	C:	5	O:	11
// 1:	0	D:	7	P:	3
// 2:	5	E:	9	Q:	6
// 3:	7	F:	13	R:	8
// 4:	9	G:	15	S:	12
// 5:	13	H:	17	T:	14
// 6:	15	I:	19	U:	16
// 7:	17	J:	21	V:	10
// 8:	19	K:	2	W:	22
// 9:	21	L:	4	X:	25
// A:	1	M:	18	Y:	24
// B:	0	N:	20	Z:	23

// Tabella caratteri pari:
// 0:	0	C:	2	O:	14
// 1:	1	D:	3	P:	15
// 2:	2	E:	4	Q:	16
// 3:	3	F:	5	R:	17
// 4:	4	G:	6	S:	18
// 5:	5	H:	7	T:	19
// 6:	6	I:	8	U:	20
// 7:	7	J:	9	V:	21
// 8:	8	K:	10	W:	22
// 9:	9	L:	11	X:	23
// A:	0	M:	12	Y:	24
// B:	1	N:	13	Z:	25

// 3. Sommare tutti i caratteri pari e tutti i caratteri dispari
// 4. Sommare le due somme
// 5. Dividere il risultato per 26, prendere il resto
// 6. Convertire il resto con la seguente tabella

// Tabella caratteri risultato (resto):
// 0:	A	10:	K	20:	U
// 1:	B	11:	L	21:	V
// 2:	C	12:	M	22:	W
// 3:	D	13:	N	23:	X
// 4:	E	14:	O	24:	Y
// 5:	F	15:	P	25:	Z
// 6:	G	16:	Q		
// 7:	H	17:	R		
// 8:	I	18:	S		
// 9:	J	19:	T	

export default function ControlLetter(lastNameResult, firstNameResult, birthdayAndSexResult, municipalityInput, countryInput) {
    const letters = {
        lastNameResult: lastNameResult.split(""),
        firstNameResult: firstNameResult.split(""),
        birthdayAndSexResult: birthdayAndSexResult.split(""),
        municipalityInput: municipalityInput.split(""),
        countryInput: countryInput.split("")
    };

    return letters;
}