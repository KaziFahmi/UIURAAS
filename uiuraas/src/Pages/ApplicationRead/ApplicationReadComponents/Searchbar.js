import React from 'react'



const Searchbar = ({keyword, onChange}) => {
    return (
      <input style={searchBar} key="search-bar" value={keyword} placeholder={"search"}  />
    );
  }
  
  export default Searchbar;

  const searchBar={
    width:"60%",
    backgroundColor:"#ffffff",
    border:"1px solid #FC9E04",
    borderRadius: "40px"
}