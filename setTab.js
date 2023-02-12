import { header } from './main'

const setTab = () => {
	const tabs = header.querySelectorAll('.tab')
	tabs.forEach(item => {
		item.addEventListener('click', () => setActiveTab(item))
	})

	function setActiveTab(item) {
		tabs.forEach(elem => {
			elem.classList.remove('active')
		})
		item.classList.add('active')
	}
}

export default setTab
