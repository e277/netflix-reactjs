import axios from 'axios'
import React, {
    useEffect,
    useState
} from 'react'
import Movie from './Movie'
import {
    MdChevronLeft,
    MdChevronRight
} from 'react-icons/md'

const Row = ({ rowID, title, fetchURL }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    // console.log(movies);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((movieItem, id) => (
                        <Movie key={id} movieItem={movieItem} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
            </div>
        </>
    )
}

export default Row