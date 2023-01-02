const tasks = document.getElementsByClassName("tasks");
const task = document.getElementsByClassName("task");
const themeToggle = document.getElementsByClassName("theme-toggle");
const theme = document.getElementsByClassName("temp");
const colour = document.getElementsByClassName("optr");
const blend = document.getElementsByClassName("container");
const optr = document.getElementsByClassName("optr");
const taskInput = document.getElementById("input")
const descInput = document.getElementById("input-desc")

let index = 0;
function taskFunction() {
    const addTaskList = document.createElement("div");
    addTaskList.setAttribute("class", "tasks");
    addTaskList.setAttribute("id", `taskbox-${index}`);



    // task status checkbox
    const tempCheckBox = document.createElement("input");
    tempCheckBox.setAttribute("type", "checkbox");
    tempCheckBox.setAttribute("class", "check");
    tempCheckBox.setAttribute("onclick", "checkFunc(this.id)");

    tempCheckBox.setAttribute("id", `check-${index}`);

    addTaskList.append(tempCheckBox);

    // task heading 
    const tempTask = document.createElement("input");
    tempTask.setAttribute("type", "text");
    tempTask.setAttribute("class", "task");
    tempTask.setAttribute("id", `task-${index}`);

    tempTask.setAttribute("readonly", true);

    tempTask.value = taskInput.value;
    addTaskList.append(tempTask);

    // edit button
    const tempEdit = document.createElement("span");
    tempEdit.setAttribute("class", "edit");
    tempEdit.setAttribute("id", `edit-${index}`);
    tempEdit.setAttribute("onclick", "editFunc(this.id)");


    const tempIEdit = document.createElement("i");
    tempIEdit.setAttribute("class", "fa-regular fa-pen-to-square");
    tempEdit.append(tempIEdit);

    addTaskList.append(tempEdit);

    // delete button
    const tempDelete = document.createElement("span");
    tempDelete.setAttribute("class", "delete");
    tempDelete.setAttribute("id", `delete-${index}`);
    tempDelete.setAttribute("onclick", "deleteFunc(this.id)");



    const tempIDelete = document.createElement("i");
    tempIDelete.setAttribute("class", "fa-solid fa-trash-can");
    tempDelete.append(tempIDelete);

    addTaskList.append(tempDelete);

    // desc of task
    const tempDesc = document.createElement("input");
    tempDesc.setAttribute("type", "text");
    tempDesc.setAttribute("class", "desc");
    tempDesc.setAttribute("readonly", "readonly");
    tempDesc.setAttribute("id", `desc-${index}`);


    tempDesc.value = descInput.value;
    addTaskList.append(tempDesc);

    // Prepend addTaskList in taskContainer
    taskContainer[0].prepend(addTaskList);

    index++;
}


// heart button
const taskContainer = document.getElementsByClassName("task-container");
const btn = document.getElementById("btn");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    taskFunction();
    accord();
});


const logo = document.getElementById("logo");


themeToggle[0].addEventListener("click", () => {
    themeToggle[0].classList.toggle("moon");
    themeToggle[0].classList.toggle("sun");
    theme[0].classList.toggle("theme");

});

logo.addEventListener("click", () => {
    optr[0].classList.toggle("operator")
    colour[0].classList.toggle("color");
    blend[0].classList.toggle("blend");
});

function accord() {

    for (let i = 0; i < tasks.length; i++) {
        task[i].addEventListener("click", () => {
            tasks[i].classList.toggle("active");
        });
    }
}


for (let i = 0; i < tasks.length; i++) {
    task[i].addEventListener("click", () => {
        tasks[i].classList.toggle("active");
    });
}

// document.keydown((e)=>{
//     if(e.which === 123){
//         return false;
//     }
// });


// edit button

// const editBtn = document.getElementsByClassName("edit");

// editBtn.addEventListener("click",()=>{
//     const taskEdit = document.querySelector(".task ")

// })

// readonly toggle in task name and desc of task
function editFunc(id) {
    typeof id;
    const idTask = "task-" + id.slice(5, 6);
    const idDesc = "desc-" + id.slice(5, 6);
    const taskEdit = document.getElementById(idTask);
    const descEdit = document.getElementById(idDesc);
    taskEdit.toggleAttribute("readonly")
    descEdit.toggleAttribute("readonly");
    console.log(descEdit);
}

function checkFunc(id) {
    const idCheck = document.getElementById(id);
    const idTask = "task-" + id.slice(6, 7);
    const taskStrike = document.getElementById(idTask);
    // taskStrike.innerHTML = (taskStrike.value).strike();
    // console.log((taskStrike.value).strike());

    // taskStrike.classList.add("strike-line");
    taskStrike.classList.toggle("strike-line");

    idDesc = "desc-" + id.slice(6, 7);
    const descStrike = document.getElementById(idDesc);
    descStrike.classList.toggle("strike-line");
}

// taskbox delete function 

function deleteFunc(id) {
    const idTaskBox = "taskbox-" + id.slice(7);
    const taskBox = document.getElementById(idTaskBox);
    taskBox.remove();
}