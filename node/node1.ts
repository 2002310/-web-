class passno{
    name:string;
    age:number;
    xinb:string;
    constructor(name:string,age:number,xinb:string){
        this.name = name;
        this.age = age;
        this.xinb = xinb;
    }
    pe(){
        return this.name+":"+this.age+":"+this.xinb;
    }
}

var p = new passno("高强",18,"男");
p.pe();
