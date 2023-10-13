import React from 'react';
import axios from 'axios';
import Styled from 'styled-components'

const Planet = ({ planet }) => {
  return (
    <p>Planet: 
    <span className="character-planet">{ planet.name}
      {/* Add more planet details as needed */}
    </span>
    </p>
  );
};

export default Planet;