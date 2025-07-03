import React, { useEffect, useState } from 'react'
import { useGetWeatherByCityQuery } from '../../services/weatherApi'
import './MainPage.scss'
import { CircularProgress } from '@mui/material'
import "react-rain-animation/lib/style.css";
import WeatherEffect from '../favoritesPage/WeatherEffect';

const MainPage = () => {

    const [city, setCity] = useState('')
    const [trigger, setTrigger] = useState(false)
    const [isError, setIsError] = useState('')

    const {data, error, isLoading} = useGetWeatherByCityQuery(city, {
        skip: !trigger || city.trim().length === 0
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsError('')
        if (city.trim()) {
            setTrigger(true)
        }
            
    }

    useEffect(() => {
        if (error) {
            setIsError('Нет такого города')
            setTrigger(false)
        }
        if (data) {
            setCity('')
            setTrigger(false)
        }
    }, [error, data])
      


    if (isLoading) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </div>
        )
      }

  return (

    <>
    <div className='main_container'>
    <h1 className='title'>RAXAT-WEATHER</h1>
    <form
     className='form'  
     onSubmit={handleSubmit}>
    <input
    placeholder='Введите город'
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    />
    <button  
    type='submit' 
   >Найти
    </button>
    </form>
    <div>
        <div className='error'>
       {isError && (
        <h2>{isError}</h2>
       )}
        </div>

    { data && <WeatherEffect data={data}/>}
    
    { data && (
    <div className='info'>
        <h2>Погода в {data.name}</h2>
        <p>Температура: {data.main.temp} °C</p>
        <p>Ощущается как: {data.main.feels_like} °C</p>
        <p>{data.weather[0].description}</p>
    </div>
    )}
    </div>
    </div>
    </>
  )
}

export default MainPage
