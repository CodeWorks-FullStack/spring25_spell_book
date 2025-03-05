export class Spell {
  constructor(data) {
    this.name = data.name
    this.level = data.level
    this.index = data.index
  }
}

const dataExample = {
  "index": "acid-arrow",
  "name": "Acid Arrow",
  "level": 2,
  "url": "/api/2014/spells/acid-arrow"
}