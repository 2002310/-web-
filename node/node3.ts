// public 共有的 默认的
//private 私有的 无法直接访问


class pepro{
    name:string;
    age:number;
    public wodego(){
        return this.name + this.age;
    }

}

class teacher extends pepro{
    school:string;
    wodego(){
        return this.name+this.age+this.school;
    }
}

var t = new teacher();
t.name = "高强";
t.age = 18;
t.school = "华坚科技职业学校";
alert(t.wodego());