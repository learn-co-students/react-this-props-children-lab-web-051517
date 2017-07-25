// Code ThemedDecoration Component Here


import React from 'react'

export default class ThemedDecoration extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.children.map(c => <div className={this.props.theme}>{c}</div>)}
      </div>
    )
  }
}
