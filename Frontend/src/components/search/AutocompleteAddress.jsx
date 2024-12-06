import React from 'react'
import { useState } from 'react'

const AutocompleteAddress = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    const handleFromChange = (e)=>{
        setFrom(e.current.value)
    }

    const handleToChange = (e)=>{
        setTo(e.current.value)
    }
  return (
    <>
    <div className='mt-5'>
      <div>
        <label>Where From?</label>
        <input className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300' type="text" onChange={handleFromChange}
         />
      </div>
      <div className='mt-3'>
        <label>Where To?</label>
        <input className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300' type="text" onChange={handleToChange}
         />
      </div>
      </div>
    </>
  )
}

export default AutocompleteAddress
