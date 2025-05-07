import React from 'react'
import Trending from '../sections/Trending'

function HomePage({ trendingMovies, dataLoaded, allDayActive, allWeekActive, handleAllDay, handleAllWeek }) {
    return (
        <Trending trendingMovies={trendingMovies} dataLoaded={dataLoaded} allDayActive={allDayActive} allWeekActive={allWeekActive} handleAllDay={handleAllDay} handleAllWeek={handleAllWeek} />
    )
}

export default HomePage
