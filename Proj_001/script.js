// "use strict"

let newText = document.getElementById('out');



newText.textContent = "New Text";

newText.prepend("BEFORE TEXT ")

newText.insertAdjacentHTML("afterbegin", "<h3>PARAGRAPH</h3>")