//import { create_table } from "./dashboard";
var fil_rows = {};
window.onload = function () {
    var start_btn = document.getElementsByClassName("start");
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    if (obj_keys.length == 0) {
        return;
    }
    var date = new Date();
    // let rows:string[][]=[];
    // for(let x=0;x<obj_keys.length;x++){
    //     rows.push(extract[obj_keys[x]]);
    // }
    // fil_rows = rows.filter((item)=>{
    //     if(new Date(item[1]).toDateString()==date.toDateString()){
    //         return item;
    //     } 
    // });
    for (var x = 0; x < obj_keys.length; x++) {
        if (new Date(extract[obj_keys[x]]["task"][1]).toDateString() == date.toDateString()) {
            fil_rows[obj_keys[x]] = extract[obj_keys[x]];
        }
    }
    var fil_keys = Object.keys(fil_rows);
    for (var x = 0; x < fil_keys.length; x++) {
        create_table1(fil_rows[fil_keys[x]]["task"], fil_rows[fil_keys[x]]["task_status"]);
    }
};
var count = 0;
var first_row = document.getElementById("first");
function create_table1(arr, flag) {
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
    if (flag == true) {
        td.innerHTML = "<button id=start".concat(count, " class=\"start\" onclick=\"start_click(this,").concat(count, ")\" style=\"background-color:lightgrey\" disabled>start</button>");
    }
    else {
        td.innerHTML = "<button id=start".concat(count, " class=\"start\" onclick=\"start_click(this,").concat(count, ")\"  disabled>start</button>");
    }
    tr.appendChild(td);
    table === null || table === void 0 ? void 0 : table.appendChild(tr);
    count++;
}
function start_click(obj, index) {
    obj.setAttribute("style", "background-color:lightgray");
    obj.setAttribute("disabled", "true");
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    extract[obj_keys[index]]["task_status"] = true;
    localStorage.setItem("data", JSON.stringify(extract));
    check_end();
}
setInterval(function () {
    var _a;
    var start = document.getElementsByClassName("start");
    var date = new Date();
    var fil_keys = Object.keys(fil_rows);
    for (var x = 0; x < fil_keys.length; x++) {
        var time = new Date(fil_rows[fil_keys[x]]["task"][1]);
        if (time <= date) {
            (_a = start[x]) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
        }
    }
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var length1 = Object.keys(extract).length;
    for (var x = 0; x < fil_keys.length; x++) {
        var time = new Date(fil_rows[fil_keys[x]]["task"][2]);
        if (time <= date) {
            delete extract[fil_keys[x]];
        }
    }
    localStorage.setItem("data", JSON.stringify(extract));
    var length2 = Object.keys(extract).length;
    if (length2 < length1) {
        location.reload();
    }
}, 500);
function check_end() {
}
