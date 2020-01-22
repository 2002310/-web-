var hellow = /** @class */ (function () {
    function hellow() {
    }
    hellow.prototype.tell = function () {
        return this.name;
    };
    Object.defineProperty(hellow.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newname) {
            if (newname == "iwen") {
                this._name = newname;
            }
            else {
                alert("请正确填写用户名");
            }
        },
        enumerable: true,
        configurable: true
    });
    return hellow;
}());
var h = new hellow();
h.name = "iwen";
alert(h.tell());
