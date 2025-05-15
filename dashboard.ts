let first_row = document.getElementById("first");
let dialog:HTMLDialogElement= document.getElementById("dialog") as HTMLDialogElement;
let start_date = document.getElementById("start_time");
let date = new Date().toISOString().slice(0, 16);;
start_date?.setAttribute("min",`${date}`);
function add(){
    (document.getElementById("name") as HTMLInputElement).value="";
    (document.getElementById("start_time") as HTMLInputElement).value="";
    (document.getElementById("end_time") as HTMLInputElement).value="";
    let edit_label:HTMLElement = document.getElementById("label") as HTMLElement;
    edit_label.innerHTML="Add task";
    dialog.showModal();
    dialog.setAttribute("style","display:block");
}
let stored = localStorage.getItem("data");
let extract: {string:{task:string[],task_status:boolean}}= stored ? JSON.parse(stored) : {};
let obj_key = Object.keys(extract);
let count_row:number=0;
if(obj_key.length>0){
    let str = obj_key[obj_key.length-1]
     let match = str.match(/\d+/);
     if(match){
        count_row=parseInt(match[0])+1;
     }
}else{
    count_row = 0;
}
function submit_func(){
    let task_name = (document.getElementById("name") as HTMLInputElement).value;
    let start_date = (document.getElementById("start_time") as HTMLInputElement).value;
    let end_date = (document.getElementById("end_time") as HTMLInputElement).value;
    console.log(task_name,start_date,end_date);
    if(first_row){
        first_row.remove();
    }
    let form:HTMLFormElement = document.getElementById("form") as HTMLFormElement;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    if(start_date==end_date){
        alert("The start and end dates can not be same");
        return;
    }
    let stored = localStorage.getItem("data");
    let extract: {string:{task:string[],task_status:boolean}}= stored ? JSON.parse(stored) : {};
    let row =[task_name,start_date,end_date];
    let obj_value:{task:string[],task_status:boolean}={
        task:row,
        task_status:false,
    };
    extract[`row${count_row}`]=obj_value;
    localStorage.setItem("data",JSON.stringify(extract));
    create_table(row,count_row);
    count_row++;
    dialog.close();
    dialog.setAttribute("style","display:none");
}
window.onload = ()=>{
    let stored = localStorage.getItem("data");
    let extract:{string:{task:string[],task_status:boolean}} = stored?JSON.parse(stored):{};
    let obj_keys = Object.keys(extract);
    if(obj_keys.length>0){
        for(let x=0;x<obj_keys.length;x++){
            create_table(extract[obj_keys[x]]["task"],x);
        }
    }
}
 function create_table(arr:string[],count:number){
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
    td.innerHTML=`<div class="div_ele">
            <div class="dots" id="dots${count}" onclick="dots_click(${count})">
                <span class="p-dot">.</span>
                <span class="p-dot">.</span>
                <span class="p-dot">.</span>
                 <span class="p-dot"></span>
                <span class="p-dot"></span>
                <span class="p-dot"></span>
            </div>
            </div>`;
    tr.appendChild(td);
    table?.appendChild(tr);
}
let pop_up:HTMLElement = document.getElementById("dots_inner")as HTMLElement;
function dots_click(id:number){
    if(pop_up.style.display=="flex"){
        pop_up.style.display="none";
    }else{
    let div_ele = document.getElementsByClassName("div_ele");
    div_ele[id].appendChild(pop_up);
    pop_up.setAttribute("style","display:flex;");
    let delete_div = document.getElementById("del");
    delete_div?.setAttribute("style","display:flex;cursor: pointer;");
    delete_div?.setAttribute("onclick",`delete_(${id})`);
    let edit_div = document.getElementById("edit");
    edit_div?.setAttribute("style","display:flex;cursor: pointer;");
    edit_div?.setAttribute("onclick",`edit_(${id})`);
    }
}

function close_dialog(){
    dialog.close();
   dialog.setAttribute("style","diaplay:none");
}
function set_end(){
    let end_date = document.getElementById("end_time");
    let start_date = (document.getElementById("start_time") as HTMLInputElement).value;
    end_date?.setAttribute("min",`${start_date}`);
}

function reset_func(){
    (document.getElementById("name") as HTMLInputElement).value="";
    (document.getElementById("start_time") as HTMLInputElement).value="";
    (document.getElementById("end_time") as HTMLInputElement).value="";
}

function delete_(num){
    if(confirm("Are you sure want to delete this record?")){
    let stored = localStorage.getItem("data");
    let extract:{string:{task:string[],task_status:boolean}} = stored?JSON.parse(stored):{};
    let obj_keys = Object.keys(extract);
    let clicked_row = document.getElementById(`row${num}`);
     let length1=Object.keys(extract).length;
    delete extract[obj_keys[num]];
     let length2=Object.keys(extract).length;
    localStorage.setItem("data",JSON.stringify(extract));
    if(length2<length1){
    location.reload();
 }
}else{
    return;
}
}

function edit_(num){
    let stored = localStorage.getItem("data");
    let extract: {string:{task:string[],task_status:boolean}}= stored ? JSON.parse(stored) : {};
    let obj_keys = Object.keys(extract);
    let row = extract[obj_keys[num]]["task"];
    (document.getElementById("name") as HTMLInputElement).value=row[0];
    (document.getElementById("start_time") as HTMLInputElement).value=row[1];
    (document.getElementById("end_time") as HTMLInputElement).value=row[2];
    dialog.showModal();
    dialog.setAttribute("style","display:block");
    let edit_label:HTMLElement = document.getElementById("label") as HTMLElement;
    edit_label.innerHTML="Edit task";
    let save = document.getElementById("submit_btn");
    save?.setAttribute("onclick",`edit_submit(${num})`);
}

function edit_submit(num){
    let task_name = (document.getElementById("name") as HTMLInputElement).value;
    let start_date = (document.getElementById("start_time") as HTMLInputElement).value;
    let end_date = (document.getElementById("end_time") as HTMLInputElement).value;
    console.log(task_name,start_date,end_date);
    let form:HTMLFormElement = document.getElementById("form") as HTMLFormElement;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    if(start_date==end_date){
        alert("The start and end dates can not be same");
        return;
    }
    let stored = localStorage.getItem("data");
    let extract: {string:{task:string[],task_status:boolean}}= stored ? JSON.parse(stored) : {};
    let obj_keys = Object.keys(extract);
    let row =[task_name,start_date,end_date];
    let prev = extract[obj_keys[num]]["task"];
    let changed=false;
    for(let x=0;x<prev.length;x++){
        if(prev[x]==row[x]){
            continue;
        }else{
            changed=true;
            prev[x]=row[x];
        }
    }
    extract[obj_keys[num]]["task"]=prev;
    localStorage.setItem("data",JSON.stringify(extract));
    if(changed){
        location.reload();
    }
    dialog.close();
    dialog.setAttribute("style","display:none");
}
setInterval(()=>{
 let stored = localStorage.getItem("data");
  let date=new Date();
    let extract:{string:{task:string[],task_status:boolean}} = stored?JSON.parse(stored):{};
     let obj_keys = Object.keys(extract);
    let length1=Object.keys(extract).length;
 for(let x=0;x<obj_keys.length;x++){
      let time=new Date(extract[obj_keys[x]]["task"][2]);
      if(time<=date){
        delete extract[obj_keys[x]];
      }
 }
 localStorage.setItem("data",JSON.stringify(extract));
 let length2=Object.keys(extract).length;
 if(length2<length1){
    location.reload();
 }
},500);