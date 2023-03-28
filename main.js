let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenuButton');
let header = document.getElementById('header');

openMenu.addEventListener("click", () =>{
    header.style.left = "0";

});

closeMenu.addEventListener("click", ()=> {
    header.style.left = "-250px";

})