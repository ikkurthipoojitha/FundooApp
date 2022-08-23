
 function Vehicle()
{
    this.vehicleName=vehicleName;
    throw new Error("You cannot create an instance of Abstract class");
}
function Car(vehicleName)
{
    this.vehicleName=vehicleName;
}
Car.prototype=Object.create(Vehicle.prototype);
var car=new Car("Honda");
console.log(car instanceof Vehicle);
console.log(car instanceof Car);


 
