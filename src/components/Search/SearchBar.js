import React, { useEffect } from "react";
import { useState } from "react";
import getRequest from "../../API/getRequest";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [keyword, setkeyword] = useState("");
  const [parishes, setparishes] = useState("")
  const [error, seterror] = useState(false)
  useEffect(() => {

      getRequest(`${window.URI}/get-all-parishes`).then((data) => {
        if(data.status === 'ok'){
          setparishes(data.data);
          console.log(data);
          
        }
        
      }).catch(err => {
        seterror(true)
        console.log(err);
      })

  }, []);

  if(error){
      return null
  }

  if(!parishes){
      return(
          null
      )
  }
  return (
    <div className="search-bar">
      <input
        autoFocus
        className="search"
        type="search"
        value={keyword}
        onChange={(e) => setkeyword(e.target.value)}
        placeholder="search.. "
      />
      <SearchResult parishes={parishes} keyword={keyword}/>
    </div>
  );
};

export default SearchBar;
