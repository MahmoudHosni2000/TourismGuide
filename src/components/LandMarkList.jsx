import React from 'react';
import { useNavigate } from "react-router-dom";
// import landmarks from '../Data/LM';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon4 from "../Assets/icon4.png";
// import icon6 from "../Assets/icon6.png";
import { motion } from 'framer-motion';

const LandMarkList = ({ landmarks }) => {
  console.log(Array.isArray(landmarks)); // Should log `true`
  console.log(landmarks); // Check the data structure

  const navigate = useNavigate();

  const handleClick = (lat, lng) => {
    if (lat !== null && lng !== null) {
      navigate(`/MapPage?lat=${lat}&lng=${lng}`);
    } else {
      navigate("/MapPage");
    }
  };

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: "0"  }}
      animate={{ x: "0", opacity: "1"  }}
      transition={{ duration: 0.3 }}
      exit={{ y: "-100vh" }}
      className="container my-4">
      <div className="row justify-content-center" style={{ marginTop: '5rem', }}>
        {Array.isArray(landmarks) ? (
          landmarks.map((landmark) => {
            // Extract latitude and longitude from coordinates
            const [lng, lat] = landmark.geometry.coordinates;

            return (
              <div className="col-md-4 mb-4" key={landmark.properties["@id"]}>
                <div className="card rounded-3">
                  <img
                    src={landmark.properties.image}
                    className="card-img-top2 rounded-3"
                    alt={landmark.properties.name}
                  />
                  <div className="card-body">
                    <h4 className="main-colors mb-0 pb-0">{landmark.properties.name}</h4>

                    <div className="d-flex align-items-start position-absolute top-0 end-0 py-1 px-1 rounded-start-3 bg-white">
                      <img src={icon4} alt="" width={21} />
                      <p className="text-black card-text px-1">
                        {landmark.properties.stars}
                      </p>
                    </div>

                    <span className='pb-2 fw'>" {landmark.properties.category} "</span>
                    <p className="text-muted mt-2">
                      {landmark.properties.description}
                    </p>

                    <div className="d-flex align-items-center">
                      <img src={icon1} alt="" width={21} />
                      <p className="text-muted card-text px-1">
                        {landmark.properties.phone}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={icon2} alt="" width={21} />
                      <p className="text-muted card-text px-1">
                        {landmark.properties.address}
                      </p>
                    </div>
                    {/* <div className="d-flex align-items-center py-1">
                      <img src={icon6} alt="" width={21} />
                      <a href={landmark.properties.website} className="text-primary card-text px-1">
                        Visit Website
                      </a>
                    </div> */}
                    <small className="text-muted">
                      <strong className='main-colors'>Reviews:</strong>
                      <ul className="my-specific-class list-unstyled mt-2">
                        {landmark.properties.reviews.map((review, index) => (
                          <li className='my-specific-class' key={index}>
                            <strong className='text-dangers'>{review.reviewer}</strong>: {review.comment} (Rating: {review.rating})
                          </li>
                        ))}
                      </ul>
                    </small>

                    <div className="d-flex justify-content-end">
                      <button
                        className="btn buttons w-100"
                        onClick={() => handleClick(lat, lng)}
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
    </motion.div>
  );
};

export default LandMarkList;
