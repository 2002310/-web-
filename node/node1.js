var passno = /** @class */ (function () {
    function passno(name, age, xinb) {
        this.name = name;
        this.age = age;
        this.xinb = xinb;
    }
    passno.prototype.pe = function () {
        return this.name + ":" + this.age + ":" + this.xinb;
    };
    return passno;
}());
var p = new passno("高强", 18, "男");
p.pe();
