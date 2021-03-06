$(document).ready(function() {
    // Getting references to our form and inputs
    var emailInput = $("#email-input");
    var passwordInput = $("#password-input");

    // When the form is submitted, we validate there's an email and password entered
    $("#signinSubmit").on("click", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/signin", {
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
        }).fail(function(err) {
            if (err.responseText = "Unauthorized") {
                $("#error-text").text("Email or Password Incorrect!").show();
            } else {
                console.log(err);
            };
        });
    };

});