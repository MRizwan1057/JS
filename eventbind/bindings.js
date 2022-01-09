window.onload = function() {
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAdd;
}

function handleAdd() {
    var newTodo = document.getElementById("newToDo").value;
    var todos = document.getElementById("todos");
    var newTodoText = document.createTextNode(newTodo);
    var newLi = document.createElement("li");
    newLi.appendChild(newTodoText);
    todos.appendChild(newLi);
    var delbtn = document.createElement("button");
    delbtn.createTextNode('Delete')
    delbtn.onclick = function(event){
    var tag = event.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
    };
    newLi.appendChild(delbtn);
    //delbtn.onclick = handleDelete;
    
    
}

function handleDelete(e) {
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
}