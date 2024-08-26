let scrollBox = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");

scrollBox.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollBox.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    scrollBox.style.scrollBehavior = "soomth"
    scrollBox.scrollLeft += 100;
})

backBtn.addEventListener("click",()=>{
    scrollBox.style.scrollBehavior = "soomth"
    scrollBox.scrollLeft -= 900;
})