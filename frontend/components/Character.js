import React, { useState } from 'react';
import './Character'; 
import Planet from './Planet';


function Character({ data }) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="character-card" onClick={toggleInfo}>
      {showInfo ? (
        <div>
          <h3>{data.name}</h3>
          <p>Gender: {data.gender}</p>
          <Planet planetNumber={data.homeworld} />
        </div>
      ) : (
        <h3>{data.name}</h3>
      )}
    </div>
  );
}

export default Character;
