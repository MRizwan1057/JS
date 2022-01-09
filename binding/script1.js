function handleTodo(){
    console.log("Handle Add new todo Button");
}

function doBindings(){
    var button = document.getElementById("btnAdd")
    button.onclick = handleTodo;
}
 
    window.onload = doBindings;

//doBindings();// we cannot do bindings as document is not loaded yet.