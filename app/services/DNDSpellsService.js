import { AppState } from "../AppState.js";
import { Spell } from "../models/Spell.js";
import { DetailedSpell } from "../models/DetailedSpell.js";
import { dndApi } from "../utils/Axios.js"

class DNDSpellsService {
  async getSpellDetails(spellIndex) {
    const response = await dndApi.get(`spells/${spellIndex}`)
    console.log('GOT SPELL DETAILS 🪄📡🧙‍♂️', response.data);
    // NOTE we got a single object back from the API, so we we convert into a single class object
    const spell = new DetailedSpell(response.data)
    AppState.activeSpell = spell
  }
  async getSpells() {
    const response = await dndApi.get('spells')
    console.log('GOT SPELLS 📡🪄', response.data);
    const spells = response.data.results.map(pojo => new Spell(pojo))
    AppState.dndSpells = spells
  }
}

export const dndSpellsService = new DNDSpellsService()