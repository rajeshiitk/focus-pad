const tasks = document.getElementsByClassName("tasks");
// const task = document.querySelector(".task");
const task  =  document.getElementsByClassName("task");
// const input = document.getElementById("input");

//    input.setAttribute("readonly" , "readonly");
//    console.log(input);


for(let  i = 0 ; i<tasks.length ;i++){
    task[i].addEventListener("click",()=>{
        // tasks[i].setAttribute('');
        tasks[i].classList.toggle("active");
    });
}
