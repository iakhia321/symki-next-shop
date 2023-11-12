import { FB, Search} from './components';


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