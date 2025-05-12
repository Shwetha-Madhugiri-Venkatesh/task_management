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
    let content = document.getElementById("content");
    let iffram = document.createElement("iframe");
    iffram.setAttribute("src","dashboard.html");
    iffram.setAttribute("width","100%");
    iffram.setAttribute("height","100%");
    iffram.setAttribute("style","border:none");
    content?.appendChild(iffram);
    obj.setAttribute("style","background-color:gold");
}