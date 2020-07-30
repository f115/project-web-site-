
let user = JSON.parse(sessionStorage["person"])

if(user.email == undefined || user_passw == null) {
    document.location.href = "login.form";
}




let info = "User " + user.name +
"<br>" + "Age is " + user.age +
 "<br>" + "Email:" + user.email;

document.getElementById("Welcome").innerHTML = "Welcome dear user " + user_name;
document.getElementById("user_info").innerHTML = info.fontsize("5em").italics();

document.addEventListener("DOMContentLoaded",function () {
document.getElementById("logout").addEventListener("click",function () {
    sessionStorage.clear();
});

});