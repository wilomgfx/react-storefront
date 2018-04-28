import React, { Component } from 'react';
import ItemList from './components/Item/List/ItemList';

export default class App extends Component {

  render() {
    return (
      <div>
        Hello!
        <ItemList items={[
          { name : 'chandail 1', price : 444},
          { name : 'chandail 2', price : 3213},
          { name : 'chandail 3', price : 123},
          { name : 'chandail 4', price : 22},
        ]}/>
      </div>
    )
  }
}
