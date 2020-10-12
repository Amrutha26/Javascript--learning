var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var amru = {
    fullName: 'Amrutha',
    mass: 60,
    height: 1.65,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(john.calcBMI() > amru.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi );
} else if(amru.bmi > john.bmi) {
    console.log(amru.fullName + ' has a higherBMI of ' + amru.bmi);
} else {
    console.log("They have the same BMI");
}
