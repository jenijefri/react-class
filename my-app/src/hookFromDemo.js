import React from "react";
import {useForm} from "react-hook-form";
export default function ReactHookFrom(){
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const onSubmit =(data)=> {
        console.log(data);
    };
    return(
        <div>
            React Hook Form
            <br/>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                Email
                <input
                    type="text"
                    name="email"
                    {...register("email",{required:true,pattern:/^[^@]+@[^@]+\.[^@.]{2,}5/,})}
                    />
                {errors.email && errors.email.type ==="required"&&(
                    <p className="errorMsg">Email is required.</p>

                )}
                {errors.email && errors.email.type === "pattern" &&(
                    <p className="errorMsg">Email is Not valid</p>
                )}
                       <br/>
                        Password
                    <input
                    type="password"
                    name="password"
                {...register("password",{
                    required:true,
                    minlength:6,
                })}
                    />
                {errors.password && errors.password.type === "required" && (
                    <p className="errorMsg">Password is required</p>
                    )}
                {errors.password && errors.password.type === "minLength" && (
                    <p className="errorMsg">Password must be at least 6 characters long.</p>
                )}
                    <br/>
                    <input type="submit" value="submit button"/>

            </form>
        </div>
    );
}