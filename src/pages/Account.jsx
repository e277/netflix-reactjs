import React from 'react'
import SaveShows from '../components/SaveShows'

const Account = () => {
    return (
        <>
            <div className="w-full text-white">
                <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/8b51053e-5c6c-4e53-b49c-597f9162120c/JM-en-20220502-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <SaveShows />
        </>
    )
}

export default Account