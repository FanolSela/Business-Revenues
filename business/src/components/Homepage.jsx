import React from 'react';

const Homepage = (props) => {
  return (
    <div>
      <p>{props.revenue.name}</p>
      <p>{props.revenue.worth}</p>
      <p>{props.revenue.description}</p>
    </div>
  );
};

export default Homepage;