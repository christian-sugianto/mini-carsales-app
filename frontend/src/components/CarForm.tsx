import React from 'react';
import CarFormField from './CarFormField';
import StyledButton from './StyledButton';

const CarForm: React.FC = () => {
  return (
    <form style={{ display: 'block', marginLeft: '-6.5rem' }}>
      <CarFormField text="Make" />
      <CarFormField text="Model" />
      <CarFormField text="Engine" />
      <CarFormField text="Body Type" />
      <CarFormField text="Doors" />
      <CarFormField text="Wheels" />
      <StyledButton
        text="Submit"
        style={{ width: '10rem', marginLeft: '7rem', marginTop: '2rem' }}
        onClick={() => {}}
      />
    </form>
  );
};

export default CarForm;
