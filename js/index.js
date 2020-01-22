var subnext = document.getElementsByClassName("sub");
var blinext = document.getElementsByClassName("bli");
var index = 0;
var time = 0;
var timer = null;
var cler = function () {
    for (var i = 0; i < blinext.length; i++) {
        blinext[i].className = "bli";
    }
    for (var i = 0; i < subnext.length; i++) {
        subnext[i].className = "sub";
    }
}

var goIndex = function () {
    cler();
    blinext[index].className = "bli cii";
    subnext[index].className = "sub s1";
    time=0;
}

for (var i = 0; i < blinext.length; i++) {
    blinext[i].onmouseover = function () {
        index = this.getAttribute('data-index');
        goIndex();
        clearTimeout(timer);
    }
    blinext[i].onmouseout = function(){
       timer = setTimeout(function(){
            cler();
        },10)
    }
    subnext[i].onmouseover = function(){
        clearTimeout(timer);
    }
    subnext[i].onmouseout = function(){
        timer = setTimeout(function(){
            cler();
        },10)
    }
}



// 第二部分

var obtn = document.getElementsByClassName("uu");
var oimg = document.getElementsByClassName("imgia");

var indexto = 0;
var timerto = 0;

var claer = function(){
    for(var i = 0; i<obtn.length;i++){
        obtn[i].className = "uu";
    }
    for(var i = 0; i<oimg.length;i++){
        oimg[i].className = "imgia";
    }
    timerto = 0;
}

var goto = function(){
    claer();
    obtn[indexto].className = "uu imgi";
    oimg[indexto].className = "imgia go";
    timerto = 0;
}

for(var i=0;i<obtn.length;i++){
    obtn[i].onclick = function(){
        indexto = this.getAttribute("data-indexto");
        goto();
    }
}

setInterval(function(){
    timerto++;
    if (timerto == 6) {
        if (indexto < 3) {
            indexto++;
        } else {
            indexto = 0;
        }
        goto();
    }
},1000)

var title1 = document.getElementById("no1");
var title2 = document.getElementById("no2");
var tson1 = document.getElementById("ulno1");
var tson2 = document.getElementById("ulno2");

function no0() {
    title1.className = "nono";
    title2.className = "nono";
}

title1.onclick = function(){
    no0();
    title1.className ="nono lii"
    tson1.style.display = "block";
    tson2.style.display = "none";
}

title2.onclick = function(){
    no0();
    title2.className ="lii nono"
    tson2.style.display = "block";
    tson1.style.display = "none";
}

var next = document.getElementById("aa1");
var next2 = document.getElementById("aa2");
var gos=document.getElementById("gosul");
next.onclick = function(){
    gos.style.marginLeft="0px";
}
next2.onclick = function(){
    gos.style.marginLeft="-550px";
}