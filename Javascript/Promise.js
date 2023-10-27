/*var promise = new Promise(function(resolve,reject){

    resolve("Hey there");//Only 1 fun is called at a time
    reject({ error: "Failed to connect with database" }); //error data
});
//console.log(promise);
//promiseObj.then().catch()
//promiseObj.then(function(successdata){}).catch()
//promiseObj.then(function(successdata){}).catch(function(errordata){})


promise.then(function(successdata){

    console.log("Mv",successdata);

}).catch(function(errordata){

    console.log("Mv",errordata);


});


// var promise = new Promise(function (resolve, reject) {});

// console.log(promise);

//Resolve State

// var promiseObj = new Promise(function (resolve, reject) {
//   resolve(["cdskn", 100, true]);//success data
// });

// console.log(promiseObj);

//Rejected State

  */




















var promise = new Promise(function(resolve,reject){

    resolve("Here is Success Data");
    reject({ error: "Failed to connect with database" }); 
});

promise.then(function(successdata){

    console.log("Executed ",successdata);

}).catch(function(errordata){

    console.log("Error",errordata);

});



  