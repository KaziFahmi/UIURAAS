import React from 'react'
import '../../Styles/application_read.css'


const Searchbar = ({keyword, onChange}) => {
    return (
      <input 
       className='searchBar'
       key="search-bar"
       value={keyword}
       placeholder={"search"}
       onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  
  export default Searchbar;