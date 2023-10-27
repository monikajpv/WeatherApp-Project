var data = [34,56,78,656,67,20,40,23,25,26,68,80,88,76,56,76];

var s = data.filter(function(element,index)

{
    return element>40 && element<80;

});
console.log(s);