
let oddNumbers = () => {
  num = "";
  for (let i = 0; i <= 100; i++) {
    if ((i % 2) !== 0)
    num += i + "<br>";
  }
  return num;
};

let text = document.getElementById('main');
text.innerHTML = (oddNumbers());
