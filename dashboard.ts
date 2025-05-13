let first_row = document.getElementById("first");
let dialog:HTMLDialogElement= document.getElementById("dialog") as HTMLDialogElement;
function add(){
    dialog.showModal();
    dialog.setAttribute("style","display:block");
}
function submit_func(){
    let task_name = (document.getElementById("name") as HTMLInputElement).value;
    let start_date = (document.getElementById("start_time") as HTMLInputElement).value;
    let end_date = (document.getElementById("end_time") as HTMLInputElement).value;
    console.log(task_name,start_date,end_date);
    if(first_row){
        first_row.remove();
    }
    
    let stored = localStorage.getItem("data");
    let extract: string[][] = stored ? JSON.parse(stored) : [];
    let row =[task_name,start_date,end_date];
    extract.push(row);
    localStorage.setItem("data",JSON.stringify(extract));
    create_table(row);
    dialog.close();
    dialog.setAttribute("style","display:none");
}
window.onload = ()=>{
    let stored = localStorage.getItem("data");
    let extract:string[][] = stored?JSON.parse(stored):[];
    count=0;
    if(extract.length>0){
        for(let x=0;x<extract.length;x++){
            create_table(extract[x]);
        }
        count=0;
    }
}
let count=0;
 function create_table(arr:string[]){
    if(first_row){
        first_row.remove();
    }
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    for(let x=0;x<arr.length;x++){
        let td = document.createElement("td");
        let text = document.createTextNode(arr[x]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    let td = document.createElement("td");
    td.setAttribute("id","td_dots");
    td.innerHTML=`<div class="div_ele">
            <div class="dots" id="dots${count}" onmouseover="dots_click(${count})">
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
    count++;
}
let pop_up:HTMLElement = document.getElementById("dots_inner")as HTMLElement;
function dots_click(id:number){
    let div_ele = document.getElementsByClassName("div_ele");
    div_ele[id].appendChild(pop_up);
    pop_up?.setAttribute("style","display:flex");
}
