import React from 'react';
import styled from 'styled-components';
import colors from '../assets/consts';
import { withStyles, fade, InputBase } from '@material-ui/core';

interface Props {
  text: string;
  name: string;
  register: any;
  defaultValue: any;
  error: any;
}

const CarFormField: React.FC<Props> = ({ text, name, register, defaultValue, error }) => {
  return (
    <Container>
      <div>
        <Label>{text}: </Label>
        <StyledInput name={name} ref={register} defaultValue={defaultValue} />
      </div>
      <div style={{ color: 'red', marginLeft: '-8rem', marginTop: '-1rem' }}>
        {error && error.message}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const Label = styled.div`
  color: ${colors.secondaryColor};
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.5rem;
  width: 8rem;
  text-align: right;
`;

const StyledInput = styled.input`
  margin: 1rem 1rem;
  border-radius: 4;
  position: relative;
  background-color: ${colors.tertiaryColor};
  color: white;
  border: 1px solid #ced4da;
  font-size: 1rem;
  width: 25rem;
  padding: 10px 12px;
  &:focus: {
    boxshadow: ${fade(colors.tertiaryColor, 0.25)} 0 0 0 0.3rem;
    bordercolor: colors.secondaryColor;
  }
`;

export default CarFormField;
