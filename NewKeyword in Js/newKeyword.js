
// new Keyword

function createUser(firstName, branch, age, location, fees){
    this.firstName = firstName;
    this.branch = branch;
    this.age = age;
    this.location = location;
    this.fees = fees;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.branch, this.age, this.location, this.fees);
}
createUser.prototype.Branch = function(){
    return this.branch === 'cse';
}
createUser.prototype.feesCollege = function(){
    return this.fees > 50000;
}
const user1 = new createUser('manish', 'cse', 32, 'bhopal', 50000);
const user2 = new createUser('rahul', 'civil', 22, 'bihar', 40000);
const user3 = new createUser('noman', 'me', 23, 'rajsthan', 30000);
// console.log(createUser.prototype);

// new keyword
// 1.) empty object this = {}
// 2.) return this

// console.log(user3);
// user3.about();
// user1.about();

// console.log(user3.feesCollege());

// for(let key in user1){
//     // console.log(key);
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }


// class keyword


class createStudent{
    constructor(firstName, branch, age, location, fees){
        this.firstName = firstName;
        this.branch = branch;
        this.age = age;
        this.location = location;
        this.fees = fees;
    }
    
    about(){
        console.log(this.firstName, this.branch, this.age, this.location, this.fees);
    }
    Branch(){
        return this.branch === 'cse';
    }
    clgFees(){
        return this.fees >= 50000;
    }
}

const student1 = new createStudent('manish', 'cse', 34, 'bihar', 34000);
const student2 = new createStudent('rahul', 'civil', 23, 'kolkata', 30000);
const student3 = new createStudent('rohit', 'me', 20, 'bhopal', 50000);
const student4 = new createStudent('noman', 'csbs', 24, 'gujrat', 60000);

// student4.about();
// console.log(Object.getPrototypeOf(student1));
// console.log(student2.Branch());
// student3.about();

class Animal {
    constructor(name, rate, age){
        this.name = name;
        this.rate = rate;
        this.age = age;
    }
    about(){
        console.log(this.name, this.rate, this.age);
    }
    sleep(){
        console.log(`${this.name} sleep maximum 8 to 10 hours`);
    }
    eat(){
        console.log(`${this.name} is eat all food`);
    }
    isBit(){
        console.log('false');
    }

}
const Animal1 = new Animal('cat', 6000, '3_months');
const Animal2 = new Animal('dog', 5000, '2_months');
const Animal3 = new Animal('parrot', 1000, '1_months');
const Animal4 = new Animal('baby cow', 3000, '4_months');

// Animal1.about();
// Animal1.isBit();
// Animal3.sleep();




// inherited from Animal class

class AnimalClass {
    constructor(name, rate, age){
        this.name = name;
        this.rate = rate;
        this.age = age;
    }
    about(){
        console.log(this.name, this.rate, this.age);
    }
    sleep(){
        console.log(`${this.name} sleep maximum 8 to 10 hours`);
    }
    eat(){
        console.log(`${this.name} is eat all food`);
    }
    isBit(){
        console.log('false');
    }

}

class Dog extends AnimalClass{
    constructor(name, rate, age, speed){
        // super keyword
        super(name, rate, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}`;
    }
    eat(){
        console.log(`Modified Dog class ${this.name} is eat all food`);
    }
}

const tommy = new Dog("tommy", 3000, '1_month', '10km/h');
console.log(tommy.run());
tommy.sleep();
tommy.eat();
