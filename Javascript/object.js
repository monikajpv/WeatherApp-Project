var y= {id:"01", Name: "Monika"};
console.log(y);
y. state= "Nashik";//Adds new Elements at the end
console.log(y);

console.log(y.id);//Returns specific elements

y.Name ="Mv";//updates existing value
console.log(y);

delete y.id;
console.log(y);//deletes the obj

//Spread operator: copies 1 ele into another 
//used in array n obj
var obj2  = {...y};//copies 1 obj to another it  is spread operator
console.log(y);

//Copies 1obj to another
ob3={};
Object.assign(ob3,y);
console.log(y);






