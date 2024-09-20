"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import Input from "@/components/utils/Input";
import { Switch } from "antd";
import AuthButton from "@/components/buttons/AuthButton";
import Link from "next/link";

const Register = () => {
  const handleSwitchChange = useCallback((checked) => {
    console.log(`switch to ${checked}`);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <div className="hidden lg:block left-side flex-1 relative">
        <Image
          src="/Images/LoginImage.svg"
          alt="Register"
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
          {/* Register Form */}
          <div>
            <div className="font-volkhov font-normal text-3xl text-[#212121B2] mb-3">
              Register
            </div>
            <div className="flex flex-col">
              <Input
                id="name"
                label="Name"
                type="text"
                placeholder="Enter your full name"
              />
              <Input
                id="email"
                label="Email"
                type="text"
                placeholder="Enter your email"
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <Input
                id="phone"
                label="Phone Number"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="py-4 flex justify-between items-center">
              <div className="font-SFPRO font-normal text-sm flex flex-row items-center">
                <Switch defaultChecked={false} onChange={handleSwitchChange} />
                <p className="px-2 text-xs font-normal">
                  Subscribe to newsletter
                </p>
              </div>
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:underline text-xs"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="my-4">
              <AuthButton>Register</AuthButton>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-xs">
              <span>Already have an account?</span>
              <Link href="/login" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
