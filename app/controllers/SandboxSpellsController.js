import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxSpellsController {
  constructor() {
    // NOTE only get my spells after I am logged in!
    AppState.on('identity', this.getMySpells)
    AppState.on('sandboxSpells', this.drawSandboxSpells)

    // NOTE this will not work on page load because we are not logged in yet! Check the order that your requests are firing off in your network tab!
    // ❌ this.getMySpells()
  }

  drawSandboxSpells() {
    const spells = AppState.sandboxSpells
    let spellContent = ''
    spells.forEach(spell => spellContent += spell.buttonTemplate)
    const sandboxSpellement = document.getElementById('sandboxSpells')
    sandboxSpellement.innerHTML = spellContent
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