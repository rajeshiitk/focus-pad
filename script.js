const tasks = document.getElementsByClassName("tasks");
const task = document.getElementsByClassName("task");


// theme costumisation
const themeToggle = document.getElementsByClassName("theme-toggle");
const theme = document.getElementsByClassName("temp");
const colour = document.getElementsByClassName("optr");
const blend = document.getElementsByClassName("container");
const optr = document.getElementsByClassName("optr");
const taskInput = document.getElementById("input");
const descInput = document.getElementById("input-desc");
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

// placeholder animation


let i=0;
// let j=0;
const todaysTask = "Todays Task";
// const descri = "description";
let placeholder = "";
// let placeholderdesc = "";

let id;
  function typing(){
    placeholder += todaysTask.charAt(i);
    // placeholder.
    const taskInput = document.getElementById("input");
    taskInput.setAttribute("placeholder",placeholder);
    // taskInput.style.textDecoration
    i++;
    id =  setTimeout(typing,80);
    // console.log(i) ; 
    if(placeholder === todaysTask)  {
        clearTimeout(id);
    }
}
typing();

// function destyping(){
//     placeholderdesc += descri.charAt(i);
//     // placeholder.
//     // console.log(placeholderdesc)
//     const descInput = document.getElementById("input-desc");
//     descInput.setAttribute("placeholder",placeholderdesc);
//     // descInput.style.textDecoration
//     j++;
//     setTimeout(destyping,100);    
// }
// // destyping();


// function revTyping(){
//     // placeholder = 
//     placeholder = todaysTask.slice(0,i);
//     // console.log(placeholder);
//     const taskInput = document.getElementById("input");
//     taskInput.setAttribute("placeholder",placeholder);
//     i--;
//     // setTimeout(revTyping,700);    
// }

// typing().then( revTyping());


{
let naam = localStorage.getItem("naam") ? localStorage.getItem("naam") : "";
const nameInput = document.getElementById("name") ;
const nameSection = document.getElementById("name-section");
const nameDone = document.createElement("i");
nameDone.setAttribute("class","fa-solid fa-circle-check");
nameSection.append(nameDone);

naam = nameInput.value;

nameInput.addEventListener("focus",()=>{
    nameSection.setAttribute("class", "nameDoneToggle");
});

nameDone.addEventListener("click",()=>{
    naam = nameInput.value;
    localStorage.setItem("name", naam);
    nameSection.classList.remove("nameDoneToggle");
});

nameInput.value = localStorage.getItem("name");


}





const taskArray =localStorage.getItem("taskArray") ? JSON.parse(localStorage.getItem("taskArray")) :  [] ; 



// heart button   
const taskContainer = document.getElementsByClassName("task-container");
const btn = document.getElementById("btn");

printTasks();
// if()


function printTasks(){
    taskArray.forEach(taskFunction);
}


// let index = 0;
function taskFunction(value,index) {
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
    tempTask.setAttribute("onclick", "accordFunc(this.id)");


   
    tempTask.setAttribute("readonly", true);
       tempTask.value = value.head;
      
    // tempTask.value = taskInput.value;
    addTaskList.append(tempTask);

    // edit button
    const tempEdit = document.createElement("span");
    tempEdit.setAttribute("class", "edit edit-icon-toggle");
    tempEdit.setAttribute("id", `edit-${index}`);
    tempEdit.setAttribute("onclick", "editFunc(this.id)");
     
    
    const tempIEdit = document.createElement("i");
    tempIEdit.setAttribute("class", "fa-regular fa-pen-to-square");
    const tempIEdit2 = document.createElement("i");
    tempIEdit2.setAttribute("class", "fa-solid fa-circle-check");

    tempEdit.append(tempIEdit);
    tempEdit.append(tempIEdit2);

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

    if(value.tick === false){
        const id = "desc-" + index;
        const id2 = "task-" + index;
        tempDesc.setAttribute("class","desc strike-line");
        tempTask.setAttribute("class","task strike-line");
        tempCheckBox.setAttribute("checked" , "checked");
    }

    // tempDesc.value = descInput.value;
    tempDesc.value = value.description;
    addTaskList.append(tempDesc);

    // Prepend addTaskList in taskContainer
    taskContainer[0].prepend(addTaskList);
}



function removeTasks() {
    taskArray.forEach(() => {
      const tasks = document.querySelector(".tasks");
      tasks.remove();
    });
  }

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(taskInput.value == ""){
        return null;
    }
    removeTasks();
    taskArray.push({
       head: (taskInput.value).toUpperCase(),
       description: descInput.value,
       tick : true      
    });
     
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    printTasks();
    accord();
});




// theme toggle


function accord() {
    for (let i = 0; i <= tasks.length; i++) {
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

function accordFunc(ayd){
    const iddd = ayd.slice(5);
    console.log(iddd);
    // task[i].addEventListener("click", () => {
        console.log(tasks[iddd]);
        tasks[iddd].classList.toggle("active");
    // });
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
    const idTask = "task-" + id.slice(5);
    const idDesc = "desc-" + id.slice(5);
    const taskEdit = document.getElementById(idTask);
    const descEdit = document.getElementById(idDesc);
    taskEdit.toggleAttribute("readonly");
    descEdit.toggleAttribute("readonly");
    taskArray[id.slice(5)].head = taskEdit.value;
    taskArray[id.slice(5)].description = descEdit.value;

    const editBtn = document.getElementById(id);
    editBtn.classList.toggle("done-icon-toggle");
    editBtn.classList.toggle("edit-icon-toggle");
   
    
    localStorage.setItem("taskArray", JSON.stringify(taskArray)); 



    // console.log(descEdit);
}

function checkFunc(id) {
    const idCheck = document.getElementById(id);
    const idTask = "task-" + id.slice(6);
    const taskStrike = document.getElementById(idTask);
    // taskStrike.innerHTML = (taskStrike.value).strike();
    // console.log((taskStrike.value).strike());

    // taskStrike.classList.add("strike-line");
    taskStrike.classList.toggle("strike-line");
    
    idDesc = "desc-" + id.slice(6);
    const descStrike = document.getElementById(idDesc);
    descStrike.classList.toggle("strike-line");
    if(taskArray[id.slice(6)].tick == true){
        taskArray[id.slice(6)].tick = false ;
    }
    else{
        taskArray[id.slice(6)].tick = true;
    }
    localStorage.setItem("taskArray", JSON.stringify(taskArray));   
}

// taskbox delete function 

function deleteFunc(id) {
    const idTaskBox = "taskbox-" + id.slice(7);
    const taskBox = document.getElementById(idTaskBox);
    // taskBox.remove();
    removeTasks();
    taskArray.splice(id.slice(7), 1);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    printTasks();

}