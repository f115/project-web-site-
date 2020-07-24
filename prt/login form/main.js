

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-log").addEventListener("click",function (e) {
      e.preventDefault();

        let enteredEmail = document.getElementById("emailInput").value;    
        let enteredPassw = document.getElementById("passwInput").value;
        
        let foundUser = false;           
        if ("database" in localStorage) {
            let users = JSON.parse(localStorage["database"]);
            for (let user of users) {
                if (enteredEmail == user["email"] && enteredPassw == user["password"]) {
                    foundUser = true;
                    let person = JSON.stringify(user);
                    sessionStorage["person"] = person;
                     break;
                }
            } 
        }
            else{
               alert("do this more attentively")
    }         
             if(foundUser){
                 document.location.href = "web.html";
             }
             else{
                alert("do this more attentively")
               }
    
})
  
})
