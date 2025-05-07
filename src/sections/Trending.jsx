import React from 'react'
import MovieCard from '../components/MovieCard'

function Trending({ trendingMovies, dataLoaded, allDayActive, allWeekActive, handleAllDay, handleAllWeek }) {
    return (
        <div className='p-10 w-full max-w-3xl mx-auto'>
            <h1 className='text-2xl font-bold text-green-700'>Trending</h1>

            <div className='mt-2.5 bg-green-200 w-fit p-1.5 rounded-full flex space-x-2'>
                <button className={`${allDayActive ? "text-white bg-green-900" : "text-green-900 bg-transparent"} px-2.5 py-1  rounded-full cursor-pointer border-2 border-green-900 hover:bg-green-900 hover:text-white`} onClick={() => handleAllDay()}>
                    All day
                </button>
                <button className={`${allWeekActive ? "text-white bg-green-900" : "text-green-900 bg-transparent"} px-2.5 py-1  rounded-full cursor-pointer border-2 border-green-900 hover:bg-green-900 hover:text-white`} onClick={() => handleAllWeek()}>
                    All Week
                </button>
            </div>

            <div className='flex flex-wrap gap-5 w-full justify-center mt-10 sm:grid sm:grid-cols-2'>
                {dataLoaded ? trendingMovies.results.map((movie) => (
                    <MovieCard movie={movie} />
                ))
                    : <p className='bg-green-200 w-full mt-10 text-green-900 flex items-center justify-center h-29 rounded-xl font-bold'>Loading</p>
                }

            </div>
        </div>
    )
}

export default Trending
