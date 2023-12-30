import React from "react";

const SinglePage = ({ params }) => {
  const [year, id] = params.segments || [];
  return (
    <div>
      SinglePage{year || new Date().getFullYear()} for {id}
    </div>
  );
};

export default SinglePage;
