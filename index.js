//fizzBuzzBang

const multiples = {
  3: 'Fizz',
  5: 'Buzz',
  7: 'Bang',
};

const fizzBuzz = (num) => {
  let result = '';
  for (let key in multiples) {
    if (num % key === 0) {
      result += multiples[key];
    }
  }
  return result || num;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
