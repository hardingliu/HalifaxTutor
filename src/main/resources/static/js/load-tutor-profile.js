'use strict';
function loadProfile() {
    let email = $("#email").text();

    var userData = {
        "email": email
    };

    $.ajax({
        url: location.origin + "/gettutorprofiledata",
        data: JSON.stringify(userData),
        contentType: "application/json",
        type: "POST",
        dataType: "json"
    }).done(function (data) {
        if (data.result == "Success") {
            alert("Password Updated !");
            window.location.replace("../index.html");
        } else {
            alert("Something went wrong: " + text);
        }
    }).fail(function (xhr, status, errorThrown) {

    });

}