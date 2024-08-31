
import { useTranslation } from 'react-i18next';

const RD = () => {
  const { t } = useTranslation('RD');

  return [{
    "type": "Feature",
    "properties": {
      "@id": "node/7",
      "addr:city": "Aswan",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Nubian Village Restaurant'),
      "address": t('restaurants.title.Nubian Village Restaurant'),
      "stars": 4,
      "phone": "+20 97 3485555",
      "opening_hours": "Mon-Sun 11:00-22:00",
      "cuisine": "Nubian",
      "price_range": "$$",
      "website": "https://www.nubian-village.com/",
      "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fa1a5145684593.62a25e491d458.jpg",
      "description": t('restaurants.Nubian Village Restaurant'),
      "reviews": [
        {
          "reviewer": "Sami Zaki",
          "rating": 5,
          "comment": "Unique dishes and wonderful ambiance."
        },
        {
          "reviewer": "Lina El Ghandour",
          "rating": 4,
          "comment": "Great experience but a bit remote."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [24.089391, 32.8906208]
    },
    "id": "node/7"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/8",
      "addr:city": "Cairo",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Zitouni'),
      "address": t('restaurants.title.Zitouni'),
      "stars": 5,
      "phone": "+20 2 27917000",
      "opening_hours": "Mon-Sun 07:00-23:30",
      "cuisine": "Middle Eastern, Egyptian",
      "price_range": "$$$$",
      "website": "http://www.fourseasons.com/cairo",
      "image": "http://www.fourseasons.com/content/dam/fourseasons/images/web/CAI/CAI_462_aspect16x9.jpg",
      "description": t('restaurants.Zitouni'),
      "reviews": [
        {
          "reviewer": "Nour El Sherif",
          "rating": 5,
          "comment": "Outstanding service and food."
        },
        {
          "reviewer": "Amira Fathy",
          "rating": 5,
          "comment": "A luxurious culinary experience."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [30.0362362, 31.2294568]
    },
    "id": "node/8"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/9",
      "addr:city": "Dahab",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Ali Baba Restaurant'),
      "address": t('restaurants.title.Ali Baba Restaurant'),
      "stars": 4,
      "phone": "+20 69 3640628",
      "opening_hours": "Mon-Sun 09:00-23:00",
      "cuisine": "Middle Eastern, Seafood",
      "price_range": "$$",
      "website": "http://www.alibabarestaurant.com",
      "image": "https://c1.staticflickr.com/3/2697/4301748551_2e8e5cb206_b.jpg",
      "description": t('restaurants.Ali Baba Restaurant'),
      "reviews": [
        {
          "reviewer": "Hassan Khalil",
          "rating": 5,
          "comment": "Great food with an amazing view."
        },
        {
          "reviewer": "Salma Fouad",
          "rating": 4,
          "comment": "Lovely spot, but service could be better."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [28.4977065, 34.5171351]
    },
    "id": "node/9"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/10",
      "addr:city": "Cairo",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Sequoia'),
      "address": t('restaurants.title.Sequoia'),
      "stars": 4,
      "phone": "+20 2 27350014",
      "opening_hours": "Mon-Sun 12:00-02:00",
      "cuisine": "Mediterranean",
      "price_range": "$$$",
      "website": "http://www.sequoiacairo.com",
      "image": "https://i0.wp.com/imageio.forbes.com/specials-images/imageserve/62fe3a28c22bf8624fce7c7a/0x0.jpg?format=jpg&width=1200",
      "description": t('restaurants.Sequoia'),
      "reviews": [
        {
          "reviewer": "Omar El Masry",
          "rating": 5,
          "comment": "Beautiful ambiance and great food."
        },
        {
          "reviewer": "Yasmine Saad",
          "rating": 4,
          "comment": "Fantastic setting, but a bit expensive."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [30.0729584, 31.2223355]
    },
    "id": "node/10"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/1",
      "addr:city": "Cairo",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Koshary Abou Tarek'),
      "address": t('restaurants.title.Koshary Abou Tarek'),
      "stars": 4.5,
      "phone": "+20 2 25775935",
      "opening_hours": "Mon-Sun 10:00-23:00",
      "cuisine": "Egyptian",
      "price_range": "$",
      "website": "http://www.kosharyabouterak.com",
      "image": "https://media-cdn.tripadvisor.com/media/photo-p/2a/15/d1/52/koshary.jpg",
      "description": t('restaurants.Koshary Abou Tarek'),
      "reviews": [
        {
          "reviewer": "Ali Ahmed",
          "rating": 5,
          "comment": "Best Koshary in town!"
        },
        {
          "reviewer": "Sara Hassan",
          "rating": 4,
          "comment": "Great taste, but a bit crowded."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [30.04661595, 31.24646612]
    },
    "id": "node/1"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/3",
      "addr:city": "Giza",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Andrea Mariouteya'),
      "address": t('restaurants.title.Andrea Mariouteya'),
      "stars": 4,
      "phone": "+20 2 33770016",
      "opening_hours": "Mon-Sun 12:00-23:00",
      "cuisine": "Grill, Egyptian",
      "price_range": "$$",
      "website": "http://www.andreamariouteya.com",
      "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/41/ac/74/andrea-el-mariouteya.jpg",
      "description": t('restaurants.Andrea Mariouteya'),
      "reviews": [
        {
          "reviewer": "Karim El Kholy",
          "rating": 4,
          "comment": "Tasty food, but service can be slow."
        },
        {
          "reviewer": "Nadia Mostafa",
          "rating": 5,
          "comment": "Great place for family gatherings."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [31.185369, 29.967037]
    },
    "id": "node/3"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/4",
      "addr:city": "Alexandria",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.El Halaka Fish Restaurant'),
      "address": t('restaurants.title.El Halaka Fish Restaurant'),
      "stars": 4,
      "phone": "+20 3 3923000",
      "opening_hours": "Mon-Sun 09:00-23:00",
      "cuisine": "Seafood",
      "price_range": "$$",
      "website": "http://www.elhalakafish.com",
      "image": "https://tse3.mm.bing.net/th?id=OIP.CkuOaSRIcI8_YedNT3tr3AHaFj&pid=Api&P=0&h=220",
      "description": t('restaurants.El Halaka Fish Restaurant'),
      "reviews": [
        {
          "reviewer": "Youssef Hanna",
          "rating": 5,
          "comment": "Fresh seafood, a must-visit!"
        },
        {
          "reviewer": "Laila Saad",
          "rating": 4,
          "comment": "Great food but a bit crowded."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [29.888111, 31.200092]
    },
    "id": "node/4"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/5",
      "addr:city": "Sharm El Sheikh",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.Fares Seafood'),
      "address": t('restaurants.title.Fares Seafood'),
      "stars": 4.5,
      "phone": "+20 69 3603500",
      "opening_hours": "Mon-Sun 12:00-23:00",
      "cuisine": "Seafood",
      "price_range": "$$$",
      "website": "http://www.faresseafood.com",
      "image": "https://www.townemillwork.ca/wp-content/uploads/2020/08/1886_entrance_photo_credit-Bill-Milne.jpg",
      "description": t('restaurants.Fares Seafood'),
      "reviews": [
        {
          "reviewer": "Ahmed Tawfik",
          "rating": 5,
          "comment": "Luxurious experience with exquisite food."
        },
        {
          "reviewer": "Fatma Helmy",
          "rating": 5,
          "comment": "Elegant atmosphere and delicious cuisine."
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [34.328314, 27.915850]
    },
    "id": "node/5"
  },
  {
    "type": "Feature",
    "properties": {
      "@id": "node/6",
      "addr:city": "Cairo",
      "addr:country": "EG",
      "amenity": "restaurant",
      "name": t('restaurants.1886 Restaurant'),
      "address": t('restaurants.title.1886 Restaurant'),
      "stars": 5,
      "phone": "+20 2 27980000",
      "opening_hours": "Mon-Sun 19:00-23:00",
      "cuisine": "International",
      "price_range": "$$$$",
      "website": "http://www.1886restaurant.com",
      "image": "https://thehealthyfish.com/wp-content/uploads/2017/08/seafoodcookingguide_1280px_7db8770284174a0eb79fda5d3ae9ee0c.jpeg",
      "description": t('restaurants.1886 Restaurant'),
      "reviews": [
        {
          "reviewer": "Moustafa Ali",
          "rating": 4,
          "comment": "Delicious seafood, but can be noisy."
        },
        {
          "reviewer": "Reem Khaled",
          "rating": 5,
          "comment": "Amazing fish dishes, highly recommended!"
        }
      ]
    },
    "geometry": {
      "type": "Point",
      "coordinates": [31.235768, 30.044420]
    },
    "id": "node/6"
  }]
};
export default RD;
