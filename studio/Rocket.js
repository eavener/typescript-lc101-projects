"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //     return sum of all items using items.massKg
    };
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    };
    Rocket.prototype.canAdd = function (item) {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    };
    Rocket.prototype.addCargo = function (cargo) {
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false.
    };
    return Rocket;
}());
exports.Rocket = Rocket;
