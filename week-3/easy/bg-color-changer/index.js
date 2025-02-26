
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById('color-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const colorInput = document.getElementById('color-input').value.trim();
    console.log(colorInput);
    if (!colorInput) return; // Prevent adding empty values

    // Create a test element to check if the color is valid
    const testElement = document.createElement("div");
    testElement.style.color = colorInput;
    console.log(testElement.style);
    if (testElement.style.color === "") {
        alert("Invalid color name or hex value.");
        return;
    }

    const newButton = document.createElement('button');
    newButton.textContent = colorInput.startsWith("#") ? colorInput.slice(1) : colorInput;
    newButton.style.backgroundColor = colorInput;
    newButton.style.color = getContrastColor(colorInput);
    newButton.onclick = function() { changeColor(colorInput); };
    document.getElementById('color-buttons').appendChild(newButton);
    document.getElementById('color-input').value = '';
});

function getContrastColor(bgColor) {
    const hex = bgColor.startsWith("#") ? bgColor.slice(1) : bgColor;
    if (hex.length === 3) {
        bgColor = `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    if (hex.length === 6) {
        const r = parseInt(bgColor.substring(1, 3), 16);
        const g = parseInt(bgColor.substring(3, 5), 16);
        const b = parseInt(bgColor.substring(5, 7), 16);
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white';
    }
    return 'white';
}