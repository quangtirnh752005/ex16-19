import React from 'react';
import data from '../data';
import AnimalCard from './AnimalCard/AnimalCard';

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation);
}

const AnimalList = () => {
  return (
    <div className="container py-3">
      <h1 className="text-center">Animals</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map(animal => (
          <div className="col" key={animal.name}>
            <AnimalCard
              additional={animal.additional}
              diet={animal.diet}
              name={animal.name}
              scientificName={animal.scientificName}
              showAdditional={showAdditional}
              size={animal.size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
