import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getBlog from "../../API/getBlog";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./BLogDetails.scss";

const BlogDetails = () => {

  const [blog, setblog] = useState()
  const [isLoading, setisLoading] = useState(true)
  const [error, seterror] = useState('')
  const { slug } = useParams();
  useEffect(() => {
    getBlog(slug)
      .then((data) => {
        if (data.status === "ok") {
          console.log(data);
          setblog(data.blog);
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
  }, [slug])


  if (isLoading) {
    return <div className="isLoading"></div>
  }

  if (error) {
    return (
      <div className="error">
        Oops! Something went wrong
      </div>
    )
  }

  return (
    <div className="BlogDetails">
      <Header />
      <div className="BlogContent">
        <div className="heading">
          <h1>
           {blog.title}
          </h1>
        </div>
        <div className="content">
          <img
            src={blog.imageUrl}
            alt=""
          />
          <div>
            <div className="auth-date">
              <img
                src={blog.author.imageUrl}
                alt="loading.."
              />
              <div className="auth">
                <span>{blog.author.name}</span>
                <span>{blog.date}</span>
              </div>
            </div>
            <p>
              {blog.content}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
