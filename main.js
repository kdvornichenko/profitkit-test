import setTab from './setTab'
import counter from './counter'
import slider from './slider'
import setSticker from './setSticker'
import onToolsClick from './onToolsClick'

const card = document.querySelectorAll('.card')
export default card

const header = document.querySelector('.header')
export { header }

setTab()
setSticker()
onToolsClick()
slider()
counter()
