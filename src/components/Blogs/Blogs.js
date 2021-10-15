import "./Blogs.scss";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getAllBlogs from "../../API/getAllBlogs";


const Blogs = () => {

  const [blogs, setblogs] = useState([])
  const [error, seterror] = useState('')
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    getAllBlogs(`${process.env.REACT_APP_API_URI}/get-all-campaigns`)
        .then((data) => {
          if (data.status === "ok") {
            console.log(data);
            setblogs(data.blogs);
            setisLoading(false)
            
          } else {
            seterror("some internal server error");
            console.log(data);
            setisLoading(false)
          }
        })
        .catch((err) => {
          seterror(err);
          console.log(err);
          setisLoading(false)
        });
  }, [])

  if(isLoading){
    return <div className="isLoading"></div>
  }

  if(error){
    return(
      <div className="error">
        Oops! Something went wrong
      </div>
    )
  }


  return (
    <div className="Blogs-container">
      <Header />
      <div className="main-container">
        <div className="head">
          <h2>Blogs</h2>
          <hr />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Blogs" />
        </div>
        <div className="blogs">
          {blogs.map(blog => (
            <Link key={blog._id} to={`/blog/${blog.slug}`}>
            <Blog
              image={blog.imageUrl}
              authorImg={blog.author.imageUrl}
              authorName={blog.author.name}
              heading={blog.title}
              p={blog.content}
              date={blog.date}
              like={blog.likes}
            />
          </Link>
          ))}
          
         

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
