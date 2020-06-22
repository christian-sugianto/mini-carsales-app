import React from 'react';
import CarFormField from './CarFormField';

const CarForm: React.FC = () => {
  return (
    <form style={{ display: 'block' }}>
      <CarFormField text="Make" />
      <CarFormField text="Model" />
      <CarFormField text="Engine" />
      <CarFormField text="Body Type" />
      <CarFormField text="Doors" />
      <CarFormField text="Wheels" />
    </form>
  );
};

export default CarForm;
