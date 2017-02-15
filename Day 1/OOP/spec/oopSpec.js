var myApp = require('../src/OOP.js');
(function () {
  'use strict';
  describe("Vehicle Class: Create a vehicle, make it drive", function () {

    it("The lorry should be a type of `object`, and an instance of the `Vehicle` class", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'car');
      expect(typeof Lorry).toEqual(typeof {});
      expect(Lorry instanceof myApp.Vehicle).toBeTruthy();
    });

    it("The Vehicle should be called 'General' if no type is passed as a parameter", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8');
      expect(Lorry.type).toEqual('General');
      expect(Lorry.manufacturer).toBe('Ford');
    });

    it("The Vehicle manufacturer, meansOfTransportation, Color, noOfTyres and type should be a property of the car", function () {
      var BRT = new myApp.Vehicle('Toyota', 'Road', 'Blue', '8', 'Bus');
      expect(BRT.manufacturer).toBe('Toyota');
      expect(BRT.meansOfTransportation).toBe('Road');
      expect(BRT.noOfWheels).toBe('8');
      expect(BRT.color).toBe('Blue');
      expect(BRT.type).toBe('Bus');
    });

    it("if the type is Car it should have 4 tyres", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      var Jeep = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      var Honda = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.noOfWheels).toBe(4);
      expect(Jeep.noOfWheels).toBe(4);
      expect(Honda.noOfWheels).toBe(4);
      expect((function () { return new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car'); }()).noOfWheels).toBe(4);
    });

    it("if the type is Boat it should have 0 tyres", function () {
      var Yatch = new myApp.Vehicle('BoatMaker1', 'Road', 'Blue', '8', 'Boat');
      var Titanic = new myApp.Vehicle('BoatMaker2', 'Road', 'Blue', '8', 'Boat');
      var Marina = new myApp.Vehicle('BoatMaker3', 'Road', 'Blue', '8', 'Boat');
      expect(Marina.noOfWheels).toBe(0);
      expect(Titanic.noOfWheels).toBe(0);
      expect(Yatch.noOfWheels).toBe(0);
      expect((function () { return new myApp.Vehicle('BoatMaker1', 'Road', 'Blue', '8', 'Boat'); }()).noOfWheels).toBe(0);
    });

    it("if the type is MotorCycle it should have 2 tyres", function () {
      var Okada = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'MotorCycle');
      var PowerBike = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'MotorCycle');
      var Bajaj = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'MotorCycle');
      expect(Okada.noOfWheels).toBe(2);
      expect(PowerBike.noOfWheels).toBe(2);
      expect(Bajaj.noOfWheels).toBe(2);
      expect((function () { return new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'MotorCycle'); }()).noOfWheels).toBe(2);
    });


    it("The Vehicle should have speed 0 km/h until you put `the pedal to the metal`", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.speed).toBe(0);
      Lorry.drive(7);
      expect(Lorry.speed).toBe(7);
    });

    it("You can change the energySource of the vehicle`", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.energySource).toBe('Fuel');
      Lorry.changeEnergySource('Petrol');
      expect(Lorry.energySource).toBe('Petrol');
    });

    it("You can change the color of the vehicle`", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.color).toBe('Blue');
      Lorry.changeColor('Red');
      expect(Lorry.color).toBe('Red');
    });

    it("You can change the sound of the vehicle`", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.sound).toBe('Vrommmmmmmmm');
      Lorry.changeSound('Rrrrrrrrrrrr');
      expect(Lorry.sound).toBe('Rrrrrrrrrrrr');
    });

    it("You can hear the vehicle Sound", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.sound).toBe('Vrommmmmmmmm');
      expect(Lorry.makeSound()).toBe('The Car makes the Vrommmmmmmmm sound');
    });

    it("You can show the details of the vehicle`", function () {
      var Lorry = new myApp.Vehicle('Ford', 'Road', 'Blue', '8', 'Car');
      expect(Lorry.showDetailsfunction()).toBe('This Blue Car was manufactured by Ford, it travels by Road and is powered by Fuel');
    });


  });
})();
