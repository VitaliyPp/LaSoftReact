import React from "react"
import Data from '../../assets/imagesData/images'

const Post = ({match}) => {  
  const {
    params: { id }
  } = match;

  return (
    <div>
      <p>
        <strong>User ID: {id}</strong>
        
      </p>
      
        <img src={Data[id - 1].url} alt={id} />
      
    </div>
  );
}

export default Post;
