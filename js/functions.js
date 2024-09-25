'use strict'

const calculate = () => {
    const pituus = parseFloat(document.getElementById('Pituus').value) / 100;
    const paino = parseFloat(document.getElementById('Paino').value);
    const bmi = paino / (pituus * pituus)
    document.querySelector('output').innerHTML = bmi.toFixed(0)
}

document.querySelector('button').addEventListener('click', calculate)