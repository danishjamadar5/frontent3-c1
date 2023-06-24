var user = JSON.parse(localStorage.getItem("user"));
console.log(user);

document.getElementById("name").innerText = user.name;
document.getElementById("email").innerText = user.email;
document.getElementById("password").innerText = user.password;

document.getElementById("btn-logout").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
})



// Redirecting  to signup or profile based on storage  
document.getElementById("header-signup").addEventListener("click", () => {
    if(JSON.parse(localStorage.getItem("user") &&JSON.parse(localStorage.getItem("user" )).accessToken!="")){
        window.location.href = 'profile.html';
    }
    else {
        window.location.href = 'index.html'
    }

})
