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

export class DetailedSpell {
  constructor(data) {
    this.areaOfEffect = data.area_of_effect
    this.castingTime = data.casting_time
    this.classes = data.classes
    this.components = data.components
    this.requiresConcentration = data.concentration
    this.description = data.desc
    this.duration = data.duration
    this.index = data.index
    this.level = data.level
    this.name = data.name
    this.range = data.range
    this.isRitual = data.ritual
    this.school = data.school.name
  }
}