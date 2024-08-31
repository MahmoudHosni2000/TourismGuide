import React from 'react';
import HotelCard from './HotelCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const HotelList = ({ hotels }) => {
  return (
    <motion.div
      className="container my-5"
      initial={{ x: "-100vw", opacity: "0" }}
      animate={{ x: "0", opacity: "1"  }}
      transition={{ duration: 0.3 }}
      exit={{ y: "-100vh" }}
    >
      <div className="hotel-list" style={{ marginTop: '5rem' }}>
        <div className="row g-4">
          {hotels?.features?.map((hotel) => (
            <div
              className="col-md-4"
              key={hotel.id}
            >
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HotelList;
