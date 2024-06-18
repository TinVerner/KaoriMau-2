import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{
					id: 1,
					title: 'Капри',
					img: 'kapri.png',
					desc: 'Моцарелла, ветчина, шампиньоны, томатный соус, чеснок, маслины',
					category: 'pizzas',
					price: '23',
				},
				{
					id: 2,
					title: 'Римская',
					img: 'rimskaya.png',
					desc: 'Моцарелла, бекон, базилик, орегано, томатный соус, маслины',
					category: 'pizzas',
					price: '25',
				},
				{
					id: 3,
					title: 'Гавайская',
					img: 'hawaii.png',
					desc: 'Моцарелла, курица, ананас, орегано томатный соус, майонез',
					category: 'pizzas',
					price: '24',
				},
				{
					id: 4,
					title: 'Сок апельсиновый',
					img: 'orange-juice.png',
					desc: 'Апельсиновый сок :)',
					category: 'drinks',
					price: '3',
				},
				{
					id: 5,
					title: 'Вода',
					img: 'water.png',
					desc: 'Просто вода',
					category: 'drinks',
					price: '2',
				},
			],
		}
	}
	render() {
		return (
			<div className='wrapper'>
				<Header />
				<Items items={this.state.items} />
				<Footer />
			</div>
		)
	}
}

export default App
