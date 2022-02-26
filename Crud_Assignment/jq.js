$(function() {
    console.log("Script Loaded");
    loadapis();
    $("#btnAdd").click(addPersons())
    $("#myTable").on("click", ".dlt_btn", deletePerson);
    $("#myTable").on("click", ".upd_btn", updatePerson);
    $("#btnUpdate").click(sendAjaxUpdate);
});


function sendAjaxUpdate() {
    console.log("Send Ajax called");
    var name = $("#addName").val();
    var gender = $("#addGender").val();
    var age = $("#addAge").val();
    var city = $("#addCity").val();

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "PUT",
        data: { name, gender, age, city },
        success: function() {
            $("#addName").val("");
            $("#addGender").val("");
            $("#addAge").val("");
            $("#addCity").val("");
            $("#hiddenid").html("");
            //  $("#upd_btn").hide();

            loadapis();
        },
    });
}

function updatePerson() {
    console.log("Update Called");
    var btn = $(this);
    var id = btn.attr("data-id");

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "GET",
        success: function(response) {
            console.log(response);
            $("#addName").val(response.name);
            $("#addAge").val(response.age);
            $("#addGender").val(response.gender);
            $("#addCity").val(response.city);
            $("#hiddenid").append(response._id);
            $("#updatebtn").show();
        },
    });
}



function deletePerson() {
    console.log("Delete Called");
    var btn = $("this");
    var id = btn.attr("data-id");

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "DELETE",
        success: loadapis,
        console: function() {
            console.log("Error on Server...");
        }
    })


}

function addPersons() {
    console.log("addPersons called");
    var name = $("#addName").val();
    var gender = $("#addGender").val();
    var age = $("#addAge").val();
    var city = $("#addCity").val();

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person",
        method: "POST",
        data: { name, gender, age, city },
        success: function() {
            $("#addName").val("");
            $("#addGender").val("");
            $("#addAge").val("");
            $("#addCity").val("");
            loadapis();
        }
    })
}

function loadapis() {
    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person",
        method: "GET",
        success: getPerson,
        error: function() {
            console.log("Error on Server");
        }
    })
}

function getPerson(person) {
    for (var i = 0; i < person.length; i++) {
        $("#myTable").append(`<tr><td>${person[i].name}</td><td>${person[i].gender}</td><td>${person[i].age}</td><td>${person[i].city}</td><td><button class ="btn btn-danger"  data-id="${person[i]._id}">Remove</button><button class ="btn btn-warning" data-id="${person[i]._id}">Update</button></td></tr>
`)
    }

}