import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import styles from "../Styles/FamousActivities.module.css";
import giza from "../Assets/giza.jpg";
import kings from "../Assets/kings.jpg";
import luxor from "../Assets/luxor.jpg";
import simple from "../Assets/abosimple.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useInView } from 'framer-motion';

const activities = [
  {
    id: 1,
    key: "pyramidsOfGiza",
    imageUrl: giza
  },
  {
    id: 2,
    key: "luxorTemple",
    imageUrl: luxor
  },
  {
    id: 3,
    key: "valleyOfTheKings",
    imageUrl: kings
  },
  {
    id: 4,
    key: "abuSimbel",
    imageUrl: simple
  },
];

export default function FamousActivities() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (location) => {
    navigate(location);
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div ref={ref}
      initial={{ y: "10vh", opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0vh" : "10vh" }}
      transition={{ duration: 1, delay: 0.5 }}
      id="tours" 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10"
      >
      {activities.map((activity) => (
        <Card className={`${styles.card} pt-10`} id={activity.id} key={activity.id}>
          <CardHeader color="blue-gray" className="relative h-96">
            <img
              src={activity.imageUrl}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className={styles.cardBody}>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {t(`activities.${activity.key}.title`)}
            </Typography>
            <Typography>{t(`activities.${activity.key}.description`)}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className={styles.btnPrimary} onClick={() => handleClick("/ProgramEgypt")}>
              {t("Read More")}
            </Button>
            <Typography
              className="flex justify-between"
              color="blue-gray"
              variant="h6"
            >
              {t(`activities.${activity.key}.cost`)}
            </Typography>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  );
}
