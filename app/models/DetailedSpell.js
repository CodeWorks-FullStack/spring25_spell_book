
export class DetailedSpell {
  constructor(data) {
    this.areaOfEffect = data.area_of_effect ? data.area_of_effect : null;
    this.castingTime = data.casting_time;
    this.classes = data.classes;
    this.components = data.components;
    this.requiresConcentration = data.concentration;
    this.description = data.desc;
    this.duration = data.duration;
    this.index = data.index;
    this.level = data.level;
    this.name = data.name;
    this.range = data.range;
    this.isRitual = data.ritual;
    this.school = data.school.name;
    this.damageType = data.damage ? data.damage.damage_type.name : 'No damage';
    this.material = data.material ?? 'No material needed';
  }

  get areaOfEffectSpan() {
    if (this.areaOfEffect == null) {
      return '<span>Target</span>';
    }

    return `
    <span>Size ${this.areaOfEffect.size} ${this.areaOfEffect.type}</span>
    `;
  }

  get ritualClasses() {
    if (this.isRitual) {
      return 'bg-indigo text-light';
    }

    return 'border border-indigo';
  }
  get concentrationClasses() {
    if (this.requiresConcentration) {
      return 'bg-orange text-light';
    }

    return 'border border-orange';
  }

  get descriptionWithBreaks() {
    return this.description.join('<br><br>');
  }

  get componentSpans() {
    const dict = {
      V: 'Verbal',
      S: 'Somatic',
      M: 'Material'
    };

    let spans = '';

    this.components.forEach(component => {
      spans += `
      <span class="bg-danger-subtle text-danger-emphasis px-2 rounded-pill">
        ${dict[component]}
      </span>
      `;
    });

    return spans;
  }

  get activeTemplate() {
    return `
    <div class="bg-light shadow-lg p-3">
      <div class="d-flex justify-content-between">
        <h1 class="d-flex gap-2">
          <span>${this.name}</span>
          <span class="fs-4 text-indigo">Lvl ${this.level}</span>
        </h1>
        <button onclick="app.sandboxSpellsController.saveSpell()" class="btn btn-indigo" type="button">
          Save Spell
        </button>
      </div>
      <hr>
      <p>Damage type: ${this.damageType} | ${this.areaOfEffectSpan} | ${this.castingTime} </p>
      <p>
        <span class="px-4 rounded-pill ${this.ritualClasses}" title="${this.isRitual ? 'Ritual' : 'Not Ritual'}">
          <span class="mdi mdi-knife-military"></span>
          Ritual
        </span>
        <span class="${this.concentrationClasses} ms-2 px-4 rounded-pill" title="${this.requiresConcentration ? 'Requires Concentration' : 'No Concentration required'}">
          <span class="mdi mdi-head-snowflake"></span>
          Concentration
        </span>
      </p>
      <p>${this.descriptionWithBreaks}</p>
      <hr>
      <p>
        ${this.componentSpans}
      </p>
      <p>${this.material}</p>
    </div>
    `;
  }
}
