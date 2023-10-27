var obj1 = {
    c: 100,
  };
  
  var obj2 = {
    c: 500,
  };
  
  function fnAdd(a, b) 
  {
    console.log(a + b + obj1.c);

  }
  
  fnAdd(10, 20); // c = obj1
  
  fnAdd(100, 200); // c = obj2
  
