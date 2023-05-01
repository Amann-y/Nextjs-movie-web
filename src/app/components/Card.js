import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded sm:border sm:border-slate-400 group sm:m-2 transition-shadow duration-200 ">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="Img"
          className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200"
          //   placeholder="blur"
          //   blurDataURL=""
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold">{result.title || result.name}</h2>
          <p>{result.overview.substring(0, 60)}...</p>
          <p>{result.first_air_date || result.realse_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
