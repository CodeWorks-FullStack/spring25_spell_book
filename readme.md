spell_book
============

## Legal Overview

The content under the CodeWorks®, LLC Organization and all of the individual repos are solely intended for use by CodeWorks Instruction to deliver Educational content to CodeWorks Students.

---

## Copyright

© CodeWorks® LLC, 2021. Unauthorized use and/or duplication of this material without express and written permission from CodeWorks, LLC is strictly prohibited.

<img src="https://bcw.blob.core.windows.net/public/img/7815839041305055" width="125">

## Broken Stuff

1. Id for spellCount does not match id used for getElementById

1. Using button for getter on SandboxSpell instead of buttonTemplate

1. Using this.isPrepared for both sides of constructor of SandboxSpell

1. drawing to dnd id instead of sandbox id on drawSandboxSpells

1. removed quotes around id on SandboxSpell model

1. removed end `"` on type attribute on buttonTemplate in Spell model

1. used a single `=` on filter on drawSpellCount in SandboxSpellsController

1. sending spell.prepared as request body on updateSpell

1. dividing by spell lengths in drawSpellCount