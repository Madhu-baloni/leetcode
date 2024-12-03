
var isPalindrome = function(x) {
    let rem = 0;
    let reverseNum = 0;
    let Number = x;  // Store the original value of x
    
    if (x < 0) return false; // Negative numbers are not palindromes

    while(x > 0) {
        rem = x % 10;
        reverseNum = reverseNum * 10 + rem;
        x = Math.floor(x / 10); // Use integer division to update x
    }

    return reverseNum === Number;  // Compare reversed number with the original number
};

console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false
