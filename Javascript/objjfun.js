var obj1 = {
    name: "Raj",
    city: "mumbai",
    email: "raj@gmail.com",
    phone: 9999999,
  };
  
  // var obj3 = {};
  
  // Object.assign(obj3, obj1);
  
  // console.log(obj3);
  
  // var obj2 = { ...obj1 };
  
  // console.log(obj2);
  
  // var arr = ["ckjds", 100, true, 3299, "Delhi"];
  
  // var newarr = [...arr];
  
  // console.log(newarr);
  
  var obj = {
    id: 101,
    name: "Riya",
    marks: [90, 80, 95, 89, 99],
  };
  
  console.log(obj.marks[2]);
  
  var obj1 = {
    address: {
      city: "Delhi",
      country: "india",
    },
  };
  console.log(obj1.address.city);

  var obj = {
    fn: function () {
      console.log("fn is called");
    },
  
    fnadd: function (x, y) {
      console.log(x + y);
    },
  };
  
  obj.fn();
  obj.fnadd(10, 30);
  
  