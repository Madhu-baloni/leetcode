const obj = {
    name : 'madhu',
    age:23
}
const isEmpty = (obj) => {
if(Array.isArray(obj)){
    return obj.length === 0;
} else {
    let a = Object.keys(obj);
    return a.length === 0;
}
}
console.log(isEmpty());
