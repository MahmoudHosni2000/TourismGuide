import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormRegisterMa3lemEgypt() {
  const { t } = useTranslation('FormRegisterMa3lemEgypt');

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="p-5 ProgramEgypt">
          <div className="container border p-4 shadow-lg rounded-3 backColor_g">
            <h2 className="mb-4 text-white">{t('submitAttraction')}</h2>

            <form encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="attractionName">{t('attractionName')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="attractionName"
                      name="attractionName"
                      placeholder={t('placeholderName')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="attractionLocation">{t('attractionLocation')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="attractionLocation"
                      name="attractionLocation"
                      placeholder={t('placeholderLocation')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="attractionType">{t('attractionType')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="attractionType"
                      name="attractionType"
                      placeholder={t('placeholderType')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="attractionDescription">{t('attractionDescription')}</label>
                    <textarea
                      className="form-control"
                      id="attractionDescription"
                      name="attractionDescription"
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
                    <label htmlFor="ticketPriceRange">{t('ticketPriceRange')}</label>
                    <select
                      className="form-control"
                      id="ticketPriceRange"
                      name="ticketPriceRange"
                      required
                    >
                      <option value="">{t('ticketPriceRangeOptions.low')}</option>
                      <option value="low">{t('ticketPriceRangeOptions.low')}</option>
                      <option value="medium">{t('ticketPriceRangeOptions.medium')}</option>
                      <option value="high">{t('ticketPriceRangeOptions.high')}</option>
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
                      placeholder={t('specialOffers')}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="attractionImages">
                      {t('uploadImagesAttraction')}
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="attractionImages"
                      name="attractionImages[]"
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
