import Image from "next/image";
import React from "react";
import coconut from "./assets/discovery/coconut.jpeg";
import ricewater from "./assets/discovery/ricewater.jpeg";
import bringraj from "./assets/discovery/bringraj.png";
import Container from "@/components/Container";

const DiscoverSection = () => {
  return (
    <Container>
    <div className="flex items-center justify-center flex-col overflow-hidden px-14 mb-20">
      <div className="font-semibold text-base pb-3 font-inter">
        #MADE FOR EVERYBODY
      </div>
      <div className="font-normal text-5xl pb-12 font-vollkorn">
        Discover your perfect match
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row gap-6">
          {/* Coconut */}
          <div className="rounded-2xl relative w-96 h-40">
            <div className="absolute inset-0 bg-black opacity-100 rounded-2xl"></div>
            <Image
              src={coconut}
              className="object-cover rounded-2xl opacity-90"
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-white text-2xl font-semibold">Coconut</span>
              <div className="bg-white text-black text-xl font-medium rounded-md px-4 py-1 mt-2 font-vollkorn">
                For Smooth Skin
              </div>
            </div>
          </div>

          {/* Bringraj */}
          <div className="rounded-2xl relative w-96 h-40">
            <div className="absolute inset-0 bg-black opacity-100 rounded-2xl"></div>
            <Image
              src={bringraj}
              className="object-cover rounded-2xl opacity-90"
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-white text-2xl font-semibold">
                Bringraj
              </span>
              <div className="bg-white text-black text-xl font-medium rounded-md px-4 py-1 mt-2 font-vollkorn">
                For Shine Skin
              </div>
            </div>
          </div>

          {/* Rice Water */}
          <div className="rounded-2xl relative w-96 h-40">
            <div className="absolute inset-0 bg-black opacity-100 rounded-2xl"></div>
            <Image
              src={ricewater}
              className="object-cover rounded-2xl opacity-90"
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="text-white text-2xl font-semibold">
                Rice Water
              </span>
              <div className="bg-white text-black text-xl font-medium rounded-md px-4 py-1 mt-2 font-vollkorn">
                For Strong Hair
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default DiscoverSection;
