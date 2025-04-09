import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './PropertiesPage.css';

const PropertiesPage = () => {
  const properties = [
    {
      id: 1,
      imageUrl: '/images/property1.jpg',
      category: 'Apartment',
      title: 'Luxury Apartment in Downtown',
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      location: 'New York'
    },
    {
      id: 2,
      imageUrl: '/images/property2.jpg',
      category: 'Villa',
      title: 'Modern Villa with Ocean View',
      price: 1200000,
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      location: 'Miami'
    },
    // Add more properties as needed
  ];

  return (
    <div className="properties-container">
      <div className="section-heading">
        <h6>Our Properties</h6>
        <h2>Featured Listings</h2>
      </div>

      <div className="properties-grid">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            imageUrl={property.imageUrl}
            category={property.category}
            title={property.title}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            location={property.location}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
