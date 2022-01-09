$(function() {
    // jq will execute this function after page load
    //so do your bindings here
    $("#addButton").click(handleBtnClic);
})
function handleBtnClic(){
    $("#todos").append("<li>New Todo Will appear here</li>")
}