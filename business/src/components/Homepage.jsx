import React from 'react';
import { useParams } from 'react-router-dom'

const Homepage = (props) => {

  let { id } = useParams()

  const companyItem = props.company.find(company => company.id === id)

  return (
    <div>
      <h2>{companyItem.fields.name}</h2>
      <h2>{companyItem.fields.description}</h2>
      <h2>{companyItem.fields.worth}</h2>
    </div>
  );
};

export default Homepage;