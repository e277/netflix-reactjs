import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {
    MdChevronLeft,
    MdChevronRight
} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { async } from '@firebase/util'

const SaveShows = () => {

    const { user } = UserAuth()
    const [movies, setMovies] = useState([])

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.saveShows)
        })
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)

    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((movieItem) => movieItem.id !== passedID)
            await updateDoc(movieRef, {
                saveShows: result
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' />
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((movieItem, id) => (
                        <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movieItem?.img}`} alt={movieItem?.title} />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{movieItem?.title}</p>
                                <p onClick={() => deleteShow(movieItem.id)} className='absolute text-slate-300 top-4 right-4'><AiOutlineClose /></p>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
            </div>
        </>
    )
}

export default SaveShows