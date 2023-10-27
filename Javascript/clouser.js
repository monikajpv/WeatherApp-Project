function fn(){
    var city="Nashik";
    console.log(city);

    function f1(){
        console.log(city);// this is clouser bez it protected and can access data of the block


    }
    f1()
}
function f2(){

    console.log("hhhh",city);// this not a clouser 


}

fn()
f2()