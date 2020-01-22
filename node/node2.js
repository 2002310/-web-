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
var no1 = /** @class */ (function () {
    function no1(name, age) {
        this.name = name;
        this.age = age;
    }
    no1.prototype.tell = function () {
        return this.name + this.age;
    };
    return no1;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(school) {
        var _this = _super.call(this, "高强", 18) || this;
        _this.school = school;
        return _this;
    }
    student.prototype.tell = function () {
        return this.name + this.age + this.school;
    };
    return student;
}(no1));
var s = new student("华坚科技职业学校");
// s.name = "高强";
// s.age = 18;
// s.school = "华坚科技职业学校";
alert(s.tell());
