// function add(x,y){
//     return x+y;
// }

// var myapp=function(x,y){
//     return x+y;
// }

function add(x:number,y:number):string{
    return "hello word";
}

var myadd=function(x:number,y:string):string{
    return "hello ts"
}

var mad:(name:string,age:number)=>number=function(n:string,a:number):number{
    a=10;
    return a;
}
alert(add(10,20));