const findMax = (arr) => {
let max = arr[0];
arr.forEach((elem) => {
    if(elem>max){
        max = elem;
    }
});
return max;
}
console.log(findMax([1,2,3,7,5,9]));