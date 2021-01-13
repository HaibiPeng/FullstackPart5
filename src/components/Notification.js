/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

const Notification1 = ({ successmessage, errormessage }) => {
  if (errormessage === null) {
    return null
  }

  return (
    <div className="error">
      {errormessage}
    </div>
  )
}

const Notification2 = ({ successmessage }) => {
  if (successmessage === null) {
    return null
  }

  return (
    <div className="success">
      {successmessage}
    </div>
  )
}

export default { Notification1, Notification2 }