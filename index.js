import React from "react";
import ReactDOM from "react-dom/client";


const ibaco = {
  name: "Ibaco",
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ppquufvfsojm0fjhk4q5",
  cusines: ["Ibaco", "Ice Cream"],
  Ratings : "4.2"
}


//config driven ui
const RestaurentList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "190619",
      "name": "Moorthys Cake Shop",
      "uuid": "8f3fec2f-54e0-4f46-a093-6cd6994dd625",
      "city": "118",
      "area": "Avp Alagammal Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "asmovnfqe4otgbeszids",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 6.699999809265137,
      "slugs": {
        "restaurant": "moorthys-cake-shop-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "Moorthys Cake Shop, Thiruvengadam Nagar, AVP Azhagammal Nagar, Thanjavur, Tamil Nadu, India",
      "locality": "Thanjavur City",
      "parentId": 139136,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3400,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5651821~p=1~eid=00000185-d35a-c70b-0a75-2206009f0123",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "190619",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 6.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "656131",
      "name": "Hotel Aarush\t",
      "uuid": "4e94145e-4b84-40bb-a9a1-162a2cf1ddb4",
      "city": "118",
      "area": "Thanjavur City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "fca093fa246fbccd7b3074d71b11ab0f",
      "cuisines": [
        "South Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 12,
      "minDeliveryTime": 12,
      "maxDeliveryTime": 12,
      "slaString": "12 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "hotel-aarush-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "SHOP NO.148,Seroji Market, East Gate, Thanjavur Mpty Ward-14,Thanjavur,Tamil Nadu-613001",
      "locality": "Seroji Market",
      "parentId": 394490,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "656131",
        "deliveryTime": 12,
        "minDeliveryTime": 12,
        "maxDeliveryTime": 12,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "156251",
      "name": "Happy sweets & Bakery",
      "uuid": "bf011b98-5b7b-4e69-a7ec-e1ea7407a408",
      "city": "118",
      "area": "Old Bus Stand",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "mdtjsmkpmjgpt3qtwltx",
      "cuisines": [
        "Burgers",
        "Ice Cream",
        "Pizzas",
        "Sweets"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 15,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 15,
      "slaString": "15 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "happy-sweets-bakery-old-busstand-test-dont-not-use",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "1308 East main street Thanjavur 613006",
      "locality": "Old Bus Stand",
      "parentId": 93615,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "156251",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "373591",
      "name": "Thanjai Thambi Vilas - Veg & Non Veg",
      "uuid": "526b5b3e-a628-4f41-a797-8f0436859cb8",
      "city": "118",
      "area": "Thanjavur City",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "zsodgzpppaojylsqt3mx",
      "cuisines": [
        "Desserts",
        "North Indian",
        "South Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 4.400000095367432,
      "slugs": {
        "restaurant": "saravana-agencies---thambi-villas-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "131/2,cectcia Tower,P.A.Y Nagar,Trichy Pudukottai Nagar,Thanjavur",
      "locality": "Thanjavur City",
      "parentId": 7313,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5651832~p=4~eid=00000185-d35a-c70b-0a75-2207009f0453",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "373591",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "451821",
      "name": "Suriya Juice corner",
      "uuid": "0bce90d1-d386-4d03-9e51-2853fac5b34f",
      "city": "118",
      "area": "Thanjavur City",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "s9lqicpkgwkknrvsbw7p",
      "cuisines": [
        "Juices",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 12000,
      "costForTwoString": "₹120 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "suriya-juice-corner-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "TNSTC complex ,old busstand oposite, Rajakrisnapuram, Thanjavur, Tamil Nadu 613001, India",
      "locality": "Thanjavur City",
      "parentId": 271646,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹299",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹299 | Use code FLAT125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLAT125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹299 | Use code FLAT125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "451821",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "523111",
      "name": "Deen Restaurant ( Since 1998 )",
      "uuid": "4b035340-b013-4fb1-bb67-c7596b95c07a",
      "city": "118",
      "area": "Mettu Palivasal",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "xsryyfe2krhmvqbflvwj",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "deen-chicken-corner-thanjavur-city-thanjavur-city-2",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "Near Old Bus stand,Malabar gold Near,Mettu Pallivasal,Thanjavur",
      "locality": "Thanjavur City",
      "parentId": 323621,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "523111",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "218889",
      "name": "Velan Cafe Veg & Non Veg",
      "uuid": "323f4247-b332-4e3f-90db-78ff2923c42e",
      "city": "118",
      "area": "Thanjavur City",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "zftxclwmc3f6k6wqovyw",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 4.900000095367432,
      "slugs": {
        "restaurant": "velan-cafe-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "6 Eliza nagar New busstand road,thanjavur",
      "locality": "New bus stand",
      "parentId": 222529,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5651833~p=7~eid=00000185-d35a-c70b-0a75-2208009f0709",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "218889",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "185412",
      "name": "All Thafiq(Kudai Biriyani)",
      "uuid": "9852331b-c9dc-4f02-8a04-572ec602c811",
      "city": "118",
      "area": "Thanjavur City",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "fz88dtc8ran9jlqnk2ap",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "all-thafiq(kudai-biriyani)-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "Court Road, Shivaji Nagar, Thanjavur, Tamil Nadu, India",
      "locality": "Court Road",
      "parentId": 30361,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "185412",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "381426",
      "name": "Topi Vappa Biryani",
      "uuid": "79820b62-4a0d-4b30-8168-984e03a75bdb",
      "city": "118",
      "area": "Railady",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "avvqspwbz11qalrqxy4p",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "topi-vappa-biryani-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "2917/1,M.K.MOOPANAR ROAD,RAILYADY,THANJAVUR",
      "locality": "Thanjavur City",
      "parentId": 258320,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "381426",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "109803",
      "name": "Aasife Biriyani",
      "uuid": "c2dd6686-c1f0-4065-9b45-57b182445221",
      "city": "118",
      "area": "Thanjavur City",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "gcljhljrgjxom63jhp7d",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Ice Cream",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "aasife-biriyani-philomena-shopping-mall-bus-stand",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "Hotel Ramnath, South Rampart, Old Bus Stand, Thanjavur",
      "locality": "Old Bus Stand",
      "parentId": 1265,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5651803~p=10~eid=00000185-d35a-c70b-0a75-2209009f0a61",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "109803",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.7",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "452660",
      "name": "Vappa Biriyani",
      "uuid": "457c16fc-c1a9-4af1-9b63-e7d1bd4191b8",
      "city": "118",
      "area": "Athupalam",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "c8yodcy37qcktljr1f8r",
      "cuisines": [
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "vappa-biriyani-thanjavur-city-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "Athupalam,Court main road,Near petrol bunk,Thanjavur",
      "locality": "Thanjavur City",
      "parentId": 272315,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "452660",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "108880",
      "name": "Ibaco",
      "uuid": "d77096b0-ce1a-4e9d-8eb4-54740529766b",
      "city": "118",
      "area": "Medical College Road",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ppquufvfsojm0fjhk4q5",
      "cuisines": [
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "slaString": "17 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "ibaco-mc-road-bus-stand",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "NO:9 A OLD NO :2 A SELVAM NAGAR,MEDICAL COLLEGE ROAD,SEBASTAIN COMPLEX,THANJAVUR,TAMIL NADU,INDIA,613007",
      "locality": "Medical College Road",
      "parentId": 3481,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "108880",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "233800",
      "name": "KFC",
      "uuid": "fb940df9-0667-426b-be97-c3a4c8812422",
      "city": "118",
      "area": "Parisutham Nagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "kfc-kfc-thanjavur-thanjavur-city",
        "city": "thanjavur"
      },
      "cityState": "118",
      "address": "Kamala subramaniam Arcade, 2851/35, Trichy main road, Petha perumal colony , Thanjavur-613007",
      "locality": "THANJAVUR",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 1900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 1900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "1900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5770552~p=13~eid=00000185-d35a-c70b-0a75-220a009f0d68",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "233800",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  }
]



const Title = () => {
  return (
    <a href="/">
       <img
      className="logo"
      src="https://cdn.shopify.com/s/files/1/0506/7708/8463/files/400JpgdpiLogo_360x.jpg?v=1614892241" alt="The Foodie" />
    </a>
  )
}




const HeaderComponent = () => {
  return (
    <div className="header">
      <Title/>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>Contact</li>
          <li>Cart</li>
     </ul>
     </div>
    </div>
  )
}


const RestaurentCards = ({cloudinaryImageId,name,cuisines,avgRating}) => {
  // const {cloudinaryImageId,name,cuisines,avgRating} = props.restaurant.data
  return (
    <div className="cards">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
      cloudinaryImageId}    
      alt="ibaco"/>
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="restaurent-cards">
      {
        RestaurentList.map(restaurant => {
          return <RestaurentCards
            {...restaurant.data}
            key = {restaurant.data.id}
          />
        })
     } 
    
    </div>
  )
}

const Footer = () => {
  return (
    <h1>Footer</h1>
  )
}

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
      
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
