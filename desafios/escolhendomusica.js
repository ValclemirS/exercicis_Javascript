let music = parseInt(prompt("Escolha uma opção de música:\n1 - The Weeknd - Save Your Tears (Official Music Video)\n2 - After Dark"));

let faixa; 

if (music === 1) {
    faixa = 'https://youtu.be/XXYlFuWEuKI';
} else if (music === 2) {
    faixa = 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO0XPyus?si=4e2e228255634519';
} else {
    alert("Opção inválida. Por favor, escolha 1 ou 2.");
}

function tocar(faixa) {
    window.open(faixa);
}
if (faixa) {
    tocar(faixa); 
}
