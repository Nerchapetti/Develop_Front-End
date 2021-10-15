import "./Blogs.scss";

const blog = ({ image, heading, p, like, date, authorImg, authorName }) => {
  return (
    <div className="blog">
      <div>
        <img src={image} alt="loading.." />
      </div>
      <div className="blog-data">
        <div className="auth-date">
          <img src={authorImg} alt="" />
          <div className="auth">
            <span>{authorName}</span>
            <span>{date}</span>
          </div>
        </div>
        <h2>{heading}</h2>
        <p dangerouslySetInnerHTML={{ __html: p }} />

        <div className="content">
          <span align="center">Read More</span>
          {/* <span>{like}</span> */}
        </div>
      </div>
    </div>
  );
};

export default blog;
