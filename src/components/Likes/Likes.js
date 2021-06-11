import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import incrementLike from "../../API/incrementLike";
import "./likes.css";
const Likes = ({ likes:l, id}) => {

    const [likes, setlikes] = useState(l)
  const [click, setclick] = useState(false);
  const [isLiked, setisLiked] = useState(false);

  useEffect(() => {

  }, [isLiked]);

  const addLike = (e) => {
    setclick(true);
    if(localStorage.getItem(id)){
        localStorage.removeItem(id);
        setlikes(likes - 1)
        e.target.classList.remove('liked')
        console.log("REMOVING");
        setisLiked(false)
    } else{
        setisLiked(true)
        incrementLike(id).then(res => {
            console.log(res);
        })
        setlikes(likes + 1)
        localStorage.setItem(id, true)
        e.target.classList.add("liked");
        console.log("ADDING");

    }
  };

  console.log(localStorage.getItem(id));

  if (localStorage.getItem(id)) {
    return (
      <div className="likes liked" onClick={(e) => addLike(e)}>
        <FontAwesomeIcon icon={faThumbsUp} /> {likes}
      </div>
    );
  } else {
    return (
      <div className="likes" onClick={(e) => addLike(e)}>
        <FontAwesomeIcon icon={faThumbsUp} /> {likes}
      </div>
    );
  }
};

export default Likes;
