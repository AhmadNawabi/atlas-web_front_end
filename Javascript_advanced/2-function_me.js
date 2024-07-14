function welcomeMessage(fullName) {
  return function closure(fullName) {
    alert(`Welcome ${fullName}`);
  };
}

const guillaum = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");