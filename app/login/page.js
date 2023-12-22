"use client"
import { Logo } from "@/components/icons/icons"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { userLogin } from "../api/soteria/user/Login";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import { LandingNavbar } from "@/components/navbar/landingnavbar";

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
  
    const submitHandler = async e => {
      //alert("email: " + email + " password: " + password);
      e.preventDefault();
  
      try {
        // Call user_login function passing email and password
        const request = await userLogin(email, password);
  
        //console.log(request.data.data);
  
        var token = JSON.stringify( request.data.data.token);
        var user = JSON.stringify(request.data.data.user);
        console.log(token);
        if (token) {
          // Store token in localStorage or use it as needed
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          // Redirect to dashboard or other page
          // Replace the path with your desired route
          // import { useRouter } from "next/router"; // if not already imported
          // const router = useRouter();
          router.push("/dashboard");
  
          // For example, redirecting to the dashboard after login
          // window.location.href = "/dashboard";
        } else {
          //// Handle error response
          //setError("Invalid credentials"); // Update with your own error handling
        }
      } catch (error) {
        // Handle other errors
        //setError("An error occurred"); // Update with your own error handling
        //console.log(error);
      }
    };

    
    return (
      <>
       
       <LandingNavbar/>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Logo
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submitHandler} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  < Input
                    id="email"
                    name="email"
                    type="email"
                   // color="secondary"                  
                    required
                    value={email}
                    onChange={value => setEmail(value.target.value)}
                   
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={value => setPassword(value.target.value)}
                          />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                {error &&
              <p className="text-danger">
                {error.message}
              </p>}
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign up for free or ask admin for an account
              </a>
            </p>
          </div>

        </div>
      </>
    )
  }
  