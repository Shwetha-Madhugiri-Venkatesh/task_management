var first_row = document.getElementById("first");
var dialog = document.getElementById("dialog");
function add() {
    dialog.showModal();
    dialog.setAttribute("style", "display:block");
}
function submit_func() {
    var task_name = document.getElementById("name").value;
    var start_date = document.getElementById("start_time").value;
    var end_date = document.getElementById("end_time").value;
    console.log(task_name, start_date, end_date);
    if (first_row) {
        first_row.remove();
    }
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : [];
    var row = [task_name, start_date, end_date];
    extract.push(row);
    localStorage.setItem("data", JSON.stringify(extract));
    create_table(row);
    dialog.close();
    dialog.setAttribute("style", "display:none");
}
window.onload = function () {
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : [];
    count = 0;
    if (extract.length > 0) {
        for (var x = 0; x < extract.length; x++) {
            create_table(extract[x]);
        }
        count = 0;
    }
};
var count = 0;
function create_table(arr) {
    if (first_row) {
        first_row.remove();
    }
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    for (var x = 0; x < arr.length; x++) {
        var td_1 = document.createElement("td");
        var text = document.createTextNode(arr[x]);
        td_1.appendChild(text);
        tr.appendChild(td_1);
    }
    var td = document.createElement("td");
    td.setAttribute("id", "td_dots");
    td.innerHTML = "<div class=\"div_ele\">\n            <div class=\"dots\" id=\"dots".concat(count, "\" onmouseover=\"dots_click(").concat(count, ")\">\n                <span class=\"p-dot\">.</span>\n                <span class=\"p-dot\">.</span>\n                <span class=\"p-dot\">.</span>\n                 <span class=\"p-dot\"></span>\n                <span class=\"p-dot\"></span>\n                <span class=\"p-dot\"></span>\n            </div>\n            </div>");
    tr.appendChild(td);
    table === null || table === void 0 ? void 0 : table.appendChild(tr);
    count++;
}
var pop_up = document.getElementById("dots_inner");
function dots_click(id) {
    var div_ele = document.getElementsByClassName("div_ele");
    div_ele[id].appendChild(pop_up);
    pop_up === null || pop_up === void 0 ? void 0 : pop_up.setAttribute("style", "display:flex");
}
