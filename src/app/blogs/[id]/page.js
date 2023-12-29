import React from "react";


const SinglePage = ({ params }) => {
    console.log(params);
  return <div>SinglePage{params.id}</div>;
};

export default SinglePage;
