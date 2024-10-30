// Mensaje cifrado
const mensajeCifrado = `^[()^~^*/? \` [()^+^~~()#[$()/~()%\\[]()}+[()[{=~¿()= $?%?!?]¡~()¿()^~^~() [{=~()?+^[]=?()^\\{()*~¡[$[{()[()?=[]^\\-]()()[{; +[$_~() \`~]=\\]+~`;

// Mapeo de caracteres cifrados a letras
const reemplazos = {
    '?': 'a',
    '[': 'e',
    '\\': 'i',
    '+': 'u',
    'ó': 'ó',  // letra con acento
    '(': ' ',  // espacio en blanco
    ')': ' ',  // espacio en blanco
    '#': 'l',  // letra común
    '^': 's',  // letra común
    '$': 't',  // letra común
    '%': 'o',  // letra común
    '*': 'n',  // letra común
    '!': 'd',  // letra común
    '~': 'r',  // letra común
    '@': 'c',  // letra común
    '`': 'h'    // letra común
};

// Función para descifrar el mensaje
function descifrar(mensaje) {
    let mensajeDescifrado = '';

    for (let char of mensaje) {
        // Reemplaza cada carácter usando el mapeo definido
        mensajeDescifrado += reemplazos[char] || ''; // Agrega el carácter original si no se encuentra
    }

    return mensajeDescifrado;
}

// Descifrar el mensaje
const mensajeDescifrado = descifrar(mensajeCifrado);

// Mostrar el resultado
console.log('Mensaje descifrado:', mensajeDescifrado);