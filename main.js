// const taskAddButton = document.getElementById("taskAddButton");
const taskList = document.getElementById("taskList");

function addNewItem(){
    if (taskInputField.value ==""){
        alert("Please Enter Task");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = taskInputField.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "❎";
        li.appendChild(span);
    }
    taskInputField.value = "";
    taskInputField.focus();
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showList(){
    taskList.innerHTML = localStorage.getItem("data");
}

showList();