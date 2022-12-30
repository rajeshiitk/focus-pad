const tasks = document.getElementsByClassName("tasks");
// const task = document.querySelector(".task");
const task  =  document.getElementsByClassName("task");



for(let  i = 0 ; i<tasks.length ;i++){
    tasks[i].addEventListener("click",(e)=>{
        e.preventDefault();
        tasks[i].classList.toggle("active");
    });
}
