
const row1 = document.getElementById("row1")
const row2 = document.getElementById("row2")
const row3 = document.getElementById("row3")
const row4 = document.getElementById("row4")

const keyLayout = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", // row 1, backspace invisible, 10 characters
    "a", "s", "d", "f", "g", "h", "j", "k", "l", // row 2, enter invisible, 9 characters
    "z", "x", "c", "v", "b", "n", "m", ",",//row 3, invisible dot, 8 characters
    " " //spacebar, row 4, 1 character
];

// "Is this scalable?" shut up, go touch grass
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
    }else if (key === " "){
        row4.appendChild(button)
        button.classList.add("spacebar")
        button.textContent = "space"
    } 
});

// ---------- Quote rendering ------------ //
const shownTextContainer = document.querySelector(".shown-text"); 
const quote = "the fitness graham pacer test"

// Split text into individual letters and create a span for each letter
quote.split("").forEach(char => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    shownTextContainer.appendChild(charSpan); 
});
// ---------- --------------- ---------- //

let index = 0
document.addEventListener("keydown", function(event) {
    const key = event.key; 
    animate_buttons(key)
    const array = shownTextContainer.querySelectorAll("span") //array of all spans inside the .shown-text class
    if (key === "Backspace") { //backspace is not a visible key
        if (index>0){index--}
        array[index].classList.remove("correct")
        array[index].classList.remove("incorrect")
        array[index].classList.remove("incorrect-space")
    }
    else if (key ===  array[index].textContent){
        array[index].classList.add("correct")   
        index++
    }else{ 
        array[index].classList.add("incorrect")   
        index++
        // handle incorrect spacebar (make it red)
        if (key !== " " && array[index].textContent === " "){
            array[index].classList.add("incorrect-space")
        }  
    }
});
//typedText.textContent += (key === " ") ? " " : key;

function animate_buttons(key){
    const button = document.querySelector(`.keyboard-btns[data-key="${key}"]`);
    if (button) {
        button.classList.add("pressed"); // adds class pressed for the animation
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100);
    }
}
