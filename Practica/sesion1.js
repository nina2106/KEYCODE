function tablasMultiplicar() {
    for (const numero of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        console.log(`Tabla del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        console.log(''); // Línea en blanco para separar las tablas
    }
}

tablasMultiplicar();
