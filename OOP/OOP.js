//1) Declare an object (Vehicle Object)
//2) Instanciate the object 
//3) Use of inheritance (to make Lorry, Yatch and Bike Class)
//4) Use of Constructors 
//5) Make instances of the Vehicle object (Car, MotorCycle, Boat)
//6) Use Prototypes to extend the function properties
//3) Add Public and Private methods to the object (Using this, var)
//7) Access Public methods from private methods in vehicle
//8) Access Private methods from public methods in vehicle
//9) 


//Declare an object (Vehicle Object)
function Vehicle (type, manufacturer, meansOfTransportation, color, noOfWheels) {
    this.manufacturer = manufacturer;
    this.meansOfTransportation = meansOfTransportation;
    this.color = color;
    this.type = type;
    this.noOfWheels = noOfWheels;
    this.energySource = 'Fuel';
    this.details = '';
    this.publicMethod = function() {
        return "Public method";
    }
    var privateMethod = function() {
        return "Private method";
    }

    //Access Private methods from public methods in vehicle
    this.publicMethodAccessPrivateMethod(){
        return privateMethod(); //returns "Private method"
    }

    //Access Public methods from private methods in vehicle
    var publicMethodAccessPublicMethod(){
        return self.privateMethod(); //returns "Public method"
    }
}

//Use Prototypes to extend the function properties
Vehicle.prototype = {

    //Use of Constructors 
    constructor: Vehicle,

    showDetails:function ()  {
        this.details = 'this '+this.color+ ' '+ this.type +' was manufactured by '+this.manufacturer+', it travels by '+this.meansOfTransportation+' and is powered by '+this.energySource;
    },
    changeEnergySource:function (engSource)  {
        this.energySource = engSource;
        return "New Energy source: " + this.energySource;
    },
    changeColor:function (newColor)  {
        this.color = newColor;
        return "New Color: " + this.color;
    }, 
    publicFunction: function (){
        return "fake";
    }
};

//Make instances of the Vehicle object (Car, MotorCycle, Boat)
var Lorry = new Vehicle('Car','Ford','Road','Blue', 4);
var Bike = new Vehicle('MotorCycle','Nissan','Road','Black', 2);
var Yatch = new Vehicle('Boat','Bombardier', 'water', 'white', 0);


//Use of inheritance to access the showDetails function
console.log(Lorry.showDetails())

console.log(Lorry.publicFunction());
console.log(Lorry.privateFunction());





