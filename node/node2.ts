class no1{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    tell(){
        return this.name+this.age;
    }
}

class student extends no1{
    school:string;
    constructor(school:string){
        super("高强",18);
        this.school = school;
    }
    tell(){
        return this.name+this.age+this.school;
    }
}

var s = new student("华坚科技职业学校");
// s.name = "高强";
// s.age = 18;
// s.school = "华坚科技职业学校";
alert(s.tell());