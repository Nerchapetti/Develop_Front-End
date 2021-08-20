import { useParams } from "react-router-dom"

const PaymentSuccess = () => {
    const {name} = useParams()
    return (
        <div>
            <h1>Thank you {name}, </h1>
            <h2>Your payment is successfull</h2>
        </div>
    )
}

export default PaymentSuccess
