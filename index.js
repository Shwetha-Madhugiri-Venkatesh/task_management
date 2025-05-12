function show_sidebar() {
    var side_bar = document.getElementById("sidebar");
    var style = window.getComputedStyle(side_bar);
    if (style.display == "flex") {
        side_bar === null || side_bar === void 0 ? void 0 : side_bar.setAttribute("style", "display:none");
    }
    else {
        side_bar === null || side_bar === void 0 ? void 0 : side_bar.setAttribute("style", "display:flex");
    }
}
function my_dashboard(obj) {
    var content = document.getElementById("content");
    var iffram = document.createElement("iframe");
    iffram.setAttribute("src", "dashboard.html");
    iffram.setAttribute("width", "100%");
    iffram.setAttribute("height", "100%");
    iffram.setAttribute("style", "border:none");
    content === null || content === void 0 ? void 0 : content.appendChild(iffram);
    obj.setAttribute("style", "background-color:gold");
}
