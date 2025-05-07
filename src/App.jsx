import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [trendingMovies, setTrendingMovies] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)
  const [allDayActive, setAllDayActive] = useState(false)
  const [allWeekActive, setAllWeekActive] = useState(false)
  // const [category, setCategory] = useState("day")

  useEffect(() => {
    setAllDayActive(true)
    fetchMovieData();
  }, [])

  const handleAllDay = () => {
    setAllDayActive(true)
    setAllWeekActive(false)
    // fetchMovieData(setCategory("day"));
  }

  const handleAllWeek = () => {
    setAllWeekActive(true)
    setAllDayActive(false)
    // fetchMovieData(setCategory("week"));
  }

  const fetchMovieData = () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTlkMjdiODVkZmM4YzA2MGI2NjhlZjA1ZmUzM2NkZCIsIm5iZiI6MTc0NjYxNzM3NC4wMTYsInN1YiI6IjY4MWI0NDFlOWNkNTczYjA2MmVmMGQ0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PcNAFuAqJNWq-CVNDX_7PZm8PxHq1utIVAaTweuTVEQ'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setTrendingMovies(json)
        console.log(json)
        setDataLoaded(true)
      })
      .catch(err => {
        console.error(err),
          setDataLoaded(false)
      });
  }

  const handleMovieCardClick = (id) => {
    alert(id)
  }
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
          <div key={movie.id} className='w-full shadow-md rounded-sm overflow-hidden cursor-pointer' onClick={() => handleMovieCardClick(movie.id)}>
            <img src={` http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" className='w-full h-56 object-cover' />
            <div className='px-4 pb-5 mt-3'>
              <p className='text-xl text-green-900 font-bold'>{movie.title}</p>
            </div>
          </div>
        ))
          : <p className='bg-green-200 w-full mt-10 text-green-900 flex items-center justify-center h-29 rounded-xl font-bold'>No movie data yet</p>
        }

      </div>
    </div>
  )
}

export default App
