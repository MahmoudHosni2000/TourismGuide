import { useTranslation } from 'react-i18next';

const LM = () => {
  const { t } = useTranslation('LM');

  return [
    {
      "type": "Feature",
      "properties": {
        "@id": "node/101",
        "addr:city": t('Cairo'),
        "addr:country": "EG",
        "name": t('landmarks.The Great Pyramid of Giza.name'),
        "category": t('landmarks.The Great Pyramid of Giza.category'),
        "address": t('landmarks.The Great Pyramid of Giza.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.The Great Pyramid of Giza.opening_hours'),
        "price_range": t('landmarks.The Great Pyramid of Giza.price_range'),
        "website": "https://egymonuments.gov.eg/archaeological-sites/giza-plateau/",
        "image": "https://foundtheworld.com/wp-content/uploads/2015/12/Great-Pyramids-of-Giza-9.jpg",
        "description": t('landmarks.The Great Pyramid of Giza.description'),
        "reviews": [
          {
            "reviewer": "Alice Johnson",
            "rating": 5,
            "comment": "A truly awe-inspiring experience!"
          },
          {
            "reviewer": "Michael Brown",
            "rating": 4,
            "comment": "Amazing site but crowded."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [29.9792, 31.1342]
      },
      "id": "node/101"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/102",
        "addr:city": t('Cairo'),
        "addr:country": "EG",
        "name": t('landmarks.The Sphinx of Giza.name'),
        "category": t('landmarks.The Sphinx of Giza.category'),
        "address": t('landmarks.The Sphinx of Giza.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.The Sphinx of Giza.opening_hours'),
        "price_range": t('landmarks.The Sphinx of Giza.price_range'),
        "website": "https://www.egypt.travel/attractions/great-sphinx-of-giza",
        "image": "http://upload.wikimedia.org/wikipedia/commons/f/f6/Great_Sphinx_of_Giza_-_20080716a.jpg",
        "description": t('landmarks.The Sphinx of Giza.description'),
        "reviews": [
          {
            "reviewer": "John Smith",
            "rating": 5,
            "comment": "A must-see when visiting Cairo!"
          },
          {
            "reviewer": "Emma White",
            "rating": 4,
            "comment": "Incredible history, but expect crowds."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [29.9753, 31.1376]
      },
      "id": "node/102"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/103",
        "addr:city": t('Luxor'),
        "addr:country": "EG",
        "name": t('landmarks.Karnak Temple.name'),
        "category": t('landmarks.Karnak Temple.category'),
        "address": t('landmarks.Karnak Temple.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Karnak Temple.opening_hours'),
        "price_range": t('landmarks.Karnak Temple.price_range'),
        "website": "https://www.egypt.travel/attractions/karnak-temple",
        "image": "https://www.egyptkeytours.com/wp-content/uploads/2017/10/karnak-temple-min.jpg",
        "description": t('landmarks.Karnak Temple.description'),
        "reviews": [
          {
            "reviewer": "David Wilson",
            "rating": 5,
            "comment": "Absolutely stunning architecture!"
          },
          {
            "reviewer": "Laura Green",
            "rating": 4,
            "comment": "A bit hot, but worth the visit."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [25.7188, 32.6573]
      },
      "id": "node/103"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/104",
        "addr:city": t('Luxor'),
        "addr:country": "EG",
        "name": t('landmarks.Valley of the Kings.name'),
        "category": t('landmarks.Valley of the Kings.category'),
        "address": t('landmarks.Valley of the Kings.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Valley of the Kings.opening_hours'),
        "price_range": t('landmarks.Valley of the Kings.price_range'),
        "website": "https://www.egypt.travel/attractions/valley-of-the-kings",
        "image": "https://egypteyetour.com/wp-content/uploads/2019/04/Valley-Of-The-Kings.jpg",
        "description": t('landmarks.Valley of the Kings.description'),
        "reviews": [
          {
            "reviewer": "Sophia Martinez",
            "rating": 5,
            "comment": "A journey into the past!"
          },
          {
            "reviewer": "James Lee",
            "rating": 4,
            "comment": "Amazing tombs, but bring water."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [25.7402, 32.6010]
      },
      "id": "node/104"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/105",
        "addr:city": t('Aswan'),
        "addr:country": "EG",
        "name": t('landmarks.Abu Simbel Temples.name'),
        "category": t('landmarks.Abu Simbel Temples.category'),
        "address": t('landmarks.Abu Simbel Temples.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Abu Simbel Temples.opening_hours'),
        "price_range": t('landmarks.Abu Simbel Temples.price_range'),
        "website": "https://www.egypt.travel/attractions/abu-simbel-temples",
        "image": "http://www.egyptkeytours.com/wp-content/uploads/2017/09/abo-simbel.jpg",
        "description": t('landmarks.Abu Simbel Temples.description'),
        "reviews": [
          {
            "reviewer": "Linda Taylor",
            "rating": 5,
            "comment": "Breathtaking and monumental!"
          },
          {
            "reviewer": "Mark Thompson",
            "rating": 5,
            "comment": "A true marvel of ancient engineering."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [22.3372, 31.6253]
      },
      "id": "node/105"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/106",
        "addr:city": t('Cairo'),
        "addr:country": "EG",
        "name": t('landmarks.Egyptian Museum.name'),
        "category": t('landmarks.Egyptian Museum.category'),
        "address": t('landmarks.Egyptian Museum.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Egyptian Museum.opening_hours'),
        "price_range": t('landmarks.Egyptian Museum.price_range'),
        "website": "https://www.egypt.travel/attractions/the-egyptian-museum",
        "image": "http://cairogossip.com/app/uploads/2019/07/shutterstock_482978608.jpg",
        "description": t('landmarks.Egyptian Museum.description'),
        "reviews": [
          {
            "reviewer": "Ethan Harris",
            "rating": 5,
            "comment": "A treasure trove of history!"
          },
          {
            "reviewer": "Olivia King",
            "rating": 4,
            "comment": "So much to see, plan your visit."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [31.2357, 30.0444]
      },
      "id": "node/106"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/107",
        "addr:city": t('Alexandria'),
        "addr:country": "EG",
        "name": t('landmarks.Citadel of Qaitbay.name'),
        "category": t('landmarks.Citadel of Qaitbay.category'),
        "address": t('landmarks.Citadel of Qaitbay.address'),
        "stars": 4,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Citadel of Qaitbay.opening_hours'),
        "price_range": t('landmarks.Citadel of Qaitbay.price_range'),
        "website": "https://www.egypt.travel/attractions/citadel-of-qaitbay",
        "image": "https://jakadatoursegypt.com/wp-content/uploads/2021/04/Citadel-of-Qaitbay.jpg",
        "description": t('landmarks.Citadel of Qaitbay.description'),
        "reviews": [
          {
            "reviewer": "Grace Moore",
            "rating": 4,
            "comment": "Beautiful views and rich history."
          },
          {
            "reviewer": "Liam Carter",
            "rating": 4,
            "comment": "Great place to explore in Alexandria."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [29.8904, 31.2156]
      },
      "id": "node/107"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/108",
        "addr:city": t('Aswan'),
        "addr:country": "EG",
        "name": t('landmarks.Philae Temple.name'),
        "category": t('landmarks.Philae Temple.category'),
        "address": t('landmarks.Philae Temple.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Philae Temple.opening_hours'),
        "price_range": t('landmarks.Philae Temple.price_range'),
        "website": "https://www.egypt.travel/attractions/philae-temple",
        "image": "https://www.tripsavvy.com/thmb/xpMXo-XFKdCy2a6Rp75kLaXb1rk=/3648x2428/filters:fill(auto,1)/GettyImages-500053303-5c80e80b46e0fb0001a5f168.jpg",
        "description": t('landmarks.Philae Temple.description'),
        "reviews": [
          {
            "reviewer": "Charlotte Roberts",
            "rating": 5,
            "comment": "A stunning temple complex on an island."
          },
          {
            "reviewer": "William Scott",
            "rating": 5,
            "comment": "A must-visit for history lovers."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [32.8822, 24.0871]
      },
      "id": "node/108"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/109",
        "addr:city": t('Cairo'),
        "addr:country": "EG",
        "name": t('landmarks.Cairo Tower.name'),
        "category": t('landmarks.Cairo Tower.category'),
        "address": t('landmarks.Cairo Tower.address'),
        "stars": 4,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Cairo Tower.opening_hours'),
        "price_range": t('landmarks.Cairo Tower.price_range'),
        "website": "https://www.egypt.travel/attractions/cairo-tower",
        "image": "https://www.tripsavvy.com/thmb/YZ_b1N_XmzaorF55g8yjxJnKInw=/2121x1414/filters:fill(auto,1)/GettyImages-145167188-5b0fd1563418c60038dca8a8.jpg",
        "description": t('landmarks.Cairo Tower.description'),
        "reviews": [
          {
            "reviewer": "Henry Edwards",
            "rating": 4,
            "comment": "Great views of Cairo, especially at sunset."
          },
          {
            "reviewer": "Emily Harris",
            "rating": 4,
            "comment": "A good place to see the city skyline."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [31.2252, 30.0444]
      },
      "id": "node/109"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/110",
        "addr:city": t('Cairo'),
        "addr:country": "EG",
        "name": t('landmarks.Al-Azhar Mosque.name'),
        "category": t('landmarks.Al-Azhar Mosque.category'),
        "address": t('landmarks.Al-Azhar Mosque.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Al-Azhar Mosque.opening_hours'),
        "price_range": t('landmarks.Al-Azhar Mosque.price_range'),
        "website": "https://www.egypt.travel/attractions/al-azhar-mosque",
        "image": "https://cdn.pixabay.com/photo/2017/05/07/13/59/al-azhar-2292512_960_720.jpg",
        "description": t('landmarks.Al-Azhar Mosque.description'),
        "reviews": [
          {
            "reviewer": "Benjamin Johnson",
            "rating": 5,
            "comment": "A peaceful and spiritual place."
          },
          {
            "reviewer": "Samantha Davis",
            "rating": 5,
            "comment": "Beautiful architecture and rich history."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [31.2357, 30.0488]
      },
      "id": "node/110"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/111",
        "addr:city": t('Alexandria'),
        "addr:country": "EG",
        "name": t('landmarks.Library of Alexandria.name'),
        "category": t('landmarks.Library of Alexandria.category'),
        "address": t('landmarks.Library of Alexandria.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Library of Alexandria.opening_hours'),
        "price_range": t('landmarks.Library of Alexandria.price_range'),
        "website": "https://www.bibalex.org/en/default",
        "image": "https://www.quitandgotravel.com/wp-content/uploads/sites/8/2022/05/The-Facade-of-the-Modern-Library-of-Alexandria.jpg",
        "description": t('landmarks.Library of Alexandria.description'),
        "reviews": [
          {
            "reviewer": "Matthew White",
            "rating": 5,
            "comment": "A place of knowledge and culture."
          },
          {
            "reviewer": "Sophia Jones",
            "rating": 5,
            "comment": "A beautiful and modern library."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [29.8897, 31.2001]
      },
      "id": "node/111"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/112",
        "addr:city": t('Aswan'),
        "addr:country": "EG",
        "name": t('landmarks.Unfinished Obelisk.name'),
        "category": t('landmarks.Unfinished Obelisk.category'),
        "address": t('landmarks.Unfinished Obelisk.address'),
        "stars": 4,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Unfinished Obelisk.opening_hours'),
        "price_range": t('landmarks.Unfinished Obelisk.price_range'),
        "website": "https://www.egypt.travel/attractions/unfinished-obelisk",
        "image": "http://mymodernmet.com/wp/wp-content/uploads/2017/07/unfinished-obelisk-aswan-egypt-1.jpg",
        "description": t('landmarks.Unfinished Obelisk.description'),
        "reviews": [
          {
            "reviewer": "Isabella Lewis",
            "rating": 4,
            "comment": "A fascinating insight into ancient engineering."
          },
          {
            "reviewer": "Daniel Walker",
            "rating": 4,
            "comment": "Impressive, but not as well-known as other sites."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [32.8862, 24.0894]
      },
      "id": "node/112"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/113",
        "addr:city": t('Giza'),
        "addr:country": "EG",
        "name": t('landmarks.The Hanging Church.name'),
        "category": t('landmarks.The Hanging Church.category'),
        "address": t('landmarks.The Hanging Church.address'),
        "stars": 4,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.The Hanging Church.opening_hours'),
        "price_range": t('landmarks.The Hanging Church.price_range'),
        "website": "https://www.egypt.travel/attractions/hanging-church",
        "image": "https://i.pinimg.com/originals/1d/44/ea/1d44ea3b580a635fde78408b87ca1348.jpg",
        "description": t('landmarks.The Hanging Church.description'),
        "reviews": [
          {
            "reviewer": "Lucas Martin",
            "rating": 5,
            "comment": "A must-see for those interested in Egypt's Christian history."
          },
          {
            "reviewer": "Ava Wilson",
            "rating": 5,
            "comment": "Beautifully preserved with great historical significance."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [29.9782, 31.1300]
      },
      "id": "node/113"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/114",
        "addr:city": "Luxor",
        "addr:country": "EG",
        "name": t('landmarks.Luxor Temple.name'),
        "category": t('landmarks.Luxor Temple.category'),
        "address": t('landmarks.Luxor Temple.address'),
        "stars": 5,
        "phone": "+20 112 345 6789",
        "opening_hours": t('landmarks.Luxor Temple.opening_hours'),
        "price_range": t('landmarks.Luxor Temple.price_range'),
        "website": "https://www.egypt.travel/attractions/luxor-temple",
        "image": "https://www.thediscoveriesof.com/wp-content/uploads/2022/07/Luxor-Temple-shutterstock_1997301695.jpg",
        "description": t('landmarks.Luxor Temple.description'),
        "reviews": [
          {
            "reviewer": "James Brown",
            "rating": 5,
            "comment": "An incredible temple with impressive architecture."
          },
          {
            "reviewer": "Mia Taylor",
            "rating": 5,
            "comment": "A beautiful and historic place to visit."
          }
        ]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [25.699502, 32.6390509]
      },
      "id": "node/114"
    }
  ];
};

export default LM;
