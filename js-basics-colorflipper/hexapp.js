// hex values: A B C D E F 0 1 2 3 4 5 6 7 8 9
// 6 figure values
// to get different hex coleors,get random instances of the 6 figures

//  array hexValues
const hexColors = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// getHexColor get random hex values in string form: returns a string
function getHexColor() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    colorNumber = Math.floor(Math.random() * hexColors.length);
    hexColor = hexColor + hexColors[colorNumber];
  }
  return hexColor;
}

// adding eventlistener to the btn
btn.addEventListener('click', function () {
  document.body.style.backgroundColor = getHexColor();
  color.textContent = getHexColor();
});
