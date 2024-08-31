import React from "react";
// import styles from "../Styles/HotelCard.module.css";
// import hotelImage from "../Assets/9.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon4 from "../Assets/icon4.png";
import icon5 from "../Assets/icon5.png";
import { useNavigate } from "react-router-dom";


const HotelCard = ({ hotel }) => {
  const { name, website, stars, amenities, tourism, phone, image, description, address } = hotel.properties;

  // Default values
  const imageUrl = image;
  const amenitiesList = Array.isArray(amenities) ? amenities : [];


  const { coordinates } = hotel.geometry;
  const [lng, lat] = coordinates || [null, null];  // Default values if coordinates are missing

  const navigate = useNavigate();

  const handleClick = () => {
    if (lat !== null && lng !== null) {
      navigate(`/MapPage?lat=${lat}&lng=${lng}`);
    } else {
      navigate("/MapPage");
    }
  };



  return (
    <div className="card cartHight  rounded-3">
      <img src={imageUrl} alt="" className="card-img-top2  rounded-3" />

      <div className="card-body">
        <h4 className=" main-colors mb-0 pb-0">{name}</h4>

        <div className="d-flex align-items-start position-absolute top-0 end-0  py-1 px-1 rounded-start-3  bg-white">
          <img src={icon4} alt="" width={21} />
          <p className=" text-black card-text px-1 ">
            {stars}
          </p>
        </div>
        <span className='pb-2'>{tourism}</span>
        <p className=" text-muted mt-2">
          {description}
        </p>

        <p className="p-0 m-0">Amenities: {amenitiesList.map((item) => <div className="d-flex align-items-center">
          <img src={icon5} alt="" width={15} />
          <p className=" text-muted card-text px-1">
            {item}
          </p>
        </div>
        )}</p>
        <div className="d-flex align-items-center mt-2">
          <img src={icon1} alt="" width={21} />
          <p className=" text-muted card-text px-1">
            {phone}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <img src={icon2} alt="" width={21} />
          <p className=" text-muted card-text px-1">
            {address}
          </p>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn buttons w-100" onClick={() => handleClick("/MapPage")} >Get Directions</button>

        </div>
      </div>

    </div>
  );
};

export default HotelCard;
