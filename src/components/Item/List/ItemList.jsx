import React, { Component } from 'react'
import Item from '../Item';
export default class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        <Item />
        {items.map(item => <li key={item.name}>{`${item.name} : ${item.price}`}</li>)}
      </ul>
    )
  }
}
