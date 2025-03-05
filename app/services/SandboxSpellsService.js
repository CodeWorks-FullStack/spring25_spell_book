import { AppState } from "../AppState.js"
import { api } from "../utils/Axios.js"

class SandboxSpellsService {
  async createSpell() {
    const spell = AppState.activeSpell
    const response = await api.post('api/spells', spell)
    console.log('CREATED SPELL 🪄📡🧙‍♂️', response.data)
  }
}

export const sandboxSpellsService = new SandboxSpellsService()