import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './PropertiesPage.css';

const PropertiesPage = () => {
  const properties = [
    // Your property data here
  ];

  return (
    <div className="properties-container">
      <div className="section-heading">
        <h6>Our Properties</h6>
        <h2>Featured Listings</h2>
      </div>

      <div className="properties-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
