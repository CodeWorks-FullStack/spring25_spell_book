import { AppState } from "../AppState.js"
import { SandboxSpell } from "../models/Spell.js";
import { api } from "../utils/Axios.js"

class SandboxSpellsService {

  async getMySpells() {
    const response = await api.get('api/spells')
    console.log('GOT MY SPELLS 🧙‍♂️📡🪄🪄🪄', response.data);
    const spells = response.data.map(pojo => new SandboxSpell(pojo))
    AppState.sandboxSpells = spells
  }
  async createSpell() {
    const spell = AppState.activeSpell
    const response = await api.post('api/spells', spell)
    console.log('CREATED SPELL 🪄📡🧙‍♂️', response.data)
    const newSpell = new SandboxSpell(response.data)
    AppState.sandboxSpells.push(newSpell)
  }

  async updateSpell(spellId) {
    const foundSpell = AppState.sandboxSpells.find(spell => spell.id == spellId)

    // wack toggle for a bool

    // if (foundSpell.prepared == false) {
    //   foundSpell.prepared = true
    // }
    // else {
    //   foundSpell.prepared = false
    // }

    // cracked toggle for a bool

    foundSpell.prepared = !foundSpell.prepared

    // NOTE this put request requires that you specify which item you're updating by including the resource id in the request URL
    // NOTE you must supply a body for this put request to specify what you want to update about the specified resource
    const response = await api.put(`api/spells/${spellId}`, foundSpell)
    console.log('UPDATED SPELL 🪄✅', response.data);


    AppState.emit('sandboxSpells')
  }
}

export const sandboxSpellsService = new SandboxSpellsService()