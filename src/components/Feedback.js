import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './Feedback.css'
const Feedback = () => {
   
    const {
        watch,
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
 
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async (data) => {
   
      console.log(data);
  
 
    };
    
    return (
        <div  className="bg-slate-200 p-16 ">
            <h1 className="text-2xl font-semibold text-black  ">Aromatic Bar</h1>
            <div className="my-2">
          <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex justify-between items-center gap-48 ">
         <div className="w-full">
      <label className=" font-semibold text-black" htmlFor="name">Name</label>
      <input
        placeholder="Enter your name"
        {...register("name", {
          required: "this is a required",
         
        })}
      />
      {errors.name && <p className="form-p">{errors.name.message}</p>}
      </div>

      <div className="w-full">
      <label className=" font-semibold text-black" htmlFor="email">Email</label>
      <input
        placeholder="Enter your email address"
        type="text"
        {...register("email", {
          required: "this is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <p className="form-p">{errors.email.message}</p>}
      </div>
         </div>

      <input  type="submit" value="Register"/>
      
    </form>
        </div>
        </div>
    );
};

export default Feedback;