import { AppState } from "../AppState.js"
import { dndSpellsService } from "../services/DNDSpellsService.js"
import { Pop } from "../utils/Pop.js"

export class DNDSpellsController {
  constructor() {
    AppState.on('dndSpells', this.drawSpells)
    this.getSpells()
  }

  drawSpells() {
    const spells = AppState.dndSpells
    let spellsContent = ''
    spells.forEach(spell => spellsContent += spell.buttonTemplate)
    const spellEment = document.getElementById('dndSpellsList')
    spellEment.innerHTML = spellsContent
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