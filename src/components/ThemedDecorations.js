import React from 'react'

export default class ThemedDecorations extends React.Component {
  render(){
    let updatedKids = this.props.children.map(kid => (
      React.cloneElement(kid, {
        className: this.props.theme
      })
    ))
    return <div>{updatedKids}</div>
  }
}
