import card from './main'

const slider = () => {
	let sliderControl = []
	let imagesSlider = []

	card.forEach(item => {
		sliderControl.push(
			item.querySelectorAll('.images__slider-control nav ul li')
		)
		imagesSlider.push(item.querySelector('.images__slider'))
	})

	for (let index = 0; index < sliderControl.length; index++) {
		const item = sliderControl[index]

		for (let i = 0; i < item.length; i++) {
			const elem = item[i]

			elem.addEventListener('click', () => {
				const imgWidth = imagesSlider[index].offsetWidth

				item.forEach(li => {
					li.querySelector('span').classList.remove('active')
				})
				elem.querySelector('span').classList.add('active')

				imagesSlider[index].style.transform = `translateX(-${imgWidth * i}px)`
			})
		}
	}
}

export default slider
