import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { useRef, useState } from "react"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

interface Props {
    title: string
    movies: Movie[]
}

function Row({title, movies}) {
 const rowRef = useRef<HTMLDivElement>(null)
 const [isMoved, setIsMoved] = useState(false)

 const handleClick = (direction: String) => {
    setIsMoved(true)

    if (rowRef.current){
        const {scrollLeft, clientWidth} = rowRef.current

        const scrollTo = direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
        rowRef.current.scrollTo({left:scrollTo, behavior:"smooth"})
    }
 }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
        <div className="group relative">
            <ChevronLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${isMoved && 'hidden'}`}
            onClick={() => (handleClick("left"))}/>
            <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide">     
                {movies.map((movi) => (
                    <Thumbnail key={movi.id} movie={movi}/>
                ))} 
            </div>
            <ChevronRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => (handleClick("right"))}/>
        </div>
    </div>
  )
}

export default Row