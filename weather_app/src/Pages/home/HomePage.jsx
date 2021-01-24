import React, { useEffect, useState } from 'react';
import moment from "moment";
import { useSelector } from 'react-redux';
import CityForcastAutocomplete from "../../Components/CityForcastAutocomplete/CityForcastAutocomplete";
import classes from './HomePage.module.scss';

const HomePage = () => {
  const [date,setDate] = useState(moment().format('dddd h:mm A | MMMM Do YYYY'));
  const arr = [1,2,3,4,5];
  
  const weatherDay = useSelector(state => {
    return state.weatherForcastDay;
  });

  const weatherWeek = useSelector(state => {
    return state.weatherForcastWeek;
  });

  const cityName = useSelector(state => {
    return state.cityName; 
  })

  useEffect(()=>{
    const dateClock = setInterval(()=>{
      setDate(moment().format('dddd h:mm A | MMMM Do YYYY'))
    },60000);
    return ()=> clearInterval(dateClock);
  }, []);

  function getCurrentStatus(){
    let currentHour = parseInt(moment().format('H'));
    let result;
    if (currentHour > 17 || (currentHour > 0 && currentHour < 6)){
      result = weatherDay.DailyForecasts[0].Night.IconPhrase;
    }
    else {
      result = weatherDay.DailyForecasts[0].Day.IconPhrase;
    }
    return result;
  }

  if(!weatherDay){
    return (
      <>
      loading ...
      </>
    )
  }
  /*
  Herndon Virginia, United states
  
  Friday 10:52 PM
  
  April 3rd 2020
  */
  return (
    <>
      <CityForcastAutocomplete />
      <div className={classes.Container}>
        <div className={classes.ForcastHeader}>
          <div>
            <h1><p>{cityName}, Israel</p>
              <p>{date}</p>
            </h1>
          </div>
          <div>
            <h1>&#10084;</h1>
          </div>
        </div>
        <h1 className={classes.ForcastText}>{getCurrentStatus()}</h1>
        <h3>{weatherDay.Headline.Text}</h3>
        <div className={classes.weeklyForcast}>
        {
          arr.map((day, index) => {
            return (
              <div>
                day {index}
              </div>
            );
          })
        }
          
        </div>

      </div>
    </>
  )
}

export default HomePage;
