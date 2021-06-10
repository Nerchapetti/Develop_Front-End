
const getAllPatrons = async() => {
    const res = await fetch("http://localhost:5000/get-all-patrons")
    const data = await res.json()

    return data;
}

export default getAllPatrons;