$(function() {
    // jq will execute this function after page load
    //so do your bindings here
    $("#addButton").click(handleBtnClic);
})
function handleBtnClic(){
    var newTodo = $("#newTodo").val();
    $("#newTodo").val("");
    $("#todos").append("<li>" + newTodo + "</li>");
}