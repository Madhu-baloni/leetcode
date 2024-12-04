const newArray = [];

const flatArray = (arr) => {
[arr].map((item) => {
    if(Array.isArray){
        flatArray(item);
    } else {
        newArray.push(item);
    }
})
}
flatArray([1,2,3,[4],[5,6]]);
