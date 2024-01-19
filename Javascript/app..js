var getColor = function () {
  const randomNumber = Math.floor(Math.random() * 16777215);
  console.log(randomNumber);

  //Generating HexCodes...  16 stands forhexa decimal code
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomCode);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText=randomCode;

  navigator.clipboard.writeText(randomCode);
};

//Event-call( works on click);
document.getElementById("btn").addEventListener("click", function () {
  getColor();
});

//initiall Call..
getColor();