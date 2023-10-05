document.addEventListener('keydown', function(event) {
    if (event.key === 'k' || event.key === 'K') {
        changeColors();
    }
});

function changeColors() {
    var textColor = getRandomColor();
    var bgColor = getRandomColor();
    document.getElementById('colorText').style.color = textColor;
    document.body.style.backgroundColor = bgColor;
}

function changeText() {
    var newText = prompt('Enter new text:');
    if (newText !== null) {
        document.getElementById('colorText').textContent = newText;
    }
}

function changeTextColor() {
    var textColor = getRandomColor();
    document.getElementById('colorText').style.color = textColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;}