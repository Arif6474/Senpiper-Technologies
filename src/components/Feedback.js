import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './Feedback.css'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

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

      const url = `https://senpiper-server-side.vercel.app/feedback`
      fetch(url,{
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result=> {
        console.log(result);
        if (result) {
         toast(
         <div className="flex justify-center items-center flex-col" >
         <p className="mx-auto">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth="1.5"
             stroke="currentColor"
             className="w-10 h-10 p-2 bg-green-500 text-white text-center mx-auto mt-4 rounded-full"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4.5 12.75l6 6 9-13.5"
             />
           </svg>
         </p>
         <div className="mt-4 space-y-4">
           <p className="text-slate-800 font-semibold text-lg text-center">Thank you for providing the feedback</p>
           <p className="text-slate-600 font-medium text-sm text-center">we will work towards improving your experience</p>
         </div>
        
       </div>, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      })
  
 
    };
    
    return (
        <div  className="bg-slate-100 p-16 ">
            <h1 className="text-2xl font-semibold text-black  ">Aromatic Bar</h1>
            <div className="my-2">
          <form onSubmit={handleSubmit(onSubmit)}>
         <div className="grid grid-cols-2 gap-4">
         <div className="w-3/4">
      <label className=" font-semibold text-black" htmlFor="name">Customer Name
      <span className="text-rose-500">*</span>
      </label>
      <input
        placeholder="Enter your name"
        {...register("name", {
          required: "This is a required",
         
        })}
      />
      {errors.name && <p className="form-p">{errors.name.message}</p>}
      </div>

      <div className="w-3/4">
      <label className=" font-semibold text-black" htmlFor="email">Email
      <span className="text-rose-500">*</span></label>
      <input
        placeholder="Enter your email address"
        type="text"
        {...register("email", {
          required: "This is required",
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <p className="form-p">{errors.email.message}</p>}
      </div>
      <div className="w-3/4">
      <label className=" font-semibold text-black" htmlFor="phone">Phone
      <span className="text-rose-500">*</span></label>
      <input
        placeholder="Enter your phone"
        type="number" {...register("phone", {  required: "This is required",  message: "Invalid phone number" })} 
      />
      {errors.phone && <p className="form-p">{errors.phone.message}</p>}
      </div>
         </div>
      
          <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="my-2">
          <h1  className=" font-semibold text-black">Please rate the quality of the service you received from your host.
<span className="text-rose-500">*</span></h1>
        <div className="grid grid-cols-4 w-2/3  gap-6">
          
          <div className="flex justify-center items-center gap-2 ">
          <input className="m-0" {...register("service")} type="checkbox" value="Excellent" />
          <label  className=" font-medium opacity-80 m-0 text-black " htmlFor="excellent">Excellent</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("service")} type="checkbox" value="Good" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="good">Good</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("service")} type="checkbox" value="Fair" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="fair">Fair</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("service")} type="checkbox" value="Bad" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="bad">Bad</label>
          </div>
        </div>
          </div>

          <div className="my-2">
          <h1  className=" font-semibold text-black"> Please rate the quality of your beverage.
<span className="text-rose-500">*</span></h1>
        <div className="grid grid-cols-4 w-2/3  gap-6">
          
          <div className="flex justify-center items-center gap-2 ">
          <input className="m-0" {...register("beverage")} type="checkbox" value="Excellent" />
          <label  className=" font-medium opacity-80 m-0 text-black " htmlFor="excellent">Excellent</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("beverage")} type="checkbox" value="Good" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="good">Good</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("beverage")} type="checkbox" value="Fair" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="fair">Fair</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("beverage")} type="checkbox" value="Bad" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="bad">Bad</label>
          </div>
        </div>
          </div>

          <div className="my-2">
          <h1  className=" font-semibold text-black">Was our restaurant clean?

<span className="text-rose-500">*</span></h1>
        <div className="grid grid-cols-4 w-2/3  gap-6">
          
          <div className="flex justify-center items-center gap-2 ">
          <input className="m-0" {...register("clean")} type="checkbox" value="Excellent" />
          <label  className=" font-medium opacity-80 m-0 text-black " htmlFor="excellent">Excellent</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("clean")} type="checkbox" value="Good" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="good">Good</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("clean")} type="checkbox" value="Fair" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="fair">Fair</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("clean")} type="checkbox" value="Bad" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="bad">Bad</label>
          </div>
        </div>
          </div>

          <div className="my-2">
          <h1  className=" font-semibold text-black">Please rate your overall dining experience.

<span className="text-rose-500">*</span></h1>
        <div className="grid grid-cols-4 w-2/3  gap-6">
          
          <div className="flex justify-center items-center gap-2 ">
          <input className="m-0" {...register("dining")} type="checkbox" value="Excellent" />
          <label  className=" font-medium opacity-80 m-0 text-black " htmlFor="excellent">Excellent</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("dining")} type="checkbox" value="Good" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="good">Good</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("dining")} type="checkbox" value="Fair" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="fair">Fair</label>
          </div>
          <div className="flex justify-center items-center ">
          <input className="m-0"  {...register("dining")} type="checkbox" value="Bad" />
          <label className=" font-medium opacity-80 m-0 text-black " htmlFor="bad">Bad</label>
          </div>
        </div>
          </div>
         
         
          
          </div>
      <div className="flex justify-end mr-40"><input  className="w-40 "  type="submit" value="Submit Review"/></div>
      
    </form>
        </div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
        </div>
    );
};

export default Feedback;