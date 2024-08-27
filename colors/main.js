const right = document.getElementById('right');


function color() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;
  right.style.backgroundColor = `rgb(${red},${green},${blue})`

}

color()


