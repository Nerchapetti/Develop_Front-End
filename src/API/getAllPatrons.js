
const getAllPatrons = async() => {
    const res = await fetch("http://localhost:5000/api/get-all-patrons")
    const data = await res.json()

    return data;
}

export default getAllPatrons;