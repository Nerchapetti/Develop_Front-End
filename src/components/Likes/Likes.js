import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import incrementLike from "../../API/incrementLike";
import "./likes.css";
const Likes = ({ likes:l, id, likeFor}) => {

    const [likes, setlikes] = useState(l)
  const [isLiked, setisLiked] = useState(false);

  useEffect(() => {

  }, [isLiked]);


  const addLike = (e) => {
    if(localStorage.getItem(id)){
      
        localStorage.removeItem(id);
        setlikes(likes - 1)
        e.target.classList.remove('liked')
        console.log("REMOVING");
        setisLiked(false)

        if(likeFor === "parish"){
          incrementLike(`${window.URI}/unlike-parish/${id}`).then(res => {
              console.log(res);
          })
        } else if(likeFor === "campaign"){
          incrementLike(`${window.URI}/unlike-campaign/${id}`).then(res => {
              console.log(res);
          })
        }
    } else{

        if(likeFor === "parish"){
          setisLiked(true)
          incrementLike(`${window.URI}/like-parish/${id}`).then(res => {
              console.log(res);
          })
          setlikes(likes + 1)
          localStorage.setItem(id, true)
          e.target.classList.add("liked");
          console.log("ADDING");
        } else if(likeFor === "campaign"){
          setisLiked(true)
          incrementLike(`${window.URI}/like-campaign/${id}`).then(res => {
              console.log(res);
          })
          setlikes(likes + 1)
          localStorage.setItem(id, true)
          e.target.classList.add("liked");
          console.log("ADDING");
        }

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
