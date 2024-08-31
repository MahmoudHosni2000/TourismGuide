import React, { useEffect, useRef } from "react";
import i1 from "../../Assets/i4.jpg";
import "../../i18n"; // تأكد من استيراد ملف i18n.js
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const packages = [
  {
    key: 'basic',
    title: 'basic_package_title',
    price: 'basic_package_price',
    duration: '2-3 hours',
    includes: [
      'guided_tour_great_pyramid',
      'visit_sphinx',
      'transportation',
      'complimentary_water'
    ],
    activities: [
      'photo_opportunities',
      'historical_insights'
    ],
    dates: ['2024-09-01', '2024-09-05', '2024-09-10']
  },
  {
    key: 'standard',
    title: 'standard_package_title',
    price: 'standard_package_price',
    duration: '4-5 hours',
    includes: [
      'guided_tour_great_pyramid_khafre',
      'entry_solar_boat_museum',
      'lunch_local_restaurant',
      'transportation'
    ],
    activities: [
      'extended_exploration',
      'local_cuisine'
    ],
    dates: ['2024-09-02', '2024-09-07', '2024-09-12']
  },
  {
    key: 'deluxe',
    title: 'deluxe_package_title',
    price: 'deluxe_package_price',
    duration: '6-7 hours',
    includes: [
      'full_guided_tour',
      'exclusive_entry',
      'camel_ride',
      'lunch_local_restaurant',
      'private_transportation'
    ],
    activities: [
      'in_depth_tour',
      'camel_ride_experience'
    ],
    dates: ['2024-09-03', '2024-09-08', '2024-09-15']
  },
  {
    key: 'vip',
    title: 'vip_package_title',
    price: 'vip_package_price',
    duration: '8-9 hours',
    includes: [
      'private_guided_tour',
      'private_access',
      'luxury_transport',
      'gourmet_lunch'
    ],
    activities: [
      'exclusive_experience',
      'Sunset_Camel',
      'luxury_services'
    ],
    dates: ['2024-09-04', '2024-09-09', '2024-09-20']
  }
];

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
    <div className="ProgramEgypt" style={{ marginTop: '4rem' }}>
      <header className="w-100 position-relative">
        <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-black bg-opacity-75"></div>
      </header>

      <div className="container">
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-md-7 content">
            <h2 className="my-specific-class">{t('discover_pyramids')}</h2>
            <h5 className="mt-2">{t('experience_wonders')}</h5>
            <p className="text-muted mt-2">{t('journey_description')}</p>
            <h4>{t('exploration_activities')}</h4>
            <ul className="fa-ul">
              {['camel_rides', 'museum_visit', 'sound_light_show', 'explore_tombs', 'local_markets'].map(activity => (
                <li key={activity}>
                  <span className="fa-li">
                    <FontAwesomeIcon icon="fa-solid fa-square-check" />
                  </span>{" "}
                  {t(activity)}
                </li>
              ))}
            </ul>
            <p>{t('experience_description')}</p>
          </div>
          <div className="col-md-5 p-4">
            <img src={i1} alt="" className="w-100 rounded-3" />
          </div>
        </div>

        <div className="row">
          {packages.map(pkg => (
            <div className="col-md-6" key={pkg.key}>
              <div className="package">
                <h5 className="text-white fw-bold">
                  ${t(pkg.price)} - {t(pkg.title)}
                </h5>
                <p><strong>{t('duration')}:</strong> {pkg.duration}</p>
                <p><strong>{t('includes')}:</strong></p>
                <ul>
                  {pkg.includes.map(item => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
                <p><strong>{t('activities')}:</strong></p>
                <ul>
                  {pkg.activities.map(activity => (
                    <li key={activity}>{t(activity)}</li>
                  ))}
                </ul>
                <div className="available-dates">
                  <label htmlFor={`${pkg.key}-dates`}>{t('available_dates')}:</label>
                  <select className="form-control" id={`${pkg.key}-dates`}>
                    <option value="">-- {t('choose_date')} --</option>
                    {pkg.dates.map(date => (
                      <option key={date} value={date}>{t(`date_${date.replace(/-/g, '_')}`)}</option>
                    ))}
                  </select>
                </div>
                <div className="d-flex">
                  <button className="btn btn-book mt-4 ms-auto">{t('book_now')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
