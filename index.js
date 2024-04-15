
// /////////Domashka//////////////////////////
document.getElementById('btn').addEventListener('click', function() {
  const inputText = document.getElementById('input').value;
  const titleText = titleTextContent(inputText);
  document.getElementById('title').textContent = titleText;
});

function titleTextContent(str) {
  return str[0].toUpperCase() + str.toLowerCase().slice(1) 
}