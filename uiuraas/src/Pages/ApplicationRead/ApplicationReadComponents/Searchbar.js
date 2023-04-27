import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';

//Search bar to search through applications. Dont know how to implement this

const Searchbar = ({keyword, onChange}) => {
    return (
      <input style={searchBar} key="search-bar" value={keyword} placeholder={"search"}  />
    );
  }
  
  export default Searchbar;

  const searchBar={
    width:"60%",
    backgroundColor:"#ffffff",
    border:"1px solid "+PrimaryTemplate.yellow,
    borderRadius: "40px"
}