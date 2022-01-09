
console.log("Starting");
function handleTodo(){
    console.log("Handle Add new todo Button");
}

function doBindings(){
    console.log("Bindings");
    var button = document.getElementById("btnAdd")
    button.onclick = handleTodo;
}
window.onload = doBindings;
console.log("Finished");