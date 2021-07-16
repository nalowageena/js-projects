const colors = ['red', 'green', 'blue', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// adding an eventlistener to the btn object
// on click btn implements the unknown function
btn.addEventListener('click', function () {
  // get a random number between two and three
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//getRandomNumber gets random numbers between 0 and 4
function getRandomNumber() {
  colorNumber = Math.floor(Math.random() * colors.length);
  return colorNumber;
}
