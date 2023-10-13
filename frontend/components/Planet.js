import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Planet({ planetNumber }) {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(`http://localhost:9009/api/planets/${planetNumber}`);
        setPlanetData(response.data);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    };

    fetchPlanet();
  }, [planetNumber]);

  return (
    <div className="planet">
      {planetData ? (
        <h4>Planet: {planetData.name}</h4>
      ) : (
        <p>Loading planet data...</p>
      )}
    </div>
  );
}

export default Planet;





