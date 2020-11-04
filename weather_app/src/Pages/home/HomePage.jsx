import React from 'react'
import { useSelector } from 'react-redux';
import CityForcastAutocomplete from "../../Components/CityForcastAutocomplete/CityForcastAutocomplete";
import classes from './HomePage.module.scss'
const HomePage = () => {


  const arr = [1,2,3,4,5];
  const weatherDay = useSelector(state => {
    return state.weatherForcastDay;
  });

  const weatherWeek = useSelector(state => {
    return state.weatherForcastWeek;
  });

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
            <h1><p>Herndon Virginia, United states</p>
              <p>Friday 10:52 PM | April 3rd 2020</p>
            </h1>
          </div>
          <div>
            <h1>&#10084;</h1>
          </div>
        </div>
        <h1 className={classes.ForcastText}>&#10084;</h1>
        <h1 className={classes.ForcastText}>VERY VERY CLODY!</h1>
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
