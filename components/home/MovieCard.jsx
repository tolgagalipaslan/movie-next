import React, { useEffect, useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";
const MovieCard = ({ item }) => {
  const [genresArray, setGenresArray] = useState([]);

  return (
    <Link
      href={`/`}
      className="relative flex group items-center justify-center h-[354px] bg-[#191d20] "
      onClick={(e) => {
        window.scrollTo(0, 0);
      }}
    >
      {/* IMAGE */}
      <LazyLoadImage
        effect="blur"
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vfmkV37b3VJsSjc989R7tYt2uTQ.jpg`}
        placeholderSrc={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vfmkV37b3VJsSjc989R7tYt2uTQ.jpg`}
        alt=""
        className="object-center w-full h-full object-fit "
      />
      {/* <div className="object-center w-full h-full object-fit"></div> */}

      <div className="w-full h-full absolute z-10 py-2 bg-black opacity-20  group-hover:opacity-20  group-hover:backdrop-blur-md  duration-500  "></div>
      <div className="md:w-full  h-full w-[300px] gap-2 absolute z-50   group-hover:backdrop-blur-sm">
        <div className="h-4/6 w-full      px-6 opacity-0 group-hover:opacity-80 duration-500   items-center justify-center flex flex-col gap-2">
          <p className="line-clamp-6 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            saepe.
          </p>
          <div>
            {genresArray?.map((genre, i) => (
              <div className="badge" key={i}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
        <div className="h-2/6 w-full flex flex-col font-semibold text-sm text-white  justify-center p-2 px-4 gap-3">
          <div className="flex justify-between w-full ">
            <h1 className="font-light flex items-center group-hover:text-red-500">
              2014
            </h1>
            <h1 className="flex items-center gap-1">
              <BsFillPeopleFill /> 5
            </h1>
            <h1 className="flex items-center gap-1 ">
              <AiFillStar className="text-yellow-400 text-xl" />
              7.2
            </h1>
          </div>
          <div>
            <h1 className="text-md font-bold">Title</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
