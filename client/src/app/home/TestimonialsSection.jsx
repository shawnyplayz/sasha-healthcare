import TestimonialsCard from "@/components/cards/TestimonialsCard";
import React from "react";
import { testimonialsCardData } from "../constants";

const TestimonialsSection = () => {
  return (
    <div className="mt-32 overflow-hidden flex items-center justify-center">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="font-inter font-medium text-base text-black text-center md:text-start">
            #WOMEN TELL WOMEN
          </h1>
        </div>
        <div className="mt-3 mb-12">
          <h1 className="font-normal font-valueserifproregular md:text-5xl text-4xl text-center md:text-start text-black">
            Real people, real results
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 mb-32 flex flex-wrap justify-center lg:gap-10 gap-20 relative">
          {testimonialsCardData.map((testimonial) => (
            <TestimonialsCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              userRating={testimonial.userRating}
              avatarPosition={testimonial.avatarPosition}
              backgroundColor={testimonial.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
