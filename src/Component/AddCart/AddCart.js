import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCart.css'
const AddCart = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

      <input name="name" ref={register({ required: true })} placeholder="Enter your Name" />
    {errors.name && <span className="error">name is required</span>}    
   

      <input name="email" ref={register({ required: true })} />
    {errors.email && <span className="error">email is required</span>}    
      

      <input name="password" ref={register({ required: true })} />
    {errors.password && <span className="error">password is required</span>} 

      <input type="submit" />
    </form>
  );
};

export default AddCart;