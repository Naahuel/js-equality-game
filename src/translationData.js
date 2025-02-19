import latvian from "./translations/lv-LV.json"
import english from "./translations/en-US.json"
import dutch from "./translations/nl-NL.json"
import french from "./translations/fr-FR.json"
import german from "./translations/de-DE.json"
import polish from "./translations/pl-PL.json"
import spanish from "./translations/es-ES.json"

const translationData = new Map() //
  .set(`en-US`, { data: english, name: `English` })
  .set(`de-DE`, { data: german, name: `Deutsch` })
  .set(`fr-FR`, { data: french, name: `Français` })
  .set(`lv-LV`, { data: latvian, name: `Latviešu` })
  .set(`nl-NL`, { data: dutch, name: `Nederlands` })
  .set(`pl-PL`, { data: polish, name: `Polski` })
  .set(`es-ES`, { data: spanish, name: `Spanish` })

export default translationData
