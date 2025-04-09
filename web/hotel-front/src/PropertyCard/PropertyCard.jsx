import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({
  imageUrl,
  category,
  title,
  price,
  bedrooms,
  bathrooms,
  area,
  location
}) => {
  return (
    <div className="property-item">
      <img src={imageUrl} alt={title} className="property-image" />
      <span className="property-category">{category}</span>
      <h4 className="property-title">
        <a href="#">{title}</a>
      </h4>
      <ul className="property-details">
        <li>
          <span>Bedrooms:</span> {bedrooms}
        </li>
        <li>
          <span>Bathrooms:</span> {bathrooms}
        </li>
        <li>
          <span>Area:</span> {area} sq ft
        </li>
        <li>
          <span>Location:</span> {location}
        </li>
      </ul>
      <div className="property-footer">
        <h6 className="property-price">${price.toLocaleString()}</h6>
        <button className="property-button">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
