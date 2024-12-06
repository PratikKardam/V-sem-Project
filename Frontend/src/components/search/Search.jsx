import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Search = () => {
  return (
    <>
    <Navbar/>
    <div className='p-5 my-40'>
    <div className='border-black border p-5 rounded-md'><AutocompleteAddress/></div>      
    </div>
    <Footer/>
    </>
  )
}

export default Search
