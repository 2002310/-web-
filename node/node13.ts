interface no1{
    name?:string;
    age?:number;
}

function no2(no3:no1){
    console.log(no3.name);
}

var my = {
    name : "jack"
}

no2(my);