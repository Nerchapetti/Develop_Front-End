
const getAllBlogs = async() => {
    const res = await fetch(`${process.env.REACT_APP_API_URI}/blogs`)
    const data = await res.json()

    return data;
}

export default getAllBlogs;