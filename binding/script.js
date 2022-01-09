function handleTodo(){
    console.log("Handle Add new todo Button");
}

function doBindings(){
    console.log("Handle Bindings");
    var button = document.getElementById("btnAdd")
    button.onclick = handleTodo;
}