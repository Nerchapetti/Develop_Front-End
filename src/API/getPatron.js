const getPatron = async(id) => {
    const res = await fetch(`http://localhost:5000/api/get-patron/${id}`)
    const data = await res.json()

    return data;
}

export default getPatron;