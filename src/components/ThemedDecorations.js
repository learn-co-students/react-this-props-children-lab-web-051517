// Code ThemedDecoration Component Here
import React, {Component} from 'react'

class ThemedDecorations extends Component{
  render(){
  const extraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {className: this.props.theme,
  }));

  return(
    <div>
      {extraProp}
    </div>
  );
}
}
export default ThemedDecorations;
