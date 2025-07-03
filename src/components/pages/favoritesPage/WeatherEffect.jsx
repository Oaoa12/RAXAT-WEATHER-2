import React from 'react'
import './WeatherEffect.scss'

const WeatherEffect = ({ data }) => {

  const ShowEffect = data?.weather?.[0]?.main


  return (
    <>
  <div className="rain-container">
    {ShowEffect === 'Rain' &&
      [...Array(100)].map((_, i) => (
        <div 
          key={i}
          className="rain-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random(),
          }}
        />
      ))
    }
  </div>
  
  {ShowEffect === 'Clear' && (
        <div className="sun-glow"></div>
      )}
</>
  )
}

export default WeatherEffect
