$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

});
$(document).ready(function(){
    document.getElementById("upload_widget_opener").addEventListener("click", function() {
        cloudinary.openUploadWidget({ cloud_name: 'yrzzzzzz', upload_preset: 'ktpg8ic7', folder: 'user_photos'},
            function(error, result) { console.log(error, result) });
    }, false);
}) ;

$(document).on('cloudinarywidgetfileuploadsuccess', function(e, data) {
    console.log("Single file success", e, data);
});

function Addshow(id) {
    if (document.getElementById(id).style.display == 'block')
        document.getElementById(id).style.display = 'none';
    else
        document.getElementById(id).style.display = 'block'
}

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}



$(document).ready(function() {
    var token = localStorage.getItem("token");
    var objToken = {'token': token};

    $("#logout").click(function () {
        localStorage.removeItem("token");
    });

    $("#Cpassword-form").submit(function (event) {
        event.preventDefault();

        let password = $("#pwd").val();
        var ChangePwdData = {
            'token': token,
            'password': password
        };

        // if($("#pwd").val() != $("#Rpwd").val()){
        //     alert("The two password fields didn't match.");
        //     return;
        // }


        $.ajax({
            url: location.origin + "/tutor/setting/password",
            data: JSON.stringify(ChangePwdData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data=== "Success") {
                alert("Password change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#Cemail-form").submit(function (event) {
        event.preventDefault();
        var email = $("#email").val();

        var ChangeEmailData = {
            'token': token,
            'email': email
        };

        $.ajax({
            url: location.origin + "/tutor/setting/email",
            data: JSON.stringify(ChangeEmailData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "SUCCESS") {
                alert("Email change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });

    });

    $("#Cphone-form").submit(function (event) {
        event.preventDefault();
        let phone = $("#phone").val();

        var ChangePhoneData = {
            'token': token,
            'phone' : phone
        };

        $.ajax({
            url: location.origin +"/tutor/setting/phone",
            data: JSON.stringify(ChangePhoneData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Phone Number change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });

    });

    $("#Ccard-form").submit(function (event) {
        event.preventDefault();
        let creditCardNumber = $("#cardnum").val();
        let expireDate = $("#expire_date").val();
        let securityCode = $("#code").val();
        let cardname = $("#cardname").val();
        var ChangeCardData = {
            'token': token,
            'cardname': cardname,
            'creditCardNumber': creditCardNumber,
            'expireDate':expireDate,
            'securityCode' : securityCode
        };

        $.ajax({
            url: location.origin +"/tutor/setting/card",
            data: JSON.stringify(ChangeCardData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data=== "Success") {
                alert("Card information change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });

    });

    $("#Cedu").submit(function (event) {
        event.preventDefault();
        let education = $("#education").val();

        var ChangeEduData = {
            'token': token,
            'education' : education
        };

        $.ajax({
            url: location.origin +"/tutor/setting/education",
            data: JSON.stringify(ChangeEduData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Education change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });

    });

    $("#Cexperience").submit(function (event) {
        event.preventDefault();
        let experience = $("#experience").val();

        var ChangeExpData = {
            'token': token,
            'experience' : experience
        };

        $.ajax({
            url: location.origin +"/tutor/setting/experience",
            data: JSON.stringify(ChangeExpData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Experience change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });

    });

    $("#Cavailability").submit(function (event) {

        event.preventDefault();
        let A1 = $("#A1").is(":checked");
        let A2 = $("#A2").is(":checked");
        let A3 = $("#A3").is(":checked");
        let A4 = $("#A4").is(":checked");
        let A5 = $("#A5").is(":checked");
        let A6 = $("#A6").is(":checked");
        let A7 = $("#A7").is(":checked");
        let B1 = $("#B1").is(":checked");
        let B2 = $("#B2").is(":checked");
        let B3 = $("#B3").is(":checked");
        let B4 = $("#B4").is(":checked");
        let B5 = $("#B5").is(":checked");
        let B6 = $("#B6").is(":checked");
        let B7 = $("#B7").is(":checked");
        let C1 = $("#C1").is(":checked");
        let C2 = $("#C2").is(":checked");
        let C3 = $("#C3").is(":checked");
        let C4 = $("#C4").is(":checked");
        let C5 = $("#C5").is(":checked");
        let C6 = $("#C6").is(":checked");
        let C7 = $("#C7").is(":checked");

        var ChangeAvaData = {
            'token': token,
            "A1" : A1,
            "A2" : A2,
            "A3" : A3,
            "A4" : A4,
            "A5" : A5,
            "A6" : A6,
            "A7" : A7,
            "B1" : B1,
            "B2" : B2,
            "B3" : B3,
            "B4" : B4,
            "B5" : B5,
            "B6" : B6,
            "B7" : B7,
            "C1" : C1,
            "C2" : C2,
            "C3" : C3,
            "C4" : C4,
            "C5" : C5,
            "C6" : C6,
            "C7" : C7
        };

        $.ajax({
            url: location.origin +"/tutor/setting/availability",
            data: JSON.stringify(ChangeExpData),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Availability change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#plan1").click(function (event) {
        event.preventDefault();

        var ChangePlan = {
            'token':token,
            'planNo':1
        };

        $.ajax({
            url: location.origin +"/tutor/setting/plan",
            data: JSON.stringify(ChangePlan),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Subscription Plan change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#plan2").click(function (event) {
        event.preventDefault();

        var ChangePlan = {
            'token':token,
            'planNo':2
        };

        $.ajax({
            url: location.origin +"/tutor/setting/plan",
            data: JSON.stringify(ChangePlan),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data=== "Success") {
                alert("Subscription Plan change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#plan3").click(function (event) {
        event.preventDefault();

        var ChangePlan = {
            'token':token,
            'planNo':3
        };

        $.ajax({
            url: location.origin +"/tutor/setting/plan",
            data: JSON.stringify(ChangePlan),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Subscription Plan change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#plan4").click(function (event) {
        event.preventDefault();

        var ChangePlan = {
            'token':token,
            'planNo':4
        };

        $.ajax({
            url: location.origin +"/tutor/setting/plan",
            data: JSON.stringify(ChangePlan),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Subscription Plan change succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#resend").click(function (event) {
        event.preventDefault();



        var ResendEmail = {
            'token':token
        };

        $.ajax({
            url: location.origin +"/tutor/setting/resend",
            data: JSON.stringify(ChangePlan),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Confiem Email resend  succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    $("#cancel").click(function (event) {
        event.preventDefault();

        var Cancel = {
            'token':token
        };

        $.ajax({
            url: location.origin +"/tutor/setting/cancel",
            data: JSON.stringify(Cancel),
            contentType: "application/json",
            type: "POST",
            dataType: "text"
        }).done(function (data) {
            if (data === "Success") {
                alert("Subscroption cancel succeed!");
            } else {
                alert(data);
            }
        }).fail(function (xhr, status, errorThrown) {

        });
    });

    // //get subscription info
    // $.ajax({
    //     url: location.origin +"/tutor/setting/postplan",
    //     // contentType: "application/json",
    //     type: "POST",
    //     dataType: "json"
    // }).done(function (data) {
    //     if (data.result === "Success") {
    //         //TODO POST TO HTML
    //     } else {
    //         alert(data.details);
    //     }
    // }).fail(function (xhr, status, errorThrown) {
    //
    // });
    //

});

