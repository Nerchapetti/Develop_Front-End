import "./success.css"
const Success = ({success, message}) => {
    return (
        <div>
            {success ? (
            <div className="success-popup">
                <h1> {message} </h1>
            </div>
        ) : (
            ""
        )}
        </div>
    )
}

export default Success
