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

// NOTE inheritance (one of the 4 pillars of OOP)
// allows a child class (SandboxSpell) to inherit all members (properties, getters, methods) from a parent class (Spell) 
export class SandboxSpell extends Spell {
  constructor(data) {
    // NOTE super runs the constructor on the parent class (Spell) and passes our data parameter as an argument
    super(data)

    // Inherits all of these members from the Spell class!
    // this.name = data.name
    // this.level = data.level
    // this.index = data.index

    // builds upon the Spell class and adds additional members
    this.id = data.id
    this.school = data.school
    this.prepared = data.prepared
  }

  // NOTE polymorphism (one of the four pillars of OOP)
  // Overrides buttonTemplate inherited from Spell
  get buttonTemplate() {
    // NOTE 'checked' is an attribute that you can add to checkbox input that will default to the input being checked ✅
    // NOTE onchange is a handler that will execute the supplied function whenever the value of the input changes
    return `
    <div class="d-flex">
      <input onchange="app.sandboxSpellsController.toggleSpellPreparation('${this.id}')" type="checkbox" title="Toggle spell preparation" ${this.prepared ? 'checked' : ''} >
      <button onclick="app.dndSpellsController.getSpellDetails('${this.index}')" class="btn ${this.prepared ? 'btn-indigo' : 'btn-outline-indigo'} mb-2 w-100 ms-1" title="See details about ${this.name}" type="button">
        ${this.name}
      </button>
    </div>
    `
  }
}