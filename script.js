const tasks = document.getElementsByClassName("tasks");
const task  =  document.getElementsByClassName("task");
const themeToggle = document.getElementsByClassName("theme-toggle");
const theme = document.getElementsByClassName("temp");


themeToggle[0].addEventListener("click",()=>{
    themeToggle[0].classList.toggle("moon");
    themeToggle[0].classList.toggle("sun");
    theme[0].classList.toggle("theme");

})


for(let  i = 0 ; i<tasks.length ;i++){
    task[i].addEventListener("click",()=>{
        tasks[i].classList.toggle("active");
    });
}
