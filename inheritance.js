function ClassA (name, city) {
    this.name = name;
    this.city = city;
    this.address = {
        pin: '1234',
        area: 'MG Road'
    }
}

ClassA.prototype.sayName = function () {
    console.log("This is sayName from Prototype");
};

function ClassB(name, city, salary) {
    ClassA.call(this, name, city);
    this.salary = salary;
}

var objB = new ClassB("Name", "City", "100");

/*
Problem with above way of writing inheritance is that we sub class will not be able to access methods or property of parent class prototype
Solution to this is as below
*/

function ClassC(name, city, salary) {
    ClassA.call(this, name, city);
    this.salary = salary;
}
ClassC.prototype = new ClassA("Name A", "City A");
var objC = new ClassC("Name C", "City C", "300");

/*
Problem with above way of writing inheritance is that we sub class will also have all the property with value passed to Sub class constructor
this will make duplicate data in sub class constructor and parent class constructor
Solution to this is as below
*/


function ClassD(name, city, salary) {
    ClassA.call(this, name, city);
    this.salary = salary;
}

ClassD.prototype = Object.create(ClassA.prototype);
var objd = new ClassD("Name D", "City D", "400");
