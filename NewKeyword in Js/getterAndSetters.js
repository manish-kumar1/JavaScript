
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){   // get used for method calling without perenthesis ()
        return `${this.firstName} ${this.lastName}`;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("Manish", "Kumar", 23);
// console.log(person1.fullName()); // error
// console.log(person1.fullName)  // output return

// set fulllName
// person1.fullName = "mohit vashistha";
// console.log(person1);
// console.log(person1.fullName);




// static methods and properties

class personInfo{   // class Name personInfo
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static desc = "static properties";
    static classInfo(){    // no need to obect for function calling it call with class name.
        return `this is persong class`;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fulllName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
console.log(personInfo.classInfo());
console.log(personInfo.desc);