function add(){
var fnumber = parseInt(document.getElementById("fNumber").value);
var snumber = parseInt(document.getElementById("sNumber").value);
var result = document.getElementById("result"); 
result.value = fnumber + snumber;
}

function sub(){
    var fnumber = document.getElementById("fNumber");
var snumber = document.getElementById("sNumber");
var result  = document.getElementById("result");
result.value = fnumber.value - snumber.value;
    
}
function mul(){
    var fnumber = document.getElementById("fNumber");
var snumber = document.getElementById("sNumber");
var result  = document.getElementById("result");
result.value = fnumber.value * snumber.value;
}
function div(){
    var fnumber = document.getElementById("fNumber");
var snumber = document.getElementById("sNumber");
var result  = document.getElementById("result");
result.value = fnumber.value / snumber.value;
}