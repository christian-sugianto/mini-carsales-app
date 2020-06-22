import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  text: string;
  onClick?: () => void;
  style?: any;
  isSubmitType?: boolean;
}

const StyledButton: React.FC<Props> = ({ text, onClick, style, isSubmitType }) => {
  return (
    <Button
      type={isSubmitType ? 'submit' : 'button'}
      style={style ? style : {}}
      variant="contained"
      color="primary"
      onClick={() => onClick && onClick()}
    >
      {text}
    </Button>
  );
};

export default StyledButton;
