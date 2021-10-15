
const getBlog = async(slug) => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}/blog/${slug}`)
    const data = await res.json()

    return data;
}

export default getBlog;