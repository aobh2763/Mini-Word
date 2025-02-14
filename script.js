const l = document.getElementById("label");

function setColor() {
    const col = document.getElementById("color");

    l.style.color = col.value;
}

function setSize() {
    const size = document.getElementById("size");

    l.style.fontSize = size.value + "px";
}

function setFont() {
    const font = document.getElementById("font");

    l.style.fontFamily = font.value;
}

let b1 = document.getElementById("color");
let b2 = document.getElementById("size");
let b3 = document.getElementById("font");

b1.addEventListener("input", setColor);
b2.addEventListener("input", setSize);
b3.addEventListener("input", setFont);