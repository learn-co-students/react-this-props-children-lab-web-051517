import React from 'react'

const Invitation = () => {
  return (
    <div>
      <h1>You've been invited!</h1>
      {this.props.children}
    </div>
  )
}

export default Invitation
