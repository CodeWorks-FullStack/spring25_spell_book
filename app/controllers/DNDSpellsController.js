import { dndSpellsService } from "../services/DNDSpellsService.js"
import { Pop } from "../utils/Pop.js"

export class DNDSpellsController {
  constructor() {
    this.getSpells()
  }

  async getSpells() {
    try {
      await dndSpellsService.getSpells()
    } catch (error) {
      console.error('COULD NOT GET SPELLS', error)
      Pop.error(error, 'Could not get spells!')
    }
  }
}