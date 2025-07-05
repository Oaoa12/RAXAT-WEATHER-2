import React from 'react';
import './WeatherEffect.scss';

const WeatherEffect = ({ data }) => {
  const ShowEffect = data?.weather?.[0]?.main;

  return (
    <>
      {ShowEffect === 'Rain' && (
        <div className="rain-container">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * -100}px`, 
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>
      )}

      {ShowEffect === 'Clear' && <div className="sun-glow"></div>}
      
      {ShowEffect === 'Snow' && (
        <div className="snow-container">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 0.5 + 0.2;
            const duration = 10 + Math.random() * 20;
            const left = Math.random() * 100;
            
            return (
              <div
                key={i}
                className="snowflake"
                style={{
                  left: `${left}%`,
                  width: `${size}rem`,
                  height: `${size}rem`,
                  animationDuration: `${duration}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            );
          })}
        </div>
      )}

      {ShowEffect === 'Clouds' && (
        <div className="subtle-fog">
          <div className="fog-veil"></div>
        </div>
      )}
    </>
  );
};

export default WeatherEffect;