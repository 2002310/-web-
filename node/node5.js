var next = /** @class */ (function () {
    function next() {
    }
    next.prototype.tell = function () {
        alert("xingm" + this.name);
    };
    return next;
}());
var n = new next();
n.name = "hshs";
n.tell();
