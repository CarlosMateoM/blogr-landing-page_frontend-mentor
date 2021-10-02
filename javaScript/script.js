
let productOption = document.getElementById('product-option');
let listProduct = document.getElementById('list-list-product');

let companyOption = document.getElementById('company-option');
let listCompany = document.getElementById('list-list-company');

let contactOption = document.getElementById('contact-option');
let listContact = document.getElementById('list-list-contact');

addEvent(listProduct,productOption);
addEvent(listCompany, companyOption);
addEvent(listContact, contactOption);


function addEvent(list, option){
   option.addEventListener("mouseover", function () {
      setPosition(list, option)}
   );
}

function setPosition(list,option) {
   let left = option.getBoundingClientRect().x;
   list.style.left = left + "px";
}

let btnMenu = document.getElementById("menu-mobile");
let menu = document.getElementById("mobile-menu");

btnMenu.addEventListener("click", function () {
   menu.style.right = "0";
});

let btnExit = document.getElementById("exit-menu");

btnExit.addEventListener("click", function(){
   menu.style.right = "-400px";
});


