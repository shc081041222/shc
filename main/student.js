let Person = require('./person')
// Write your code here
function Student(name,age,kclass){
        Person.call(this,name, age);
        this.kclass = kclass;
        
    }
Student.prototype = new Person();
Student.prototype.introduce=function(){
    return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.kclass+".";
}
module.exports = Student
