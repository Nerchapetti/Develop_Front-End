const incrementLike = async(id) => {
    const res = await fetch(`http://localhost:5000/api/like/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const d = await res.json()

    return d;
}

export default incrementLike