const startmenu_toggle = document.getElementsByClassName('startmenu_toggle');
const startMenu = document.getElementById('Start');
const menu = document.getElementById('menu');
const shutDown = document.getElementById('shutDown')
const power_btn = document.getElementsByClassName('power_btn')
const taskbar = document.getElementById('TASKBAR')
const body = document.querySelector("body")

menu.addEventListener("click",()=>{
    
    startMenu.classList.toggle("startmenu_toggle")
})

shutDown.addEventListener("click",()=>{
    taskbar.classList.add("startmenu_toggle");
    startMenu.classList.add("startmenu_toggle")

    body.style.backgroundImage="url('./shutdown.jpg')"
    body.style.backgroundSize="cover";
    body.style.backgroundRepeat="no-repeat";
    body.style.height="100vh";
    setTimeout(()=>{
        body.style.backgroundImage="url('./blackScreen.jpg')"
            body.style.backgroundSize="cover";
            body.style.backgroundRepeat="no-repeat";
            body.style.height="100vh";

    },3000)
    // shutDown.src = "./shutdown.jpg"
    
})