
const form = document.querySelector(".form");
const button = document.querySelector("#add-field");

button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the form from submitting

    const fieldType = document.querySelector("#field-type").value;
    const fieldLabel = document.querySelector('#label').value;

    if(!fieldLabel){
        alert("enter a label");
        return;
    }

    const newElement = document.createElement("div");
    newElement.innerHTML = 
    `
        <label for="${fieldLabel}">${fieldLabel}</label>
        <input type="${fieldType}" id="${fieldLabel}" placeholder="enter ${fieldLabel}">
    `;
    form.appendChild(newElement);
});