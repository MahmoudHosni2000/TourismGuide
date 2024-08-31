import { useTranslation } from "react-i18next";

const HD2 = () => {
  const { t } = useTranslation('HD2');

  return {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100001",
          "name": t('hotels.fourSeasonsHotelCairo.name'),
          "website": "https://www.fourseasons.com/caironp/",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.businessCenter'),
            t('amenities.nileViews')
          ],
          "phone": "+20 2 27917000",
          "tourism": "hotel",
          "image": "https://www.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/CAI/CAI_495_aspect16x9.jpg",
          "description": t('hotels.fourSeasonsHotelCairo.description'),
          "address": t('hotels.fourSeasonsHotelCairo.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.04803949, 31.25589491]
        },
        "id": "node/100001"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100002",
          "name": t('hotels.kempinskiNileHotelCairo.name'),
          "website": "https://www.kempinski.com/en/cairo/nile-hotel/",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.businessCenter'),
            t('amenities.rooftopRestaurant')
          ],
          "phone": "+20 2 27980000",
          "tourism": "hotel",
          "image": "https://cdn.audleytravel.com/-/-/79/7998012-kempinski-nile-hotel--cairo.jpg",
          "description": t('hotels.kempinskiNileHotelCairo.description'),
          "address": t('hotels.kempinskiNileHotelCairo.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.038695, 31.2308814]
        },
        "id": "node/100002"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100003",
          "name": t('hotels.conradCairo.name'),
          "website": "https://www.hilton.com/en/hotels/caiccdi-conrad-cairo/",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.businessCenter'),
            t('amenities.casino')
          ],
          "phone": "+20 2 25808000",
          "tourism": "hotel",
          "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5f/50/5a/conrad-cairo.jpg?w=1200&h=-1&s=1",
          "description": t('hotels.conradCairo.description'),
          "address": t('hotels.conradCairo.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.0654172, 31.2277666]
        },
        "id": "node/100003"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100004",
          "name": t('hotels.intercontinentalCairoSemiramis.name'),
          "website": "https://www.ihg.com/intercontinental/hotels/gb/en/cairo/crohc/hoteldetail",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.businessCenter'),
            t('amenities.rooftopRestaurant')
          ],
          "phone": "+20 2 27988000",
          "tourism": "hotel",
          "image": "https://tricon.co.uk/wp-content/uploads/2016/08/SEMARAMIS_03.png",
          "description": t('hotels.intercontinentalCairoSemiramis.description'),
          "address": t('hotels.intercontinentalCairoSemiramis.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.04298701, 31.23248713]
        },
        "id": "node/100004"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100005",
          "name": t('hotels.ritzCarltonCairo.name'),
          "website": "https://www.ritzcarlton.com/en/hotels/middle-east/cairo",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.businessCenter'),
            t('amenities.luxurySuites')
          ],
          "phone": "+20 2 25778899",
          "tourism": "hotel",
          "image": "https://pix10.agoda.net/hotelImages/164415/-1/343dacd743679b6d5f947285c5d1d861.jpg?ca=9&ce=1&s=1024x768",
          "description": t('hotels.ritzCarltonCairo.description'),
          "address": t('hotels.ritzCarltonCairo.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [30.042987, 31.2324871]
        },
        "id": "node/100005"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100006",
          "name": t('hotels.movenpickResortAswan.name'),
          "website": "https://www.movenpick.com/en/africa/egypt/aswan/hotel-aswan.html",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.islandResort'),
            t('amenities.nileViews')
          ],
          "phone": "+20 97 2454455",
          "tourism": "hotel",
          "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/3d/8a/9c/movenpick-resort-aswan.jpg?w=1400&h=-1&s=1",
          "description": t('hotels.movenpickResortAswan.description'),
          "address": t('hotels.movenpickResortAswan.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [24.0932334, 32.8915518]
        },
        "id": "node/100006"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100007",
          "name": t('hotels.sofitelLegendOldCataractAswan.name'),
          "website": "https://www.sofitel-legend.com/gb/hotel-1666-sofitel-legend-old-cataract-aswan/index.shtml",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.luxurySuites'),
            t('amenities.nileViews')
          ],
          "phone": "+20 97 2316161",
          "tourism": "hotel",
          "image": "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/23/2016/10/24142930/gallery_elgezirah_Exterior-2.jpg",
          "description": t('hotels.sofitelLegendOldCataractAswan.description'),
          "address": t('hotels.sofitelLegendOldCataractAswan.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [32.897297, 24.092385]
        },
        "id": "node/100007"
      },
      {
        "type": "Feature",
        "properties": {
          "@id": "node/100008",
          "name": t('hotels.fourSeasonsHotelAlexandria.name'),
          "website": "https://www.fourseasons.com/alexandria/",
          "stars": 5,
          "amenities": [
            t('amenities.freeWiFi'),
            t('amenities.spa'),
            t('amenities.pool'),
            t('amenities.fitnessCenter'),
            t('amenities.businessCenter'),
            t('amenities.seaViews')
          ],
          "phone": "+20 3 5818000",
          "tourism": "hotel",
          "image": "https://www.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/CAI/CAI_495_aspect16x9.jpg",
          "description": t('hotels.fourSeasonsHotelAlexandria.description'),
          "address": t('hotels.fourSeasonsHotelAlexandria.address')
        },
        "geometry": {
          "type": "Point",
          "coordinates": [29.918365, 31.215640]
        },
        "id": "node/100008"
      }
    ]
  };
};

export default HD2;
