/* Way to create Object in JS */
var obj1 = {};
var obj2 = Object.create({});
obj1.name = "gampesh";
obj1.city = "Pune";

/*
 Problem with above approach obj1 and obj2 is fixed we can not resume property of same
 Solution to this is to have factory which will give us instance of function having same property
*/

function CreateObjectClass (name, city) {
    return {
        name: name,
        city: city
    }
}

var fObj1 = CreateObjectClass('Gampesh', "Pune");
var fObj2 = CreateObjectClass('Gampesh1', "Pune1");

/*
 Problem with factory approach is we dont know the parent of Object
 Solution to this is to have constructor based function
*/

function ConstructorBasedClass (name, city) {
    this.name = name;
    this.city = city;
    this.sayName = function () {
        console.log("This is sayName Method");
    }
}

var constructObj1 = new ConstructorBasedClass('Name1', 'City1');
var constructObj2 = new ConstructorBasedClass('Name1', 'City1');


/*
 Problem with constructor approach is if you have methods to your class then it will be get repeated on each instance of that class
 Solution to this is to have move all the methods and properties to prototype
 */

function PrototypeBasedClass () {
}

PrototypeBasedClass.prototype = {
    name: "Name",
    city: "City",
    address: {pin: "1234", area: "MG Road"},
    sayName: function () {
            console.log("sayName from Prototype");
    }
};

var protoObj1 = new PrototypeBasedClass();
var protoObj2 = new PrototypeBasedClass();

console.log(protoObj1.name); // output - Name
protoObj1.name = "New Name for ProtoObj1"; //output - New Name for ProtoObj1

console.log(protoObj2.name); // output - Name, This wont be changed because we have updated for protoObj1
protoObj2.address.pin = '5678';
console.log(protoObj1.address.pin); // output - 5678
console.log(protoObj2.address.pin); // output - 5678
/*
  In above statement we have set value for protoObj2 but it overwrite value of protoObj1 as well
  Reason: when we write protoObj2.address it is get and pointer will reach till prototype of PrototypeBasedClass
  and then we are setting value of pin so it will set value on PrototypeBasedClass.prototype
 */


/*

 Problem with prototype approach is if you set value of object property it will set the value for all the instances
 Solution to this is to have move all the methods to prototype and keep properties to constructor

*/
function PrototypeBasedClass1 (name, city) {
        this.name = name;
        this.city = city;
        this.address = {pin: "1234", area: "MG Road"};
}

PrototypeBasedClass1.prototype = {
    sayName: function () {
        console.log("sayName from Prototype");
    }
};

var protoObj3 = new PrototypeBasedClass1('Name1', 'City1');
var protoObj4 = new PrototypeBasedClass1('Name2', 'City2');

