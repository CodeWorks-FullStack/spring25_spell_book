import { AppState } from "../AppState.js"
import { api } from "../utils/Axios.js"

class SandboxSpellsService {
  async getMySpells() {
    const response = await api.get('api/spells')
    console.log('GOT MY SPELLS 🧙‍♂️📡🪄🪄🪄', response.data);

  }
  async createSpell() {
    const spell = AppState.activeSpell
    const response = await api.post('api/spells', spell)
    console.log('CREATED SPELL 🪄📡🧙‍♂️', response.data)
  }
}

export const sandboxSpellsService = new SandboxSpellsService()