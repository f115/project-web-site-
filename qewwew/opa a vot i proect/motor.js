let productManager = {
    getAllProducts: function () {
        return products;
    }
};

let domManager = {
 createProductContainer: function (product) {
let main_container = document.createElement("section");
let image_phone = document.createElement("");
let product_title = document.createElement("h3");
let product_description = document.createElement("p");   ;
let purchase_product = document.createElement("button");

main_container.className = "phone-cost col-md-3 text-center p-2 m-2 shadow"

image_phone.src =  `./img/${product.photo}`;
image_phone.width = 250 ;
image_phone.height = 300 ;

product_title.innerHTML = `${product.model} ${product.price} ${product.currently}`.italics();

product_description.innerHTML = `${product.description}`;

purchase_product.innerHTML = "Узнать больше"
purchase_product.className = "purchase-btn btn-primary"


purchase_product.addEventListener("click",function (e) {
    e.preventDefault();
    


})

main_container.appendChild(image_phone);
main_container.appendChild(product_title);
main_container.appendChild(product_description);
main_container.appendChild(purchase_product);

return main_container;

  }

}

document.addEventListener("DOMContentLoaded", function () {
   
   let all_products = productManager.getAllProducts();
   let table_products = document.getElementById("phones_list");
   for(let phone of all_products){

  let phone_container = domManager.createProductContainer(phone);
   table_products.appendChild(phone_container)
   }
   {}
 

   
});