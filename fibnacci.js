var fib = function (n) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  if(n===0){
    return 0
  }
 if(n<2){
    return 1;
 }
  for(let i=1; i<=n; i++){
    sum = num1+num2;
    num1=num2;
    num2=sum;
  }
  return num2;
}

console.log(fib(5));
console.log(fib(4));
console.log(fib(0));
console.log(fib(1));


