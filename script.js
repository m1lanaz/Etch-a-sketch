// Slider number display
const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
output.innerHTML = (`${slider.value} x ${slider.value}`);

slider.oninput = function() {
  output.innerHTML = (`${this.value} x ${this.value}`);
}

// Change canvas size

