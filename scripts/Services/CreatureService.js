import Creature from "../Classes/Creature"
import {Races} from '../Helpers/CreatureHelper'

export default class CreatureService{
    static getCreatureList(){
        let creatures = [];
        debugger;
        let humanPaladin = new Creature(Races.HUMAN, "Human Paladin");
        let elfWizard = new Creature(Races.ELF, "Elf Wizard");
        let orcBerserker = new Creature(Races.ORC, "Orc Berserker");
        let dwarfArcher = new Creature(Races.DWARF, "Dwarf Archer");

        creatures.push(humanPaladin);
        creatures.push(elfWizard);
        creatures.push(orcBerserker);
        creatures.push(dwarfArcher);

        return creatures;
    }
}
