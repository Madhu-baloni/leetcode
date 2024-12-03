var fib = function (n) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  if(n === 1){
    return num1;
  } else if (n === 2){
    return num2;
  } else {
  for(let i=3; i<=n; i++){
    sum = num1+num2;
    num1=num2;
    num2=sum;
  }

  return num2;
}
}
console.log(fib(5));
console.log(fib(1));
console.log(fib(3));
