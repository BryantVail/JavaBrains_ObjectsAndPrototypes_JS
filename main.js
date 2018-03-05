function createBicycle(cadence, speed, gear){
    var newBicycle  ={};

    newBicycle.cadence  = cadence;
    newBicycle.speed    = speed;
    newBicycle.gear     = gear;

    return newBicycle;
}//end function createBicycle

function Bicycle(cadence, speed, gear){ //start constructors w/ Capital casing, **this is a professional pattern
    this.cadence    = cadence;
    this.speed      = speed;
    this.gear       = gear;
}

var bi  = new Bicycle(50, 20, 4);
console.log(bi);