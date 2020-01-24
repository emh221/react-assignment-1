import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className = 'UserOutput'>
      <p onClick = {props.click}> Test Test Test! Mic Check 1,2.</p>
      <p>My username is: {props.userName}</p>
    </div>
  )
}

export default userOutput;
