const incrementLike = async(url) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const d = await res.json()

    return d;
}

export default incrementLike