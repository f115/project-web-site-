
let user = JSON.parse(sessionStorage["person"])

if(user.email == undefined || user.passw == null) {
    document.location.href = "web.html";
}




let info = "User:" + user.name +
"<br>" + " passw:" + user.password +
 "<br>" + "Email:" + user.email;

document.getElementById("Welcome").innerHTML = "Welcome dear user " + user.name;
document.getElementById("user_info").innerHTML = info.fontsize("5em").italics();

document.addEventListener("DOMContentLoaded",function () {
document.getElementById("logout").addEventListener("click",function () {
    sessionStorage.clear();
});

});