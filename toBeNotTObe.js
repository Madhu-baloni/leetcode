var expect = function(val) {
    const obj = {
    toBe(x){
     if(x===val){
         return true;
     } else {
           throw new Error("Not Equal")
     }
     },
     notToBe(y){
         if(val == null || y!==val){
         return true;
     } else {
          throw new Error('Equal')
     }
     }
     
    }
    return obj;
 };
 
 /**
  * expect(5).toBe(5); // true
  * expect(5).notToBe(5); // throws "Equal"
  */