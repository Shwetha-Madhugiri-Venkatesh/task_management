//import { create_table } from "./dashboard";
window.onload = function () {
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : [];
    if (extract.length == 0) {
        return;
    }
    var date = new Date();
    var fil_rows = extract.filter(function (item) {
        if (new Date(item[1]).toDateString() == date.toDateString()) {
            return item;
        }
    });
    console.log(fil_rows);
    for (var x = 0; x < fil_rows.length; x++) {
        create_table1(fil_rows[x]);
    }
};
var count = 0;
var first_row = document.getElementById("first");
function create_table1(arr) {
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
