let elementsManager = {
    getAllElements: function () {
        return elements;
    }
};

let domManager = {
 createElementContainer: function (element) {
let main_container = document.createElement("card");
let image_element = document.createElement("img");
let element_description = document.createElement("h1");   
let read_more = document.createElement("button");


image_element.src =  `./img/${element.photo}`;
image_element.width = 280 ;
image_element.height = 360 ;



element_description.innerHTML = `${element.description}`;

read_more.innerHTML = "Узнать больше"

read_more.className = "read_more-btn btn-primary"
read_more.id = "read_more-btn"

read_more.addEventListener("click",function (e) {
    e.preventDefault();
    


})

main_container.appendChild(image_element);
main_container.appendChild(element_description);
main_container.appendChild(read_more);

return main_container;

  }

}

document.addEventListener("DOMContentLoaded", function () {
   
   let all_elements = elementsManager.getAllElements();
   let table_elements = document.getElementById("elements_list");
   for(let element of all_elements){

  let element_container = domManager.createElementContainer(element);
   table_elements.appendChild(element_container)
   }
   {}
   
 
});