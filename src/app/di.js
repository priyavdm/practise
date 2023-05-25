var class1 = /** @class */ (function () {
    function class1(name, gender, dept) {
        this.name = name;
        this.gender = gender;
        this.dept = dept;
    }
    return class1;
}());
var student = /** @class */ (function () {
    function student(c) {
        this.c = c;
    }
    return student;
}());
var a = new class1('priya', 'female', 'cse');
var s = new student(a);
console.log(s);
