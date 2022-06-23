class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi I am ${this.name}! `;
    }
    getDescription(){
        return `${this.name} is ${this.age}!`
    }
}

class Student extends Person{
    constructor(name, age, major) {  //Override
        super(name,age);        //use data from parent class
        this.major = major;
    }
    hasMajor() {
        return !!this.major;  //''=false, !''=true !!''=false
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description = description + ` Their major is ${this.major}!`;
        }
        

        return description;
    }

}

class Traveller extends Person{
    constructor(name,age,homLocation){
        super(name,age);
        this.homLocation = homLocation;
    }
    getHome(){

        return !!this.homLocation;
    }
    getGretting(){
        let gretting = super.getGretting();

        if(this.getHome()){
        gretting += `I am from ${this.homLocation}!`;
        }
        return gretting;
    }
}


const me = new Traveller('Justin',26, 'China');
console.log(me.getGretting());


const me1 = new Traveller();
console.log(me1.getGretting());