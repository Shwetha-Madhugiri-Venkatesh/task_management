var first_row = document.getElementById("first");
var dialog = document.getElementById("dialog");
var start_date = document.getElementById("start_time");
var date = new Date().toISOString().slice(0, 16);
;
start_date === null || start_date === void 0 ? void 0 : start_date.setAttribute("min", "".concat(date));
function add() {
    document.getElementById("name").value = "";
    document.getElementById("start_time").value = "";
    document.getElementById("end_time").value = "";
    var edit_label = document.getElementById("label");
    edit_label.innerHTML = "Add task";
    dialog.showModal();
    dialog.setAttribute("style", "display:block");
}
var stored = localStorage.getItem("data");
var extract = stored ? JSON.parse(stored) : {};
var obj_key = Object.keys(extract);
var count_row = 0;
if (obj_key.length > 0) {
    var str = obj_key[obj_key.length - 1];
    var match = str.match(/\d+/);
    if (match) {
        count_row = parseInt(match[0]) + 1;
    }
}
else {
    count_row = 0;
}
function submit_func() {
    var task_name = document.getElementById("name").value;
    var start_date = document.getElementById("start_time").value;
    var end_date = document.getElementById("end_time").value;
    console.log(task_name, start_date, end_date);
    if (first_row) {
        first_row.remove();
    }
    var form = document.getElementById("form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    if (start_date == end_date) {
        alert("The start and end dates can not be same");
        return;
    }
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    for (var x = 0; x < obj_keys.length; x++) {
        if (start_date <= extract[obj_keys[x]]["task"][2] || end_date <= extract[obj_keys[x]]["task"][2]) {
            alert("Task has been already assigned.");
            return;
        }
    }
    var row = [task_name, start_date, end_date];
    var obj_value = {
        task: row,
        task_status: false,
    };
    extract["row".concat(count_row)] = obj_value;
    localStorage.setItem("data", JSON.stringify(extract));
    create_table(row, count_row);
    count_row++;
    dialog.close();
    dialog.setAttribute("style", "display:none");
}
window.onload = function () {
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    if (obj_keys.length > 0) {
        for (var x = 0; x < obj_keys.length; x++) {
            create_table(extract[obj_keys[x]]["task"], x);
        }
    }
};
function create_table(arr, count) {
    if (first_row) {
        first_row.remove();
    }
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    tr.setAttribute("id", "row".concat(count));
    for (var x = 0; x < arr.length; x++) {
        var td_1 = document.createElement("td");
        var text = document.createTextNode(arr[x]);
        td_1.appendChild(text);
        tr.appendChild(td_1);
    }
    var td = document.createElement("td");
    td.setAttribute("id", "td_dots");
    td.innerHTML = "<div class=\"div_ele\">\n            <div class=\"dots\" id=\"dots".concat(count, "\" onclick=\"dots_click(").concat(count, ")\">\n                <span class=\"p-dot\">.</span>\n                <span class=\"p-dot\">.</span>\n                <span class=\"p-dot\">.</span>\n                 <span class=\"p-dot\"></span>\n                <span class=\"p-dot\"></span>\n                <span class=\"p-dot\"></span>\n            </div>\n            </div>");
    tr.appendChild(td);
    table === null || table === void 0 ? void 0 : table.appendChild(tr);
}
var pop_up = document.getElementById("popup");
function dots_click(id) {
    pop_up.remove();
    var div_ele = document.getElementsByClassName("div_ele");
    div_ele[id].appendChild(pop_up);
    pop_up.setAttribute("style", "display:flex;");
    var delete_div = document.getElementById("del");
    delete_div === null || delete_div === void 0 ? void 0 : delete_div.setAttribute("style", "display:flex;cursor: pointer;");
    delete_div === null || delete_div === void 0 ? void 0 : delete_div.setAttribute("onclick", "delete_(".concat(id, ")"));
    var edit_div = document.getElementById("edit");
    edit_div === null || edit_div === void 0 ? void 0 : edit_div.setAttribute("style", "display:flex;cursor: pointer;");
    edit_div === null || edit_div === void 0 ? void 0 : edit_div.setAttribute("onclick", "edit_(".concat(id, ")"));
}
function remove() {
    if (pop_up.style.display == "flex") {
        pop_up.style.display = "none";
    }
}
function close_dialog() {
    dialog.close();
    dialog.setAttribute("style", "diaplay:none");
}
function set_end() {
    var end_date = document.getElementById("end_time");
    var start_date = document.getElementById("start_time").value;
    end_date === null || end_date === void 0 ? void 0 : end_date.setAttribute("min", "".concat(start_date));
}
function reset_func() {
    document.getElementById("name").value = "";
    document.getElementById("start_time").value = "";
    document.getElementById("end_time").value = "";
}
function delete_(num) {
    if (confirm("Are you sure want to delete this record?")) {
        var stored_1 = localStorage.getItem("data");
        var extract_1 = stored_1 ? JSON.parse(stored_1) : {};
        var obj_keys = Object.keys(extract_1);
        var clicked_row = document.getElementById("row".concat(num));
        var length1 = Object.keys(extract_1).length;
        delete extract_1[obj_keys[num]];
        var length2 = Object.keys(extract_1).length;
        localStorage.setItem("data", JSON.stringify(extract_1));
        if (length2 < length1) {
            location.reload();
        }
    }
    else {
        return;
    }
}
function edit_(num) {
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    var row = extract[obj_keys[num]]["task"];
    document.getElementById("name").value = row[0];
    document.getElementById("start_time").value = row[1];
    document.getElementById("end_time").value = row[2];
    dialog.showModal();
    dialog.setAttribute("style", "display:block");
    var edit_label = document.getElementById("label");
    edit_label.innerHTML = "Edit task";
    var save = document.getElementById("submit_btn");
    save === null || save === void 0 ? void 0 : save.setAttribute("onclick", "edit_submit(".concat(num, ")"));
}
function edit_submit(num) {
    var task_name = document.getElementById("name").value;
    var start_date = document.getElementById("start_time").value;
    var end_date = document.getElementById("end_time").value;
    console.log(task_name, start_date, end_date);
    var form = document.getElementById("form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    if (start_date == end_date) {
        alert("The start and end dates can not be same");
        return;
    }
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    extract[obj_keys[num]]["task"] = [];
    for (var x = 0; x < obj_keys.length; x++) {
        if (start_date <= extract[obj_keys[x]]["task"][2] || end_date <= extract[obj_keys[x]]["task"][2]) {
            alert("Task has been already assigned.");
            return;
        }
    }
    var row = [task_name, start_date, end_date];
    extract[obj_keys[num]]["task"] = row;
    localStorage.setItem("data", JSON.stringify(extract));
    location.reload();
    dialog.close();
    dialog.setAttribute("style", "display:none");
}
setInterval(function () {
    var stored = localStorage.getItem("data");
    var date = new Date();
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    var length1 = Object.keys(extract).length;
    for (var x = 0; x < obj_keys.length; x++) {
        var time = new Date(extract[obj_keys[x]]["task"][2]);
        if (time <= date) {
            delete extract[obj_keys[x]];
        }
    }
    localStorage.setItem("data", JSON.stringify(extract));
    var length2 = Object.keys(extract).length;
    if (length2 < length1) {
        location.reload();
    }
}, 500);
