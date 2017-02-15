//*****MODELLING REAL WORLD OBJECTS USING JAVASCRIPT OOP*****

//1) Declare an object (Vehicle Object)
//2) Instanciate the object 
//3) Use of inheritance (to make Lorry, Yatch and Bike Class)
//4) Make instances of the Vehicle object (Car, MotorCycle, Boat)
//5) Add Public and Private methods to the object (Using this, var)
//6) Change object attributes via specific functions (ChangeSound(), changeColor())
//7) Use default parameters for noOfWheels and type

//'use strict';
var myApp = {
  //Declare an object (Vehicle Object)
  Vehicle: function (manufacturer, meansOfTransportation, color, noOfWheels = 5, type = "General") {
    this.manufacturer = manufacturer;
    this.meansOfTransportation = meansOfTransportation;
    this.color = color;
    this.type = type;
    this.noOfWheels = noOfWheels;
    this.energySource = 'Fuel';
    this.sound = 'Vrommmmmmmmm';
    this.details = '';
    this.speed = 0;
    if (this.type == 'Car') {
      this.noOfWheels = 4;
    }
    if (this.type == 'Boat') {
      this.noOfWheels = 0;
    }
    if (this.type == 'MotorCycle') {
      this.noOfWheels = 2;
    }
    this.publicMethod = function () {
      return "Public method";
    }
    var privateMethod = function () {
      return "Private method";
    }
    this.showDetailsfunction = function () {
      return this.details = 'This ' + this.color + ' ' + this.type + ' was manufactured by ' +
        this.manufacturer + ', it travels by ' + this.meansOfTransportation +
        ' and is powered by ' + this.energySource;
    }
    this.changeEnergySource = function (engSource) {
      this.energySource = engSource;
      return this.energySource;
    }
    this.changeColor = function (newColor) {
      this.color = newColor;
      return this.color;
    }
    this.makeSound = function () {
      return "The " + this.type + " makes the " + this.sound + " sound";
    }
    this.changeSound = function (newSound) {
      this.sound = newSound;
      return "New Sound: " + this.sound;
    }
    this.drive = function (newSpeed) {
      this.speed = newSpeed;
      return this.speed + " Km/h";
    }
  },
}
module.exports = myApp;
