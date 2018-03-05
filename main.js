var emp1 = {};
emp1.firstN = "Michael";
emp1.lastN = "scott";

var emp2 = {};
emp2.firstN = "Dwight";
emp2.lastN = "Schrute";

function createEmployeeObject(firstN, lastN, position, gender){
    var newObj = {};

    newObj.firstN   =firstN;
    newObj.lastN    =lastN;
    newObj.position = position;
    newObj.gender   = gender;

    return newObj;
}