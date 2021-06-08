import Footer from '../Footer/Footer';
import Header from '../NavBar/Header';
import './ParishDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import getRequest from '../../API/getRequest';

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
                <div className="bank_details">
                    <ul className="list">
                        <li className="head"> Bank Account Details</li>
                        <li>Bank Name:<br/><span>NAME</span> </li> 
                        <li>Branch Name:<br/><span>NAME</span> </li>
                        <li>Account Holder:<br/> <span>Name</span></li> 
                        <li>IFSC: <br/><span>2216546646545465</span></li>
                        <li>A/C NO : <br/><span>45456468465465</span></li>
                        <div className="button">      
                            <button>Pay</button>
                        </div>
                    </ul>  
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default ParisheDetails;