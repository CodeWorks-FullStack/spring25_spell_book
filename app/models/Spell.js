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

// const dataExample = {
//   "index": "acid-arrow",
//   "name": "Acid Arrow",
//   "level": 2,
//   "url": "/api/2014/spells/acid-arrow"
// }