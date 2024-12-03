//with the help of spread operator
const mergeTwoArray = (nums1, nums2) => {
const newArr = [...nums1, ...nums2];
return newArr;
}
console.log(mergeTwoArray([1,2,3,4],[5,6,7,8]));