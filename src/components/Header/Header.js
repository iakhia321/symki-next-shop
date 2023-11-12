import React from 'react'
import { FB } from './Components/FB'

export default function Header() {
    return (
        <>
        <FB />
        </>
    )
import { FB } from '../Header/components/FB/FB';


export const Header = ({searchValue, setSearchValue}) => {
  return (
    <div>
      
    <>
    <FB/>
    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    </>
          
    </div>
  );
}