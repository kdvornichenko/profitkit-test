import card from './main'

const onToolsClick = () => {
	let tools = []
	card.forEach(item => {
		tools.push(item.querySelectorAll('.tools .item'))
	})

	tools.forEach(item => {
		item.forEach(elem => {
			elem.addEventListener('click', () => {
				console.log(elem)
				elem.classList.toggle('active')
			})
		})
	})
}

export default onToolsClick
