var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 50 ) {
                percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = 0.1;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            
            //Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if(bill < 100 ) {
                percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = 0.25;
            }

            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }

    return sum / tips.length;
}


// Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if(john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an overage of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
} else {
    console.log("Both the families pay the same  average amount of tip");
}
