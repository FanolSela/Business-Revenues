import React from 'react';
import { useParams } from 'react-router-dom'
import CommentSubmit from "./CommentSubmit";
import './Homepage.css'
import axios from 'axios'
import { commentURL, config } from '../services';
import Comment from "./Comment";
import Charts from './Charts';

const Homepage = (props) => {

  let { id } = useParams()
  if (props.company.length === 0) {
    return null
  }  
  const companyItem = props.company.find(company => company.id === id)
  const comments = props.comments.filter(comment => comment.fields.company[0] === id)
   console.log(comments)

  const handleSubmit = async (data) => {
    const fields = {
      ...data,
      company: [companyItem.id]
    }
    await axios.post(commentURL, { fields }, config)
    props.setToggleFetch(prev => !prev)
  }

  return (
    <div className="homepage">
      <h2>{companyItem.fields.name}</h2>
      <img src={`${companyItem.fields.Logo}`}  alt="logo"/>
      <h3>{companyItem.fields.description}</h3>
      <h4>{companyItem.fields.worth}</h4>
      <div className="chart">
        <Charts data={companyItem.fields.chartData.split(', ')}/>
      </div>
      <div className="comment-section">
        {/* This is where the comments will be at */} 
      </div>
      <CommentSubmit handleSubmit={handleSubmit} />
      {comments.map((comment) =>(
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Homepage;