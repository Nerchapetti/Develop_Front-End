import "./success.css";
const Success = ({ success, message }) => {
  return (
    <>
      <div>
        <div className="message">
            
          {success ? (
            <div className="success-popup">
              {/* <h1> {message} </h1> */}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Success;
