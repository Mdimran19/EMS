import React from 'react'
import PropTypes from 'prop-types'

const user = ({name ,email, position}) => {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Position: {position}</p>
    </div>
  )
}

user.propTypes = {
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    position:PropTypes.string.isRequired
};

export default user