let burguer = document.querySelector(".hamb");
let navlist = document.querySelector(".nav-list");
let links = document.querySelector(".nav-list li");

burguer.addEventListener("click", function (){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});