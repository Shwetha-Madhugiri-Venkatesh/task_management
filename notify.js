window.onload = function () {
    var stored = localStorage.getItem("data");
    var extract = stored ? JSON.parse(stored) : {};
    var obj_keys = Object.keys(extract);
    for (var x = 0; x < obj_keys.length; x++) {
        var status_1 = extract[obj_keys[x]]["task_status"];
        var task = extract[obj_keys[x]]["task"];
        var date = new Date();
        var start_date = new Date(task[1]);
        if (status_1 == false && (start_date <= date)) {
            create_notification(task);
        }
    }
};
function create_notification(task) {
    var table = document.getElementById("table");
    var first = document.getElementById("first");
    if (first) {
        first.remove();
    }
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = "The task named ".concat(task[0], " is yet to start!!");
    tr.append(td);
    table === null || table === void 0 ? void 0 : table.append(tr);
}
