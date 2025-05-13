//import { create_table } from "./dashboard";

window.onload=()=>{
    let stored = localStorage.getItem("data");
    let extract:string[][] = stored?JSON.parse(stored):[];
    if(extract.length==0){
        return;
    }
    let date = new Date();
    let fil_rows:string[][] = extract.filter((item)=>{
        if(new Date(item[1]).toDateString()==date.toDateString()){
            return item;
        } 
    });
    console.log(fil_rows);
    for(let x=0;x<fil_rows.length;x++){
        create_table1(fil_rows[x]);
    }
}
let count=0;
let first_row = document.getElementById("first");
 function create_table1(arr:string[]){
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