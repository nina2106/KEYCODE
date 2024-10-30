// Mensaje cifrado
const mensajeCifrado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=]+~";

// Mapeo de caracteres cifrados a letras
let reemplazos = {
    '?': 'a',
    '[': 'e',
    '\\': 'i',
    '+': 'u',
    '¬': 'ó',
    '(': ' ',   
    ')': ' ',   
    '/': 'l',
    '^': 'm',
    '#': 'd', 
    '~': 'o',
    '*': 'p',  
    '!': 'b',
    '%': 'r',
    '-': 'h',
    '`': 'c',
    '$': 's',  
    
};

// Función para descifrar el mensaje
function descifrar(mensaje) {
    let mensajeDescifrado = '';
    for (let char of mensaje) {
        mensajeDescifrado += reemplazos[char] || ''; // Aplica el mapeo
    }

    return mensajeDescifrado;
}

// Descifrar el mensaje y mostrar el resultado
const mensajeDescifrado = descifrar(mensajeCifrado);
console.log('Mensaje descifrado:', mensajeDescifrado);