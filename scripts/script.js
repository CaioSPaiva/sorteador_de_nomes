document.getElementById('drawButton').addEventListener('click', function() {
    const namesInput = document.getElementById('namesInput').value;
    const namesArray = namesInput.split(',').map(name => name.trim()).filter(name => name);
    if (namesArray.length > 0) {
        const winner = namesArray[Math.floor(Math.random() * namesArray.length)];
        document.getElementById('winner').innerText = `Vencedor: ${winner}`;
    } else {
        alert('Por favor, insira nomes válidos.');
    }
});
