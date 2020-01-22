var pp ={
    name:["iwen","imi","if","go"],
    getname:function(){
        return ()=>{
            var i=Math.floor(Math.random()*4);
            return{
                n:this.name[i]
            }
        }
    }
}

var myname = pp.getname();
alert("名字"+myname().n);