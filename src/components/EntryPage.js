import React, { useState } from 'react'

const EntryPage = () => {
    const [checkCondition, setCheckCondition] = useState('false')
  return (
    <div className='entryPageMenu'>
        <input type='checkbox' onChange={()=> setCheckCondition(!checkCondition)}/>
        <label>I'm not a robot</label>
    </div>
  )
}

export default EntryPage
