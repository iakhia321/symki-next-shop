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