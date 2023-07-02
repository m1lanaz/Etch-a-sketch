// Slider value 
const slider = document.getElementById("myRange");
// Text on top of slider value
const output = document.getElementById("sliderValue");
// Sets text at the start of page loading to the default slider value
output.innerHTML = `${slider.value} x ${slider.value}`;

// Canvas in variable
const canvas = document.getElementById('canvas');

// Creates divs by looping up until the slider value, creating divs and making them a child of canvas
const createDivs = (numOfDivs) => {
  for (let i = 0; i < numOfDivs; i++) {
    let element = document.createElement("div");
    element.classList.add("canvasItem");
    canvas.appendChild(element);
  }
  // Setting grid columns and rows based on slider value
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

// Changes text when slider used and creates divs and assigns event listeners
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
  removeAllChildNodes(canvas);
  createDivs(this.value * this.value);
  addCanvasElementEvent();
}

// The div in variable
const canvasElements = document.getElementsByClassName("canvasItem");

// if mouse is left clicked and held and hovered over div then colour is changed
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
let canvasSize = slider.value;
createDivs(canvasSize * canvasSize);

// Add event listeners to canvas elements
addCanvasElementEvent();


// For clear button:
const clearButton = (e) => {
    for (let i = 0; i < canvasElements.length; i++){
        canvasElements[i].style.backgroundColor = 'white';
    }
}