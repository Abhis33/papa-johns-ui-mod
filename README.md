# papa-johns-ui-mod
A UI recreation of Papa Johns web frontend for educational purposes

# Technology 
React.js

# APIS
We will be using papa johns' public apis that are used by their webapp

# [Testing] Color Pallette

- Background - #F8EDED
- Primary 1 - #B43F3F
- Primary 2 - #FF8225
- Text - #173B45

## Menu URL API

https://www.papajohns.com/omni/api/trpc/menuCategory.getByStore?input=%7B%22json%22%3A%7B%22storeId%22%3A0%7D%7D

<details>
  {
  "result": {
    "data": {
      "json": {
        "menuCategories": [
          {
            "categoryId": "pizza",
            "iconImage": "/static-assets/a/images/menu-category/category-section/2024_subcat-pizza-circle.jpg",
            "name": "Pizza",
            "sections": [
              {
                "description": "",
                "displaySection": true,
                "name": "Most Popular",
                "productGroups": [
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/Original-Crust-Cheese-105369.jpg"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/Thin-Crust-Cheese-105206.jpg"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/GF-Crust-Cheese-105278.jpg"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/NYS-Crust-Cheese-105549.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultTypesId": 1,
                    "description": "Build your own custom pizza and we'll handcraft it for you. With so many delicious options to choose from, your masterpiece is waiting!",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/CYO-pizza-array-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "",
                    "noToppingsAlert": true,
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "cyo",
                    "productSkus": [
                      "1-1-2-83",
                      "1-781-5-83",
                      "1-1-3-83",
                      "1-2-4-83",
                      "1-1-5-83",
                      "1-1-4-83",
                      "1-631-2-83"
                    ],
                    "shortDescription": "Start by selecting your favorite crust",
                    "showCustomizeLabelOnly": true,
                    "sortOrder": 100003,
                    "specialtyStandardId": "3015",
                    "tag": "",
                    "title": "Create Your Own Pizza",
                    "uiClasses": [
                      "card-hide-product-group"
                    ],
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/CYO-pizza-array-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/Original-Crust-Pepperoni-105408.jpg"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/Thin-Crust-Pepperoni-105230.jpg"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/GF-Crust-Pepperoni-105298.jpg"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/NYS-Crust-Pepperoni-105540.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35
                    ],
                    "defaultTypesId": 1,
                    "description": "Your choice of crust covered with our signature pizza sauce, real cheese made from mozzarella, and pepperoni. With a pepperoni in almost every bite, it's one of our most popular pizzas.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/cyo/Original-Crust-Pepperoni-105408.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/pizza/pepperoni-pizza",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "pepperoni-pizza",
                    "productSkus": [
                      "1-1-4-115",
                      "1-631-2-115",
                      "1-2-4-115",
                      "1-1-5-115",
                      "1-1-3-115",
                      "1-1-2-115",
                      "1-781-5-115"
                    ],
                    "shortDescription": "Pepperoni, real cheese made from mozzarella, and your choice of crust.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100004,
                    "specialtyStandardId": "3015",
                    "tag": "",
                    "title": "Pepperoni Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/cyo/Original-Crust-Pepperoni-105408.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/sausage-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/sausage-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/gluten-free-sausage-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/web/product/pizzas/NY-Style-1Topp-Sausage.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      27
                    ],
                    "defaultTypesId": 1,
                    "description": "Our signature pizza sauce layered with sausage and real cheese made from mozzarella for a taste you’ll crave. Your choice of crust.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/pizzas/sausagepp-slated.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/pizza/sausage-pizza",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "sausage-pizza",
                    "productSkus": [
                      "1-1-4-117",
                      "1-2-4-117",
                      "1-631-2-117",
                      "1-1-5-117",
                      "1-1-3-117",
                      "1-1-2-117",
                      "1-781-5-117"
                    ],
                    "shortDescription": "Sausage and real cheese made from mozzarella with your choice of crust.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100005,
                    "specialtyStandardId": "3015",
                    "tag": "",
                    "title": "Sausage Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/sausagepp-slated.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/Original-Crust-Cheese-105369.jpg"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/Thin-Crust-Cheese-105206.jpg"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/GF-Crust-Cheese-105278.jpg"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/web/product/cyo/NYS-Crust-Cheese-105549.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultTypesId": 1,
                    "description": "Simple, yet simply delicious. Real cheese made from mozzarella on top of our signature pizza sauce with your choice of crust, then baked to a golden brown. It has just what you want, and nothing you don’t.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/cyo/Original-Crust-Cheese-105369.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/pizza/cheese-pizza",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "cheese-pizza",
                    "productSkus": [
                      "1-1-4-83",
                      "1-631-2-83",
                      "1-2-4-83",
                      "1-1-5-83",
                      "1-1-3-83",
                      "1-1-2-83",
                      "1-781-5-83"
                    ],
                    "shortDescription": "Real cheese made from mozzarella, pizza sauce and your choice of crust.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100006,
                    "specialtyStandardId": "3015",
                    "tag": "",
                    "title": "Cheese Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/cyo/Original-Crust-Cheese-105369.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "most_popular"
              },
              {
                "description": "",
                "displaySection": true,
                "name": "Handcrafted Specialties",
                "productGroups": [
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/the-works-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/the-works-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/gluten-free-works-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/the-works-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35,
                      48,
                      23,
                      25,
                      47,
                      26,
                      62
                    ],
                    "defaultTypesId": 1,
                    "description": "It’s everything you want on a pizza – and then some. A heaping helping of pepperoni, julienne-cut Canadian bacon, spicy Italian sausage, fresh-cut onions, crisp green peppers, mushrooms, ripe black olives, and real cheese made from mozzarella. When you’re hungry for a hearty pizza, the Works always works.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/the-works-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 5,
                    "moreInfoLink": "/order/menu/pizza/the-works",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "the-works",
                    "productSkus": [
                      "1-781-5-24",
                      "1-1-3-24",
                      "1-2-4-24",
                      "1-1-4-24",
                      "1-1-5-24",
                      "1-631-2-24",
                      "1-1-2-24"
                    ],
                    "shortDescription": "Pepperoni, Canadian bacon, spicy Italian sausage, onions, green peppers, mushrooms, and black olives.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100001,
                    "specialtyStandardId": "3000",
                    "tag": "",
                    "title": "The Works Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/the-works-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/the-meats-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/the-meats-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/gluten-free-meats-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/the-meats-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35,
                      20,
                      24,
                      27,
                      62
                    ],
                    "defaultTypesId": 1,
                    "description": "A masterpiece of hearty, high-quality meats including pepperoni, savory sausage, real beef, hickory-smoked bacon, and julienne-cut Canadian bacon, all topped with real cheese made from mozzarella.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/the-meats-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 3,
                    "moreInfoLink": "/order/menu/pizza/the-meats",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "the-meats",
                    "productSkus": [
                      "1-781-5-2",
                      "1-1-3-2",
                      "1-1-5-2",
                      "1-631-2-2",
                      "1-1-2-2",
                      "1-2-4-2",
                      "1-1-4-2"
                    ],
                    "shortDescription": "Pepperoni, sausage, beef, bacon, and Canadian bacon.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100002,
                    "specialtyStandardId": "3001",
                    "tag": "",
                    "title": "The Meats Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/the-meats-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/zesty-italian-trio-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/zesty-italian-trio-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/zesty-italian-trio-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35,
                      23,
                      30,
                      31,
                      54
                    ],
                    "defaultTypesId": 1,
                    "description": "A tasty trio of zesty Italian sausage, salami, and pepperoni, plus banana peppers, a three-cheese blend, and real cheese made from mozzarella on our signature sauce and original fresh dough. Sprinkled with classic Italian seasoning for an extra dash of flavor.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/zesty-italian-trio-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 3,
                    "moreInfoLink": "/order/menu/pizza/zesty-italian-trio",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "zesty-italian-trio",
                    "productSkus": [
                      "1-781-5-74",
                      "1-2-4-74",
                      "1-1-5-74",
                      "1-1-4-74",
                      "1-1-3-74",
                      "1-1-2-74"
                    ],
                    "shortDescription": "Italian sausage, salami, pepperoni, banana peppers, three-cheese blend, and Italian seasoning.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100003,
                    "specialtyStandardId": "3251",
                    "tag": "",
                    "title": "Zesty Italian Trio Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/zesty-italian-trio-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/meatball-pepp-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/meatball-pepp-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/meatball-pepp-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35,
                      54,
                      39
                    ],
                    "defaultTypesId": 1,
                    "description": "Savory meatballs and pepperoni make for a tasty combination, especially when we add a three-cheese blend, and real cheese made from mozzarella on our original crust, then sprinkle it all with classic Italian seasoning for an extra dash of flavor.\n",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/meatball-pepp-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 2,
                    "moreInfoLink": "/order/menu/pizza/meatball-pepperoni",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 1,
                    "numToppingsReplaced": 1,
                    "productGroupId": "meatball-pepperoni",
                    "productSkus": [
                      "1-781-5-163",
                      "1-2-4-163",
                      "1-1-5-163",
                      "1-1-4-163",
                      "1-1-3-163",
                      "1-1-2-163"
                    ],
                    "shortDescription": "Meatballs, pepperoni, three-cheese blend, and Italian seasoning.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100006,
                    "specialtyStandardId": "3264",
                    "tag": "",
                    "title": "Meatball Pepperoni Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/meatball-pepp-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/super-hawaiian-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/super-hawaiian-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/super-hawaiian-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/super-hawaiian-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      24,
                      51,
                      54,
                      62
                    ],
                    "defaultTypesId": 1,
                    "description": "Get a taste of the tropics. This super delicious pizza is loaded with sweet, juicy pineapple tidbits, julienne-cut Canadian bacon, hickory-smoked bacon, a three-cheese blend, and real cheese made from mozzarella on our signature sauce and original fresh dough.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/super-hawaiian-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 2,
                    "moreInfoLink": "/order/menu/pizza/super-hawaiian",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "super-hawaiian",
                    "productSkus": [
                      "1-2-4-269",
                      "1-1-5-269",
                      "1-1-4-269",
                      "1-1-3-269",
                      "1-631-2-269",
                      "1-1-2-269",
                      "1-781-5-269"
                    ],
                    "shortDescription": "Pineapple, Canadian bacon, bacon, and three-cheese blend.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100007,
                    "specialtyStandardId": "3482",
                    "tag": "",
                    "title": "Super Hawaiian Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/super-hawaiian-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/ultimate-pepp-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/ultimate-pepp-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/ultimate-pepp-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35,
                      61
                    ],
                    "defaultTypesId": 1,
                    "description": "Just when you think our pepperoni pizza couldn’t get any tastier, we craft the ultimate masterpiece. Our original fresh dough is covered with signature pizza sauce, 30% more pepperoni than our traditional pie, a blend of Parmesan and Romano, and real cheese made from mozzarella, all sprinkled with classic Italian seasoning.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/ultimate-pepp-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/pizza/ultimate-pepperoni",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 1,
                    "numToppingsReplaced": 1,
                    "productGroupId": "ultimate-pepperoni",
                    "productSkus": [
                      "1-1-5-268",
                      "1-1-4-268",
                      "1-1-2-268",
                      "1-1-3-268",
                      "1-781-5-268",
                      "1-2-4-268"
                    ],
                    "shortDescription": "30% more pepperoni than our traditional pie, Parmesan and Romano cheese blend, sprinkled with Italian seasoning.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100008,
                    "specialtyStandardId": "3481",
                    "tag": "",
                    "title": "Ultimate Pepperoni Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/ultimate-pepp-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/bbq-chicken-bacon-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/bbq-chicken-bacon-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/bbq-chicken-bacon-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/bbq-chicken-bacon-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 426,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      25,
                      24,
                      33
                    ],
                    "defaultTypesId": 1,
                    "description": "We had you at bacon, right? It gets even better. Smoky Southern-style BBQ sauce adds a tangy twist to this irresistible pizza topped with grilled chicken, hickory-smoked bacon, fresh-cut onions, and real cheese made from mozzarella. Round one up today.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/bbq-chicken-bacon-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 1,
                    "moreInfoLink": "/order/menu/pizza/bbq-chicken-bacon",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "bbq-chicken-bacon",
                    "productSkus": [
                      "1-781-5-4",
                      "1-1-2-4",
                      "1-2-4-4",
                      "1-1-4-4",
                      "1-631-2-4",
                      "1-1-5-4",
                      "1-1-3-4"
                    ],
                    "shortDescription": "BBQ sauce, grilled chicken, bacon and onions.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100009,
                    "specialtyStandardId": "3040",
                    "tag": "",
                    "title": "BBQ Chicken Bacon Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/bbq-chicken-bacon-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fiery-buffalo-chicken-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fiery-buffalo-chicken-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fiery-buffalo-chicken-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fiery-buffalo-chicken-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 503,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      25,
                      24,
                      33
                    ],
                    "defaultTypesId": 1,
                    "description": "We’re bringing the heat with more of the bold buffalo flavor you love. Our original crust is covered in a new buffalo sauce with a hint of buttery richness and a tangy, craveable kick.  Piled high with grilled chicken, hickory-smoked bacon, fresh-cut onions, and real cheese made from mozzarella.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/fiery-buffalo-chicken-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 1,
                    "moreInfoLink": "/order/menu/pizza/fiery-buffalo-chicken",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "fiery-buffalo-chicken",
                    "productSkus": [
                      "1-781-5-156",
                      "1-2-4-156",
                      "1-1-5-156",
                      "1-1-4-156",
                      "1-1-3-156",
                      "1-1-2-156",
                      "1-631-2-156"
                    ],
                    "shortDescription": "Now with more of the bold buffalo flavor you love! Our new buffalo sauce topped with grilled chicken, bacon, and onions.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100010,
                    "specialtyStandardId": "3341",
                    "tag": "",
                    "title": "Fiery Buffalo Chicken Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/fiery-buffalo-chicken-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/philly-cheesesteak-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/philly-cheesesteak-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/philly-cheesesteak-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/philly-cheesesteak-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 428,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      25,
                      47,
                      54,
                      506
                    ],
                    "defaultTypesId": 1,
                    "description": "Whether you’re a native Philadelphian or still waiting to visit the City of Brotherly Love, “youse” can enjoy an elevated form of the classic Philly cheesesteak in this original tribute to the king of hot sandwiches, the Papa John’s Philly Cheesesteak pizza. Considered by its fans to be one of the best Papa John’s pizza varieties, this meaty and cheesy triumph will keep the party going all night long. For a flavorful treat that would satisfy even the Philly Phanatic, try the Philly Cheesesteak pizza from Papa John’s.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/philly-cheesesteak-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 2,
                    "moreInfoLink": "/order/menu/pizza/philly-cheesesteak",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "philly-cheesesteak",
                    "productSkus": [
                      "1-781-5-198",
                      "1-2-4-198",
                      "1-1-5-198",
                      "1-1-4-198",
                      "1-1-3-198",
                      "1-1-2-198",
                      "1-631-2-198"
                    ],
                    "shortDescription": "Philly sauce, steak, onions, green peppers, and three-cheese blend.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100011,
                    "specialtyStandardId": "3377",
                    "tag": "",
                    "title": "Philly Cheesesteak Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/philly-cheesesteak-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/pepp-sausage-6cheese-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/pepp-sausage-6cheese-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/pepp-sausage-6cheese-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      35,
                      27,
                      54,
                      61
                    ],
                    "defaultTypesId": 1,
                    "description": "Featuring pepperoni, sausage and a generous six-cheese blend of real cheese made from Mozzarella, Romano, Parmesan, Asiago, Provolone, and Fontina. Finished with a blend of Italian herb seasonings. One taste and it may become your favorite, too. ",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/pepp-sausage-6cheese-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 2,
                    "moreInfoLink": "/order/menu/pizza/pepperoni-sausage-and-six-cheese-pizza",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "pepperoni-sausage-and-six-cheese-pizza",
                    "productSkus": [
                      "1-1-2-86",
                      "1-1-5-86",
                      "1-1-3-86",
                      "1-2-4-86",
                      "1-1-4-86",
                      "1-781-5-86"
                    ],
                    "shortDescription": "Pepperoni, sausage, a six-cheese blend and Italian seasoning.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100012,
                    "specialtyStandardId": "3273",
                    "tag": "",
                    "title": "Pepperoni, Sausage & Six Cheese Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/pepp-sausage-6cheese-slate-compressed.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "handcrafted_specialties"
              },
              {
                "description": "",
                "displaySection": true,
                "name": "Handcrafted Meatless Specialties",
                "productGroups": [
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/extra-cheesy-alfredo-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/extra-cheesy-alfredo-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/extra-cheesy-alfredo-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 731,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      21,
                      54
                    ],
                    "defaultTypesId": 1,
                    "description": "Calling all cheese lovers! Your choice of crust covered in rich, creamy two-cheese Alfredo sauce topped with a blend of provolone, Asiago, Fontina, and real cheese made from mozzarella. ",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/extra-cheesy-alfredo-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/pizza/extra-cheesy-alfredo",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "extra-cheesy-alfredo",
                    "productSkus": [
                      "1-1-4-289",
                      "1-2-4-289",
                      "1-1-5-289",
                      "1-631-2-289",
                      "1-1-2-289",
                      "1-1-3-289"
                    ],
                    "shortDescription": "Your choice of crust covered in rich, creamy two-cheese Alfredo sauce topped with a four-cheese blend.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100015,
                    "specialtyStandardId": "3504",
                    "tag": "",
                    "title": "Extra Cheesy Alfredo Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/extra-cheesy-alfredo-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fresh-spinach-tomato-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fresh-spinach-tomato-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/fresh-spinach-tomato-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 731,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      50,
                      59
                    ],
                    "defaultTypesId": 1,
                    "description": "Crafted with fresh cream and Parmesan and Romano cheeses, our 2-Cheese Alfredo sauce is deliciously creamy. We top it with fresh baby spinach, fresh-cut Roma tomatoes, real cheese made from mozzarella, plus classic Italian seasoning for an extra dash of flavor.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/fresh-spinach-tomato-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 1,
                    "moreInfoLink": "/order/menu/pizza/fresh-spinach-tomato-alfredo",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 1,
                    "numToppingsReplaced": 1,
                    "productGroupId": "fresh-spinach-tomato-alfredo",
                    "productSkus": [
                      "1-1-2-280",
                      "1-1-4-280",
                      "1-1-3-280",
                      "1-1-5-280",
                      "1-2-4-280",
                      "1-781-5-280"
                    ],
                    "shortDescription": "2-Cheese Alfredo sauce, fresh baby spinach, Roma tomatoes, and Italian seasoning.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100016,
                    "specialtyStandardId": "3492",
                    "tag": "",
                    "title": "Fresh Spinach & Tomato Alfredo Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/fresh-spinach-tomato-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_GLUTEN_FREE",
                        "hasLegalWarnings": true,
                        "iconTagText": "",
                        "id": 631,
                        "legalWarnings": [
                          "Not recommended for customers with Celiac Disease as pizzas may be exposed to gluten during the preparation process.  See nutritional information page for specific toppings that contain gluten."
                        ],
                        "name": "Gluten-Free Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Gluten Free",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 600,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/garden-fresh-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/garden-fresh-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 631,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/gluten-free-garden-fresh-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/garden-fresh-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      48,
                      25,
                      47,
                      26,
                      50
                    ],
                    "defaultTypesId": 1,
                    "description": "All your favorite veggies together on a delightfully delicious pizza. Loaded with crisp green peppers, fresh-cut onions, mushrooms, ripe black olives, vine-ripened Roma tomatoes, and real cheese made from mozzarella.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/garden-fresh-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 3,
                    "moreInfoLink": "/order/menu/pizza/garden-fresh",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 2,
                    "numToppingsReplaced": 2,
                    "productGroupId": "garden-fresh",
                    "productSkus": [
                      "1-781-5-22",
                      "1-631-2-22",
                      "1-1-4-22",
                      "1-1-2-22",
                      "1-1-3-22",
                      "1-1-5-22",
                      "1-2-4-22"
                    ],
                    "shortDescription": "Green peppers, onions, mushrooms, black olives, and Roma tomatoes.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100017,
                    "specialtyStandardId": "3043",
                    "tag": "",
                    "title": "Garden Fresh Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/garden-fresh-slate-compressed.jpg"
                  },
                  {
                    "allowHalfToppingFlag": true,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 58,
                        "description": "Would you like it well done or baked normally?",
                        "id": 3,
                        "instructions": [
                          {
                            "code": "IND",
                            "id": 58,
                            "name": "Normal Bake",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IWD",
                            "id": 9,
                            "name": "Well Done",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "BAKE"
                      },
                      {
                        "defaultInstructionId": 5,
                        "description": "How much cheese?",
                        "id": 2,
                        "instructions": [
                          {
                            "code": "ILC",
                            "id": 6,
                            "name": "Light Cheese",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INC",
                            "id": 7,
                            "name": "No Cheese",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISC",
                            "id": 5,
                            "name": "Normal Cheese",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          }
                        ],
                        "name": "CHEESE"
                      },
                      {
                        "defaultInstructionId": 10,
                        "description": "Do you like your pizza sliced in traditional wedges, or in squares?",
                        "id": 4,
                        "instructions": [
                          {
                            "code": "ICCT",
                            "id": 25,
                            "name": "Clean Cut",
                            "sortOrder": 300,
                            "tooltipDescription": "Choose clean cut to minimize the chance of contacting other dairy/meat/vegetable products from the cutting tool"
                          },
                          {
                            "code": "INCT",
                            "id": 24,
                            "name": "No Cut",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "IRC",
                            "id": 10,
                            "name": "Normal Cut",
                            "sortOrder": 100,
                            "tooltipDescription": ""
                          },
                          {
                            "code": "ICC",
                            "id": 11,
                            "name": "Square Cut",
                            "sortOrder": 200,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "CUT"
                      },
                      {
                        "defaultInstructionId": 1,
                        "description": "How much sauce?",
                        "id": 1,
                        "instructions": [
                          {
                            "code": "IXS",
                            "id": 3,
                            "name": "Extra",
                            "sortOrder": 300,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ILS",
                            "id": 2,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 4,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 1,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 2,
                        "name": "Small",
                        "productMdmSize": "10in",
                        "size": "10\"",
                        "sortOrder": 200
                      },
                      {
                        "id": 3,
                        "name": "Medium",
                        "productMdmSize": "12in",
                        "size": "12\"",
                        "sortOrder": 300
                      },
                      {
                        "id": 4,
                        "name": "Large",
                        "productMdmSize": "14in",
                        "size": "14\"",
                        "sortOrder": 400
                      },
                      {
                        "id": 5,
                        "name": "Extra Large",
                        "productMdmSize": "16in",
                        "size": "16\"",
                        "sortOrder": 500
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PIZZA_ORIGINAL",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 1,
                        "legalWarnings": [],
                        "name": "Original Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Original",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 100,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_THIN",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 2,
                        "legalWarnings": [],
                        "name": "Thin Crust",
                        "productCategory": "Pizza",
                        "productSubType": "Thin",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 500,
                        "useGraphicalBuilder": false
                      },
                      {
                        "code": "PIZZA_NY_STYLE",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 781,
                        "legalWarnings": [],
                        "name": "XL New York Style Crust",
                        "productCategory": "Pizza",
                        "productSubType": "NY Style",
                        "showPizzaSizeInInch": false,
                        "sortOrder": 400,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 1,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/tuscan-6cheese-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 2,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/tuscan-6cheese-slate-compressed.png"
                      },
                      {
                        "baseIngredientTypeId": 781,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/pizzas/tuscan-6cheese-slate-compressed.png"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 4,
                    "defaultToppingIds": [
                      54,
                      61
                    ],
                    "defaultTypesId": 1,
                    "description": "Experience the authentic taste of Italy! Layered with signature pizza sauce and an authentic blend of Parmesan, Romano, Asiago, Fontina, provolone, and real cheese made from mozzarella. Baked hot and fresh then finished with classic Italian seasoning.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/pizzas/tuscan-6cheese-slate-compressed.png",
                    "maxSameTopping": 2,
                    "maxToppings": 10,
                    "menuCategory": "pizza",
                    "minToppingsAllowed": 2,
                    "moreInfoLink": "/order/menu/pizza/tuscan-six-cheese",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 0,
                    "numToppingsReplaced": 0,
                    "productGroupId": "tuscan-six-cheese",
                    "productSkus": [
                      "1-781-5-45",
                      "1-2-4-45",
                      "1-1-4-45",
                      "1-1-2-45",
                      "1-1-5-45",
                      "1-1-3-45"
                    ],
                    "shortDescription": "A blend of Parmesan, Romano, Asiago, Fontina, provolone, real cheese made from mozzarella, and Italian seasoning.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 100018,
                    "specialtyStandardId": "3207",
                    "tag": "",
                    "title": "Tuscan Six Cheese Pizza",
                    "webImageURL": "/static-assets/a/images/web/product/pizzas/tuscan-6cheese-slate-compressed.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "handcrafted_meatless_specialties"
              }
            ]
          },
          {
            "categoryId": "papadias",
            "iconImage": "/static-assets/a/images/menu-category/category-section/2022_subcat-papadia-circle.jpg",
            "name": "Papadias",
            "sections": [
              {
                "description": "",
                "displaySection": true,
                "name": "Parmesan Crusted Papadias",
                "productGroups": [
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PARM_CRUST_PAPADIA",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 777,
                        "legalWarnings": [],
                        "name": "Parmesan Crusted Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Parm Cr Papadia",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 35,
                        "defaultProductSku": "25-181-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 777,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Array-89041.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 88,
                    "defaultTypesId": 777,
                    "description": "",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Array-89041.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "",
                    "noToppingsAlert": true,
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "create-your-own-parm-crust-papadia",
                    "productSkus": [
                      "43-777-88-281"
                    ],
                    "shortDescription": "",
                    "showCustomizeLabelOnly": true,
                    "sortOrder": 110010,
                    "specialtyStandardId": "3015",
                    "tag": "",
                    "title": "Parmesan Crusted Create Your Own Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Array-89041.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PARM_CRUST_PAPADIA",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 777,
                        "legalWarnings": [],
                        "name": "Parmesan Crusted Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Parm Cr Papadia",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 35,
                        "defaultProductSku": "25-181-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 777,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Philly_89218.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 428,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      25,
                      47,
                      506
                    ],
                    "defaultTypesId": 777,
                    "description": "Parmesan crusted flatbread-style sandwich with Philly sauce, cheese, steak, onions and green peppers. Served with garlic dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Philly_89218.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/parm-crust-philly-cheesesteak-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "parm-crust-philly-cheesesteak-papadia",
                    "productSkus": [
                      "43-777-88-277"
                    ],
                    "shortDescription": "Parmesan crusted flatbread, Philly sauce, cheese, steak, onions and green peppers. Served with garlic dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110011,
                    "specialtyStandardId": "3487",
                    "tag": "",
                    "title": "Parmesan Crusted Philly Cheesesteak Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Philly_89218.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PARM_CRUST_PAPADIA",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 777,
                        "legalWarnings": [],
                        "name": "Parmesan Crusted Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Parm Cr Papadia",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 36,
                        "defaultProductSku": "25-180-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 777,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-BBQ_Chicken-89235.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 426,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      25,
                      24,
                      33
                    ],
                    "defaultTypesId": 777,
                    "description": "Parmesan crusted flatbread-style sandwich with grilled chicken, bacon, onions, cheese, and BBQ sauce. Served with BBQ dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-BBQ_Chicken-89235.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/parm-crust-bbq-chicken-bacon-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "parm-crust-bbq-chicken-bacon-papadia",
                    "productSkus": [
                      "43-777-88-279"
                    ],
                    "shortDescription": "Parmesan crusted flatbread, grilled chicken, bacon, onions, cheese, and BBQ sauce",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110012,
                    "specialtyStandardId": "3490",
                    "tag": "",
                    "title": "Parmesan Crusted BBQ Chicken & Bacon Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-BBQ_Chicken-89235.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PARM_CRUST_PAPADIA",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 777,
                        "legalWarnings": [],
                        "name": "Parmesan Crusted Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Parm Cr Papadia",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 33,
                        "defaultProductSku": "25-179-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 777,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Buffalo_Chicken-89279.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 428,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      25,
                      33,
                      54
                    ],
                    "defaultTypesId": 777,
                    "description": "Parmesan crusted flatbread-style sandwich made from original fresh dough and loaded with grilled chicken, onions, our signature cheese plus our 3-cheese blend, buttermilk ranch sauce, and buffalo sauce. Served with ranch dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Buffalo_Chicken-89279.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/parm-crust-grilled-buffalo-chicken-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "parm-crust-grilled-buffalo-chicken-papadia",
                    "productSkus": [
                      "43-777-88-305"
                    ],
                    "shortDescription": "Parmesan crusted flatbread, grilled chicken, onions, signature cheese plus our 3-cheese blend, buttermilk ranch sauce, and buffalo sauce. Served with ranch dipping sauce",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110013,
                    "specialtyStandardId": "3514",
                    "tag": "",
                    "title": "Parmesan Crusted Grilled Buffalo Chicken Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Buffalo_Chicken-89279.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PARM_CRUST_PAPADIA",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 777,
                        "legalWarnings": [],
                        "name": "Parmesan Crusted Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Parm Cr Papadia",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 18,
                        "defaultProductSku": "25-174-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 777,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Meatball_Pepperoni-89311.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      35,
                      39
                    ],
                    "defaultTypesId": 777,
                    "description": "Parmesan crusted flatbread-style sandwich with original pizza sauce, cheese, meatballs and pepperoni. Served with original pizza dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Meatball_Pepperoni-89311.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/parm-crust-meatball-pepperoni-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "parm-crust-meatball-pepperoni-papadia",
                    "productSkus": [
                      "43-777-88-278"
                    ],
                    "shortDescription": "Parmesan crusted flatbread-style sandwich with original pizza sauce, cheese, meatballs and pepperoni. Served with original pizza dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110014,
                    "specialtyStandardId": "3488",
                    "tag": "",
                    "title": "Parmesan Crusted Meatball Pepperoni Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Meatball_Pepperoni-89311.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PARM_CRUST_PAPADIA",
                        "hasLegalWarnings": false,
                        "iconTagText": "",
                        "id": 777,
                        "legalWarnings": [],
                        "name": "Parmesan Crusted Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Parm Cr Papadia",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 34,
                        "defaultProductSku": "25-174-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 777,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Italian-89362.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 731,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      23,
                      30,
                      31
                    ],
                    "defaultTypesId": 777,
                    "description": "Parmesan crusted flatbread-style sandwich with alfredo sauce, cheese, Italian sausage, salami and banana peppers. Served with original pizza dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Italian-89362.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/parm-crust-italian-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "parm-crust-italian-papadia",
                    "productSkus": [
                      "43-777-88-282"
                    ],
                    "shortDescription": "Parmesan crusted flatbread-style sandwich with alfredo sauce, cheese, Italian sausage, salami and banana peppers. Served with original pizza dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110015,
                    "specialtyStandardId": "3489",
                    "tag": "",
                    "title": "Parmesan Crusted Italian Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Parm_Crusted_Papadia-Italian-89362.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "parmesan_crusted_papadias"
              },
              {
                "description": "",
                "displaySection": true,
                "name": "Papadias",
                "productGroups": [
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PAPADINA",
                        "hasLegalWarnings": false,
                        "id": 733,
                        "legalWarnings": [],
                        "name": "Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Papadias",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 35,
                        "defaultProductSku": "25-181-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 733,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Papadia-Array-88958.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 88,
                    "defaultTypesId": 733,
                    "description": "Pizza sauce, cheese and up to three favorite toppings.\nServed with garlic dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Papadia-Array-88958.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "",
                    "noToppingsAlert": true,
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "create-your-own-papadia",
                    "productSkus": [
                      "43-733-88-281"
                    ],
                    "shortDescription": "Pizza sauce, cheese and up to three favorite toppings.\nServed with garlic dipping sauce.",
                    "showCustomizeLabelOnly": true,
                    "sortOrder": 110018,
                    "specialtyStandardId": "3015",
                    "tag": "",
                    "title": "Create Your Own Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Papadia-Array-88958.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PAPADINA",
                        "hasLegalWarnings": false,
                        "id": 733,
                        "legalWarnings": [],
                        "name": "Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Papadias",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 35,
                        "defaultProductSku": "25-181-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 733,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Papadia-Philly-89476.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 428,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      25,
                      47,
                      506
                    ],
                    "defaultTypesId": 733,
                    "description": "Flatbread-style sandwich with Philly sauce, cheese, steak, onions and green peppers. Served with garlic dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Papadia-Philly-89476.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/philly-steak-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "philly-steak-papadia",
                    "productSkus": [
                      "43-733-88-277"
                    ],
                    "shortDescription": "Flatbread-style sandwich with Philly sauce, cheese, steak, onions and green peppers. Served with garlic dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110019,
                    "specialtyStandardId": "3487",
                    "tag": "",
                    "title": "Philly Cheesesteak Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Papadia-Philly-89476.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PAPADINA",
                        "hasLegalWarnings": false,
                        "id": 733,
                        "legalWarnings": [],
                        "name": "Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Papadias",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 36,
                        "defaultProductSku": "25-180-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 733,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Papadia-BBQ_Chicken-89612.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 426,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      25,
                      24,
                      33
                    ],
                    "defaultTypesId": 733,
                    "description": "Flatbread-style sandwich with grilled chicken, bacon, onions, cheese, and BBQ sauce. Served with BBQ dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Papadia-BBQ_Chicken-89612.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/grilled-bbq-chicken-bacon-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "grilled-bbq-chicken-bacon-papadia",
                    "productSkus": [
                      "43-733-88-279"
                    ],
                    "shortDescription": "Flatbread-style sandwich with grilled chicken, bacon, onions, cheese, and BBQ sauce. Served with BBQ dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110020,
                    "specialtyStandardId": "3490",
                    "tag": "",
                    "title": "BBQ Chicken & Bacon Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Papadia-BBQ_Chicken-89612.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PAPADINA",
                        "hasLegalWarnings": false,
                        "id": 733,
                        "legalWarnings": [],
                        "name": "Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Papadias",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 33,
                        "defaultProductSku": "25-179-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 733,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Papadia-Buffalo_Chicken-89580.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 428,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      25,
                      33,
                      54
                    ],
                    "defaultTypesId": 733,
                    "description": "Flatbread-style sandwich made from original fresh dough and loaded with grilled chicken, onions, our signature cheese plus our 3-cheese blend, buttermilk ranch sauce, and buffalo sauce. Served with ranch dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Papadia-Buffalo_Chicken-89580.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/grilled-buffalo-chicken-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "grilled-buffalo-chicken-papadia",
                    "productSkus": [
                      "43-733-88-305"
                    ],
                    "shortDescription": "Grilled chicken, onions, signature cheese plus our 3-cheese blend, buttermilk ranch sauce, and buffalo sauce. Served with ranch dipping sauce",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110021,
                    "specialtyStandardId": "3514",
                    "tag": "",
                    "title": "Grilled Buffalo Chicken Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Papadia-Buffalo_Chicken-89580.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PAPADINA",
                        "hasLegalWarnings": false,
                        "id": 733,
                        "legalWarnings": [],
                        "name": "Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Papadias",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 18,
                        "defaultProductSku": "25-174-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 733,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Papadia-Meatball_Pepperoni-89531.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 429,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      35,
                      39
                    ],
                    "defaultTypesId": 733,
                    "description": "Flatbread-style sandwich with original pizza sauce, cheese, meatballs and pepperoni. Served with original pizza dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Papadia-Meatball_Pepperoni-89531.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/meatball-pepperoni-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "meatball-pepperoni-papadia",
                    "productSkus": [
                      "43-733-88-278"
                    ],
                    "shortDescription": "Flatbread-style sandwich with original pizza sauce, cheese, meatballs and pepperoni. Served with original pizza dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110022,
                    "specialtyStandardId": "3488",
                    "tag": "",
                    "title": "Meatball Pepperoni Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Papadia-Meatball_Pepperoni-89531.jpg"
                  },
                  {
                    "allowHalfToppingFlag": false,
                    "availableInstructions": [
                      {
                        "defaultInstructionId": 36,
                        "description": "How much sauce?",
                        "id": 8,
                        "instructions": [
                          {
                            "code": "ILS",
                            "id": 37,
                            "name": "Light",
                            "sortOrder": 99,
                            "tooltipDescription": null
                          },
                          {
                            "code": "INS",
                            "id": 38,
                            "name": "None",
                            "sortOrder": 400,
                            "tooltipDescription": null
                          },
                          {
                            "code": "ISS",
                            "id": 36,
                            "name": "Normal",
                            "sortOrder": 100,
                            "tooltipDescription": null
                          }
                        ],
                        "name": "Sauce Portion"
                      }
                    ],
                    "availableSizes": [
                      {
                        "id": 88,
                        "name": "Papadia",
                        "productMdmSize": "PDNA",
                        "size": "PDNA",
                        "sortOrder": 100
                      }
                    ],
                    "availableToppingIds": [
                      33,
                      35,
                      39,
                      47,
                      48,
                      50,
                      51,
                      20,
                      21,
                      54,
                      23,
                      24,
                      25,
                      26,
                      506,
                      59,
                      27,
                      29,
                      61,
                      30,
                      62,
                      31
                    ],
                    "availableTypes": [
                      {
                        "code": "PAPADINA",
                        "hasLegalWarnings": false,
                        "id": 733,
                        "legalWarnings": [],
                        "name": "Papadia",
                        "productCategory": "Pizza",
                        "productSubType": "Papadias",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "complimentarySides": [
                      {
                        "complimentarySideId": 34,
                        "defaultProductSku": "25-174-33-112",
                        "productChoices": [
                          {
                            "calories": 100,
                            "name": "Ranch Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-179-33-112",
                            "title": "Ranch Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Ranch-115206.jpg"
                          },
                          {
                            "calories": 153,
                            "name": "Spicy Garlic Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-725-33-112",
                            "title": "Spicy Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Spicy_Garlic-115240.jpg"
                          },
                          {
                            "calories": 160,
                            "name": "Blue Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-177-33-112",
                            "title": "Blue Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Blue-Cheese-115255.jpg"
                          },
                          {
                            "calories": 15,
                            "name": "Buffalo Hot Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-175-33-112",
                            "title": "Buffalo Spicy Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Buffalo-115298.jpg"
                          },
                          {
                            "calories": 45,
                            "name": "Barbeque Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-180-33-112",
                            "title": "Barbeque Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Barbeque-115336.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Special Garlic Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-181-33-112",
                            "title": "Special Garlic Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Garlic-115178.jpg"
                          },
                          {
                            "calories": 150,
                            "name": "Honey Mustard Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-176-33-112",
                            "title": "Honey Mustard Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Honey_Mustard-115287.jpg"
                          },
                          {
                            "calories": 40,
                            "name": "Cheese Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-173-33-112",
                            "title": "Cheese Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Cheese_Sauce-115265.jpg"
                          },
                          {
                            "calories": 20,
                            "name": "Original Pizza Dipping Sauce Cup",
                            "numDupTops": 0,
                            "sku": "25-174-33-112",
                            "title": "Original Pizza Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Pizza_Sauce-115397.jpg"
                          },
                          {
                            "calories": 140,
                            "name": "Special Zesty Dipping Sauce",
                            "numDupTops": 0,
                            "sku": "25-796-33-112",
                            "title": "Special Zesty Dipping Sauce",
                            "webImage": "/static-assets/a/images/web/product/extras/Special_Zesty-115343.jpg"
                          }
                        ]
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 733,
                        "crustFocusImage": "/static-assets/a/images/web/product/papadias/Papadia-Italian-89398.jpg"
                      }
                    ],
                    "customizable": "full",
                    "customizationDisabled": false,
                    "defaultSauceId": 731,
                    "defaultSizeId": 88,
                    "defaultToppingIds": [
                      23,
                      30,
                      31
                    ],
                    "defaultTypesId": 733,
                    "description": "Flatbread-style sandwich with Alfredo sauce, cheese, Italian sausage, salami and banana peppers. Served with original pizza dipping sauce.",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/papadias/Papadia-Italian-89398.jpg",
                    "maxSameTopping": 2,
                    "maxToppings": 3,
                    "menuCategory": "papadias",
                    "minToppingsAllowed": 0,
                    "moreInfoLink": "/order/menu/papadias/italian-papadia",
                    "numToppingsFree": 0,
                    "numToppingsRemovable": 3,
                    "numToppingsReplaced": 3,
                    "productGroupId": "italian-papadia",
                    "productSkus": [
                      "43-733-88-282"
                    ],
                    "shortDescription": "Flatbread-style sandwich with Alfredo sauce, cheese, Italian sausage, salami and banana peppers. Served with original pizza dipping sauce.",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110023,
                    "specialtyStandardId": "3489",
                    "tag": "",
                    "title": "Italian Papadia",
                    "webImageURL": "/static-assets/a/images/web/product/papadias/Papadia-Italian-89398.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "papadias"
              }
            ]
          },
          {
            "categoryId": "extras",
            "iconImage": "/static-assets/a/images/menu-category/category-section/2024_subcat-extra-circle.jpg",
            "name": "Extras",
            "sections": [
              {
                "description": "",
                "displaySection": true,
                "name": "Seasoning Packets",
                "productGroups": [
                  {
                    "availableSizes": [
                      {
                        "id": 33,
                        "name": "Std Size",
                        "productMdmSize": "None",
                        "size": "None",
                        "sortOrder": 0
                      }
                    ],
                    "availableTypes": [
                      {
                        "code": "SEASONING_SHAKER",
                        "hasLegalWarnings": false,
                        "id": 207,
                        "legalWarnings": [],
                        "name": "Seasoning Shaker",
                        "productCategory": "Sides",
                        "productSubType": "Season Pkt",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 207,
                        "crustFocusImage": "/static-assets/a/images/web/product/extras/Extras-Special_Seasoning_Packet-99324.jpg"
                      }
                    ],
                    "customizable": "non",
                    "customizationDisabled": false,
                    "defaultSizeId": 33,
                    "defaultTypesId": 207,
                    "description": "",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/extras/Extras-Special_Seasoning_Packet-99324.jpg",
                    "menuCategory": "extras",
                    "moreInfoLink": "",
                    "productGroupId": "special-seasonings",
                    "productSkus": [
                      "27-207-33-112"
                    ],
                    "shortDescription": "Special Seasonings",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110105,
                    "tag": "",
                    "title": "Special Seasonings",
                    "webImageURL": "/static-assets/a/images/web/product/extras/Extras-Special_Seasoning_Packet-99324.jpg"
                  },
                  {
                    "availableSizes": [
                      {
                        "id": 33,
                        "name": "Std Size",
                        "productMdmSize": "None",
                        "size": "None",
                        "sortOrder": 0
                      }
                    ],
                    "availableTypes": [
                      {
                        "code": "CRUSHED_RED_PEPPER_SHAKER",
                        "hasLegalWarnings": false,
                        "id": 206,
                        "legalWarnings": [],
                        "name": "Crushed Red Pepper Shaker",
                        "productCategory": "Sides",
                        "productSubType": "CRP Packet",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 206,
                        "crustFocusImage": "/static-assets/a/images/web/product/extras/Extras-Crushed_Red_Pepper_Packet-99317.jpg"
                      }
                    ],
                    "customizable": "non",
                    "customizationDisabled": false,
                    "defaultSizeId": 33,
                    "defaultTypesId": 206,
                    "description": "",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/extras/Extras-Crushed_Red_Pepper_Packet-99317.jpg",
                    "menuCategory": "extras",
                    "moreInfoLink": "",
                    "productGroupId": "crushed-red-pepper",
                    "productSkus": [
                      "27-206-33-112"
                    ],
                    "shortDescription": "Crushed Red Pepper",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110106,
                    "tag": "",
                    "title": "Crushed Red Pepper",
                    "webImageURL": "/static-assets/a/images/web/product/extras/Extras-Crushed_Red_Pepper_Packet-99317.jpg"
                  },
                  {
                    "availableSizes": [
                      {
                        "id": 33,
                        "name": "Std Size",
                        "productMdmSize": "None",
                        "size": "None",
                        "sortOrder": 0
                      }
                    ],
                    "availableTypes": [
                      {
                        "code": "PARMESAN_CHEESE_SHAKER",
                        "hasLegalWarnings": false,
                        "id": 208,
                        "legalWarnings": [],
                        "name": "Parmesan Cheese Shaker",
                        "productCategory": "Sides",
                        "productSubType": "Parm Pkt",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 208,
                        "crustFocusImage": "/static-assets/a/images/web/product/extras/Extras-Parmesan_Cheese_Packet-105753.jpg"
                      }
                    ],
                    "customizable": "non",
                    "customizationDisabled": false,
                    "defaultSizeId": 33,
                    "defaultTypesId": 208,
                    "description": "",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/web/product/extras/Extras-Parmesan_Cheese_Packet-105753.jpg",
                    "menuCategory": "extras",
                    "moreInfoLink": "",
                    "productGroupId": "parmesan-cheese",
                    "productSkus": [
                      "27-208-33-112"
                    ],
                    "shortDescription": "Parmesan Cheese",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110107,
                    "tag": "",
                    "title": "Parmesan Cheese",
                    "webImageURL": "/static-assets/a/images/web/product/extras/Extras-Parmesan_Cheese_Packet-105753.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "seasoning_packets"
              },
              {
                "description": "",
                "displaySection": true,
                "name": "Extras",
                "productGroups": [
                  {
                    "availableSizes": [
                      {
                        "id": 33,
                        "name": "Std Size",
                        "productMdmSize": "None",
                        "size": "None",
                        "sortOrder": 0
                      }
                    ],
                    "availableTypes": [
                      {
                        "code": "PEPPERONCINI_PEPPERS",
                        "hasLegalWarnings": false,
                        "id": 203,
                        "legalWarnings": [],
                        "name": "Pepperoncini Peppers",
                        "productCategory": "Sides",
                        "productSubType": "Pepperoncini Pepper",
                        "showPizzaSizeInInch": false,
                        "useGraphicalBuilder": false
                      }
                    ],
                    "crustImages": [
                      {
                        "baseIngredientTypeId": 203,
                        "crustFocusImage": "/static-assets/a/images/compressed/product/extras/std_5Pepperoncinis-compressed.png"
                      }
                    ],
                    "customizable": "non",
                    "customizationDisabled": false,
                    "defaultSizeId": 33,
                    "defaultTypesId": 203,
                    "description": "Our signature whole pepperoncini peppers are subtly sweet, medium-heat and grown in the Mediterranean regions. ",
                    "eamFlag": false,
                    "enableCustomizationOnDealBuilder": false,
                    "featured": false,
                    "imageURL": "/static-assets/a/images/compressed/product/extras/pepperoncinis-slate-compressed.png",
                    "menuCategory": "extras",
                    "moreInfoLink": "",
                    "productGroupId": "pepperoncinis",
                    "productSkus": [
                      "24-203-33-112"
                    ],
                    "shortDescription": "Whole pepperoncini peppers are subtly sweet with medium-heat ",
                    "showCustomizeLabelOnly": false,
                    "sortOrder": 110109,
                    "tag": "",
                    "title": "Pepperoncinis",
                    "webImageURL": "/static-assets/a/images/web/product/extras/pepperoncinis-slate-compressed.jpg"
                  }
                ],
                "sectionIconImage": "",
                "sectionId": "extras"
              }
            ]
          }
        ]
      }
    }
  }
}
</details>
