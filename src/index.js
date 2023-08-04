const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const BINARY_MORSE = {
    '10': '.',
    '11': '-',
};

function decode(expr) {
    let symArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        symArr.push(expr.slice(i, i + 10));
    }

    symArr = symArr.map(word => word.slice(word.indexOf('1')));

    symArr = symArr.map(word => {
        let sym = '';

        if (word.includes('*')) return ' ';

        for (let i = 0; i < word.length; i += 2) {
            sym += BINARY_MORSE[word[i] + word[i + 1]];
        }

        return sym;
    });

    return symArr.map(word => word != ' ' ? MORSE_TABLE[word] : word).join('');
}

module.exports = {
    decode
}