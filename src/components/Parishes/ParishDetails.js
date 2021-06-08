import Footer from '../Footer/Footer';
import Header from '../NavBar/Header';
import './ParishDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import getRequest from '../../API/getRequest';
import Payment from './Payment';



const ParisheDetails = () => {
    const [parishData, setParishData] = useState()
    const {id} = useParams()
    useEffect(() => {
        getRequest(`http://localhost:5000/get-parish/${id}`)
        .then(res => {
            console.log(res)
            setParishData(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    if(!parishData){
        return (
            <div className="isLoading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return ( 
        <>
        <Header />
        <div className="main-container">
            <div className="church_detail">
                <h1>About the {parishData.churchName}</h1>
                <p>{parishData.content}, <br /> location:  {parishData.location}</p>
            </div>
            <div className="details">
                <Payment />
            </div>
        </div>
        <Footer />
        </>
     );
}
 

export default ParisheDetails;