import React from 'react';
import CarFormField from '../components/CarFormField';
import styled from 'styled-components';
import colors from '../assets/consts';
import StyledButton from '../components/StyledButton';
import { useHistory } from 'react-router-dom';
import CarForm from '../components/CarForm';

const Car: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <div>
        <div style={{ textAlign: 'left', margin: '1rem' }}>
          <StyledButton text="To Home page" onClick={() => history.push('/')} />
        </div>
        <Title> Create Car</Title>
      </div>

      <CarForm />
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
