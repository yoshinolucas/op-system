import './SearchInput.css';


const SearchInput = ({search, setSearch, setCurrentPage, setPages}) => {
    return(
        <div className="search-wrapper">
            <i className="fa fa-search"></i>
            <input className="search border-radius03" value={search} 
        onChange={e => { 
            setSearch(e.target.value); 
            setCurrentPage(1); 
            setPages([1,2,3]);
        }} 
        placeholder="Pesquisar"/>                                        
        </div> 
    )
}

export default SearchInput;