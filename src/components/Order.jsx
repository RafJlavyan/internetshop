import React, { Component } from 'react'
import MyButton from '../UI/MyButton'

export class Order extends Component {
  render() {
    return (
        <div className='item'>
         <div>
        <img src={'./img/' + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} &#1332;</b>
        </div>
        <button className='deleteButton' onClick={() => this.props.onDelete(this.props.item.id)}>X</button>
        </div>
    )
  }
}

export default Order