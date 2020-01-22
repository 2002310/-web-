function myname(fistname) {
    var somename = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        somename[_i - 1] = arguments[_i];
    }
    return fistname + somename.join();
}
var pn = myname("问政", "何其", "谷歌", "王者", "年末");
alert(pn);
