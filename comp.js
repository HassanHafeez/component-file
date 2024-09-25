import React from 'react'

function comp() {
  return (
    <>
    <div>How to use components </div>

    <ProfilePage isEdit={true} />  //for upload PIC
    <ProfilePage isEdit={false} /> 

    </>
  )
}

export default comp
