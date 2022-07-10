import {
  InfoRounded,
  PermDeviceInformation,
  PlayArrow,
} from "@mui/icons-material";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { baseurl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[64vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen ">
        <Image
          src={`${baseurl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl  md:text-4xl lg:text-7xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3 ">
        <button className="bannerButton bg-white text-black">
          <PlayArrow className=" text-black" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info <InfoRounded />
        </button>
      </div>
    </div>
  );
}

export default Banner;
