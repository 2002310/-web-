class hellow{
    private _name:string;
    tell(){
        return this.name;
    }

    get name():string{
        return this._name;
    }
    
    set name(newname:string){
        if(newname == "iwen"){
            this._name = newname;
        }else{
            alert("请正确填写用户名");
        }
    }    

}

var h = new hellow();
h.name = "iwen";
alert(h.tell());