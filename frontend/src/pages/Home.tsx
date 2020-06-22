import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../assets/consts';
import { Select, MenuItem, withStyles, InputBase } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import carsService, { CarType } from '../services/CarsService';
import VehicleTable from '../components/VehicleTable';

const Home: React.FC = () => {
  const history = useHistory();
  const [isFetched, setFetched] = useState<boolean>(false);
  const [cars, setCars] = useState<CarType[]>([]);

  useEffect(() => {
    async function fetchData() {
      setFetched(false);
      const response = await carsService.getCars();
      setCars(response);
      setFetched(true);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <HomeTitle> Mini Carsales Application</HomeTitle>
      <div>
        <CreateLabel>Create Vehicle: </CreateLabel>
        <StyledSelect input={<BootstrapInput />}>
          <MenuItem
            // tslint:disable:jsx-no-lambda
            onClick={() => {
              history.push('/car');
            }}
          >
            Create Car
          </MenuItem>
        </StyledSelect>
      </div>
      {isFetched && <VehicleTable data={cars} />}
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

const HomeTitle = styled.h1`
  color: ${colors.secondaryColor};
`;

const StyledSelect = styled(Select)`
  display: inline-block;
`;

const CreateLabel = styled.h2`
  display: inline-block;
  color: ${colors.secondaryColor};
  margin-right: 2rem;
`;

const BootstrapInput = withStyles((theme: any) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: colors.tertiaryColor,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      backgroundColor: colors.tertiaryColor,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default Home;
