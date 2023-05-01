"use client";

import React from "react";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="h-[50vh] w-[100vw] flex justify-center flex-col items-center">
      <h1 className="text-xl text-red-600 font-semibold">
        Something Went Wrong!
      </h1>
      <button
        onClick={() => reset()}
        className="p-1 rounded bg-red-950 text-xl text-slate-300 mt-1 hover:bg-orange-700"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
