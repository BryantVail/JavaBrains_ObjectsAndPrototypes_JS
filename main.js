function createBicycle(cadence, speed, gear){
    var newBicycle  ={};

    newBicycle.cadence  = cadence;
    newBicycle.speed    = speed;
    newBicycle.gear     = gear;

    return newBicycle;
}//end function createBicycle

function bicycleConstructor(cadence, speed, gear){
    this.cadence    = cadence;
    this.speed      = speed;
    this.gear       = gear;
}

var bi  = new bicycleConstructor(50, 20, 4);
console.log(bi);