function divieBy (firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}

function addBy (firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divieBy10 = divieBy(10);
const divieBy100 = divieBy(100);
