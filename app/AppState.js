import { Identity } from './Auth/Identity.js'
import { SandboxSpell, Spell } from './models/Spell.js'
import { DetailedSpell } from "./models/DetailedSpell.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Identity}*/
  identity = null

  /**@type {Spell[]}*/
  dndSpells = []

  /**@type {DetailedSpell}*/
  activeSpell = null

  /**@type {SandboxSpell[]}*/
  sandboxSpells = []
}

export const AppState = createObservableProxy(new ObservableAppState())