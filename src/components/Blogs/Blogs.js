import "./Blogs.scss";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import Blog from "./Blog";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="Blogs-container">
      <Header />
      <div className="main-container">
        <div className="head">
          <h2>Blogs</h2>
          <hr />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Blogs"/>
        </div>
        <div className="blogs">
          <Link to="/show/blog">
          <Blog
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, "
            p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, voluptates rerum, tenetur aspernatur ex quidem odit dignissimos vitae, animi expedita dolores ipsam cupiditate consectetur corporis provident repellendus! Accusantium."
            date="11 november 2001"
            like="20"
          />
          </Link>
          <Blog
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, "
            p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, voluptates rerum, tenetur aspernatur ex quidem odit dignissimos vitae, animi expedita dolores ipsam cupiditate consectetur corporis provident repellendus! Accusantium."
            date="11 november 2001"
            like="20"
          />
          <Blog
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, "
            p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, voluptates rerum, tenetur aspernatur ex quidem odit dignissimos vitae, animi expedita dolores ipsam cupiditate consectetur corporis provident repellendus! Accusantium."
            date="11 november 2001"
            like="20"
          />
          <Blog
            image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, -----------------------------------------------------------------------------------"
            p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et ab, voluptates rerum, tenetur aspernatur ex quidem odit dignissimos vitae, animi expedita dolores ipsam cupiditate consectetur corporis provident repellendus! Accusantium."
            date="11 november 2001"
            like="20"
          />
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
