function Person(name,surname,email,password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
}


document.addEventListener("DOMContentLoaded", function () {
document.getElementById("btn-log").addEventListener("click",function (e) {
    e.preventDefault();
    let surname = document.getElementById("surnameInput").value;    
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;    
    let passw = document.getElementById("passwInput").value;

    let person = new Person(name,surname,email,passw);

    alert("oh my god, you finaly did it");

    if("database" in localStorage){
    let database =   JSON.parse(localStorage["database"]);
    if("length" in database){
      database.push(person);
      localStorage["database"] = JSON.stringify(database);
       
    }
    else{
      let new_array = []
      new_array.push(database);
      new_array.push(person);
      localStorage["database"] = JSON.stringify(new_array);
    }
  }
  else{
    let first_user = JSON.stringify(person)
    localStorage["database"] = first_user;
  } 
  });
})