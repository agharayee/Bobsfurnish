let cancel = document.getElementById("cancel");
const icon = document.getElementById('icon');
const iconClick = document.getElementById("secondNav");
const ThirdNav = document.getElementById('thirdNav');
let headercontent = document.getElementById("header-content");

cancel.addEventListener("click", function(){
    headercontent.style.display = "none";
})
        if(screen.width > 1100){
            iconClick.classList.remove("d-none");
            ThirdNav.classList.remove("d-none");
        }

icon.addEventListener('click', ()=>
    {
        if (icon.click && iconClick.classList.contains("d-none") && ThirdNav.classList.contains("d-none")){
            iconClick.classList.remove("d-none");
            ThirdNav.classList.remove("d-none")
        }
        else
        {
            iconClick.classList.add("d-none");
            ThirdNav.classList.add("d-none")
        }
})
 
// icon.addEventListener('click', ()=>
// {   
//     if (icon.click){
//     iconClick.style.display = 'flex';
//     ThirdNav.style.display = 'flex';
// }else if (icon.display = 'flex' && icon.click){
//     iconClick.style.display = 'none';
//     ThirdNav.style.display = 'none';
// }
    

// } )