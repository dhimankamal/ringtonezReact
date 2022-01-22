import React from 'react'
import seachIcon from '../img/search.png';
const Search = () => {
  return (
    <>
      <section className='search-box'>
        <div className='container'>
          <h1>Search Ringtone</h1>
          <p>Free Ringtones • Download Ringtones</p>
          <form action=''>
            <div className='search-input'>
              <input type='text' placeholder='Search Ringtone here' />
              <button>
                <img src={seachIcon} alt='' />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Search
