import React, { Suspense } from "react";
import styles from "../Styles/Description.module.css";
import { useTranslation } from "react-i18next";
import RenderModel from "./RenderModels";
import Model from "./Model";
import { motion, useInView } from "framer-motion";

const Description = () => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ y: "-50vh", opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? "0vh" : "-50vh" }}
      transition={{ duration: 1, delay: 0.7 }}
      className={styles.descriptionSection}
    >
      <div className={styles.descriptionContent}>
        <h2 className="my-specific-class">{t("Description.title")}</h2>
        <hr className={styles.descriptionDivider} />
        <p>{t("Description.desc")}</p>
      </div>

      <div className={`${styles.modelBackground} h-96`}>
        <Suspense>
          <RenderModel className="absolute top-0 left-0 w-full h-full z-0">
            <Model />
          </RenderModel>
        </Suspense>
      </div>
    </motion.section>
  );
};

export default Description;
