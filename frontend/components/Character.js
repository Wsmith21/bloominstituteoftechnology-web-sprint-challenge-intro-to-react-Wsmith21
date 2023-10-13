import React, { useState } from 'react';
import Styled from 'styled-components'
import Planet from './Planets'



const Character = ({ data }) => {
  const [showPlanetInfo, setShowPlanetInfo] = useState(false);

  const togglePlanetInfo = () => {
    setShowPlanetInfo(!showPlanetInfo);
  };

  return (
    <div className="character-card" onClick={togglePlanetInfo}>
      <h3>{data.name}</h3>
      {showPlanetInfo && <Planet planet={data.homeworld} />} {/* Render the Planet component */}
    </div>
  );
};

export default Character;