import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxSpellsController {
  constructor() {
    AppState.on('identity', this.getMySpells)
    AppState.on('sandboxSpells', this.drawSandboxSpells)
    AppState.on('sandboxSpells', this.drawSpellCount)
  }

  drawSandboxSpells() {
    const spells = AppState.sandboxSpells
    let spellContent = ''
    spells.forEach(spell => spellContent += spell.buttonTemplate)
    const sandboxSpellement = document.getElementById('dndSpellsList')
    sandboxSpellement.innerHTML = spellContent
  }

  drawSpellCount() {
    const spells = AppState.sandboxSpells
    const preparedSpells = spells.filter(spell => spell.prepared = true)
    const spellCountElem = document.getElementById('spellCount')
    spellCountElem.innerText = `${preparedSpells.length / spells.length}`
  }

  async saveSpell() {
    try {
      await sandboxSpellsService.createSpell()
    } catch (error) {
      Pop.error(error, 'Could not save spell!')
      console.error('COULD NOT SAVE SPELL', error);
    }
  }

  async getMySpells() {
    try {
      await sandboxSpellsService.getMySpells()
    } catch (error) {
      Pop.error(error, 'Could not get my spells!')
      console.error('COULD NOT GET MY SPELLS', error);
    }
  }

  async toggleSpellPreparation(spellId) {
    try {
      console.log('toggling spell with the id of ' + spellId);
      await sandboxSpellsService.updateSpell(spellId)
    } catch (error) {
      Pop.error(error, 'Could not toggle my spell!')
      console.error('COULD NOT TOGGLE MY SPELL', error);
    }
  }
}