import React from 'react'
import './Search.sass'
import './../../../../image/searchblack.png'

export function Search ()  {
    return (
        <form>
            <input type='text' placeholder='Search..'></input>
            <button type="submit" alt='submit'></button>
        </form>
    )
}