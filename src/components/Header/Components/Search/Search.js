import React from 'react'
import './Search.sass'
import './../../../../image/searchblack.png'

export function Search ()  {
    return (
        <form className='search'>
            <input type='text' className='search__input' placeholder='Search..'></input>
            <button type="submit" className='search__btn' alt='submit'></button>
        </form>
    )
}