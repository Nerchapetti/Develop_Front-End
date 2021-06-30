import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'
import "./search.css"

const SearchResult = ({keyword, parishes, campaigns, patrons}) => {

    const [result, setresult] = useState([])
    const [parishResult, setparishResult] = useState([])
    const [campResult, setcampResult] = useState([])
    const [patronResult, setpatronResult] = useState([])



    useEffect(() => {


        let parishesResult = parishes.filter(parish => {
            return parish.about.churchName.toLowerCase().includes(keyword.toLowerCase()) || parish._id.includes(keyword) ||  parish.nerchapettiId.includes(keyword)
        })
        setparishResult(parishesResult)


        let patronsResult = patrons.filter(patron => {
            return patron.about.name.toLowerCase().includes(keyword.toLowerCase()) || patron._id.includes(keyword) || patron.nerchapettiId.includes(keyword)
        })
        setpatronResult(patronsResult)

        let campaingsResult = campaigns.filter(camp => {
            return camp.title.toLowerCase().includes(keyword.toLowerCase()) || camp._id.includes(keyword)
        })
        setcampResult(campaingsResult)

        
    }, [keyword])

    if(!keyword){
        return null
    }

    return (
        <div className="search-result">
            {parishResult.length === 0 ? "" : <h1>Parish Results</h1>}
            {parishResult.length === 0 ? "" : parishResult.map(r => (
                <>
                <ResultCard nerchapettiId={r.nerchapettiId} imageurl={r.imageUrl} id={r._id} title={r.about.churchName} category={"parish"} />
                
                </>
            ))}
            
            
            {campResult.length === 0 ? "" : <h1>Campaigns Results</h1>}
            {campResult.length === 0 ? "" : campResult.map(r => (
                <>
                <ResultCard imageurl={r.imageUrl} id={r._id} title={r.title} category={"campaign"} />
                
                </>
            ))}
            

            {patronResult.length === 0 ? "" : <h1>Patrons Results</h1>}
            {patronResult.length === 0 ? "" : patronResult.map(r => (
                <>
                <ResultCard imageurl={r.imageUrl} id={r._id} title={r.about.name} category={"patron"} />
                
                </>
            ))}
        </div>
    )
}

export default SearchResult
