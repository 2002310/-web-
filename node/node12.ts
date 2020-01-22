interface tebb{                 //-- interface  接口 定义符
    name:string;
}

function kaos(nas:tebb){
    console.log(nas.name);
}

var myname={name:"王者荣耀"}

 kaos(myname);