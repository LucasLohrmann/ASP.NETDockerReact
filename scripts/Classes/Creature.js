import {Races, Habilities, Weeknesses} from '../Helpers/CreatureHelper'

export default class Creature{
    constructor(race, name){
        this.race = race;
        this.name = name;
        this.hability = this.getHabilityByRace(race);
        this.weekness = this.getWeeknessByRace(race);

        this.getHabilityByRace = this.getHabilityByRace.bind(this);
        this.getWeeknessByRace = this.getWeeknessByRace.bind(this);
    }

    getHabilityByRace(race){
        switch(race){
            case Races.HUMAN:
                return Habilities.RESOURCEFULNESS;
            case Races.ELF:
                return Habilities.INMORTALITY;
            case Races.ORC:
                return Habilities.STRENGTH;
            case Races.DWARF: 
                return Habilities.DURABILITY;
        }
    }

    getWeeknessByRace(race){
        switch(race){
            case Races.HUMAN:
                return Weeknesses.UNCOUNCIOUSNESS;
            case Races.ELF:
                return Weeknesses.PRIDE;
            case Races.ORC:
                return Weeknesses.STUPIDITY;
            case Races.DWARF: 
                return Weeknesses.STUBBORNNESS;
        }
    }
}