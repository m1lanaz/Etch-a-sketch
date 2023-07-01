// Slider number display
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
output.innerHTML = (`${slider.value} x ${slider.value}`);


// Add divs and position divs 

let canvasSize = slider.value;


//let canvasSize = slider.value;

const canvas = document.getElementById('canvas')

const createDivs = (numOfDivs) => {
    for(let i = 0; i < numOfDivs; i++){
        let element = document.createElement("div");
        element.classList.add("canvasItem");
        canvas.appendChild(element);
    }

    canvas.style.gridTemplateColumns = `repeat(${Math.sqrt(numOfDivs)}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${Math.sqrt(numOfDivs)}, 1fr)`;
};

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// changes text when slider used and creates divs

slider.oninput = function() {
    output.innerHTML = (`${this.value} x ${this.value}`);
    removeAllChildNodes(canvas);
    createDivs(this.value * this.value);
  }

