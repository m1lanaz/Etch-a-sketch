// Slider number display
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
output.innerHTML = (`${slider.value} x ${slider.value}`);


// Add divs and position divs 

let canvasSize = slider.value;


//let canvasSize = slider.value;

const createDivs = (numOfDivs) => {
    for(let i = 0; i < numOfDivs; i++){
        let element = document.createElement("div");
        element.classList.add("canvasItem");
        document.getElementById('canvas').appendChild(element);
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// changes text when slider used and creates divs

slider.oninput = function() {
    output.innerHTML = (`${this.value} x ${this.value}`);
  }

