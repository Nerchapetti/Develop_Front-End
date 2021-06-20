import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'
import "./search.css"

const SearchResult = ({keyword, parishes}) => {

    const [result, setresult] = useState([])

    useEffect(() => {
        let searchResult = parishes.filter(parish => {
            return parish.about.churchName.toLowerCase().includes(keyword.toLowerCase()) || parish._id.includes(keyword)
        })
        setresult(searchResult)
        console.log(result);
    }, [keyword])

    if(!keyword){
        return null
    }




    if(result.length === 0 || result === null){
        return (
            <div className="search-result">
            <h1>no results found</h1>
        </div>
        )
    }

    return (
        <div className="search-result">
            {result.map(r => (
                <>
                <ResultCard result={r} />
                </>
            ))}
        </div>
    )
}

export default SearchResult
