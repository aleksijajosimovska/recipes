import {
  GET_POST,
  CREATE_POST,
  DELETE_POST,
} from "../actions/types";

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "Baked Egg with Canadian Bacon, Tomato and Potatoes",
        ingredients:
        "Bacon, butter, eggs, black pepper, tomatoes, potato, cheese ",
        time:
        30,
        sourceURL:"https://www.yummly.com/recipe/Baked-Egg-with-Canadian-Bacon_-Tomato-and-Potatoes-2247908",
       
        image:
        "https://lh3.googleusercontent.com/z-HWWmlCJCpDOs6tMpYG6bUUtyPCPa_vdM1byZ6fvBCAYSsm4MqZvOxmtfGR9GySG2f4EXEPcgByf8yioYCO=s640-c-rw-v1-e365",
      body:
        "Preheat oven to 350 degrees F. Coat inside of four 6-ounce ramekins or custard cups/ramekins with cooking spray; set aside.Combine Canadian bacon, potatoes, tomato and chives in a medium bowl. Spoon mixture evenly in ramekins. Break egg into each ramekin on top of the Canadian bacon mixture. Sprinkle with pepper. Drizzle 1 teaspoon of half-and-half over each egg. Place ramekins on baking sheet. Bake in heated oven for 15-20 minutes or until egg whites are opaque and yolks have firm edges but soft in centers. Remove from oven. If desired, sprinkle each with 1 teaspoon cheese. Serve immediately.",
    },
    {
      userId: 1,
      id: 2,
      title: "Italian Meatballs in Sauce",
      time:60,
      ingredients:"bread, milk, onion, green bell pepper, tomato, red bell pepper, tomato sauce, salt, egg, Parmesan cheese, garlic clove",
      sourceURL:"https://www.yummly.com/recipe/Italian-Meatballs-in-Sauce-627232",
      
      image:
      "https://lh5.ggpht.com/85JmnK31kH97VBT27lbXQDd310TAxmj8tqFq6f4LUdunafqiMl12_t3Elq0IwX9rVQPeHRwD_nGbIgW8Xf5s=s640-c-rw-v1-e365",
      body:
        "Set the bread crumbs to soak in a splash of milk. Saute the bell peppers, onion, and tomato for 15 minutes. Add the tomato sauce and let simmer a few minutes to let the flavors marry. Separately, mix the ground beef with diced garlic, bread crumbs soaked in milk, salt, ground black pepper, and Parmesan cheese. Pinch off sections of meat and form into balls. Coat in beaten egg, then flour and fry in plenty of hot oil. Fry just until golden on the outside. They will finish cookin later in the tomato sauce. Add the golden meatballs to the tomato sauce and let simmer 10 minutes on low heat. Serve with fried potatoes (optional).",
    },
    {
      userId: 1,
      id: 3,
      title: "Ham And Ranch Potato Fritatta",
      time:30,
      
      ingredients:"salsa, milk, vegetable oil, ham, ranch dressing, eggs, hashbrown potatoes",
      sourceURL:"https://www.yummly.com/recipe/Ham-And-Ranch-Potato-Fritatta-2248141",
      image:"https://lh3.googleusercontent.com/IqW3gP_3uQxzaIQlk5mBrKqTMTD9EAe7m2FHR6Tz7Mtwbfou60b8X_GxSSXAFr8o9SYLx_bOJ05_lAhkIB2g=s640-c-rw-v1-e365",
      body:
        "Heat the oven to 375 degrees F. Heat the oil in a 10-inch nonstick ovenproof skillet over medium high heat. Add the hash browns and cook 4-6 minutes or until the potatoes begin to brown. Add ham cubes. Season to taste with salt and pepper. Whisk the eggs, dressing and milk in a medium bowl. Pour over potatoes. Cook 4-5 minutes or until the eggs begin to set, lifting the edges and allowing the uncooked egg to flow underneath. Baked 15-20 minutes or until a knife inserted in the center comes out clean. Let stand 5 minutes. Cut into wedges to serve. Serve with salsa.",
    },
    {
      userId: 1,
      id: 4,
      title: "Breakfast Stuffed Bell Peppers",
      time:50,
      sourceURL:"https://www.yummly.com/recipe/Breakfast-Stuffed-Bell-Peppers-9285731",
      ingredients:"salt, pepper, eggs, bell peppers, tomatoes, onion, vegetable oil, cheddar cheese, pork sausage",

      image:"https://lh3.googleusercontent.com/2ffvzPoF6xb5v0NoN21FZKUn-Qx0iH2SZDU7ffsiWnB-nUHW_CgVQPYsUb084C-w2F4-6-b5BgHyX_u_biVY=s640-c-rw-v1-e365",
      body:
        "Required Utensils: Chef’s knife, cutting board, non-stick skillet, spatula, measuring cups, measuring spoons, large bowl, small bowl, whisk, grill. Cook breakfast sausage in non-stick skillet over medium heat. Set aside in a large bowl. In same pan, heat 3 Tbsp oil at medium heat. Add hash browns in one even layer. Cook for five minutes, flip, and cook for five more minutes or until golden brown. Add to the sausage bowl. In same pan, add 1 Tbsp oil, diced onion and tomato. Sauté over medium heat until onions are translucent. Add to the sausage bowl. In same pan, heat 1 Tbsp oil over medium heat. Add eggs to pan and scramble. When done, add to sausage bowl. Mix the ingredients in the bowl together and add salt and pepper to taste. Scoop into the halved bell peppers. Top with cheese. Place peppers on grill over low heat and close the top. Cook for 5 minutes or until peppers begin to soften. Turn heat to high and cook for one more minute to char the bell peppers. Remove from grill and enjoy.",
    },
    {
      userId: 1,
      id: 5,
      title: "Korean Pork Chops",
      time:20,
      sourceURL:"https://www.yummly.com/recipe/Korean-Pork-Chops-2249749",
      image:"https://lh3.googleusercontent.com/6gidAEevFeE6xiMpD7YWKMnFlKwtUQSUZyiWg0d390kpCZ88ttg1Wa1VXbWe5dIz10_jT1392PBFtpanls76=s640-c-rw-v1-e365",
    
      ingredients:"soy sauce, honey, garlic, sweet chili sauce, olive oil, sesame oil, fresh ginger root, pork chops",
      body:
        "In a medium size bowl whisk together soy sauce, honey, garlic, ginger, sesame oil and sweet chili sauce. It’ll make just over 1 cup of marinade.Reserve half the marinade, set aside. Pour the other half of the marinade over pork chops and marinate for at least 10 minutes. Heat olive oil in a large skillet over medium-high heat; add pork chops to skillet, discard remaining marinade. Cook for 5 minutes or until chops have browned on one side. Flip the pork chops and add the reserved marinade to the pan; cook for 5 more minutes or until the pork reaches an internal temperature between 145 degrees F. (medium rare) and 160 degrees F. (medium). Let rest for 3 minutes before serving."
    },
    {
      userId: 1,
      id: 6,
      title: "Stuffed Tomatoes",
      image:"https://lh4.ggpht.com/K6QWmdVJiM0yAdvRdwZaozwBieXBlS6nkL3tqYx4SFksZcNQVcUTW8jKFd4FjHspk1-fG5xJKrNPEkpRXtV1Pp8=s640-c-rw-v1-e365",
      time:20,
      sourceURL:"https://www.yummly.com/recipe/Stuffed-Tomatoes-631891",
      ingredients:"patotoes, tomatoes, fresh parsley, capers, mustard, olive oil, vinegar, salt, eggs, capers, peppermint",
     
      body:
        "Preheat the oven to 180 degrees Celsius. In a food processor, add the parsley, basil, peppermint, capers, mustard, olive oil, vinegar, and pickles. Crush to the desired texture. Cut off a slice at the bottom of the tomatoes to create a steady base. Slice off the tomato top and empty it out using a spoon. Add 1 teaspoon pesto and the raw egg on top. Season with salt. Bake for 20 minutes or until the egg is cooked.",
    },
    {
      userId: 1,
      id: 7,
      title: "Cuban-Style Pork Burgers",
      time: "25 min",
      ingredients:"garlic, spanish chorizo, ground pork, bread crumbs, egg, onion, salt, lettuce leaves, pepper ",
     
      sourceURL:"https://www.yummly.com/recipe/Cuban-Style-Pork-Burgers-1585326",
      image:"https://lh3.googleusercontent.com/gu3JfSKyKVUqd4qsmwtCJwzWq2rikWo1PcqgzauSMy_NVn8tIxztRBOldsetN_Xj9hvVKmpAh0ImvkhqYgJOAw=s640-c-rw-v1-e365",
      body:
        "Finely chop chorizo in a food processor or with a large knife. Gently mix together ground pork, chopped chorizo, breadcrumbs, egg, onion, green pepper, garlic and salt.Shape into 6 patties about 3/4-inch thick.Refrigerate for 10 to 15 minutes. Prepare a grill for direct cooking over medium-high heat, about 450 degrees F. Grill burgers, with the lid closed, for 5 minutes.Turn and finish cooking for 4 to 5 minutes more, until cooked through or until the internal temperature  reads 160 degrees F on a digital meat thermometer.Remove from grill. Toast buns on the grill, about 1 minute per side.Build burgers on buns with 1 1/2 tablespoons dressing, 1/3 cup shoestring potatoes and one lettuce leaf.Serve immediately. 6 servings Nutritional information based on 96% lean ground pork.",
    },
    {
      userId: 1,
      id: 8,
      title: "Peruvian-Style Pork Stir Fry",
      ingredients:"pork tenderloin, olive oil, red onion, tomatoes, cumin, rice vinegar, french fries, lime, soy sauce,  garlic",
      sourceURL:"https://www.yummly.com/recipe/Peruvian-Style-Pork-Stir-Fry-2010607",
      image:"https://lh3.googleusercontent.com/pJIwcvwnx19v1HfKIy16magyqXKShKmRgj55VqfVTtEtB40R_u0Czm6A8zddSPWHW9Iv1EEjJydjnqVXjwS2=s640-c-rw-v1-e365",
     
      time:30,
      body:
        "In a small bowl, combine all marinade ingredients and mix. Marinate the pork and cover bowl with a plastic wrap. Refrigerate for 1 hour. Using a wok or a sauté pan, bring to high heat, add olive oil and onions, sauté for three minutes stirring occasionally. Add pork  and cook until golden brown, approximately 7 minutes. Add tomatoes, cumin, soy sauce, rice vinegar, cilantro, green onion and cook for another 5 minutes. Serve with white rice and French fries, garnish with key limes.",
      },
    {
      userId: 1,
      id: 9,
      title: "Pork Stuffing",
      ingredients:"garlic, olive oil, ground pork, potatoes, green chiles, salsa verde, salt, pepper",
      sourceURL:"https://www.yummly.com/recipe/Pork-Stuffing-2249219",
    
      time:25,
      image:"https://lh3.googleusercontent.com/i9nxf0ahCfejf-EJbipCGgwYiYTf8e4SXiKSGQHa6Q2Wbmh2QL3dAcpx9YFXtcbZ61EhJnPF0qxe8bxVagXYuBI=s640-c-rw-v1-e365",
      body:
        "In a medium skillet, brown ground pork along with minced garlic over medium high heat. In another skillet over medium high heat, add olive oil and potatoes, stirring every 1 to 2 minutes until potatoes are soft when poked but crisp on the outside, approximately 7 to 10 minutes. Once your pork is browned and has reached an internal temperature of 160 degrees F., add your salsa verde and chilies and stir. Reduce heat & simmer while you continue cooking your potatoes. Once potatoes are done, transfer pork mixture with potatoes in a large bowl & fold carefully to combine, making sure to not break the potatoes. Add in salt, pepper and season salt as desired. Serve immediately.",


    },
    {
      userId: 1,
      id: 10,
      title: "Portuguese Purslane Soup with Alentejo Bread",
      description:"Purslane, which is an edible weed, is rich in omega-3 fatty acids and perfect in this Portuguese Purslane Soup with Alentejo Bread. With its lemony, tart taste, it pairs well with the tomatoes, potatoes, garlic and goat cheese. Alentejo bread is a dense bread with lots of flavor for dipping into this hearty, healthy soup. Have it on a cold winter day, or wind down at the end of a long week with this guaranteed comfort food.",
      time:45,
      ingredients:"purslane, olive oil, onion, garlic cloves, potatoes, tomato, bread, salt, eggs, goat cheese",
      sourceURL:"https://www.yummly.com/recipe/Portuguese-Purslane-Soup-with-Alentejo-Bread-898045",
      image:"https://lh6.ggpht.com/5PRwrrnXFE3ip1bdAXrl9tGvR6hCoQuNJUGdaRS176JQpT7u4IJVRhPInIBmt_9OfaKhezi7nU_AHl7A-JkbkA=s640-c-rw-v1-e365",
      body:
        "Start by thoroughly washing the purslane, then remove the leaves, and set aside. Heat a pan with olive oil, add onions, and fry until translucent. Add the garlic and stir for a little while more. Add the purslane twigs and leaves, and let them soften, stirring occasionally. Add the diced potatoes and tomatoes. Finally, add enough water for the amount of servings you want to prepare. Season with salt, cover, and simmer. Five minutes before removing from heat, add the eggs to poach them. Cut slices of Alentejo bread, and place in each bowl to be served. Cover the bread with the soup, and garnish with slices of goat cheese. Serve.",
    },
    
  ],
  post: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      console.log(payload);
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POST:
      return {
        ...state,
        post: state.posts.find((postItem) => postItem.id == payload),
      };
   
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id != payload),
      };
    default:
      return state;
  }
};
