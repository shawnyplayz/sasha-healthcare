import InfoCard from "@/components/cards/InfoCard";
import Container from "@/components/utils/Container";
import React from "react";
import Marquee from "react-fast-marquee";
import EcoFriendlyIcon from "../../../public/Images/InfoSectionAssets/ecofriendly.svg";
import Pill from "../../../public/Images/InfoSectionAssets/pill.svg";
import Beaker from "../../../public/Images/InfoSectionAssets/beaker.svg";

const info = {
  heading: "Treat yourself, because you deserve it.",
};

const infoCardData = [
  {
    id: 1,
    icon: EcoFriendlyIcon,
    title: "No Harmful Chemical",
    description: "Cruelty-free supplements for a healthier you",
  },
  {
    id: 2,
    icon: Beaker,
    title: "Dermatologist Tested",
    description: "supplements for optimal health and wellness.",
  },
  {
    id: 3,
    icon: Pill,
    title: "Experience the difference",
    description: "with our next-level supplements",
  },
  {
    id: 4,
    icon: Pill,
    title: "Powered by nature to support",
    description: "your unique health needs.",
  },
];

const InfoSection = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center flex-col">
      <Container>
        <div className="font-vollkorn font-normal text-center lg:text-start lg:text-5xl text-3xl">
          {info.heading}
        </div>
      </Container>
      <Marquee autoFill>
        <div className="flex flex-row lg:pt-20 gap-6 mx-4">
          {infoCardData.map((card) => (
            <InfoCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default InfoSection;
