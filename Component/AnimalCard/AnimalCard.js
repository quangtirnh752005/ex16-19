import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size
}) {
  return (
    <div className="card h-100 bg-warning border-warning animal-card">
      <img
        src={`${process.env.PUBLIC_URL}/images/${name.toLowerCase()}.jpg`}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h2 className="card-title text-danger">{name}</h2>
        <ul className="list-group rounded-0">
          <li className="list-group-item">Scientific Name: {scientificName}</li>
          <li className="list-group-item">{size} kg</li>
          <li className="list-group-item">{diet.join(', ')}.</li>
        </ul>
        <div className="text-center mt-2">
          <button className="btn btn-danger" onClick={() => showAdditional(additional)}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};
