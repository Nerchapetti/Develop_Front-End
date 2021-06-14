
const getAllPatrons = async() => {
    const res = await fetch(`${window.URI}/get-all-patrons`)
    const data = await res.json()

    return data;
}

export default getAllPatrons;