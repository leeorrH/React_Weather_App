import React from 'react'
import { useSelector } from 'react-redux'
const HomePage = () => {


      
  const weatherDay = useSelector(state => {
    return state.weatherForcastDay;
  });

  const weatherWeek = useSelector(state => {
    return state.weatherForcastWeek;
  });

    return (
        <div>
            {weatherDay?.[0]?.WeatherText}
        
            <div> header </div>
           <div>
               <div>
                    part A 
               </div>
               <div>
                    part B 
               </div>
           </div>
           <div> all days forcast </div>
        </div>
    )
}

export default HomePage;
