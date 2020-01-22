function myname(fistname:string, ...somename:string[]){
    return fistname+somename.join();
}

var pn = myname("问政","何其","谷歌","王者","年末");

alert(pn);