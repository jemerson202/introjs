function fizzBuzz(number) {
  for(number = 1; number <= 20; number++) {
    if(number % 15 === 0) {
      console.log("FizzBuzz");
    } else if(number % 3 === 0) {
      console.log("Fizz");
    } else if(number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
  }
}

module.exports = fizzBuzz;
