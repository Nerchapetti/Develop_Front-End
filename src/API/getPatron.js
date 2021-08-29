const getPatron = async(id) => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}/get-patron-id/${id}`)
    const data = await res.json()

    return data;
}

export default getPatron;