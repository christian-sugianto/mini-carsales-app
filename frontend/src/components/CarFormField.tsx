import React from 'react';
import styled from 'styled-components';
import colors from '../assets/consts';
import { withStyles, fade, InputBase } from '@material-ui/core';

interface Props {
  text: string;
}

const CarFormField: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Label>{text}: </Label>
      <BootstrapInput />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
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

const BootstrapInput = withStyles((theme: any) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    margin: '1rem 1rem',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: colors.tertiaryColor,
    color: 'white',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '25rem',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.3rem`,
      borderColor: colors.secondaryColor,
    },
  },
}))(InputBase);

export default CarFormField;
