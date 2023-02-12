import card from './main'

const setSticker = () => {
	card.forEach(item => {
		const sticker = item.querySelector('.sticker').dataset.sticker

		if (sticker == 'hit') {
			item.querySelector('.sticker-hit').style.display = 'block'
		}
		if (sticker == 'new') {
			item.querySelector('.sticker-new').style.display = 'block'
		}
	})
}

export default setSticker
