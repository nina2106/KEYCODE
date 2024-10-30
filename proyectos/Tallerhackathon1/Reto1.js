// Mensaje cifrado
const mensajeCifrado = "^[()`~^*/?`[()^+`-~()#+[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=]+~";

// Mapeo de caracteres cifrados a letras
const reemplazos = {
    '?': 'a',
    '[': 'e',
    '\\': 'i',
    '+': 'u',
    '¬': 'ó',
    '(': ' ',   
    ')': ' ',   
    '/': 'l',
    '^': 'm',
    '#': 'q',
    '~': 'o',
    '*': 'p',
    '!': 'd',
    '%': 'r',
    '-': 'h',
    '`': 'c',
};

// Función para descifrar el mensaje
function descifrar(mensaje) {
    let mensajeDescifrado = '';

    for (let char of mensaje) {
        // Reemplaza cada carácter usando el mapeo definido
        mensajeDescifrado += reemplazos[char] || ''; // Agrega el carácter original si no se encuentra
    }

    return mensajeDescifrado; // Retorna el mensaje descifrado
}

// Descifrar el mensaje
const mensajeDescifrado = descifrar(mensajeCifrado);
// Mostrar el resultado
console.log('Mensaje descifrado:', mensajeDescifrado);