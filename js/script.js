const menu = document.getElementById("menu");//botton menu
const actions = document.getElementById("actions");//menu

menu.addEventListener("click",()=>{
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
});

actions.addEventListener("click",()=>{
actions.classList.toggle("is-active");
menu.classList.toggle("is-active");
});
