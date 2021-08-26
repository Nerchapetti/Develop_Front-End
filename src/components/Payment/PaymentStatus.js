import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getRequest from "../../API/getRequest"
import PaymentFailure from "./PaymentFailure"
import PaymentSuccess from "./PaymentSuccess"

const PaymentStatus = () => {
    const {orderId} = useParams()
    const [paymentStatus, setpaymentStatus] = useState('pending')

    useEffect(() => {
        getRequest(`${window.URI}/get-payment-status?orderId=${orderId}`).then(res => {
            console.log(res)
            setpaymentStatus(res.status.txStatus)
        })
        
    }, [])

    if(paymentStatus === 'pending'){
        console.log(paymentStatus)
        return (
            <div>
            <div className="isLoading">Loading...</div>
        </div>
        )
    } else if (paymentStatus === 'SUCCESS') {
        console.log(paymentStatus)
        return <PaymentSuccess />
    } else if (paymentStatus === 'FAILED' || paymentStatus === 'CANCELLED' || paymentStatus === 'USER_DROPPED') {
        console.log(paymentStatus)
        return <PaymentFailure />
    } 

    
}

export default PaymentStatus
