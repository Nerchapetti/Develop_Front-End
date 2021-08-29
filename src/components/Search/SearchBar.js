import React, { useEffect } from "react";
import { useState } from "react";
import getRequest from "../../API/getRequest";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [keyword, setkeyword] = useState("");
  const [parishes, setparishes] = useState("")
  const [campaigns, setcampaigns] = useState("")
  const [patrons, setpatrons] = useState("")
  const [error, seterror] = useState(false)
  useEffect(() => {

      getRequest(`${process.env.REACT_APP_API_URI}/get-all-parishes`).then((data) => {
        if(data.status === 'ok'){
          setparishes(data.data);
          console.log(data);
          
        }
        
      }).catch(err => {
        seterror(true)
        console.log(err);
      })

      getRequest(`${process.env.REACT_APP_API_URI}/get-all-campaigns`).then((data) => {
        if(data.status === 'ok'){
          setcampaigns(data.data);
          console.log(data);
          
        }
        
      }).catch(err => {
        seterror(true)
        console.log(err);
      })

      getRequest(`${process.env.REACT_APP_API_URI}/get-all-patrons`).then((data) => {
        if(data.status === 'ok'){
          setpatrons(data.data);
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

  if(!parishes || !patrons || !campaigns){
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
      <SearchResult parishes={parishes} patrons={patrons} campaigns={campaigns} keyword={keyword}/>
    </div>
  );
};

export default SearchBar;
