const getPatron = async(id) => {
    const res = await fetch(`${window.URI}/get-patron/${id}`)
    const data = await res.json()

    return data;
}

export default getPatron;