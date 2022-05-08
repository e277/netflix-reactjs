import React, { useState } from 'react'
import {
    FaHeart,
    FaRegHeart
} from 'react-icons/fa'

const Movie = ({ movieItem }) => {

    const [likes, setLikes] = useState(false)

    return (
        <>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movieItem?.backdrop_path}`} alt={movieItem?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{movieItem?.title}</p>
                    <p className=''>{likes ? <FaHeart className='absolute top-4 left-4 text-red-500' /> : <FaRegHeart className='absolute top-4 left-4 text-slate-400' />}</p>
                </div>
            </div>
        </>
    )
}

export default Movie