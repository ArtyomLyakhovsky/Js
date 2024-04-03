const title = document.getElementById('title')
const input = document.querySelector('input')
const btn = document.querySelector('.btn');

document.querySelector('.btn').onclick = function foo() {
  let a = document.querySelector('input').value;
  console.log(a);
  document.getElementById('title').innerHTML = a;
};


btn.addEventListener('click', function f() {
  const title = document.getElementById('title')

  let firstColor = Math.floor(Math.random() * (255 - 1 + 1)) +1;
  let secondColor = Math.floor(Math.random() * (255 - 1 + 1)) +1;
  let thirdColor = Math.floor(Math.random() * (255 - 1 + 1)) +1;

  let rgb = 'rgb(' + firstColor + ', ' + secondColor + ', ' + thirdColor + ')';
  title.style.color = rgb;
})