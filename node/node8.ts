function buliname(fistname?:string,lastname?:string){           // --可以在参数后＋问号 --表示不确定是否有这个参数， 可有可无  此时可以传递1个或两个参数
    if(lastname){
        return fistname+lastname;
    }else{
        return fistname;
    }
}

var bn = buliname("iwen","gket");
// var bn2 = buliname("ime");                                  --参数固定，不可少穿
// var bn3 = buliname("iwen","nak","jm");                      --参数固定，不可多穿 
// -加问号则表示可有可无


function bb(fistname:string,lastname:string="iwen"){                   //若参数有值，则在用户未设置值时默认使用该值
    return fistname+lastname;
}

var b1 = bb("iwen");
var b2 = bb("iwen","im");

document.getElementById("txt").innerHTML = b1;