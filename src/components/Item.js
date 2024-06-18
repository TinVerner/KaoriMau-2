import React, { Component } from 'react'

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<img src={'./images/' + this.props.item.img} />
				<h2>{this.props.item.title}</h2>
				<p>{this.props.item.desc}</p>
				<b>{this.props.item.price} BYN</b>
				<div className='add-to-cart'>+</div>
			</div>
		)
	}
}

export default Item
