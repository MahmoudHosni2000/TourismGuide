import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";

export default function FormRegisterRestaurantEgypt() {
  const { t } = useTranslation('FormRegisterRestaurantEgypt');

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="p-5 ProgramEgypt">
          <div className="container border p-4 shadow-lg rounded-3 backColor_g">
            <h2 className="mb-4 text-white">{t('submitRestaurant')}</h2>

            <form encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="restaurantName">{t('restaurantName')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="restaurantName"
                      name="restaurantName"
                      placeholder={t('placeholderName')}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="restaurantLocation">{t('restaurantLocation')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="restaurantLocation"
                      name="restaurantLocation"
                      placeholder={t('placeholderLocation')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="cuisineType">{t('cuisineType')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cuisineType"
                      name="cuisineType"
                      placeholder={t('placeholderCuisine')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="restaurantDescription">{t('restaurantDescription')}</label>
                    <textarea
                      className="form-control"
                      id="restaurantDescription"
                      name="restaurantDescription"
                      rows="1"
                      placeholder={t('placeholderDescription')}
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="contactInfo">{t('contactInfo')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactInfo"
                      name="contactInfo"
                      placeholder={t('placeholderContact')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="openingHours">{t('openingHours')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="openingHours"
                      name="openingHours"
                      placeholder={t('placeholderHours')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="priceRange">{t('priceRange')}</label>
                    <select
                      className="form-control"
                      id="priceRange"
                      name="priceRange"
                      required
                    >
                      <option value="">{t('priceRangeSelect')}</option>
                      <option value="low">{t('priceRangeOptions.low')}</option>
                      <option value="medium">{t('priceRangeOptions.medium')}</option>
                      <option value="high">{t('priceRangeOptions.high')}</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="specialOffers">{t('specialOffers')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialOffers"
                      name="specialOffers"
                      placeholder={t('placeholderSpecialOffers')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="restaurantImagesRestaurant">{t('uploadImagesRestaurant')}</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="restaurantImagesRestaurant"
                      name="restaurantImagesRestaurant[]"
                      multiple
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="restaurantImagesMenu">{t('uploadImagesMenu')}</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="restaurantImagesMenu"
                      name="restaurantImagesMenu[]"
                      multiple
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-submit mt-4 text-white">
                    {t('submitButton')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
