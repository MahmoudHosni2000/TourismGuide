import React, { useEffect, useRef } from "react";
import i1 from "../../Assets/i4.jpg";
import "../../i18n"; // تأكد من استيراد ملف i18n.js
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProgramEgypt() {
  const videoRef = useRef(null);
  const { t } = useTranslation('ProgramEgypt');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);

  return (
    <>
      <div className="ProgramEgypt" style={{ marginTop: '4rem' }}>
        <header className="w-100 position-relative">
          <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-black bg-opacity-75"></div>
        </header>
        
        <div className="container">
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-md-7 content">
              <h2 className="my-specific-class">{t('discover_pyramids')}</h2>
              <h5 className="mt-2">{t('experience_wonders')}</h5>
              <p className=" text-muted mt-2">
                {t('journey_description')}
              </p>
              <h4>{t('exploration_activities')}</h4>

              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    {/* <i className="fa-solid fa-check-square"></i> */}
                    <FontAwesomeIcon icon="fa-solid fa-square-check" />
                  </span>{" "}
                  {t('camel_rides')}
                </li>
                <li>
                  <span className="fa-li">
                    {/* <i className="fa-solid fa-check-square"></i> */}
                    <FontAwesomeIcon icon="fa-solid fa-square-check" />
                  </span>{" "}
                  {t('museum_visit')}
                </li>
                <li>
                  <span className="fa-li">
                    {/* <i className="fa-solid fa-check-square"></i> */}
                    <FontAwesomeIcon icon="fa-solid fa-square-check" />
                  </span>{" "}
                  {t('sound_light_show')}
                </li>
                <li>
                  <span className="fa-li">
                    {/* <i className="fa-solid fa-check-square"></i> */}
                    <FontAwesomeIcon icon="fa-solid fa-square-check" />
                  </span>{" "}
                  {t('explore_tombs')}
                </li>
                <li>
                  <span className="fa-li">
                    {/* <i className="fa-solid fa-check-square"></i> */}
                    <FontAwesomeIcon icon="fa-solid fa-square-check" />
                  </span>{" "}
                  {t('local_markets')}
                </li>
              </ul>

              <p>
                {t('experience_description')}
              </p>
            </div>
            <div className="col-md-5 p-4">
              {/* <div className=''>
    <div className="video-container rounded-3 border-0 px-5">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          controls
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div> */}
              <img src={i1} alt="" className="w-100 rounded-3" />
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6">
                <div class="package">
                  <h5 className="text-white fw-bold">${t('basic_package_price')} - {t('basic_package_title')}</h5>
                  <p>
                    <strong>{t('duration')}:</strong> 2-3 {t('hours')}
                  </p>
                  <p>
                    <strong>{t('includes')}:</strong>
                  </p>
                  <ul>
                    <li>{t('guided_tour_great_pyramid')}</li>
                    <li>{t('visit_sphinx')}</li>
                    <li>{t('transportation')}</li>
                    <li>{t('complimentary_water')}</li>
                  </ul>
                  <p>
                    <strong>{t('activities')}:</strong>
                  </p>
                  <ul>
                    <li>{t('photo_opportunities')}</li>
                    <li>{t('historical_insights')}</li>
                  </ul>
                  <div className="available-dates">
                    <label htmlFor="basic-dates">{t('available_dates')}:</label>
                    <select className="form-control" id="basic-dates">
                      <option value="">-- {t('choose_date')} --</option>
                      <option value="2024-09-01">{t('date_2024_09_01')}</option>
                      <option value="2024-09-05">{t('date_2024_09_05')}</option>
                      <option value="2024-09-10">{t('date_2024_09_10')}</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-book mt-4 ms-auto">{t('book_now')}</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="package">
                  <h5 className="text-white fw-bold">${t('standard_package_price')} - {t('standard_package_title')}</h5>
                  <p>
                    <strong>{t('duration')}:</strong> 4-5 {t('hours')}
                  </p>
                  <p>
                    <strong>{t('includes')}:</strong>
                  </p>
                  <ul>
                    <li>{t('guided_tour_great_pyramid_khafre')}</li>
                    <li>{t('entry_solar_boat_museum')}</li>
                    <li>{t('lunch_local_restaurant')}</li>
                    <li>{t('transportation')}</li>
                  </ul>
                  <p>
                    <strong>{t('activities')}:</strong>
                  </p>
                  <ul>
                    <li>{t('extended_exploration')}</li>
                    <li>{t('local_cuisine')}</li>
                  </ul>
                  <div className="available-dates">
                    <label htmlFor="standard-dates">{t('available_dates')}:</label>
                    <select className="form-control" id="standard-dates">
                      <option value="">-- {t('choose_date')} --</option>
                      <option value="2024-09-02">{t('date_2024_09_02')}</option>
                      <option value="2024-09-07">{t('date_2024_09_07')}</option>
                      <option value="2024-09-12">{t('date_2024_09_12')}</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-book mt-4 ms-auto">{t('book_now')}</button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div class="package">
                  <h5 className="text-white fw-bold">${t('deluxe_package_price')} - {t('deluxe_package_title')}</h5>
                  <p>
                    <strong>{t('duration')}:</strong> 6-7 {t('hours')}
                  </p>
                  <p>
                    <strong>{t('includes')}:</strong>
                  </p>
                  <ul>
                    <li>{t('full_guided_tour')}</li>
                    <li>{t('exclusive_entry')}</li>
                    <li>{t('camel_ride')}</li>
                    <li>{t('lunch_local_restaurant')}</li>
                    <li>{t('private_transportation')}</li>
                  </ul>
                  <p>
                    <strong>{t('activities')}:</strong>
                  </p>
                  <ul>
                    <li>{t('in_depth_tour')}</li>
                    <li>{t('camel_ride_experience')}</li>
                  </ul>
                  <div className="available-dates">
                    <label htmlFor="deluxe-dates">{t('available_dates')}:</label>
                    <select className="form-control" id="deluxe-dates">
                      <option value="">-- {t('choose_date')} --</option>
                      <option value="2024-09-03">{t('date_2024_09_03')}</option>
                      <option value="2024-09-08">{t('date_2024_09_08')}</option>
                      <option value="2024-09-15">{t('date_2024_09_15')}</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <button class="btn  btn-book mt-4 ms-auto">{t('book_now')}</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="package">
                  <h5 className="text-white fw-bold">${t('vip_package_price')} - {t('vip_package_title')}</h5>
                  <p>
                    <strong>{t('duration')}:</strong> 8-9 {t('hours')}
                  </p>
                  <p>
                    <strong>{t('includes')}:</strong>
                  </p>
                  <ul>
                    <li>{t('private_guided_tour')}</li>
                    <li>{t('private_access')}</li>
                    <li>{t('luxury_transport')}</li>
                    <li>{t('gourmet_lunch')}</li>
                  </ul>
                  <p>
                    <strong>{t('activities')}:</strong>
                  </p>
                  <ul>
                    <li>{t('exclusive_experience')}</li>
                    <li>{t('Sunset_Camel')}</li>
                    <li>{t('luxury_services')}</li>
                  </ul>
                  <div className="available-dates">
                    <label htmlFor="vip-dates">{t('available_dates')}:</label>
                    <select className="form-control" id="vip-dates">
                      <option value="">-- {t('choose_date')} --</option>
                      <option value="2024-09-04">{t('date_2024_09_04')}</option>
                      <option value="2024-09-09">{t('date_2024_09_09')}</option>
                      <option value="2024-09-20">{t('date_2024_09_20')}</option>
                    </select>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-book mt-4 ms-auto">{t('book_now')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
