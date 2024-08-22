const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionRules = Object.fromEntries(
    Object.entries(encryptionRules).map(([key, value]) => [value, key])
);

function encrypt(text) {
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

function decrypt(text) {
    let decryptedText = text;
    for (const [encoded, decoded] of Object.entries(decryptionRules)) {
        decryptedText = decryptedText.split(encoded).join(decoded);
    }
    return decryptedText;
}




document.getElementById('encrypt-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const result = encrypt(textInput);
    document.getElementById('result').value = result;
});

document.getElementById('decrypt-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const result = decrypt(textInput);
    document.getElementById('result').value = result;
});



//<button id="copy-button">Copiar</button>