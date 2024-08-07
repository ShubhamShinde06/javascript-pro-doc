const inputBox = document.getElementById("input-box");
const list_Box = document.getElementById("list-box");

function addtask() {
    if(inputBox.value === ''){
        alert("You must write somthing!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list_Box.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}

list_Box.addEventListener("click", function(e){

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

}, false);

function saveData(){
    localStorage.setItem("data", list_Box.innerHTML);
}

function showTask(){
    list_Box.innerHTML = localStorage.getItem("data");
}

showTask()