// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const childWithClassName = React.Children.map(this.props.children,child=>React.cloneElement(child, {
      className: this.props.theme,
    }));
    return(
      <div>{childWithClassName}</div>
    )
  }
}
export default ThemedDecoration;
