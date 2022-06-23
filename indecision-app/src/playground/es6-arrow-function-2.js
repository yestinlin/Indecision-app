//argument object -no longer bond with arrow function

const add = (a, b) => {
    //console.log(arguments);    //can only be used in ES5 
    return a + b;
};

console.log(add(5,1));


//this keyword - no longer  bound

const user ={
    name: 'Andrew',
    cities: ['New','New','New'],
    printPlacesLived: function(){       //can not use arrow here
        console.log(this.cities);
        return this.cities.map((city) => 'It is the ' + city + ' I lived');

        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived in ' + city);
        // });
    
    }
};

console.log(user.printPlacesLived());

//Challenge


const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 5,


    multiply: function(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

