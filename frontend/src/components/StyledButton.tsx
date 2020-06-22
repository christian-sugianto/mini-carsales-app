import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  text: string;
  onClick: () => void;
  style?: any;
}

const StyledButton: React.FC<Props> = ({ text, onClick, style }) => {
  return (
    <Button
      style={style ? style : {}}
      variant="contained"
      color="primary"
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};

export default StyledButton;
