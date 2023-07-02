// Slider number display
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
output.innerHTML = `${slider.value} x ${slider.value}`;

// Add divs and position divs
let canvasSize = slider.value;
const canvas = document.getElementById('canvas');

const createDivs = (numOfDivs) => {
  for (let i = 0; i < numOfDivs; i++) {
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

// Global variable to track the state of the left mouse button
let isDrawing = false;

// Changes text when slider used and creates divs
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
  removeAllChildNodes(canvas);
  createDivs(this.value * this.value);
  addCanvasElementEvent();
}

const canvasElements = document.getElementsByClassName("canvasItem");

const addCanvasElementEvent = () => {
  for (let i = 0; i < canvasElements.length; i++) {
    canvasElements[i].addEventListener('mousedown', (e) => {
      isDrawing = true;
      canvasElements[i].style.backgroundColor = 'black';
    });

    canvasElements[i].addEventListener('mouseup', (e) => {
      isDrawing = false;
    });

    canvasElements[i].addEventListener('mouseover', (e) => {
      if (isDrawing) {
        canvasElements[i].style.backgroundColor = 'black';
      }
    });
  }
};

// Create divs with initial size based on slider value
createDivs(canvasSize * canvasSize);

// Add event listeners to canvas elements
addCanvasElementEvent();


// For clear button:

const clearButton = (e) => {
    for (let i = 0; i < canvasElements.length; i++){
        canvasElements[i].style.backgroundColor = 'white';
    }
}