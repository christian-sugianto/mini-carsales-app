import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CarFormField from './CarFormField';
import StyledButton from './StyledButton';
import carsService, { CarType } from '../services/CarsService';
import { useHistory } from 'react-router-dom';

const CarForm: React.FC = () => {
  const { register, unregister, handleSubmit, errors, setValue, getValues } = useForm<any>();
  const history = useHistory();

  const onSubmit = async (data: any) => {
    data.wheels = parseInt(data.wheels, 10);
    data.doors = parseInt(data.doors, 10);
    await carsService.postCar(data);
    history.push('/');
  };

  const updatedRegister = register({ required: 'Please fill in the field' });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'block', marginLeft: '-6.5rem' }}>
      <CarFormField
        text="Make"
        name="make"
        register={updatedRegister}
        error={errors.make}
        defaultValue=""
      />
      <CarFormField
        text="Model"
        name="model"
        register={updatedRegister}
        error={errors.model}
        defaultValue=""
      />
      <CarFormField
        text="Engine"
        name="engine"
        register={updatedRegister}
        error={errors.engine}
        defaultValue=""
      />
      <CarFormField
        text="Body Type"
        name="bodyType"
        register={updatedRegister}
        error={errors.bodyType}
        defaultValue=""
      />
      <CarFormField
        text="Doors"
        name="doors"
        register={updatedRegister}
        error={errors.doors}
        defaultValue={null}
        isNumberInputType={true}
      />
      <CarFormField
        text="Wheels"
        name="wheels"
        register={updatedRegister}
        error={errors.wheels}
        defaultValue={null}
        isNumberInputType={true}
      />
      <StyledButton
        text="Submit"
        isSubmitType={true}
        style={{ width: '10rem', marginLeft: '7.2rem', marginTop: '2rem' }}
      />
    </form>
  );
};

export default CarForm;
