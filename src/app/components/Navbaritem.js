"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Navbaritem = ({ title, para }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        href={`/?genre=${para}`}
        className={`m-4 hover:text-orange-700 font-semibold`}
      >
        {title}
      </Link>
    </div>
  );
};

export default Navbaritem;
