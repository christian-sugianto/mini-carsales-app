import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CarFormField from './CarFormField';
import StyledButton from './StyledButton';

const CarForm: React.FC = () => {
  const { register, unregister, handleSubmit, errors, setValue, getValues } = useForm<any>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // useEffect(() => {
  //   register({ name: 'make', type: 'custom' }, { required: true });
  //   register({ name: 'model', type: 'custom' }, { required: true });
  //   register({ name: 'engine', type: 'custom' }, { required: true });
  // }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'block', marginLeft: '-6.5rem' }}>
      <CarFormField text="Make" name="make" register={register} defaultValue="" />
      <CarFormField text="Model" name="model" register={register} defaultValue="" />
      <CarFormField text="Engine" name="engine" register={register} defaultValue="" />
      <CarFormField text="Body Type" name="bodyType" register={register} defaultValue="" />
      <CarFormField text="Doors" name="doors" register={register} defaultValue="" />
      <CarFormField text="Wheels" name="wheels" register={register} defaultValue="" />
      <StyledButton
        text="Submit"
        isSubmitType={true}
        style={{ width: '10rem', marginLeft: '7rem', marginTop: '2rem' }}
      />
    </form>
  );
};

export default CarForm;
