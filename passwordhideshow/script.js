const iconShow = document.getElementById("icon-show")
const iconHide = document.getElementById("icon-hide")

iconHide.addEventListener('click',function(){
    let x = document.querySelector('input')
    x.type = "text"
    iconHide.style.display = "none"
    iconShow.style.display = "block"
    
})

iconShow.addEventListener('click',function(){
    let x = document.querySelector('input')
    x.type = "password"
    iconHide.style.display = "block"
    iconShow.style.display = "none"
})