//import { create_table } from "./dashboard";
let fil_rows={};

window.onload=()=>{
    let start_btn = document.getElementsByClassName("start");
    let stored = localStorage.getItem("data");
    let extract:{string:{task:string[],task_status:boolean}} = stored?JSON.parse(stored):{};
    let obj_keys = Object.keys(extract);
    if(obj_keys.length==0){
        return;
    }
    let date = new Date();
    // let rows:string[][]=[];
    // for(let x=0;x<obj_keys.length;x++){
    //     rows.push(extract[obj_keys[x]]);
    // }
    // fil_rows = rows.filter((item)=>{
    //     if(new Date(item[1]).toDateString()==date.toDateString()){
    //         return item;
    //     } 
    // });
    for(let x=0;x<obj_keys.length;x++){
        if(new Date(extract[obj_keys[x]]["task"][1]).toDateString()==date.toDateString()){
            fil_rows[obj_keys[x]]=extract[obj_keys[x]];
        } 
    }
    let fil_keys = Object.keys(fil_rows);
    for(let x=0;x<fil_keys.length;x++){
        create_table1(fil_rows[fil_keys[x]]["task"],fil_rows[fil_keys[x]]["task_status"]);
    }
}
let count=0;
let first_row = document.getElementById("first");
 function create_table1(arr:string[],flag){
    if(first_row){
        first_row.remove();
    }
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
     tr.setAttribute("id", `row${count}`);
    for(let x=0;x<arr.length;x++){
        let td = document.createElement("td");
        let text = document.createTextNode(arr[x]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    let td = document.createElement("td");
    td.setAttribute("id","td_dots");
    if(flag==true){
        td.innerHTML=`<button id=start${count} class="start" onclick="start_click(this,${count})" style="background-color:lightgrey" disabled>start</button>`;
    }else{
          td.innerHTML=`<button id=start${count} class="start" onclick="start_click(this,${count})"  disabled>start</button>`;
    }
    tr.appendChild(td);
    table?.appendChild(tr);
    count++;
}
function start_click(obj,index){
      obj.setAttribute("style","background-color:lightgray");
      obj.setAttribute("disabled","true");
     let stored = localStorage.getItem("data");
    let extract:{string:{task:string[],task_status:boolean}} = stored?JSON.parse(stored):{};
    let obj_keys = Object.keys(extract);
    extract[obj_keys[index]]["task_status"]=true;
    localStorage.setItem("data",JSON.stringify(extract));
    check_end()
}
setInterval(()=>{
    let start = document.getElementsByClassName("start");
    let date=new Date();
 let fil_keys = Object.keys(fil_rows);
 for(let x=0;x<fil_keys.length;x++){
      let time=new Date(fil_rows[fil_keys[x]]["task"][1]);
      if(time<=date){
        start[x]?.removeAttribute("disabled");
    }
 }
 let stored = localStorage.getItem("data");
    let extract:{string:{task:string[],task_status:boolean}} = stored?JSON.parse(stored):{};
    let length1=Object.keys(extract).length;
 for(let x=0;x<fil_keys.length;x++){
      let time=new Date(fil_rows[fil_keys[x]]["task"][2]);
      if(time<=date){
        delete extract[fil_keys[x]];
      }
 }
 localStorage.setItem("data",JSON.stringify(extract));
 let length2=Object.keys(extract).length;
 if(length2<length1){
    location.reload();
 }
},500);

function check_end(){
}