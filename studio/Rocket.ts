import { Astronaut } from "./Astronaut";
import { Cargo } from './Cargo';
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor (name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
   sumMass( items: Payload[] ): number{
   //     return sum of all items using items.massKg
    }
    currentMassKg(): number{
       //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    }
    canAdd(item: Payload): boolean {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    addCargo(cargo: Cargo): boolean {
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
    }
    addAstronaut(astronaut: Astronaut): boolean {
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false.
    }


}