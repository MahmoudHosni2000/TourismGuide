import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormRegisterHotelEgypt() {
  const { t } = useTranslation('FormRegisterHotelEgypt');

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="p-5 ProgramEgypt">
          <div className="container border p-4 shadow-lg rounded-3 backColor_g">
            <h2 className="mb-4 text-white">{t('submitHotel')}</h2>

            <form encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="hotelName">{t('hotelName')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hotelName"
                      name="hotelName"
                      placeholder={t('placeholderName')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="hotelLocation">{t('hotelLocation')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hotelLocation"
                      name="hotelLocation"
                      placeholder={t('placeholderLocation')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="hotelRating">{t('hotelRating')}</label>
                    <select
                      className="form-control"
                      id="hotelRating"
                      name="hotelRating"
                    >
                      <option value="">{t('selectRating')}</option>
                      <option value="1">1 {t('star')}</option>
                      <option value="2">2 {t('stars')}</option>
                      <option value="3">3 {t('stars')}</option>
                      <option value="4">4 {t('stars')}</option>
                      <option value="5">5 {t('stars')}</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="hotelDescription">{t('hotelDescription')}</label>
                    <textarea
                      className="form-control"
                      id="hotelDescription"
                      name="hotelDescription"
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
                      <option value="">{t('selectPriceRange')}</option>
                      <option value="low">{t('priceRangeOptions.low')}</option>
                      <option value="medium">{t('priceRangeOptions.medium')}</option>
                      <option value="high">{t('priceRangeOptions.high')}</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="specialOffers">{t('specialOffers1')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialOffers"
                      name="specialOffers"
                      placeholder={t('specialOffers')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="hotelImages">{t('uploadImagesHotel')}</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="hotelImages"
                      name="hotelImages[]"
                      multiple
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-submit mt-4">
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
