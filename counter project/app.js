// general parameters
const counter = document.getElementById('numberCount');

/*const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');*/

let countNumber = counter.textContent;

const btns = document.querySelectorAll('.btn');
// for each button, i want to perform a particular action
btns.forEach(function (btn) {
  btn.addEventListener('click', function event(e) {
    const style = e.currentTarget.classList;
    // what exactly does this classList do... i don't get
    if (style.contains('decrease')) {
      countNumber--;
    }
    if (style.contains('increase')) {
      countNumber++;
    }
    if (style.contains('reset')) {
      countNumber = 0;
    }
    checkingSign(countNumber);

    counter.textContent = countNumber;
  });
});

/*//adding event listeners
decrease.addEventListener('click', onClickDecrease);
reset.addEventListener('click', onClickReset);
increase.addEventListener('click', onClickIncrease);

// onclickdecrease subtracts 1 from the count once it is clicked
function onClickDecrease() {
  countNumber = parseInt(counter.textContent) - 1;
  checkingSign(countNumber);
  counter.textContent = String(countNumber);
}
// onclickIncrease adds 1 to the count once it is clicked
function onClickIncrease() {
  countNumber = parseInt(counter.textContent) + 1;
  checkingSign(countNumber);
  counter.textContent = String(countNumber);
}
// onclickReset takes count to 0 once it is clicked
function onClickReset() {
  countNumber = 0;
  checkingSign(countNumber);
  counter.textContent = String(countNumber);
}*/

// if counter.textContent is negative, it should be red
// if it is positive, then it should be green
// if it is 0,then it should be black
function checkingSign(num) {
  if (num < 0) {
    counter.style.color = 'red';
  } else if (num > 0) {
    counter.style.color = 'green';
  } else {
    counter.style.color = 'black';
  }

  // this method is less cumbersome than what i proposed originally
  // it is easy and less functions are created
}
