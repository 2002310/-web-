class node6{
    gra:string;
    constructor(nas:string){
        this.gra = nas;
    }

    gret(){
        return "hello"+this.gra;
    }
}

var grn:node6;
grn = new node6("iwen");
alert(grn.gret());