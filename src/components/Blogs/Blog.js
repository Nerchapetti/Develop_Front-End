import "./Blogs.scss";

const blog = ({ image, heading, p, like, date }) => {
  return (
    <div className="blog">
      <div>
        <img src={image} alt="loading.." />
      </div>
      <div className="blog-data">
        <div className="auth-date">
           <img src={image} alt="" />
            <div className="auth">
              <span>Sayujya</span>
              <span>{date}</span>
            </div>
        </div>
        <h2>{heading}</h2>
        <p>{p}</p>
        <div className="content">
          <span align="center">Read More</span>
          {/* <span>{like}</span> */}
        </div>
      </div>
    </div>
  );
};

export default blog;
