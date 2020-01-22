// public 共有的 默认的
//private 私有的 无法直接访问
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pepro = /** @class */ (function () {
    function pepro() {
    }
    pepro.prototype.wodego = function () {
        return this.name + this.age;
    };
    return pepro;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    teacher.prototype.wodego = function () {
        return this.name + this.age + this.school;
    };
    return teacher;
}(pepro));
var t = new teacher();
t.name = "高强";
t.age = 18;
t.school = "华坚科技职业学校";
alert(t.wodego());
