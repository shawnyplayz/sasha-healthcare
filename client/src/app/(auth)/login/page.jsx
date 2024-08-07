"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import { Switch } from "antd";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";

const Login = () => {
  const handleSwitchChange = useCallback((checked) => {
    console.log(`switch to ${checked}`);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <div className="left-side flex-1 relative">
        <Image
          src="/Images/LoginImage.svg"
          alt="Login"
          fill
          className="object-cover w-full h-full"
        />
        <p className="absolute bottom-2 left-2 z-10 text-white py-2 px-2 font-roboto font-medium text-xs">
          © 2024 Sasha. All Rights Reserved
        </p>
      </div>

      {/* Right Side */}
      <div className="right-side flex-1 flex items-center justify-center overflow-auto p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex">
            <Image
              src="/Images/SashaLogo.svg"
              width={100}
              height={100}
              alt="Sasha Logo"
            />
          </div>
          {/* Login Form */}
          <div>
            <div className="font-volkhov font-normal text-3xl text-[#212121B2] mb-3">
              Sign In
            </div>
            <div className="flex flex-col">
              <Input
                id="email"
                label="Email"
                type="text"
                placeholder="Enter email or phone number"
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="py-4 flex justify-between items-center">
              <div className="font-SFPRO font-normal text-sm flex flex-row items-center">
                <Switch defaultChecked={false} onChange={handleSwitchChange} />
                <p className="px-2 text-xs font-normal">
                  Remember Me
                </p>
              </div>
              <Link href="/forgot-password" className="text-blue-500 hover:underline text-xs">
                Forgot Password?
              </Link>
            </div>
            <div className="my-4">
              <AuthButton>Sign in</AuthButton>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-xs">
              <span>Don't have an account?</span>
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
