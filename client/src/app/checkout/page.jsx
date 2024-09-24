"use client";

import Stepper from "@/components/utils/Stepper";
import React, { use, useState } from "react";
import PhoneNumberForm from "@/components/checkout/PhoneNumberForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/utils/Container";
import AddressForm from "@/components/checkout/AddressForm";
import CheckoutButton from "@/components/buttons/CheckoutButton";
import PaymentOptions from "@/components/checkout/PaymentOptions";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const steps = ["Mobile", "Address", "Pay Method"];

  const [userAddress, setUserAddress] = useState({
    pincode: "",
    city: "",
    state: "",
    phoneNumber: "",
    country: "",
    fullName: "",
    emailAddress: "",
    fullAddress: "",
  });

  const [addressErrors, setAddressErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserAddress((prev) => ({ ...prev, [name]: value }));

    setAddressErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Function to handle step click
  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  // Function to handle "Continue" button click
  const handleContinue = () => {
    let hasError = false;

    // Validate phone number
    if (currentStep === 1) {
      if (!phoneNumber || phoneNumber.length < 10) {
        setPhoneError("Please enter a valid phone number");
        hasError = true;
      } else {
        setPhoneError(""); // Clear error if valid
      }
    }

    // Validate address fields
    if (currentStep === 2) {
      const newErrors = {};
      if (!userAddress.pincode) newErrors.pincode = "Pincode is required";
      if (!userAddress.city) newErrors.city = "City is required";
      if (!userAddress.state) newErrors.state = "State is required";
      if (!userAddress.phoneNumber)
        newErrors.phoneNumber = "Phone Number is required";
      if (!userAddress.country) newErrors.country = "Country is required";
      if (!userAddress.fullName) newErrors.fullName = "Full Name is required";
      if (!userAddress.emailAddress)
        newErrors.emailAddress = "Email Address is required";
      if (!userAddress.fullAddress)
        newErrors.fullAddress = "Full Address is required";

      if (Object.keys(newErrors).length > 0) {
        setAddressErrors(newErrors);
        hasError = true;
      }
    }

    if (!hasError && currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1); // Go to next step
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="p-8">
          {/* Stepper Component */}
          <Stepper
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
          />

          {/* Tab Content */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentStep === 1 && (
              <>
                {/* Left Column for Phone Input */}
                <div className="lg:col-span-1">
                  <PhoneNumberForm
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    phoneError={phoneError}
                    setPhoneError={setPhoneError}
                  />
                  <CheckoutButton className="mt-10" onClick={handleContinue}>
                    Continue
                  </CheckoutButton>
                </div>
                <div>
                  <OrderSummary />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="col-span-1">
                  <AddressForm
                    userAddress={userAddress}
                    onInputChange={handleInputChange}
                    addressErrors={addressErrors}
                  />
                  {/* Your address form component can go here */}
                  <CheckoutButton className="mt-10" onClick={handleContinue}>
                    Continue
                  </CheckoutButton>
                </div>
                <div>
                  <OrderSummary />
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="col-span-1">
                  <PaymentOptions />
                  {/* Your payment method component can go here */}
                  <CheckoutButton className="mt-10" onClick={handleContinue}>
                    Continue
                  </CheckoutButton>
                </div>
                <div>
                  <OrderSummary />
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
