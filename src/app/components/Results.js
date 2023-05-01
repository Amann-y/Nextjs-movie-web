import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  console.log(results);
  return (
    <div className="text-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto py-2 border-red-800">
      {results &&
        results.map((ele, ind) => {
          return <Card result={ele} key={ele.id} />;
        })}
    </div>
  );
};

export default Results;
