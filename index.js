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
    var task_menu = document.getElementById("task");
    task_menu === null || task_menu === void 0 ? void 0 : task_menu.setAttribute("style", "background-color:white");
    var notify_menu = document.getElementById("notify");
    notify_menu === null || notify_menu === void 0 ? void 0 : notify_menu.setAttribute("style", "background-color:white");
    var content = document.getElementById("content");
    if (content) {
        content.innerHTML = "";
    }
    var iffram = document.createElement("iframe");
    iffram.setAttribute("src", "dashboard.html");
    iffram.setAttribute("id", "dashboard_iframe");
    iffram.setAttribute("width", "100%");
    iffram.setAttribute("height", "100%");
    iffram.setAttribute("style", "border:none");
    content === null || content === void 0 ? void 0 : content.appendChild(iffram);
    obj.setAttribute("style", "background-color:gold");
}
function my_task(obj) {
    var content = document.getElementById("content");
    if (content) {
        content.innerHTML = "";
    }
    var dash_menu = document.getElementById("dash");
    dash_menu === null || dash_menu === void 0 ? void 0 : dash_menu.setAttribute("style", "background-color:white");
    var notify_menu = document.getElementById("notify");
    notify_menu === null || notify_menu === void 0 ? void 0 : notify_menu.setAttribute("style", "background-color:white");
    var iffram = document.createElement("iframe");
    iffram.setAttribute("src", "my_task.html");
    iffram.setAttribute("width", "100%");
    iffram.setAttribute("height", "100%");
    iffram.setAttribute("style", "border:none");
    content === null || content === void 0 ? void 0 : content.appendChild(iffram);
    obj.setAttribute("style", "background-color:gold");
}
function notify_me(obj) {
    var content = document.getElementById("content");
    if (content) {
        content.innerHTML = "";
    }
    var dash_menu = document.getElementById("dash");
    dash_menu === null || dash_menu === void 0 ? void 0 : dash_menu.setAttribute("style", "background-color:white");
    var task_menu = document.getElementById("task");
    task_menu === null || task_menu === void 0 ? void 0 : task_menu.setAttribute("style", "background-color:white");
    var iffram = document.createElement("iframe");
    iffram.setAttribute("src", "notify.html");
    iffram.setAttribute("width", "100%");
    iffram.setAttribute("height", "100%");
    iffram.setAttribute("style", "border:none");
    content === null || content === void 0 ? void 0 : content.appendChild(iffram);
    obj.setAttribute("style", "background-color:gold");
}
