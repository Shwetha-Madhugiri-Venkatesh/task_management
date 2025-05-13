function show_sidebar(){
    let side_bar:HTMLElement = document.getElementById("sidebar") as HTMLElement;
    let style = window.getComputedStyle(side_bar);
    if(style.display=="flex"){
        side_bar?.setAttribute("style","display:none");
    }
    else{
         side_bar?.setAttribute("style","display:flex");
    }
}
function my_dashboard(obj){
    let task_menu = document.getElementById("task");
    task_menu?.setAttribute("style","background-color:white");
    let notify_menu = document.getElementById("notify");
    notify_menu?.setAttribute("style","background-color:white");
    let content = document.getElementById("content");
    if (content) {
        content.innerHTML = "";
    }
    let iffram = document.createElement("iframe");
    iffram.setAttribute("src","dashboard.html");
    iffram.setAttribute("id","dashboard_iframe");
    iffram.setAttribute("width","100%");
    iffram.setAttribute("height","100%");
    iffram.setAttribute("style","border:none");
    content?.appendChild(iffram);
    obj.setAttribute("style","background-color:gold");
}
function my_task(obj){
    let content:HTMLElement = document.getElementById("content") as HTMLElement;
    if (content) {
        content.innerHTML = "";
    }
    let dash_menu = document.getElementById("dash");
    dash_menu?.setAttribute("style","background-color:white");
    let notify_menu = document.getElementById("notify");
    notify_menu?.setAttribute("style","background-color:white");
    let iffram = document.createElement("iframe");
    iffram.setAttribute("src","my_task.html");
    iffram.setAttribute("width","100%");
    iffram.setAttribute("height","100%");
    iffram.setAttribute("style","border:none");
    content?.appendChild(iffram);
    obj.setAttribute("style","background-color:gold");
}

function notify_me(obj){
    let content:HTMLElement = document.getElementById("content") as HTMLElement;
    if (content) {
        content.innerHTML = "";
    }
    let dash_menu = document.getElementById("dash");
    dash_menu?.setAttribute("style","background-color:white");
    let task_menu = document.getElementById("task");
    task_menu?.setAttribute("style","background-color:white");
    let iffram = document.createElement("iframe");
    iffram.setAttribute("src","notify.html");
    iffram.setAttribute("width","100%");
    iffram.setAttribute("height","100%");
    iffram.setAttribute("style","border:none");
    content?.appendChild(iffram);
    obj.setAttribute("style","background-color:gold");
}