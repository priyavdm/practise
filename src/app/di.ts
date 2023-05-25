class class1{
    name:string;
    gender:string;
    dept:string;

    constructor(name:string,gender:string,dept:string){
        this.name=name;
        this.gender=gender;
        this.dept=dept;
    }
}

class student{
    c:class1;
    constructor(c:class1){
        this.c=c;
    }
}
let a=new class1('priya','female','cse');
let s=new student(a);
console.log(s);

