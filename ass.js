function outer() {
    function inner() {
      let innerVar = "I'm from inner";
    }
    inner();
    console.log(innerVar); // what happens here?
  }
  
  outer();