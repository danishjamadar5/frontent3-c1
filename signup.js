function getAccessToken() {
    var alpha = "0123456789ABCDEFGHIJabcdefghij";
    var token = "";
    for (var i = 0; i < 16; i++) {
        token += alpha.charAt(Math.floor(Math.random() * 30));
    }
    return token;
}


document.getElementById("btn-signup").addEventListener("click", () => {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ConfirmPassword = document.getElementById("Confirm-password").value;

    // show error message
    if (!(name && email && password && ConfirmPassword)) {
        document.getElementById("error").style.display = "block";
        setTimeout(()=>{
            document.getElementById("error").style.display = "none";  
        },1000);
    }
    else {
        // Generating  accessToken
        var accessToken = getAccessToken();

        // Create user object
        var user = {
            name: name,
            email: email,
            password: password,
            token: accessToken,
        };

        // saving user obj in localStorahe 
        localStorage.setItem("user", JSON.stringify(user));

        // show Successfull message 
        document.getElementById("success").style.display = "block";

        // Redirect to profile page after a delay
        setTimeout(function () {
            window.location.href = "profile.html";
        }, 2000);

    }

})


// Redirecting  to signup or profile based on storage  
document.getElementById('header-profile').addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken!="") {
        window.location.href = "profile.html";
    } else {
        window.location.href = "index.html";
    }
});