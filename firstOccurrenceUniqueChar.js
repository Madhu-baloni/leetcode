var firstUniqChar = function(s) {
    let char = new Map();
    for(let i = 0; i<=s.length; i++ ){
        char.set(s[i], (char.get(s[i]) || 0) +1);
    }
    for(let i = 0; i<=s.length; i++ ){
        let val = char.get(s[i]);
        if(val === 1){
            return i;
        } 
    }
            return -1;
    }
    console.log(firstUniqChar("aabb"));