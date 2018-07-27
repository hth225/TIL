import React from 'react';

const MyName = ({ Name }) => {
  return <div>Hello My name is {Name}!</div>;
};

MyName.defaultProps = {
  Name: 'LAD'
};

export default MyName;
