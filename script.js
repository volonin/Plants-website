let input = document.querySelector("#input");
let crice = document.querySelector(".crice");
let massage = document.querySelector(".massage");
let img1 = document.querySelector("#colection-img-1");
let img2 = document.querySelector("#colection-img-2");
let img3 = document.querySelector("#colection-img-3");
let img4 = document.querySelector("#colection-img-4");
let btn = document.querySelector(".btn");

let massageX = false;



input.firstElementChild.addEventListener("focus", function (){
    input.style.height = "60px";
    input.style.width = "23%";
})
input.firstElementChild.addEventListener("blur", function (){
    input.style.height = "55px";
    input.style.width = "17%";
})

crice.addEventListener('mouseover', function (){
    crice.firstElementChild.style.width = "20px";
    crice.firstElementChild.style.height = "20px";
})
crice.addEventListener('mouseout', function (){
    crice.firstElementChild.style.width = "15px";
    crice.firstElementChild.style.height = "15px";
})

crice.addEventListener("click", function (){
    if (!massageX){
        massage.style.opacity = "1";
        massageX = true;
    }else{
        massage.style.opacity = "0";
        massageX = false;
    }
})
img1.addEventListener('mouseover', function (){
    img1.src = "Img/Colection/1.png";
})
img1.addEventListener('mouseout', function (){
    img1.src = "Img/Colection/unsplash_kyt0PkBSCNQ.png";
})
img2.addEventListener('mouseover', function (){
    img2.src = "Img/Colection/2.png";
})
img2.addEventListener('mouseout', function (){
    img2.src = "Img/Colection/unsplash_fvQ_WLAs5YQ.png";
})
img3.addEventListener('mouseover', function (){
    img3.src = "Img/Colection/3.png";
})
img3.addEventListener('mouseout', function (){
    img3.src = "Img/Colection/unsplash_UV81E0oXXWQ.png";
})
img4.addEventListener('mouseover', function (){
    img4.src = "Img/Colection/4.png";
})
img4.addEventListener('mouseout', function (){
    img4.src = "Img/Colection/unsplash_nylcMEgK8EQ.png";
})
