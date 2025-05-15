window.onload=()=>{
    let stored = localStorage.getItem("data");
    let extract:{string:{task:[],task_status:boolean}}= stored?JSON.parse(stored):{};
    let obj_keys = Object.keys(extract);
   for(let x=0;x<obj_keys.length;x++){
    let status = extract[obj_keys[x]]["task_status"];
    let task = extract[obj_keys[x]]["task"];
    let date = new Date();
    let start_date = new Date(task[1]);
    if(status==false && (start_date<=date)){
        create_notification(task);
    }
   }
}
function create_notification(task){
    let table = document.getElementById("table");
    let first = document.getElementById("first");
    if(first){
        first.remove();
    }
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML=`The task named ${task[0]} is yet to start!!`;
    tr.append(td);
    table?.append(tr);
}