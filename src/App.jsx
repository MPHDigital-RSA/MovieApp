import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'




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

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<HomePage trendingMovies={trendingMovies} dataLoaded={dataLoaded} allDayActive={allDayActive} allWeekActive={allWeekActive} handleAllDay={handleAllDay} handleAllWeek={handleAllWeek} />}
        />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App
