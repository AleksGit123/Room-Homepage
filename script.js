// burger variables

let burgerMenu = document.querySelector(".burger__menu");
let burgerMenuList = document.querySelector(".burger__menu__list");
let closeIcon = document.querySelector(".close__icon");

// scroll images
let scrollImages = ["./images/desktop-image-hero-1.jpg","./images/desktop-image-hero-2.jpg","./images/desktop-image-hero-3.jpg"];
let arrowLeft = document.querySelector(".arrow__left");
let arrowRight = document.querySelector(".arrow__right");
let imageDiv = document.querySelector(".image__div1")
let index = 0;

burgerMenu.addEventListener("click",()=>{
    burgerMenuList.classList.add("active");
})

closeIcon.addEventListener("click",()=>{
    burgerMenuList.classList.remove("active");
})

arrowLeft.addEventListener("click",()=>{
    index--;
    if(index<0){
        index = scrollImages.length-1;
    }
    imageDiv.style.backgroundImage = `url(${scrollImages[index]})`;
    console.log(index)
})

arrowRight.addEventListener("click",()=>{
    index++;
    if(index>scrollImages.length-1){
        index = 0;
    }
    imageDiv.style.backgroundImage = `url(${scrollImages[index]})`;
    console.log(index)
})
