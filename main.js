var emp1 = {};
emp1.firstN = "Michael";
emp1.lastN = "scott";

var emp2 = {};
emp2.firstN = "Dwight";
emp2.lastN = "Schrute";

function Employee(firstN, lastN, position, gender){
    this.firstN   =firstN;
    this.lastN    =lastN;
    this.position = position;
    this.gender   = gender;
}

var emp3 =  new Employee('bryant', 'vail', 'developer', 'male');
console.log(emp3);