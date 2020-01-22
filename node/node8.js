function buliname(fistname, lastname) {
    if (lastname) {
        return fistname + lastname;
    }
    else {
        return fistname;
    }
}
var bn = buliname("iwen", "gket");
// var bn2 = buliname("ime");                                  --参数固定，不可少穿
// var bn3 = buliname("iwen","nak","jm");                      --参数固定，不可多穿 
// -加问号则表示可有可无
function bb(fistname, lastname) {
    if (lastname === void 0) { lastname = "iwen"; }
    return fistname + lastname;
}
var b1 = bb("iwen");
var b2 = bb("iwen", "im");
document.getElementById("txt").innerHTML = b1;
