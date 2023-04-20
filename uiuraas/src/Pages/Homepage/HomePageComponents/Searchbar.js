import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';



const Searchbar = ({keyword, onChange}) => {
    return (
      <input style={searchBar} key="search-bar" value={keyword} placeholder={"search"}  />
    );
  }
  
  export default Searchbar;

  const searchBar={
    width:"40%",
    backgroundColor:"#ffffff",
    border:"1px solid "+PrimaryTemplate.yellow,
    borderRadius: "40px"
}