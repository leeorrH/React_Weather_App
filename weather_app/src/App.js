import React,{useEffect, useCallback} from 'react';
import { AppLayout } from "./Components/AppLayout"
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import FavoritesPage from './Pages/favorite/FavoritesPage';
import * as actions from './store/actions/index';
import {useDispatch, useSelector} from 'react-redux'


function App() {
  const dispatch = useDispatch(); 
  const onInitWeather = useCallback(city => dispatch(actions.getCityCode(city)),[dispatch])
  const weather = useSelector(state => {
    return state.weatherForcast;
  })

  useEffect(()=>{
    onInitWeather("haifa");
    console.log(weather);
  },[onInitWeather])

  console.log(weather?.find(cityWeather => cityWeather.AdministrativeArea.LocalizedName.toLowerCase() === "haifa")); 
  return (
    <AppLayout>
      <Route 
      path="/" exact
      component = {HomePage}
      />
       <Route 
      path="/favorites"
      component = {FavoritesPage}
      />
    </AppLayout>
  );
}

export default App;
