let graphNodata = document.getElementById('chart-no-data-found');
let noDataEncript = document.getElementById('no-data-encript');
let btnCoppy = document.getElementById('button-copy');
let areaEnDecript = document.getElementById('area-en-de-cripter');
let inputText;
let encryptedText;

const encrypt = () => {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let acentos = detectarAcentos(inputText);
    if (acentos) {
        alert("No se puede encriptar con acentos");
        return;
    }
    encryptedText = inputText.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('output').innerText = encryptedText;
    manageAreaEnDecript();
}

const decrypt = () => {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    let acentos = detectarAcentos(inputText);
    if (acentos) {
        alert("No se puede encriptar con acentos");
        return;
    }
    let decryptedText = inputText.replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");
    document.getElementById('output').innerText = decryptedText;
    manageAreaEnDecript();
}

function manageAreaEnDecript() {
    if (encryptedText) {
        graphNodata.style.display = "none";
        noDataEncript.style.display = "none";
        btnCoppy.style.display = "block";
        areaEnDecript.classList.add("text--en--de--cript-large");
    } else {
        graphNodata.style.display = "block";
        noDataEncript.style.display = "block";
        btnCoppy.style.display = "none";
        areaEnDecript.classList.remove("text--en--de--cript-large");
    }
}

function detectarAcentos(texto) {
    const acentos = /[áéíóúÁÉÍÓÚ]/g;
    const resultado = texto.match(acentos);
    return !!(resultado);
}

async function copy() {
    try {
        let textCopy = document.getElementById('output').innerText;
        await navigator.clipboard.writeText(textCopy);
    } catch (err) {
        console.error('Error al copiar el texto:', err);
    }
}