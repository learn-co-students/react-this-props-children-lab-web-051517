import React, {Component} from 'react'

export default class ThemedDecorations extends Component {
  render() {
    const decorationsWithTheme =
      React.Children.map(this.props.children, decoration => {
        return React.cloneElement(decoration, {className: this.props.theme})
      })

    return (
      <div>
        {decorationsWithTheme}
      </div>
    )
  }
}
