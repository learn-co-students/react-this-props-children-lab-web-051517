// Code ThemedDecoration Component Here
import React from 'react'

class ThemedDecoration extends React.Component {

  render(){
    return(
      <div>
        {this.props.children.map(child => <div className={this.props.theme}>{child}</div>)}
      </div>
    )
  }
}


export default ThemedDecoration
