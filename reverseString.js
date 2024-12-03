//when we pass a simple string
// let reverseString = function(s) {
//     let str = "";    //to store reverseString
//     for(let i = s.length-1; i>=0; i--){
//         str += s[i];   
//     }
//   return str.split("");    //splitstring
// };
// console.log(reverseString('hello'));


//when we pass a string inside of array ["h","e","l","l","o"]
let reverseString = function(s) {
    let i = 0;
    let j = s.length-1;
    while(i<j){
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      i++;
      j--;
    } 
 return s;
  };
  console.log(reverseString(["h","e","l","l","o"]));
  