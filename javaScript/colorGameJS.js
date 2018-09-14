var numSqueares = 6
var colors = []
var pickedColor;
var squeares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons()
    setUpSqueares()
    reset();
}

function setUpModeButtons() {
    // mode buttons event listener
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSqueares = 3 : numSqueares = 6;
            // if(this.textContent === "Easy"){
            // 	numSqueares = 3;
            // } else{
            // 	numSqueares = 6;
            // }
            reset();
        })
    }
}

function setUpSqueares() {
    for (var i = 0; i < squeares.length; i++) {
        //add click event for each squeares
        squeares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            // console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });

    }
}


function reset() {
    // generate new colors
    colors = generateRandomColors(numSqueares);
    // pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    // change new colors on the squeares
    for (var i = 0; i < squeares.length; i++) {
        if (colors[i]) {
            squeares[i].style.display = "block";
            squeares[i].style.backgroundColor = colors[i];
        } else {
            squeares[i].style.display = "none";
        }
        squeares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
    // generate new colors
    colors = generateRandomColors(numSqueares);
    // pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // change new colors on the squeares
    for (var i = 0; i < squeares.length; i++) {
        squeares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});



function changeColors(color) {
    for (var i = 0; i < squeares.length; i++) {
        squeares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor() {
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
    return "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}