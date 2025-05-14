let object = {
        "shwetha":1,
        "manu":2,
    }
    class User{
        item:any[]=[];
        index:string[]=[];
        value:string[]=[];
        constructor(obj:{}){
           this.index=Object.keys(obj);
           this.value=Object.values(obj);
           for(let x=0;x<this.index.length;x++){
            this.item[this.index[x]]=this.value[x];
            }
        }
    }

    const user = new User(object);
    console.log(user);