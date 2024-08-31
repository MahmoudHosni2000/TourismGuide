import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";

export default function Cards() {
  const { t } = useTranslation("Cards");

  const cardsData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661963312540-32146e7c58fd?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("landmarks.title"),
      description: t("landmarks.description"),
      buttonText: t("landmarks.learnMore"),
      location: "/LandMarkList",
    },
    {
      image:
        "https://images.unsplash.com/photo-1648660997135-1de27e252fba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("hotels.title"),
      description: t("hotels.description"),
      buttonText: t("hotels.viewDetails"),
      location: "/HotelList",
    },
    {
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: t("restaurants.title"),
      description: t("restaurants.description"),
      buttonText: t("restaurants.exploreMenu"),
      location: "/RestaurantList",
    },
  ];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ y: "10vh", opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0vh" : "10vh" }}
      transition={{ duration: 1, delay: 0.7 }}
      id="destinations"
      className="flex flex-wrap justify-evenly gap-5 p-16"
      style={{ marginTop: "1rem" }}
    >
      {cardsData.map((card, index) => (
        <CardItem key={index} {...card} />
      ))}
    </motion.div>
  );
}
const CardItem = ({ image, title, description, buttonText, location }) => {
  const navigate = useNavigate();
  return (
    <Card className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-xl">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        {/* <div className={styles.black} /> */}
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5] text-center"
        >
          {title}
        </Typography>
        <Typography variant="h5" className=" mb-4 text-gray-400 text-center">
          {description}
        </Typography>
        <Button
          size="lg"
          color="white"
          variant="text"
          onClick={() => navigate(location)}
          style={{ background: "#494810" }}
        >
          {buttonText}
        </Button>
      </CardBody>
    </Card>
  );
};
