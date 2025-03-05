export class Spell {
  constructor(data) {
    this.name = data.name
    this.level = data.level
    this.index = data.index
  }

  get buttonTemplate() {
    return `
    <div>
      <button onclick="app.dndSpellsController.getSpellDetails('${this.index}')" class="btn btn-cyan mb-2 w-100" title="See details about ${this.name}" type="button">
        ${this.name}
      </button>
    </div>
    `
  }

}

// NOTE inheritance
export class SandboxSpell extends Spell {
  constructor(data) {
    super(data)
    // Inherit all of these members from the Spell class!
    // this.name = data.name
    // this.level = data.level
    // this.index = data.index

    // build upon the Spell class and add additional members
    this.id = data.id
    this.school = data.school
    this.prepared = data.prepared
  }

  // Overrides buttonTemplate inherited from Spell
  get buttonTemplate() {
    return `
    <div class="d-flex">
      <input onchange="app.sandboxSpellsController.toggleSpellPreparation('${this.id}')" type="checkbox" title="Toggle spell preparation">
      <button onclick="app.dndSpellsController.getSpellDetails('${this.index}')" class="btn ${this.prepared ? 'btn-indigo' : 'btn-outline-indigo'} mb-2 w-100 ms-1" title="See details about ${this.name}" type="button">
        ${this.name}
      </button>
    </div>
    `
  }
}