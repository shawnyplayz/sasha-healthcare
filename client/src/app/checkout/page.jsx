"use client";

import Stepper from "@/components/utils/Stepper";
import React, { useState } from "react";
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

  // Function to handle step click
  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  // Function to handle "Continue" button click
  const handleContinue = () => {
    if (currentStep === 1) {
      if (!phoneNumber || phoneNumber.length < 10) {
        setPhoneError(true); // Show error if phone number is empty or invalid
        return;
      }
    }
    if (currentStep < steps.length) {
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
                  <AddressForm />
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
