import "./Error.scss"

const Error = ({error}) => {
    return (
        <>
        {error ? (
            <div className="error-popup">
                <h1>  SomeThing Went wrong ...</h1>
            </div>
        ) : (
            ""
        )}
        </>
    )
}

export default Error
