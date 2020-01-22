var pp = {
    name: ["iwen", "imi", "if", "go"],
    getname: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 4);
            return {
                n: _this.name[i]
            };
        };
    }
};
var myname = pp.getname();
alert("名字" + myname().n);
