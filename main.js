const taskInputField = document.getElementById("taskInputField");
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
    }
    taskInputField.value = "";
}

