import React from 'react';

class ThemedDecorations extends React.Component {
  render() {

    const childrenWithClassname = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>
          {child}
        </div>
      )
    })
    return(
      <div>
        {childrenWithClassname}
      </div>
    )
  }
}

export default ThemedDecorations;
