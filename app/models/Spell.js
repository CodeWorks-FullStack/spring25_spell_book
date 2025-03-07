export class Spell {
  constructor(data) {
    this.name = data.name
    this.level = data.level
    this.index = data.index
  }

  get buttonTemplate() {
    return `
    <div>
      <button onclick="app.dndSpellsController.getSpellDetails('${this.name}')" class="btn btn-cyan mb-2 w-100" title="See details about ${this.name}" type="button>
        ${this.name}
      </button>
    </div>
    `
  }

}

export class SandboxSpell extends Spell {
  constructor(data) {
    super(data)
    this.id = data.id
    this.school = data.school
    this.prepared = this.prepared
  }
  get button() {
    return `
    <div class="d-flex">
      <input onsubmit="app.sandboxSpellsController.toggleSpellPreparation(${this.id})" type="checkbox" title="Toggle spell preparation">
      <button onclick="app.dndSpellsController.getSpellDetails('${this.index}')" class="btn ${this.prepared ? 'btn-indigo' : 'btn-outline-indigo'} mb-2 w-100 ms-1" title="See details about ${this.name}" type="button">
        ${this.name}
      </button>
    </div>
    `
  }
}