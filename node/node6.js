var node6 = /** @class */ (function () {
    function node6(nas) {
        this.gra = nas;
    }
    node6.prototype.gret = function () {
        return "hello" + this.gra;
    };
    return node6;
}());
var grn;
grn = new node6("iwen");
alert(grn.gret());
