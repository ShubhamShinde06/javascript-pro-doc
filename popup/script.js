let showBox = document.getElementById("msg-box");
let priMsg = "primary msg"
let secMsg = "Secondary msg"
let sucMsg = "Success"
let danMsg = "Danger"
let warMsg = "Warning"
let darMsg = "Dark"


function btn1(msg){

    let box = document.createElement('div')
    box.classList.add('btn-msg')
    box.style.background = "#386BC0"
    box.style.color = "white"
    box.innerHTML = msg;
    showBox.appendChild(box)

    setTimeout(() => {
        box.classList.remove('btn-msg')
        box.innerHTML = "";
    },5000)

}

function btn2(msg){

    let box = document.createElement('div')
    box.classList.add('btn-msg')
    box.style.background = "#B1C6EA"
    box.style.color = "#294F8D"
    box.innerHTML = msg;
    showBox.appendChild(box)

    setTimeout(() => {
        box.classList.remove('btn-msg')
        box.innerHTML = "";
    },5000)

}

function btn3(msg){

    let box = document.createElement('div')
    box.classList.add('btn-msg')
    box.style.background = "#14A44D"
    box.style.color = "white"
    box.innerHTML = msg;
    showBox.appendChild(box)

    setTimeout(() => {
        box.classList.remove('btn-msg')
        box.innerHTML = "";
    },5000)

}

function btn4(msg){

    let box = document.createElement('div')
    box.classList.add('btn-msg')
    box.style.background = "#DC4C64"
    box.style.color = "white"
    box.innerHTML = msg;
    showBox.appendChild(box)

    setTimeout(() => {
        box.classList.remove('btn-msg')
        box.innerHTML = "";
    },5000)

}

function btn5(msg){

    let box = document.createElement('div')
    box.classList.add('btn-msg')
    box.style.background = "#E4A11B"
    box.style.color = "white"
    box.innerHTML = msg;
    showBox.appendChild(box)

    setTimeout(() => {
        box.classList.remove('btn-msg')
        box.innerHTML = "";
    },5000)

}

function btn6(msg){

    let box = document.createElement('div')
    box.classList.add('btn-msg')
    box.style.background = "#292929"
    box.style.color = "white"
    box.innerHTML = msg;
    showBox.appendChild(box)

    setTimeout(() => {
        box.classList.remove('btn-msg')
        box.innerHTML = "";
    },5000)

}

   