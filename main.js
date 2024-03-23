
const row1 = document.getElementById("row1")
const row2 = document.getElementById("row2")
const row3 = document.getElementById("row3")
const row4 = document.getElementById("row4")

const keyLayout = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", // row 1, backspace invisible, 10 characters
    "a", "s", "d", "f", "g", "h", "j", "k", "l", // row 2, enter invisible, 9 characters
    "z", "x", "c", "v", "b", "n", "m", ",",//row 3, invisible dot, 8 characters
    "space" //row 4, 1 character
];

// Is this scalable?? shut up, go touch grass
keyLayout.forEach((key, i) => {
    const button = document.createElement("button");
    button.innerText = key
    button.classList.add("keyboard-btns"); // Add a class to edit these buttons css
    button.setAttribute("data-key", key); // Set the data-key attribute
    if (i<10){
        row1.appendChild(button)
    }else if (i>=10 && i<19){
        row2.appendChild(button)
    }else if (i>=19 && i<27){
        row3.appendChild(button)
    }else{
        row4.appendChild(button)
        button.classList.remove("keyboard-btns")
        button.classList.add("spacebar-key")
    } 
});

const typedText = document.querySelector(".typed-text");

document.addEventListener("keydown", function(event) {
    const key = event.key;
    const button = document.querySelector(`.keyboard-btns[data-key="${key}"]`);

    if (button || key === " ") {
        if (button) {
            button.classList.add("pressed");
            setTimeout(() => {
                button.classList.remove("pressed");
            }, 100);
        }
        typedText.textContent += (key === " ") ? " " : key;
    }

    if (key === "Backspace") { //backspace is not a visible key
        typedText.textContent = typedText.textContent.slice(0, -1);
    }
});

