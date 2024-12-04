const filterElem = (arr, fn) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }
    return res;
}

const abc = (n) => n > 10;
console.log(filterElem([1, 2, 3, 11, 12], abc)); 


const returnTrue = (n) => true;
console.log(filterElem([1, 2, 3, 4, 5], returnTrue)); 
