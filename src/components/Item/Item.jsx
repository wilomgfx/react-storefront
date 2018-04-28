import React, { Component } from 'react'
import { Button, Intent, Spinner, Classes } from "@blueprintjs/core";
export default class Item extends Component {
  render() {
    return (
      <div>
        <Button type="button" className={`${Classes.BUTTON} ${Classes.INTENT_PRIMARY}`} text="Click me!">
          <span className={`${Classes.ICON_STANDARD} ${Classes.iconClass('arrow-right')} ${Classes.ALIGN_RIGHT}`}> </span>        
        </Button>
      </div>
    )
  }
}
