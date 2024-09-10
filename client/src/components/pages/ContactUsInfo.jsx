import Image from "next/image";
import React from "react";

const getContactInfo = () => ({
  followUs: "FOLLOW US",
  communityHeading: "Meet Our Community",
  communityDescription: "Join the @Soso and share your voice with us.",
  map: {
    companyName: "Company name",
    addressLine1: "315 W 36th St.",
    addressLine2: "NY 10018",
    mapSrc: "/Images/ContactUsAssets/maps.svg",
    mapAlt: "Company location on map",
  },
  contactDetails: {
    email: {
      icon: "/Images/ContactUsAssets/icons/emailIcon.svg",
      alt: "Email icon for contact",
      address: "sashalifehealthcare@gmail.com",
    },
    phone: {
      icon: "/Images/ContactUsAssets/icons/phoneIcon.svg",
      alt: "Phone icon for contact",
      numbers: "+918976602949 / 8655100951",
    },
    location: {
      icon: "/Images/ContactUsAssets/icons/locationIcon.svg",
      alt: "Location icon for contact",
      address:
        "501, Krishna Kunj, Mhatre Wadi, L.T. Road, Dahisar West, Mumbai - 400068, INDIA.",
    },
  },
});

const ContactDetail = ({ iconSrc, altText, text }) => (
  <div className="flex items-center  gap-4 mb-5">
    <Image
      src={iconSrc}
      width={23}
      height={23}
      alt={altText}
      objectFit="cover"
    />
    <p className="text-base font-normal">{text}</p>
  </div>
);

const ContactUsInfo = () => {
  const {
    followUs,
    communityHeading,
    communityDescription,
    map,
    contactDetails,
  } = getContactInfo();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:mt-32 max-w-lg md:mb-40">
        <h2 className="font-inter font-medium text-base text-center">
          {followUs}
        </h2>
        <h2 className="mt-3 font-normal text-5xl font-valueserifproregular text-center">
          {communityHeading}
        </h2>
        <h3 className="mt-3 mb-14 text-center font-normal text-xl font-gtwalsheimregular">
          {communityDescription}
        </h3>
        <div className="maps relative flex items-center justify-center">
          <div className="absolute bg-white rounded-xl top-[10px] right-[80px] px-2 py-1">
            <div className="font-semibold text-xs">{map.companyName}</div>
            <div className="font-normal text-xs">{map.addressLine1}</div>
            <div className="font-normal text-xs">{map.addressLine2}</div>
          </div>
          <Image
            src={map.mapSrc}
            width={482}
            height={174}
            alt={map.mapAlt}
            objectFit="cover"
          />
        </div>
        <div className="contact-details mt-7 lg:mb-11 ml-5">
          <ContactDetail
            iconSrc={contactDetails.email.icon}
            altText={contactDetails.email.alt}
            text={contactDetails.email.address}
          />
          <ContactDetail
            iconSrc={contactDetails.phone.icon}
            altText={contactDetails.phone.alt}
            text={contactDetails.phone.numbers}
          />
          <ContactDetail
            iconSrc={contactDetails.location.icon}
            altText={contactDetails.location.alt}
            text={contactDetails.location.address}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
