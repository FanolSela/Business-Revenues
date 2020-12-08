import React from 'react';
import { useParams } from 'react-router-dom'
import CommentSubmit from "./CommentSubmit";

const Homepage = (props) => {

  let { id } = useParams()
  if (props.company.length === 0) {
    return null
  }  
  const companyItem = props.company.find(company => company.id === id)
  const comments = props.comments.filter(comment => comment.fields.company === companyItem.fields.name)
console.log(comments)
  return (
    <div className="homepage">
      <h2>{companyItem.fields.name}</h2>
      <img src={`${companyItem.fields.Logo}`} />
      <h4>{companyItem.fields.description}</h4>
      <h4>{companyItem.fields.worth}</h4>
      <div className="CommentSection">
        {/* This is where the comments will be at */} 
      </div>
      <CommentSubmit />
    </div>
  );
};

export default Homepage;