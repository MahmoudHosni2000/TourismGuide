import React from "react";
import { useTranslation } from "react-i18next";
import img10 from '../Assets/10.png';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    key: "variousAdventures",
    icon: "🗺️",
  },
  {
    key: "adventurousTrails",
    icon: "🥾",
  },
  {
    key: "trainedGuides",
    icon: "🎒",
  },
  {
    key: "familyTrips",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    key: "customPackages",
    icon: "📦",
  },
  {
    key: "completeGuide",
    icon: "📚",
  },
];

export default function Services() {
  const { t, i18n } = useTranslation();
  const ref = React.useRef(null);
  // Determine if the image should be flipped horizontally based on the current language
  const flipHorizontal = i18n.language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)';

  return (
    <section
      className="relative flex justify-end items-start py-12">
      {/* Background image wrapper */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img10})`,
          transform: flipHorizontal,
          zIndex: -1,
        }}
      ></div>

      <div className="w-full lg:w-2/3 lg:pr-12 relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mt-2 text-[#91612f]">
            {t("services.mainTitle")}
          </h1>
          {/* Display current language */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 md:mb-12 md:ml-24">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={t(`services.${service.key}.title`)}
              description={t(`services.${service.key}.description`)}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ title, description, icon }) => (
  <div 
    className="flex flex-col items-center text-center px-20">
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-[#91612f]">{title}</h3>
    <p className="text-gray-600 font-medium">{description}</p>
  </div>
);