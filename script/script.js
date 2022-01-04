function number(accum = 0) {
  function sum(num) {
    return (accum += num);
  }
  return sum;
}

const result = number(3);
console.log(result(4));
console.log(result(3));
console.log(result(1));