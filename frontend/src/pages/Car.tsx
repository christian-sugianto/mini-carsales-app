import React from 'react';
import CarFormField from '../components/CarFormField';
import styled from 'styled-components';
import colors from '../assets/consts';

const Car: React.FC = () => {
  return (
    <Container>
      <Title> Create Car</Title>
      <form style={{ display: 'block' }}>
        <CarFormField text="Make" />
        <CarFormField text="Model" />
        <CarFormField text="Engine" />
        <CarFormField text="Body Type" />
        <CarFormField text="Doors" />
        <CarFormField text="Wheels" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.primaryColor};
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.secondaryColor};
  font-size: 2.5rem;
`;

export default Car;
