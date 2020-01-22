function att(name:string):string;
function att(age:number):number;
function att(xinb:any):any{
    if(xinb && typeof xinb === "string"){
        alert("姓名");
    }else{
        alert("性别");
    }
}
att("高强");