import { Label, TextInput, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">

        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500
                      via-purple-500 to-pink-500 rounded-lg text-white"
            >
              CmCi
            </span>
            app
          </Link>
          <p className="text-sm mt-5">
            This is the demo project. You can Sign up with your email and
            password or with your Google account.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="your username" />
              <TextInput type="text" placeholder="John Doe" id="username" />
            </div>
            <div className="">
              <Label value="your email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div className="">
              <Label value="your password" />
              <TextInput type="password" placeholder="123456" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
              <span>Already have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign in
              </Link>
        </div>
      </div>
    </div>
  </div>
  );
}
