import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  text: string;
  onClick: () => void;
}

const StyledButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={() => onClick()}>
      {text}
    </Button>
  );
};

export default StyledButton;
