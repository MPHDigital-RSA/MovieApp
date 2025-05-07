import React, { useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

function MovieCard({ movie }) {

    const [addToFavs, setAddToFavs] = useState(false)

    const handleMovieCardClick = (id) => {
        alert(id)
    }

    const addToFavorites = () => {
        setAddToFavs(!addToFavs)
    }

    return (
        <div key={movie.id} className='w-full shadow-md rounded-sm overflow-hidden'>
            <img src={` http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" className='w-full h-56 object-cover cursor-pointer' onClick={() => handleMovieCardClick(movie.id)} />
            <div className='px-4 pb-5 mt-3 flex justify-between items-center'>
                <div>
                    <p className='text-xl text-green-900 font-bold'>{movie.title ? movie.title : movie.name}</p>
                    <p className='text-sm text-gray-400 font-semibold'>{movie.release_date}</p>
                </div>

                <HeartIcon width={30} className={`${addToFavs ? "text-green-500" : "text-green-100"} cursor-pointer`} onClick={() =>
                    addToFavorites()} />

            </div>

        </div>
    )
}

export default MovieCard
