// var removeDuplicates = function(nums) {
//     return nums.reduce((prev, curr) => {
//         if (!prev.includes(curr)) {
//             prev.push(curr);
//         }
//         return prev;
//     }, []);  
// };
// console.log(removeDuplicates([1,2,3,3,4,2]))

//using foe each
// const removeDuplicates = (nums) => {
//     const uniqueArrayElement = [];
//     nums.forEach((value) => {
//       if (!uniqueArrayElement.includes(value)) {
//         uniqueArrayElement.push(value);
//       }
//     });
//     return uniqueArrayElement;
//   };
  
//   console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

  //using for loop
  var removeDuplicates = function(nums) {
    const newArr = [];
    for(let i = 1 ; i<=nums.length-1; i++){
     if(!newArr.includes(i)){
         newArr.push(i)
     }
    }
    return newArr;
 };

 console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
