import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';

//To search through professor database using name,field of interest,etc. Dont know how to do this

const Searchbar = ({keyword, onChange}) => {
    return (
      <input style={searchBar} key="search-bar" value={keyword} placeholder={"search"}  onChange={onChange} />
    );
  }
  
  export default Searchbar;

  const searchBar={
    width:"40%",
    backgroundColor:"#ffffff",
    border:"1px solid "+PrimaryTemplate.yellow,
    borderRadius: "40px"
}