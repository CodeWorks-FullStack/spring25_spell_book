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
    this.damageType = data.damage.damage_type.name
  }

  get activeTemplate() {
    return `
    <div class="bg-light shadow-lg p-3">
      <h1 class="d-flex gap-2">
        <span>${this.name}</span>
        <span class="fs-4 text-indigo">Lvl 4</span>
      </h1>
      <hr>
      <p>Damage type: Acid | Self | 1 action | 30 centimeters</p>
      <p>
        <span class="bg-indigo px-4 text-light rounded-pill">
          <span class="mdi mdi-knife-military"></span>
          Ritual
        </span>
        <span class="bg-orange ms-2 px-4 text-light rounded-pill">
          <span class="mdi mdi-head-snowflake"></span>
          Concentration
        </span>
      </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dicta magnam officiis architecto earum
        odit harum inventore mollitia ut illum.</p>
      <hr>
      <p>
        <span class="bg-danger-subtle text-danger-emphasis px-2 rounded-pill">Verbal</span>
        <span class="bg-danger-subtle text-danger-emphasis px-2 rounded-pill">Somatic</span>
        <span class="bg-danger-subtle text-danger-emphasis px-2 rounded-pill">Material</span>
      </p>
      <p>Lizards tongue and grape juice</p>
    </div>
    `
  }
}