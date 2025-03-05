import { AppState } from "../AppState.js"
import { dndSpellsService } from "../services/DNDSpellsService.js"
import { Pop } from "../utils/Pop.js"

export class DNDSpellsController {
  constructor() {
    AppState.on('dndSpells', this.drawSpells)
    AppState.on('activeSpell', this.drawActiveSpell)
    this.getSpells()
  }

  drawSpells() {
    const spells = AppState.dndSpells
    let spellsContent = ''
    spells.forEach(spell => spellsContent += spell.buttonTemplate)
    const spellement = document.getElementById('dndSpellsList')
    spellement.innerHTML = spellsContent
  }

  drawActiveSpell() {
    const spell = AppState.activeSpell
    const activeSpellement = document.getElementById('activeSpell')
    activeSpellement.innerHTML = spell.activeTemplate
  }

  async getSpells() {
    try {
      await dndSpellsService.getSpells()
    } catch (error) {
      console.error('COULD NOT GET SPELLS', error)
      Pop.error(error, 'Could not get spells!')
    }
  }

  async getSpellDetails(spellIndex) {
    try {
      console.log('Clicked button for ' + spellIndex);
      await dndSpellsService.getSpellDetails(spellIndex)
    } catch (error) {
      console.error('COULD NOT GET SPELL DETAILS', error)
      Pop.error(error, 'Could not get spell details!')
    }
  }
}