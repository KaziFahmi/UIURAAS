import React from 'react'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate';

//To search through professor database using name,field of interest,etc. Dont know how to do this

const Searchbar = ({keyword, onChange,addStyles}) => {
    return (
      <input style={{...searchBar,...addStyles}} key="search-bar" value={keyword} placeholder={"search"}  onChange={onChange}  />
    );
  }
  
  export default Searchbar;

  const searchBar={
    width:"90%",
    backgroundColor:"#ffffff",
    border:"1px solid "+PrimaryTemplate.borders,
    borderRadius: "40px",
    backgroundColor:PrimaryTemplate.contentBox,
}