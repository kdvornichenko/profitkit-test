import card from './main'

const counter = () => {
	let decrement = []
	let increment = []
	let count = []

	card.forEach(item => {
		decrement.push(item.querySelector('.counter__decr'))
		increment.push(item.querySelector('.counter__incr'))
		count.push(item.querySelector('.counter__count'))
	})

	function setCount(action, index) {
		if (action == 'decr') {
			count.at(index).value > 1 ? count.at(index).value-- : null
		}

		if (action == 'incr') {
			count.at(index).value++
		}
	}

	for (let i = 0; i < decrement.length; i++) {
		const item = decrement[i]

		item.addEventListener('click', () => {
			setCount('decr', decrement.indexOf(item))
		})
	}

	for (let i = 0; i < increment.length; i++) {
		const item = increment[i]

		item.addEventListener('click', () => {
			setCount('incr', increment.indexOf(item))
		})
	}
}

export default counter
