import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = (props) => {
  return (
    <React.Fragment>
      <Link to="/">Go Back</Link>Confirmation: {JSON.stringify(props)}
    </React.Fragment>
  )
}

export default Confirmation
