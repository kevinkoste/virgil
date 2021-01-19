
import moment from 'moment'


// manually defined reward data loaded into redux store upon app entry

export const dateRangeOptions = [
  {period: 'month', label: 'This Month', start: moment('02/01/2020','MM/DD/YYYY'), end: moment('02/19/2020','MM/DD/YYYY')},
  {period: 'month', label: 'January 2020', start: moment('01/01/2020','MM/DD/YYYY'), end: moment('02/01/2020','MM/DD/YYYY')},
  {period: 'year', label: 'Year To Date', start: moment('01/01/2020','MM/DD/YYYY'), end: moment('02/19/2020','MM/DD/YYYY')},
  {period: 'month', label: 'December 2019', start: moment('12/01/2019','MM/DD/YYYY'), end: moment('01/01/2020','MM/DD/YYYY')},
  {period: 'month', label: 'November 2019', start: moment('11/01/2019','MM/DD/YYYY'), end: moment('12/01/2019','MM/DD/YYYY')},
  {period: 'month', label: 'October 2019', start: moment('10/01/2019','MM/DD/YYYY'), end: moment('11/01/2019','MM/DD/YYYY')},
  {period: 'month', label: 'September 2019', start: moment('09/01/2019','MM/DD/YYYY'), end: moment('10/01/2019','MM/DD/YYYY')},
  {period: 'month', label: 'August 2019', start: moment('08/01/2019','MM/DD/YYYY'), end: moment('09/01/2019','MM/DD/YYYY')},
  {period: 'month', label: 'July 2019', start: moment('07/01/2019','MM/DD/YYYY'), end: moment('08/01/2019','MM/DD/YYYY')},
  {period: 'all', label: 'All', start: moment('07/01/2019','MM/DD/YYYY'), end: moment('02/19/2020','MM/DD/YYYY')},
]

export const rewardCategoryData = [
  {
    group: 'mind',
    title: 'Books, News & Podcasts',
    category: 'books',
  },
  {
    group: 'mind',
    title: 'Creative Pursuits',
    category: 'creative',
  },
  {
    group: 'mind',
    title: 'Wellness',
    category: 'wellness',
  },
  {
    group: 'mind',
    title: 'Continued Learning',
    category: 'learning',
  },
  {
    group: 'body',
    title: 'Fitness',
    category: 'fitness',
  },
  {
    group: 'body',
    title: 'Casual Food & Drink',
    category: 'quickeats',
  },
  {
    group: 'body',
    title: 'Fashion',
    category: 'fashion',
  },
  {
    group: 'body',
    title: 'Beauty',
    category: 'beauty',
  },
  {
    group: 'soul',
    title: 'Entertainment',
    category: 'entertainment',
  },
  {
    group: 'soul',
    title: 'Romance',
    category: 'romance',
  },
  {
    group: 'soul',
    title: 'Dining',
    category: 'dining',
  },
  {
    group: 'soul',
    title: 'Lifestyle',
    category: 'lifestyle',
  },
]

export const rewardData = [
  {
    reward_id: 5,
    category: "romance",
    recommended: false,
    active: false,
    new: true,
 
    merchant: "Haus",
    reward: "Haus Essentials",
    value: 70,
    price: 6,
    icon: "haus",
    recommended_text: "",
    reward_description: "You'll receive two, 750mL bottles of Haus' Citrus Flower and Bitter Clove apéritifs",
    our_opinion: "We've used Haus as a way to wind down from a long week, relax and be present with those we love. Try out a new way to enjoy a lighter form of alcohol that doesn't compromise on flavor or flare.",
    about_merchant: "It all started with alcohol, an industry that hasn’t evolved since prohibition. It’s still ruled by huge liquor companies who spend big to get their products on store shelves and in bars — and you’re stuck with their choices. Sketchy ingredients. Too much alcohol. Too many hangovers. We wanted something better, so we made our own apéritif.",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 11,
    category: "quickeats",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Sweetgreen",
    reward: "Salad Fix",
    value: 12,
    price: 1,
    icon: "sweetgreen",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 0,
    category: "quickeats",
    recommended: true,
    active: true,
    new: false,
 
    merchant: "Blue Bottle Coffee",
    reward: "Coffee Break",
    value: 10,
    price: 1,
    icon: "bluebottle",
    recommended_text: "Clearly you're a huge fan, can't go wrong with the classics",
    reward_description: "",
    our_opinion: "Blue Bottle is a Virgil favorite - a coffee experience that’s adapts to any situation, fast or slow, with unmatched quality and simplicity.",
    about_merchant: "In the early 2000s, in Oakland, California, a slightly disaffected freelance musician and coffee lunatic, weary of the commercial coffee enterprise and stale, overly roasted beans, decided to open a roaster for people who were clamoring for the actual taste of fresh coffee. Using a minuscule six-pound batch roaster, he made a historic vow: 'I will only sell coffee less than 48 hours out of the roaster to my guests, so they may enjoy coffee at peak flavor. I will only use the finest, most delicious, and responsibly sourced beans.",
    quote: "Blue Bottle's where it at",
    quoteAuthor: "Ethan Daly, Williamsburg NY",
  },
  {
    reward_id: 1,
    category: "entertainment",
    recommended: true,
    active: false,
    new: false,
 
    merchant: "Ticketmaster",
    reward: "Concert Tickets",
    value: 35,
    price: 3,
    icon: "ticketmaster",
    recommended_text: "Everyone deserves some me-time. Treat yourself and take a break from those long work hours with a concert.",
    reward_description: "$35 credit towards any concerts in your area",
    our_opinion: "Tickets to the world's greatest events, what's there not to love.",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 22,
    category: "wellness",
    recommended: false,
    active: false,
    new: true,
 
    merchant: "Care/of",
    reward: "Vitamin Pack",
    value: 22,
    price: 2,
    icon: "careof",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 2,
    category: "books",
    recommended: true,
    active: false,
    new: false,
 
    merchant: "The Information",
    reward: "One Month Free",
    value: 39,
    price: 4,
    icon: "theinformation",
    recommended_text: "You recently cancelled your subscription (it’s expensive, we know). but we thought you might like resubscribe, this time free of charge",
    reward_description: "",
    our_opinion: "In Silicon Valley, knowledge is power. We love The Information for the unparalleled depth and quality of it’s technology reporting.",
    about_merchant: "We founded The Information in late 2013 with a simple idea: write deeply reported articles about the technology industry that you won't find elsewhere.\nSince then, we've moved markets, gotten the early scoop on billions of dollars of acquisitions and told you what's happening deep inside companies like Apple, Facebook and Google. Our stories have been followed by the Wall Street Journal, the New York Times, Bloomberg and other major outlets thousands of times. How we compete is simple. We recruit the best reporters, give them the freedom to write about important topics and tell them not to worry about the small stuff.",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 3,
    category: "lifestyle",
    recommended: true,
    active: false,
    new: false,
 
    merchant: "Chemex",
    reward: "Starter Kit",
    value: 62,
    price: 6,
    icon: "chemex",
    recommended_text: "Given your love of coffee, we wanted to recommend trying your hand at brewing with Chemex's high quality equipment",
    reward_description: "This reward comes with a 6 Cup Classic Chemex Coffeemaker a box of filters, glass coffeemaker cover and a cork coaster",
    our_opinion: "There's nothing quite like the smell of coffee in the morning. Chemex's products are built with extreme attention to detail to give you consistent, state of the art, coffee",
    about_merchant: "The Chemex Coffeemaker was invented in 1941 by Dr. Peter Schlumbohm PhD. Made simply from non-porous, borosilicate glass and fastened with a wood collar and tie, it brews coffee without imparting any flavors of its own. On permanent display at MOMA NY and other fine museums, it is truly a work of art.",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 4,
    category: "fitness",
    recommended: true,
    active: false,
    new: false,
 
    merchant: "Touchstone Climbing",
    reward: "Intro to Climbing Class",
    value: 35,
    price: 3,
    icon: "touchstone",
    recommended_text: "Balance is key. We recommend taking a break from work and getting active with a new hobby. Climbing is one of our favorites, check it out.",
    reward_description: "In this one-hour class, you will learn the basic skills needed to start rope climbing: how to secure your harness, tie a figure 8 follow through knot and complete your safety checks.",
    our_opinion: "Aside from the great workout, we love Touchstone Climbing for the kind people and the embracing atmosphere. Come for a quick climb or find yourself lost all day in the 2000+ sqft of bouldering.",
    about_merchant: "Touchstone Climbing owns and operates 12 unique gyms throughout California, making it one of the largest indoor climbing companies in the world. But our true success comes not from what we do, but why we do it. From owners to belay staff, route setters to cyclists, we believe in creating a place where we can all come together and do what we love. We are not just gyms. We are communities.",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 6,
    category: "beauty",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Hawthorne",
    reward: "Body Set",
    value: 55,
    price: 4,
    icon: "hawthorne",
    recommended_text: "",
    reward_description: "Hawthorne's body kit comes with a personalized body lotion, body wash and deodorant package just for you.",
    our_opinion: "For the men at Virgil, we struggled to find a brand that truly spoke to our skincare needs. Gone are the days of using Irish Spring and Dove Men +Care – enter Hawthorne: a brand that creates bespoke personal care products for men that smell and feel incredible.",
    about_merchant: "Hawthorne makes it easy to elevate yourself with premium quality products that work perfectly for you as an individual. With just a quick survey, you’ll receive perfectly tailored products for all of your bathroom needs, right when you need them. That way you’re always looking and feeling your best for whatever comes your way.",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 7,
    category: "fashion",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Madhappy",
    reward: "Signature Universal Hoodie",
    value: 138,
    price: 12,
    icon: "madhappy",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 8,
    category: "lifestyle",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "The Sill",
    reward: "Medium Sized Plant",
    value: 56,
    price: 5,
    icon: "thesill",
    recommended_text: "",
    reward_description: "Select from a range of medium sized house plants that hope to bring life to your home",
    our_opinion: "Bringing greenery into our homes has been extremely rewarding. The Sill not only seamlessly delivers plants to your door but  also helped develops a green thumb with its thoughtful plant care tips.",
    about_merchant: "Plants make us happier, healthier, more efficient and boost our creativity. They even clean the air we breathe. But all our modern city-living has us indoors a lot. So we thought: why not bring the outdoors in? We think everyone deserves to have their own personal plant oasis.",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 10,
    category: "lifestyle",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Boy Smells",
    reward: "Ambient Candle",
    value: 36,
    price: 3,
    icon: "boysmells",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 12,
    category: "quickeats",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "True Food Kitchen",
    reward: "Eat Out",
    value: 20,
    price: 2,
    icon: "truefood",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 14,
    category: "quickeats",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Verve",
    reward: "Coffee Break",
    value: 10,
    price: 1,
    icon: "verve",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 15,
    category: "entertainment",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "HBO",
    reward: "One Month Free",
    value: 15,
    price: 1,
    icon: "hbo",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 16,
    category: "entertainment",
    recommended: false,
    active: true,
    new: false,
 
    merchant: "Landmark Theaters",
    reward: "Movie Night",
    value: 15,
    price: 1,
    icon: "landmark",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 17,
    category: "entertainment",
    recommended: false,
    active: true,
    new: false,
 
    merchant: "RA Guide",
    reward: "Night Out",
    value: 25,
    price: 2,
    icon: "raguide",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 19,
    category: "romance",
    recommended: false,
    active: false,
    new: true,
 
    merchant: "Urban Putt",
    reward: "Putt Putt for 2",
    value: 24,
    price: 2,
    icon: "urbanputt",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 20,
    category: "wellness",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Simple Habit",
    reward: "One Month Premium Access",
    value: 12,
    price: 1,
    icon: "simplehabit",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 21,
    category: "wellness",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Alo Yoga",
    reward: "Travel Yoga Mat",
    value: 80,
    price: 6,
    icon: "alo",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 23,
    category: "wellness",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Remrise",
    reward: "One Month Sleep Kit",
    value: 55,
    price: 4,
    icon: "remrise",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  },
  {
    reward_id: 24,
    category: "wellness",
    recommended: false,
    active: false,
    new: false,
 
    merchant: "Dirty Lemon",
    reward: "One Case (6)",
    value: 65,
    price: 6,
    icon: "dirtylemon",
    recommended_text: "",
    reward_description: "",
    our_opinion: "",
    about_merchant: "",
    quote: "",
    quoteAuthor: "",
  }
]

export const transactionData = [
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2020-02-16T00:00:00.000Z",
    "trans_id": "bddfe171-2053-4b6f-adbc-09f057f6a8cd",
    "amount": 22.41
  },
  {
    "merchant": "Andante Coffee Roasters",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-15T00:00:00.000Z",
    "trans_id": "fda80efb-f74d-41f3-a86b-c1ce332de5db",
    "amount": 3.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-14T00:00:00.000Z",
    "trans_id": "25c9bd40-51b3-4347-831f-9f8ab3b22601",
    "amount": 14.76
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-02-14T00:00:00.000Z",
    "trans_id": "c6b86c13-577e-4368-ad7d-a3ebb6912504",
    "amount": 6.98
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2020-02-14T00:00:00.000Z",
    "trans_id": "0a8e54c4-1fbb-43f8-b751-8cb15a179be3",
    "amount": 5.13
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-02-14T00:00:00.000Z",
    "trans_id": "ad517838-e7ea-4a6c-afe0-b4aa3300a2c4",
    "amount": 8.73
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-02-13T00:00:00.000Z",
    "trans_id": "31da4a2b-40cf-4ba3-90d5-84c2d2a31095",
    "amount": 6.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-13T00:00:00.000Z",
    "trans_id": "4166774b-d76d-4d3a-9ce5-2fee2af27b14",
    "amount": 10.78
  },
  {
    "merchant": "Allen Edmonds",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2020-02-13T00:00:00.000Z",
    "trans_id": "7ae16fd1-c51b-4b0c-b293-bc401337ebfa",
    "amount": 125
  },
  {
    "merchant": "Mcdonalds",
    "icon": "mcdonalds",
    "category": "Food & Drink",
    "trans_date": "2020-02-12T00:00:00.000Z",
    "trans_id": "a931cdc6-e65f-4221-a769-dd889dd30737",
    "amount": 9.15
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2020-02-12T00:00:00.000Z",
    "trans_id": "2793ea25-13d9-4e4c-8541-28b769ade73e",
    "amount": 32.39
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-02-12T00:00:00.000Z",
    "trans_id": "b9cca666-93f2-491c-929e-fe9cdd118903",
    "amount": 13.09
  },
  {
    "merchant": "Roses Florist",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2020-02-11T00:00:00.000Z",
    "trans_id": "a68f3881-39eb-4f18-8191-491b38693792",
    "amount": 113.39
  },
  {
    "merchant": "Eric’s Gourmet",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-11T00:00:00.000Z",
    "trans_id": "9e55827e-d9fb-4396-80bc-4d4db46e1eb3",
    "amount": 13.92
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-02-11T00:00:00.000Z",
    "trans_id": "6a9b4b27-1c4a-4b3d-93b0-1384ca05f588",
    "amount": 14.07
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-11T00:00:00.000Z",
    "trans_id": "5a7ac53e-c844-4b7e-af19-7314cc9f1ed3",
    "amount": 9.28
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-02-11T00:00:00.000Z",
    "trans_id": "c857a088-7e56-4ee6-b07d-51de153e5c1b",
    "amount": 3.65
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2020-02-11T00:00:00.000Z",
    "trans_id": "5620acc4-942c-4b4c-9cbd-8999e8d19033",
    "amount": 9.23
  },
  {
    "merchant": "Restaurant 3000",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-10T00:00:00.000Z",
    "trans_id": "18d9a505-95bc-4ee4-8180-c05dd36652fc",
    "amount": 16.39
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "df4a5b42-fc87-46f1-82e0-360b88ab2c3f",
    "amount": 15.48
  },
  {
    "merchant": "Hanahaus R",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "38cca860-7e9d-4af9-86dd-40235a3df858",
    "amount": 9
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "b3b673ba-9393-4d31-928b-cb99c285a69f",
    "amount": 5.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "ab775847-494a-455a-ba33-3659105582d6",
    "amount": 11.48
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "77db9e74-872e-426b-8dba-7e2fe94df75e",
    "amount": 6
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "960b50b4-42e3-4b76-84ed-5ff2183769f7",
    "amount": 9.52
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "1504f567-f7f2-4122-a022-4718df4553eb",
    "amount": 2.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-09T00:00:00.000Z",
    "trans_id": "97c7dbbb-64a1-465a-a564-cc0bacc7113f",
    "amount": 15.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-08T00:00:00.000Z",
    "trans_id": "eed1650e-1f33-4799-b4ae-76ca2e3f8562",
    "amount": 14.37
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-08T00:00:00.000Z",
    "trans_id": "54f0245b-d711-40ef-8e89-0a6c3de09c83",
    "amount": 48.84
  },
  {
    "merchant": "Pizzeria Delfina",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-08T00:00:00.000Z",
    "trans_id": "c62ee00e-e811-456e-83e5-21c8c2d4fd2c",
    "amount": 52.19
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "8bbc3a37-7ef1-4e49-ae0e-032064faaec4",
    "amount": 5.25
  },
  {
    "merchant": "Aquarius Theatre 212",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "624d7053-e375-4373-9cf6-f033595234bf",
    "amount": 13.25
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "c1db7b27-9e8d-40ba-bd94-c459652013b7",
    "amount": 25.77
  },
  {
    "merchant": "Verve",
    "icon": "verve",
    "category": "Food & Drink",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "b5ea68d4-4ee0-4d6a-96e8-ab75cee38690",
    "amount": 7.54
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "47a5bee7-42de-43de-a186-ac643410e51f",
    "amount": 15.03
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "ffd30511-1d3e-4387-9d70-86c5eef22443",
    "amount": 9.79
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "9dafddfa-3fe7-4083-89f5-6f63541a370c",
    "amount": 4.83
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-07T00:00:00.000Z",
    "trans_id": "aad03023-ab0c-4c7a-a53e-246f3b747d3b",
    "amount": 15.19
  },
  {
    "merchant": "Walgreens",
    "icon": "walgreens",
    "category": "Health & Wellness",
    "trans_date": "2020-02-06T00:00:00.000Z",
    "trans_id": "eb979fba-bd4d-48be-91b3-3cecdbb5916d",
    "amount": 18.52
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-02-06T00:00:00.000Z",
    "trans_id": "c1699654-3330-4041-8896-ef056532e21a",
    "amount": 4.09
  },
  {
    "merchant": "Verve",
    "icon": "verve",
    "category": "Food & Drink",
    "trans_date": "2020-02-06T00:00:00.000Z",
    "trans_id": "6fd98f18-7845-4156-92fd-e12aa7508442",
    "amount": 7.54
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-06T00:00:00.000Z",
    "trans_id": "50d57368-cdbd-41d4-9187-165744fbb687",
    "amount": 8.02
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-06T00:00:00.000Z",
    "trans_id": "05a42d51-ae33-4c09-94e3-e591ba2baae5",
    "amount": 16.07
  },
  {
    "merchant": "Verve",
    "icon": "verve",
    "category": "Food & Drink",
    "trans_date": "2020-02-05T00:00:00.000Z",
    "trans_id": "a521b16a-fb8d-47e0-b4e9-240920d26e11",
    "amount": 8.63
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-05T00:00:00.000Z",
    "trans_id": "01580e12-f4d4-433e-8fd3-bf2c06153b18",
    "amount": 4.93
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2020-02-04T00:00:00.000Z",
    "trans_id": "f9910fc7-4109-48fa-8077-f12d28862e68",
    "amount": 8.98
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-02-04T00:00:00.000Z",
    "trans_id": "1fbae32c-abf2-4adc-be19-b69a801bb19e",
    "amount": 3.65
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-02-04T00:00:00.000Z",
    "trans_id": "a5dc507b-178f-4f01-aea4-73c84891ca03",
    "amount": 8.73
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-02-03T00:00:00.000Z",
    "trans_id": "f8c0def8-804e-4869-b3e5-3971b9361c13",
    "amount": 3.91
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-03T00:00:00.000Z",
    "trans_id": "da12691d-434c-4544-880b-dddc98a7c0f0",
    "amount": 9.14
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-03T00:00:00.000Z",
    "trans_id": "d37b9da3-2175-45b4-8aa8-119ff18b0248",
    "amount": 17.95
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2020-02-03T00:00:00.000Z",
    "trans_id": "684d6286-794a-4ef7-bb63-7f2f2044952e",
    "amount": 12
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-03T00:00:00.000Z",
    "trans_id": "af9d21f7-f746-491b-aefb-c3cceb8b0084",
    "amount": 14.38
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-02T00:00:00.000Z",
    "trans_id": "95563d8a-9ed6-4d15-aa7e-6496a5b3da64",
    "amount": 9.36
  },
  {
    "merchant": "Good Earth Natural",
    "icon": "groceries",
    "category": "Groceries",
    "trans_date": "2020-02-02T00:00:00.000Z",
    "trans_id": "7f9bf230-3b61-47ef-b8e2-95c1fe965c7d",
    "amount": 13.49
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-02-02T00:00:00.000Z",
    "trans_id": "a391fa49-bea0-4216-b181-a50036bf25f1",
    "amount": 4.8
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2020-02-02T00:00:00.000Z",
    "trans_id": "21db0570-6094-401c-a8b5-9f30c7108c64",
    "amount": 12
  },
  {
    "merchant": "Fish",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-02T00:00:00.000Z",
    "trans_id": "3b73d7eb-1811-4e3a-9814-c03f3751fc1b",
    "amount": 64.35
  },
  {
    "merchant": "Philz Coffee",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-02T00:00:00.000Z",
    "trans_id": "080f0e42-1435-458f-8499-725d6ab88b57",
    "amount": 4.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "1c09cb16-08ad-4707-b1e3-57cca7051914",
    "amount": 8.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "565f509d-c7c7-46c5-9519-23f51558999c",
    "amount": 14.06
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "61ed5d5c-ca5f-44b6-a7f8-1c7ab0ebb3c5",
    "amount": 9.85
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "a7f6fa75-4106-4c5a-8b1f-3b4688dd4f3c",
    "amount": 20.34
  },
  {
    "merchant": "Bed Bath &Amp; Beyond #539",
    "icon": "home",
    "category": "Home",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "804204da-29e5-4e51-bb37-e59bce3aaa6f",
    "amount": 21.94
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "59dde73b-ec9f-423f-8eb4-d5fe44519bdc",
    "amount": 5.3
  },
  {
    "merchant": "Redwood Bistro",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "1efe93b9-cadd-4ec5-8cf0-5f9eaeb141a5",
    "amount": 48.5
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2020-02-01T00:00:00.000Z",
    "trans_id": "fb0dcee0-4e87-446a-a0b4-594f0bcf4d43",
    "amount": 25.19
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "8bdb7faa-4aa0-4745-992b-f83c1ad76753",
    "amount": 9.99
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "0cd47c9f-fff2-4113-8a8d-95090da3e6d7",
    "amount": 8.73
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "b88dd0e5-0a6d-4974-8ce0-f88f4887aea1",
    "amount": 3.65
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "0b99e2cb-d2e8-4aba-8835-5b957b1a3514",
    "amount": 2.65
  },
  {
    "merchant": "Five Guys Ca 1504 Qsr",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "8f042fb7-8512-4710-b29b-76988a22e34b",
    "amount": 13.7
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "eb48731b-5062-4b41-88d5-df44d5a179bf",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-31T00:00:00.000Z",
    "trans_id": "c69a9870-fa77-4558-a6a5-c5549890acbf",
    "amount": 5.32
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-30T00:00:00.000Z",
    "trans_id": "ae1d67f7-3e76-40bb-a575-08446adff594",
    "amount": 1.08
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-30T00:00:00.000Z",
    "trans_id": "af94524c-5023-48db-9483-d4a83b7f7dd9",
    "amount": 8.73
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-01-30T00:00:00.000Z",
    "trans_id": "9ee58306-3f77-4f30-bfa5-e47430136598",
    "amount": 8.18
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-28T00:00:00.000Z",
    "trans_id": "0feb9904-d1db-4819-8551-20b465cf5460",
    "amount": 4.51
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-28T00:00:00.000Z",
    "trans_id": "21c964cc-aa0b-490e-b1c8-ddd364cf9671",
    "amount": 5.5
  },
  {
    "merchant": "Stratechery",
    "icon": "stratechery",
    "category": "Professional Services",
    "trans_date": "2020-01-28T00:00:00.000Z",
    "trans_id": "4f140e41-bfa6-47e8-ac32-d8d34496c81d",
    "amount": 12
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-27T00:00:00.000Z",
    "trans_id": "63e7b108-e0f3-47bc-a728-c870a89f4004",
    "amount": 10.4
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-27T00:00:00.000Z",
    "trans_id": "ca98c6a3-cafe-4513-b3f3-b2958c76c2ab",
    "amount": 8.73
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2020-01-27T00:00:00.000Z",
    "trans_id": "ef7ee8f6-3c6f-449e-ab50-f217606c0dd2",
    "amount": 4
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-27T00:00:00.000Z",
    "trans_id": "2f897618-a7ce-4751-88dc-ef656f815762",
    "amount": 9.27
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2020-01-27T00:00:00.000Z",
    "trans_id": "c3e580d8-2cc3-47b5-8014-8a20682a0200",
    "amount": 6
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-26T00:00:00.000Z",
    "trans_id": "8e2a8b21-3733-4ee2-bdb0-482e7eb1efb5",
    "amount": 2.45
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2020-01-26T00:00:00.000Z",
    "trans_id": "6475fec5-20f7-4880-b1b4-88e6bc56ea1a",
    "amount": 12
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-26T00:00:00.000Z",
    "trans_id": "a58b4c17-2dbb-46ec-a331-5f6967c9778d",
    "amount": 9.16
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-26T00:00:00.000Z",
    "trans_id": "6983bca6-f6b1-46b7-8dc9-a6e7d66f199a",
    "amount": 15.59
  },
  {
    "merchant": "Amc",
    "icon": "amc",
    "category": "Entertainment",
    "trans_date": "2020-01-26T00:00:00.000Z",
    "trans_id": "090479b8-6a04-46dc-8c2a-5ba000443ceb",
    "amount": 15.36
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2020-01-25T00:00:00.000Z",
    "trans_id": "3022ed97-4aca-47df-bd49-8f89440e360a",
    "amount": 16.19
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-25T00:00:00.000Z",
    "trans_id": "28d4a419-304a-443a-a78c-930064aa8318",
    "amount": 15.46
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-25T00:00:00.000Z",
    "trans_id": "6428d941-1c5e-461b-b12c-db0586e201e3",
    "amount": 17.55
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-25T00:00:00.000Z",
    "trans_id": "ab3c157c-575d-43bd-8edf-ecbd8d82934a",
    "amount": 15.27
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "378c1fa6-0f4b-461e-a765-0b3bdead5c68",
    "amount": 4.09
  },
  {
    "merchant": "Rangoon Ruby Burmese Cuis",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "6c5e8edb-296a-40b5-84ad-71e0dbaaa3be",
    "amount": 95.06
  },
  {
    "merchant": "Wholefds Pal 10005",
    "icon": "groceries",
    "category": "Groceries",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "c0c735e5-aa72-44a5-bcc2-3e5f89d4cf50",
    "amount": 17.47
  },
  {
    "merchant": "Verve",
    "icon": "verve",
    "category": "Food & Drink",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "a7d521f7-f265-4b25-a908-3b5e9e3575a6",
    "amount": 4.63
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "942335b3-9e33-4ad3-b9e9-cdebf25be29c",
    "amount": 15.98
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "8e2c56e0-65f9-4fa4-b65f-5e171c61a2e8",
    "amount": 5
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-24T00:00:00.000Z",
    "trans_id": "86acb7ec-14cf-4be3-9916-c9dcd08526ef",
    "amount": 15.35
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-23T00:00:00.000Z",
    "trans_id": "e82fe4ee-9555-4c04-b530-06c6f7350dc1",
    "amount": 15.32
  },
  {
    "merchant": "Audible",
    "icon": "audible",
    "category": "Bills & Utilities",
    "trans_date": "2020-01-23T00:00:00.000Z",
    "trans_id": "cd167f10-5ee1-42c1-b48f-b94ab5a0d421",
    "amount": 14.95
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-01-23T00:00:00.000Z",
    "trans_id": "7d7c09f5-2126-45df-8058-db8d7a8a197b",
    "amount": 7.67
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-23T00:00:00.000Z",
    "trans_id": "235e26b0-09d9-4047-82ee-ff09dc1a5443",
    "amount": 2.65
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-23T00:00:00.000Z",
    "trans_id": "5b6e696f-69a9-49a5-8d9b-2f51cabe722b",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-23T00:00:00.000Z",
    "trans_id": "1feefb72-e8e8-46e5-b311-d9d662183332",
    "amount": 15.78
  },
  {
    "merchant": "Netflix",
    "icon": "netflix",
    "category": "Bills & Utilities",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "e01902c7-0b6e-4c55-b551-ad2e24ca23ae",
    "amount": 15.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "81b3639f-e5fe-47fd-9362-571940797aab",
    "amount": 14.14
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "b2a4a199-b7d7-4942-82c1-45a534bb1c60",
    "amount": 4.79
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "6f016906-0d5e-40bf-8e4f-b981cc20ad7e",
    "amount": 4.79
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "d1211ee8-b131-4626-956c-74fbf47deac3",
    "amount": 4.23
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "0b04c73c-136f-479c-bc15-74d5630a27b6",
    "amount": 3.67
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-22T00:00:00.000Z",
    "trans_id": "ab363edc-0da6-4bcd-9fdd-22f88439db28",
    "amount": 3.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "236e4481-9d66-493b-a2eb-4e689e1600dd",
    "amount": 12.02
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "49030628-bb94-43fc-9f65-c9475e4cf590",
    "amount": 9.82
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "c58d0430-90d9-4e0d-a873-964d1fb1f742",
    "amount": 2.95
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "319f2de8-3be2-492c-bb9e-1f1bade03109",
    "amount": 8.25
  },
  {
    "merchant": "La Boulangerie Hayes",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "69789161-1f08-413f-b264-a979344f9818",
    "amount": 2.95
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "0195904d-35b6-4569-80c5-43289d360e7e",
    "amount": 14.83
  },
  {
    "merchant": "Getform",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "d981f6cd-3b07-44a9-ba30-61e15ab7cf88",
    "amount": 9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-21T00:00:00.000Z",
    "trans_id": "6267b034-f9da-4bb9-90bd-0f74f77997f8",
    "amount": 15.52
  },
  {
    "merchant": "Verve",
    "icon": "verve",
    "category": "Food & Drink",
    "trans_date": "2020-01-20T00:00:00.000Z",
    "trans_id": "d117c72a-67e8-4ae1-8bbd-873e8ddc0d38",
    "amount": 6.5
  },
  {
    "merchant": "La Boulangerie Hayes",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-20T00:00:00.000Z",
    "trans_id": "7a95608f-258b-42fc-b497-a02ef9f3336d",
    "amount": 13.85
  },
  {
    "merchant": "Walgreens",
    "icon": "walgreens",
    "category": "Health & Wellness",
    "trans_date": "2020-01-20T00:00:00.000Z",
    "trans_id": "5b40b8f4-75a6-4b1c-b7a1-dd825174783c",
    "amount": 8.06
  },
  {
    "merchant": "Walgreens",
    "icon": "walgreens",
    "category": "Health & Wellness",
    "trans_date": "2020-01-20T00:00:00.000Z",
    "trans_id": "498589ec-e3cc-4512-bd0f-8761c34c1665",
    "amount": 35.48
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-20T00:00:00.000Z",
    "trans_id": "cf5a8c9f-c9ba-4ea0-bf3a-92d8c77c1a20",
    "amount": 22.7
  },
  {
    "merchant": "Teeth Bar Sf",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-19T00:00:00.000Z",
    "trans_id": "07838c3e-0df7-4d88-8f90-d364736ac956",
    "amount": 18.64
  },
  {
    "merchant": "Joey The Cat Arcade",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-19T00:00:00.000Z",
    "trans_id": "83862d96-f21e-454d-8880-9c58afdf1d4b",
    "amount": 5
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2020-01-19T00:00:00.000Z",
    "trans_id": "2ed0927b-11c2-472d-afcd-dbf19e6cbbde",
    "amount": 17.32
  },
  {
    "merchant": "Joey The Cat Arcade",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-19T00:00:00.000Z",
    "trans_id": "23a33595-5e40-41fe-805f-4062785b14b3",
    "amount": 5
  },
  {
    "merchant": "La Boulangerie Hayes",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-19T00:00:00.000Z",
    "trans_id": "da4fab3e-fcea-4906-9598-678596a80de0",
    "amount": 15.26
  },
  {
    "merchant": "Poke Bar",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-19T00:00:00.000Z",
    "trans_id": "353437bf-5364-49ba-95c6-8cbfd0f07879",
    "amount": 14.38
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-18T00:00:00.000Z",
    "trans_id": "40f4e5f4-afa4-467a-9b28-a0ecd66fe770",
    "amount": 55.54
  },
  {
    "merchant": "Camera Zone And Art Galle",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2020-01-18T00:00:00.000Z",
    "trans_id": "64df30ec-61db-4ebf-81d3-72b11ebf4cab",
    "amount": 33.98
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2020-01-18T00:00:00.000Z",
    "trans_id": "2b23656e-3d3d-4c4e-9b1e-fdb201dbaef8",
    "amount": 6.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-18T00:00:00.000Z",
    "trans_id": "b7222b87-c49f-4e0d-926d-fde3e852e41e",
    "amount": 5.35
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-17T00:00:00.000Z",
    "trans_id": "72a1fa3c-b48e-430c-bf3c-b41bfe352e06",
    "amount": 8.73
  },
  {
    "merchant": "Spotify",
    "icon": "spotify",
    "category": "Bills & Utilities",
    "trans_date": "2020-01-17T00:00:00.000Z",
    "trans_id": "352db450-43a1-4cde-8e65-3c910d60c996",
    "amount": 9.99
  },
  {
    "merchant": "The Business Journals",
    "icon": "professionalservices",
    "category": "Professional Services",
    "trans_date": "2020-01-17T00:00:00.000Z",
    "trans_id": "20695ffb-2919-45e9-b6fd-6e2c88a3c1de",
    "amount": 4
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-16T00:00:00.000Z",
    "trans_id": "ab370ef7-b6cd-43fb-a32d-5bb535759b72",
    "amount": 8.25
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-15T00:00:00.000Z",
    "trans_id": "c84d3666-8809-47a9-94a3-184556a7a75b",
    "amount": 2.65
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-15T00:00:00.000Z",
    "trans_id": "275c92a7-5011-46d6-8be5-9e2b4a4bd70a",
    "amount": 3.83
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-01-15T00:00:00.000Z",
    "trans_id": "bdea7c41-6639-4bf9-83ee-430b49ee62ae",
    "amount": 18.21
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2020-01-15T00:00:00.000Z",
    "trans_id": "40469527-5d58-4bd1-8e78-0becb6a25116",
    "amount": 6.47
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-01-15T00:00:00.000Z",
    "trans_id": "5e7e1309-b769-475e-a66b-5d0246623e7a",
    "amount": 14.07
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-14T00:00:00.000Z",
    "trans_id": "3a396551-c388-4df8-bd87-781fcf83f230",
    "amount": 14.47
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-14T00:00:00.000Z",
    "trans_id": "d7ca7770-24fc-48ea-a1c4-34a6a6c9ad14",
    "amount": 8.73
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-14T00:00:00.000Z",
    "trans_id": "370b70c3-410e-49e6-a7ce-44f594140d09",
    "amount": 15.35
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-13T00:00:00.000Z",
    "trans_id": "69a96824-8b5f-4223-8295-fa40ef4bb9e8",
    "amount": 14.27
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-13T00:00:00.000Z",
    "trans_id": "09e1c59f-98f8-4463-8f3b-1c247433ffb2",
    "amount": 8.73
  },
  {
    "merchant": "Doordashmcdonalds",
    "icon": "doordashmcdonalds",
    "category": "Food & Drink",
    "trans_date": "2020-01-13T00:00:00.000Z",
    "trans_id": "a61e6c26-3599-44ee-93a8-b98585ab30d4",
    "amount": 17.23
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-13T00:00:00.000Z",
    "trans_id": "2e0dacdf-3606-4ba3-a115-9edf601082ed",
    "amount": 13.19
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-13T00:00:00.000Z",
    "trans_id": "a5f54894-872c-4908-8c86-295070098bad",
    "amount": 17.82
  },
  {
    "merchant": "Joey The Cat Arcade",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "026a7cda-359b-40eb-bad9-6be85a74e5d5",
    "amount": 5
  },
  {
    "merchant": "Urban Putt",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "dd32326a-0d9b-46ee-83c4-12d1b90e27b9",
    "amount": 60
  },
  {
    "merchant": "Ricogrande Inc",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "747d5ca3-52b7-469f-bc1f-8277029a22d8",
    "amount": 11.92
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "dddb4e4c-941c-4271-91d1-3f0693e96889",
    "amount": 32.39
  },
  {
    "merchant": "Breadbelly",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "3cff5926-f4fa-4831-bfa7-44f3da210358",
    "amount": 7.51
  },
  {
    "merchant": "Jane On Fillmore",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "61af1820-f322-4a5b-abd4-6c818f1947f7",
    "amount": 20.9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-12T00:00:00.000Z",
    "trans_id": "25d4d88c-0394-486d-a87b-416a5ecb793b",
    "amount": 30.56
  },
  {
    "merchant": "Mission Cliffs",
    "icon": "healthandwellness",
    "category": "Health & Wellness",
    "trans_date": "2020-01-11T00:00:00.000Z",
    "trans_id": "6a4ba079-9022-4a7a-ba03-dc4d5cae21fe",
    "amount": 5.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-11T00:00:00.000Z",
    "trans_id": "298ff426-52a2-4f2c-b59d-70e0f399a327",
    "amount": 10.27
  },
  {
    "merchant": "Mauer Park",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-11T00:00:00.000Z",
    "trans_id": "6fe0cb05-6249-48f3-b922-93950a50f3aa",
    "amount": 3.26
  },
  {
    "merchant": "Mission Cliffs",
    "icon": "healthandwellness",
    "category": "Health & Wellness",
    "trans_date": "2020-01-11T00:00:00.000Z",
    "trans_id": "59038431-0586-4cf1-89ac-71b1f214c405",
    "amount": 30
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-11T00:00:00.000Z",
    "trans_id": "1dd35bd8-3131-4972-a307-72932cad8fc4",
    "amount": 12.93
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-10T00:00:00.000Z",
    "trans_id": "48c5e686-d19f-498e-8e07-209a76ec3bd8",
    "amount": 5.2
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-01-10T00:00:00.000Z",
    "trans_id": "bbfa839e-d53c-4751-a44b-5f8d29e8cf69",
    "amount": 17.15
  },
  {
    "merchant": "Stanford Parking Meter",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2020-01-10T00:00:00.000Z",
    "trans_id": "14bc5fae-4ca6-4c20-9951-8bd2f8ba0771",
    "amount": 4.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-10T00:00:00.000Z",
    "trans_id": "be5fada4-a048-4ad6-9c6d-0e7e68113a66",
    "amount": 16.56
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-10T00:00:00.000Z",
    "trans_id": "e96a441e-3337-414c-8f60-3e6426cc94bb",
    "amount": 8.46
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-10T00:00:00.000Z",
    "trans_id": "624922b9-8727-439c-b45a-91dff84acd80",
    "amount": 2.17
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-09T00:00:00.000Z",
    "trans_id": "d76ebb9d-d379-4d3b-ba40-5a41b3a0f1a5",
    "amount": 5.08
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2020-01-09T00:00:00.000Z",
    "trans_id": "81ea8dbd-5931-49ea-b127-489aa703bfa9",
    "amount": 2.65
  },
  {
    "merchant": "Wave",
    "icon": "billsandutilities",
    "category": "Bills & Utilities",
    "trans_date": "2020-01-09T00:00:00.000Z",
    "trans_id": "5771b5c6-a00a-410d-84ed-ef0805a63632",
    "amount": 116.24
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-08T00:00:00.000Z",
    "trans_id": "72f1f8ef-5264-4f39-9157-d5293f616100",
    "amount": 8.5
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-08T00:00:00.000Z",
    "trans_id": "fd012099-2d7d-498b-8051-688379778441",
    "amount": 5.25
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-01-07T00:00:00.000Z",
    "trans_id": "7d40061a-9197-40ab-8b88-99f200ce901c",
    "amount": 3.99
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-07T00:00:00.000Z",
    "trans_id": "ba9d96e8-99cb-43a5-84b7-6c5d9f4bff9c",
    "amount": 5.5
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2020-01-07T00:00:00.000Z",
    "trans_id": "156f5103-ec18-4b0d-9c8b-20494a1c0006",
    "amount": 2.99
  },
  {
    "merchant": "American Air",
    "icon": "americanair",
    "category": "Travel",
    "trans_date": "2020-01-06T00:00:00.000Z",
    "trans_id": "797d02ee-44f4-49a1-a0c8-7897975b2f57",
    "amount": 107.2
  },
  {
    "merchant": "United",
    "icon": "united",
    "category": "Travel",
    "trans_date": "2020-01-06T00:00:00.000Z",
    "trans_id": "d27ce438-340f-4670-99e8-2a2c4f0a72db",
    "amount": 144.2
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-06T00:00:00.000Z",
    "trans_id": "c9aad9ec-2a65-4f2d-8a16-1fdaae8b106b",
    "amount": 5.1
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-05T00:00:00.000Z",
    "trans_id": "79b13f41-0da7-4c04-937b-c09f45dee42e",
    "amount": 5.72
  },
  {
    "merchant": "Fandango",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2020-01-05T00:00:00.000Z",
    "trans_id": "0954201c-c850-489d-a8f0-077b9ddd368b",
    "amount": 40.08
  },
  {
    "merchant": "Century Theatres 485",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2020-01-05T00:00:00.000Z",
    "trans_id": "fad662d3-641d-473d-ac32-58f658d3d099",
    "amount": 8.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-05T00:00:00.000Z",
    "trans_id": "a6dcfb35-3248-40c6-bcd9-89a0fd889690",
    "amount": 10.52
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-05T00:00:00.000Z",
    "trans_id": "ec5cc4cc-26a8-4a7e-a9ad-7f686f211393",
    "amount": 9.79
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-01-04T00:00:00.000Z",
    "trans_id": "675280cb-3e57-446e-ba8e-926c4477f21e",
    "amount": 13.9
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2020-01-04T00:00:00.000Z",
    "trans_id": "3da19349-aadc-4dc6-9857-0c91b82edc8c",
    "amount": 4.09
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-04T00:00:00.000Z",
    "trans_id": "3848d24a-ef67-4608-a768-7318a4cc1cc0",
    "amount": 17.71
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2020-01-04T00:00:00.000Z",
    "trans_id": "ce6d6352-d5ce-49ee-b6b3-16f6ad08d25e",
    "amount": 5.16
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-03T00:00:00.000Z",
    "trans_id": "94b18ce4-b773-4a4b-a0fa-cb22d72ffc00",
    "amount": 8.73
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2020-01-03T00:00:00.000Z",
    "trans_id": "ac48ee42-19ca-47de-a15f-002cd37e7553",
    "amount": 9
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2020-01-03T00:00:00.000Z",
    "trans_id": "94fe8183-c3f9-4e69-a41a-6854d054774b",
    "amount": 15.94
  },
  {
    "merchant": "Yayoi",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-02T00:00:00.000Z",
    "trans_id": "c5f47b40-3cc5-493b-b3a4-98414f1e3094",
    "amount": 53.96
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-02T00:00:00.000Z",
    "trans_id": "f649f0c4-4d7b-4ddf-8dbf-27bd5a452505",
    "amount": 26.86
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2020-01-02T00:00:00.000Z",
    "trans_id": "d8528eae-195f-4537-af49-e838e7f78d14",
    "amount": 16.67
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2020-01-02T00:00:00.000Z",
    "trans_id": "95601813-9bfc-405d-9114-22a3532b0a50",
    "amount": 9.82
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2020-01-02T00:00:00.000Z",
    "trans_id": "816d22eb-da29-4cd2-971a-fe1431517c1d",
    "amount": 5.25
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2020-01-01T00:00:00.000Z",
    "trans_id": "39d3c911-cf35-48bf-8349-ba27971c2240",
    "amount": 46.06
  },
  {
    "merchant": "Verve",
    "icon": "verve",
    "category": "Food & Drink",
    "trans_date": "2020-01-01T00:00:00.000Z",
    "trans_id": "35058bb0-f449-41ec-8d2b-6f2ac34a6f7d",
    "amount": 8.63
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2020-01-01T00:00:00.000Z",
    "trans_id": "965eacaa-7c61-432b-8cd2-08cc4ac6ba6d",
    "amount": 5.25
  },
  {
    "merchant": "Jfkt7 Brooklynrebel 1416",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-01T00:00:00.000Z",
    "trans_id": "5bf83701-bb0e-48a7-886d-d1e71006060e",
    "amount": 25.01
  },
  {
    "merchant": "Tai Pan",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2020-01-01T00:00:00.000Z",
    "trans_id": "fc2f68eb-7d41-4b2d-8bc5-1fd5a359718b",
    "amount": 69.95
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "1e7b1869-b015-4fea-8932-a1841acfd5f7",
    "amount": 5.77
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "d314a6c9-e242-41cf-8192-5ebdd7dc64e6",
    "amount": 15.39
  },
  {
    "merchant": "Coco &Amp; Cru",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "ac5e9985-1be0-4d49-b26d-4b076f534922",
    "amount": 55.82
  },
  {
    "merchant": "Anthony &Amp; Son Panini Shop",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "9205eb91-5820-45be-abee-53c0f32ef860",
    "amount": 15.53
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "d81e7970-4644-4005-8387-76630a4344c4",
    "amount": 9.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "8befd815-ce1f-4c58-a4c4-26feeda1a3ac",
    "amount": 7.43
  },
  {
    "merchant": "Ground Support",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "b9c310c2-3f17-4d60-95c0-535af18af34a",
    "amount": 6.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "ba05303e-a7df-414b-9860-2d62b36dd7a2",
    "amount": 11.89
  },
  {
    "merchant": "G92sc9bl3",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "682c6e87-c7c2-4b9b-8a98-10b97e48b6d2",
    "amount": 10.99
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-12-31T00:00:00.000Z",
    "trans_id": "f4578df3-b87a-4a7a-8e50-35f818e362e1",
    "amount": 2.75
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "eef07ca6-cae5-4226-815d-c4c50d2cd5e8",
    "amount": 4
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "ca8e2b4c-1386-4867-9066-84c4f6cf5bac",
    "amount": 2.89
  },
  {
    "merchant": "Taxi",
    "icon": "taxi",
    "category": "Travel",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "da1b148b-66aa-4242-aae8-ea81c5d7e5a7",
    "amount": 9.36
  },
  {
    "merchant": "Anthony &Amp; Son Panini Shop",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "0533dd94-907c-4f31-be2a-3e461dedd863",
    "amount": 17.53
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "4d7ed416-a983-4085-af62-3eb7a70286f2",
    "amount": 14.31
  },
  {
    "merchant": "Yoon Haeundae Galbi",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "f85dcc62-98ee-4c12-acd0-8fa00e61ec52",
    "amount": 63.81
  },
  {
    "merchant": "Petee'S Cafe",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-30T00:00:00.000Z",
    "trans_id": "6dc0c04c-784d-47fd-a127-c89f9b28e9f4",
    "amount": 4.5
  },
  {
    "merchant": "Sunoco 0268354800",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-12-29T00:00:00.000Z",
    "trans_id": "21db8560-70d1-4b8c-ac24-227a803ede48",
    "amount": 16.06
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-12-29T00:00:00.000Z",
    "trans_id": "5c96782d-f573-47ef-82ea-1c2b275e8bbd",
    "amount": 28.15
  },
  {
    "merchant": "Denny'S #7779",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-29T00:00:00.000Z",
    "trans_id": "f68ac7ec-90e8-42e9-b753-bb8e07281e3c",
    "amount": 19.24
  },
  {
    "merchant": "Williamsburg Wine &Amp; Liquo",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-29T00:00:00.000Z",
    "trans_id": "a7a7f8b8-5118-481f-958c-e27738392d5a",
    "amount": 48.53
  },
  {
    "merchant": "Stratechery",
    "icon": "stratechery",
    "category": "Professional Services",
    "trans_date": "2019-12-28T00:00:00.000Z",
    "trans_id": "fde80e94-2576-4dc8-9cbf-ae5aeb1e434a",
    "amount": 10
  },
  {
    "merchant": "Mcdonalds",
    "icon": "mcdonalds",
    "category": "Food & Drink",
    "trans_date": "2019-12-28T00:00:00.000Z",
    "trans_id": "190325c8-724d-4bc4-be39-2cf91fde2a0b",
    "amount": 9.71
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-28T00:00:00.000Z",
    "trans_id": "681097b9-030b-4afb-bea8-191c45b21db9",
    "amount": 2.65
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-27T00:00:00.000Z",
    "trans_id": "05fe5a2b-7f2f-4491-aa11-ca1493dcffd7",
    "amount": 2.65
  },
  {
    "merchant": "Brueggers #3875",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-27T00:00:00.000Z",
    "trans_id": "e4f6e7f3-cd50-48e2-9376-256367929feb",
    "amount": 6.03
  },
  {
    "merchant": "Stewarts Shop 183",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-12-27T00:00:00.000Z",
    "trans_id": "8ecd1eeb-6f8c-4e11-a25e-b5ee77d284f2",
    "amount": 25
  },
  {
    "merchant": "Alaska Air",
    "icon": "alaskaairlines",
    "category": "Travel",
    "trans_date": "2019-12-26T00:00:00.000Z",
    "trans_id": "2ac8e82d-439f-4cbf-a9c7-7a5c2db5e2bd",
    "amount": 187.2
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-26T00:00:00.000Z",
    "trans_id": "3829cfc5-0235-455c-aee7-c6daab958c06",
    "amount": 2.65
  },
  {
    "merchant": "Gulf Oil 91803253",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-12-25T00:00:00.000Z",
    "trans_id": "031f0972-71e8-4462-accb-e04367f1706e",
    "amount": 1.69
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-12-25T00:00:00.000Z",
    "trans_id": "1e2334de-0a8e-4871-9be8-2c39cbfbf210",
    "amount": 80.98
  },
  {
    "merchant": "Sunoco 0989179700",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-12-24T00:00:00.000Z",
    "trans_id": "ebeb2f3f-4948-4752-bffc-3456fbef7143",
    "amount": 4.79
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-12-24T00:00:00.000Z",
    "trans_id": "818a8c80-27c4-4060-9fc6-52d73ba760bd",
    "amount": 3.99
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-24T00:00:00.000Z",
    "trans_id": "c70b4556-7c21-43ce-9776-b697199656cb",
    "amount": 2.65
  },
  {
    "merchant": "Mcdonalds",
    "icon": "mcdonalds",
    "category": "Food & Drink",
    "trans_date": "2019-12-24T00:00:00.000Z",
    "trans_id": "48e5abc8-eea5-4b11-8b27-a9a06b2b7d0d",
    "amount": 9.71
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-23T00:00:00.000Z",
    "trans_id": "fa06aab8-9cb8-4d4c-9f04-fe21117db19e",
    "amount": 18.77
  },
  {
    "merchant": "Audible",
    "icon": "audible",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-23T00:00:00.000Z",
    "trans_id": "3541aa1c-e5eb-47bb-890f-1b293c00cc2f",
    "amount": 14.95
  },
  {
    "merchant": "Mariam",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-22T00:00:00.000Z",
    "trans_id": "93b068d1-9e2c-4cce-8f3a-4f6497513845",
    "amount": 26
  },
  {
    "merchant": "Exxonmobil 97482525",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-12-22T00:00:00.000Z",
    "trans_id": "69354b83-37b6-4519-85ea-a7bd02374301",
    "amount": 4.98
  },
  {
    "merchant": "Netflix",
    "icon": "netflix",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-22T00:00:00.000Z",
    "trans_id": "b6c5b69a-65ab-4185-a508-68fff9132d3f",
    "amount": 15.99
  },
  {
    "merchant": "Getform",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-12-21T00:00:00.000Z",
    "trans_id": "e6ccf346-27d4-4dc1-9bb3-8501af80b05f",
    "amount": 9
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-12-21T00:00:00.000Z",
    "trans_id": "d4dfdc0e-f126-4513-b5f5-c33383a3ab30",
    "amount": 2.99
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-12-21T00:00:00.000Z",
    "trans_id": "43957960-387b-47ba-8831-3aff587fa3a1",
    "amount": 2.75
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-12-21T00:00:00.000Z",
    "trans_id": "a52c1523-60a8-40be-a8a9-4c89bfd483e9",
    "amount": 2.75
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-12-20T00:00:00.000Z",
    "trans_id": "61cffdca-24e1-46e1-a2a7-96bb2f33a811",
    "amount": 16.19
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-12-20T00:00:00.000Z",
    "trans_id": "1618aab9-6113-4cb6-b057-d56de9353f42",
    "amount": 56.8
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-20T00:00:00.000Z",
    "trans_id": "7ef712dd-9308-444a-9a3f-edbe4d6df2b7",
    "amount": 19.56
  },
  {
    "merchant": "The New Stand Ta14",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "d719d085-a97c-43b8-85da-8b3fc2b96787",
    "amount": 5.99
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "f18c9bfc-ff3d-450c-8fc2-bd5a4c563aa9",
    "amount": 6.47
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "d5392462-ca3a-4d9e-83ff-6639b5bb2f70",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "03e74d08-28c6-40cc-bf1c-0940bf446ec8",
    "amount": 15.26
  },
  {
    "merchant": "Tootsie'S At The Stan",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "01c94563-954d-43e2-babd-ac4d7b6b0bfb",
    "amount": 11.28
  },
  {
    "merchant": "Cvs",
    "icon": "cvs",
    "category": "Health & Wellness",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "a5771f20-5324-4e2d-85e1-e5a027782a39",
    "amount": 5.45
  },
  {
    "merchant": "Sharon Heights",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-19T00:00:00.000Z",
    "trans_id": "3773bad0-f4bf-43e7-8443-5710af4b943d",
    "amount": 38.76
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "f867096d-04a1-4f27-805e-194f22265e78",
    "amount": 8.73
  },
  {
    "merchant": "Godiva 247",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "e7bfb8cf-c077-459b-9769-be48236c3cef",
    "amount": 14.95
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "5b8d7098-8c6d-4fd0-8ed0-5ca8c7f79ee8",
    "amount": 5.5
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "ad572133-1e3a-4fe9-abdc-69bdb91f7490",
    "amount": 9.82
  },
  {
    "merchant": "Zareen'S Restaurant -",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "db894d9c-32bf-40b4-877d-4f9cfbb9bf34",
    "amount": 20.58
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "e5326d91-6a70-4be8-804c-519bc764ebe6",
    "amount": 11.04
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-18T00:00:00.000Z",
    "trans_id": "9839436c-79e9-438e-9f0f-9ec54874589c",
    "amount": 23.6
  },
  {
    "merchant": "Spotify",
    "icon": "spotify",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-17T00:00:00.000Z",
    "trans_id": "897404fd-ce0d-40a1-8d02-cf06afafd6b6",
    "amount": 9.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-17T00:00:00.000Z",
    "trans_id": "59cecb4a-9319-4ca8-a68f-449030d47071",
    "amount": 16.58
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-17T00:00:00.000Z",
    "trans_id": "9b9d4a3b-0a22-4dcd-80c2-c49b52336a95",
    "amount": 19.21
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-17T00:00:00.000Z",
    "trans_id": "87875360-a5a6-474e-90ee-98b05770c309",
    "amount": 4.34
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-17T00:00:00.000Z",
    "trans_id": "755ff042-d0ba-4f70-a8e3-ca7bbb91e219",
    "amount": 19.54
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-12-17T00:00:00.000Z",
    "trans_id": "1eb22b86-2943-4b0e-aac0-9f3a4b80d02a",
    "amount": 20.37
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-16T00:00:00.000Z",
    "trans_id": "db5f22a3-75a5-49ee-a1fc-d262bd98d55d",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-16T00:00:00.000Z",
    "trans_id": "0849e77a-fef2-40ff-9b43-42f8a58b4da5",
    "amount": 20.28
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-16T00:00:00.000Z",
    "trans_id": "a09ab898-c689-4c4f-a02a-6ba16a520b60",
    "amount": 32.96
  },
  {
    "merchant": "Palo Alto Fine Wine &Amp; Spi",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-16T00:00:00.000Z",
    "trans_id": "686fe313-d94d-4798-87f7-de6c0c86ee13",
    "amount": 36.6
  },
  {
    "merchant": "Doordashmcdonalds",
    "icon": "doordashmcdonalds",
    "category": "Food & Drink",
    "trans_date": "2019-12-16T00:00:00.000Z",
    "trans_id": "5079d4e0-777e-4bcc-a1a4-32c20d38340b",
    "amount": 17.59
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-15T00:00:00.000Z",
    "trans_id": "ab9f336b-c091-41c1-bdf7-0d0ce9dd2195",
    "amount": 8.02
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-15T00:00:00.000Z",
    "trans_id": "0859c307-00f0-461f-9465-5df837d63c3d",
    "amount": 18.1
  },
  {
    "merchant": "American Air",
    "icon": "americanair",
    "category": "Travel",
    "trans_date": "2019-12-15T00:00:00.000Z",
    "trans_id": "b3a88e33-4b3a-4443-9a11-bc747241d3ca",
    "amount": 9.14
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-12-15T00:00:00.000Z",
    "trans_id": "42ec5a35-bb6f-4c10-a33b-23ce68423992",
    "amount": 46.41
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-14T00:00:00.000Z",
    "trans_id": "21c5e0a5-9e95-4cf0-afcf-d9a27a870011",
    "amount": 7.96
  },
  {
    "merchant": "49 Mile Market St2031",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-12-14T00:00:00.000Z",
    "trans_id": "687ddea7-7ecc-46dc-acc9-cc407170b479",
    "amount": 5.49
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-14T00:00:00.000Z",
    "trans_id": "669f13e2-2bbc-4de9-8fe4-362abdf75289",
    "amount": 33.53
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-13T00:00:00.000Z",
    "trans_id": "ba7feb02-aeb4-4579-b0d2-b86fb4e9772b",
    "amount": 8.73
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-12T00:00:00.000Z",
    "trans_id": "770c241d-7500-4458-bd96-a3ae162100ed",
    "amount": 2.45
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2019-12-12T00:00:00.000Z",
    "trans_id": "49ceba43-41ba-4713-8578-77679fa41bcb",
    "amount": 32.39
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-12T00:00:00.000Z",
    "trans_id": "c1cd545a-1888-4ec6-8f66-2d0f4151fae5",
    "amount": 5.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-12T00:00:00.000Z",
    "trans_id": "9828c347-d432-4c99-814a-3638335e8dbd",
    "amount": 13.01
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-12T00:00:00.000Z",
    "trans_id": "ba2d4b43-abba-4fa5-938c-4d35a307cf33",
    "amount": 5.62
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-11T00:00:00.000Z",
    "trans_id": "b12e8241-5c90-4bdb-bae1-d695377b5b8f",
    "amount": 17.46
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-11T00:00:00.000Z",
    "trans_id": "e380486f-7015-4e31-bf1e-59833c95f053",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-11T00:00:00.000Z",
    "trans_id": "c5a681a0-2d17-4d54-b6e6-e28a54d0d5f5",
    "amount": 43.02
  },
  {
    "merchant": "Carl'S Jr 763",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-11T00:00:00.000Z",
    "trans_id": "9aa35728-c1bf-4ba0-82aa-cc25e96c8016",
    "amount": 4.63
  },
  {
    "merchant": "Carl'S Jr 763",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-11T00:00:00.000Z",
    "trans_id": "434a110d-e69c-4793-b2fb-c6140abcdaa9",
    "amount": 16.61
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-10T00:00:00.000Z",
    "trans_id": "e89e725a-9c7a-49d0-a3df-fe007a438d1e",
    "amount": 4.6
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-10T00:00:00.000Z",
    "trans_id": "ba4f7771-20a0-4353-ae19-f0ef13eaf4e4",
    "amount": 4.34
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-12-10T00:00:00.000Z",
    "trans_id": "47d55d27-c8a9-4bc8-ad2f-428354289368",
    "amount": 2.45
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-09T00:00:00.000Z",
    "trans_id": "963efa3d-de61-432d-b577-7422eabf9457",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-09T00:00:00.000Z",
    "trans_id": "79b0a265-89a2-4e1f-9a92-3609f3c0415c",
    "amount": 22.44
  },
  {
    "merchant": "D N Wolfgang Puck Las",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-08T00:00:00.000Z",
    "trans_id": "98c0a330-5b39-4a54-b4a9-aaf49883b423",
    "amount": 3.13
  },
  {
    "merchant": null,
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-12-08T00:00:00.000Z",
    "trans_id": "971ca469-4e9f-489e-8a9b-ac501d80840d",
    "amount": 38.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-08T00:00:00.000Z",
    "trans_id": "5df05cd8-241e-45c9-a4e6-9644df641733",
    "amount": 8.57
  },
  {
    "merchant": "Ruby'S Dinette D Las",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-08T00:00:00.000Z",
    "trans_id": "8520d60b-7391-45d0-a54f-0c14cba2a0e4",
    "amount": 3.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-07T00:00:00.000Z",
    "trans_id": "0f1c9120-22f5-47c3-82e1-ed8a615542ec",
    "amount": 19.39
  },
  {
    "merchant": "The Buffet",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-07T00:00:00.000Z",
    "trans_id": "18f0bea2-c03f-4e46-9d08-a36a4a1baf97",
    "amount": 59.53
  },
  {
    "merchant": "Shake Shack 1130",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-07T00:00:00.000Z",
    "trans_id": "5d247bf9-a3b4-431d-a2db-8d989b112a19",
    "amount": 16.1
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-07T00:00:00.000Z",
    "trans_id": "5b2bc36e-57a3-455c-a2d8-9c7896d3fd7d",
    "amount": 22.59
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2019-12-06T00:00:00.000Z",
    "trans_id": "a6304829-454e-4b85-a62e-afc3f21d94df",
    "amount": 5.25
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-06T00:00:00.000Z",
    "trans_id": "b6ee050f-8e4e-4d7c-9127-5fac984da210",
    "amount": 8.73
  },
  {
    "merchant": "Mc-Park Mgm Lobby Store",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-12-06T00:00:00.000Z",
    "trans_id": "3e64b55f-0472-48c3-80a6-8fa6357db4e9",
    "amount": 17.86
  },
  {
    "merchant": "Ingenuityst1843",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-12-06T00:00:00.000Z",
    "trans_id": "1ee5668b-2d4e-465b-8e0c-307f1c3ab251",
    "amount": 9.28
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-12-05T00:00:00.000Z",
    "trans_id": "25eb76d4-8c65-4898-bf1c-88cd7f8df92f",
    "amount": 13.98
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-12-05T00:00:00.000Z",
    "trans_id": "791a0dd0-fb69-4f06-90b6-77c73b717b80",
    "amount": 0.99
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-04T00:00:00.000Z",
    "trans_id": "ea3456a5-55a5-40bd-9e5b-cb59879d700f",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-04T00:00:00.000Z",
    "trans_id": "9b608ca6-4b1d-4abe-8b39-3886e1102117",
    "amount": 10.22
  },
  {
    "merchant": "American Air",
    "icon": "americanair",
    "category": "Travel",
    "trans_date": "2019-12-04T00:00:00.000Z",
    "trans_id": "e42b5a9c-305a-409c-aa5c-90e606822eda",
    "amount": 298.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "215d5d23-743f-4a9e-999b-4ef9e0a025ee",
    "amount": 17.2
  },
  {
    "merchant": "American Air",
    "icon": "americanair",
    "category": "Travel",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "1b1e8cf4-1673-4049-92fd-f886cbd5917a",
    "amount": 268
  },
  {
    "merchant": "Skiplagged Service Fee",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "4d2c8b1c-50de-41f7-b308-dcaea7f2787e",
    "amount": 20
  },
  {
    "merchant": "Frontier Airlines",
    "icon": "frontier",
    "category": "Travel",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "2fedb03a-6563-4bd7-8626-b92960740b41",
    "amount": 370.6
  },
  {
    "merchant": "Restaurant 3000",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "b820f6f0-f05b-495f-9de9-be77629ad130",
    "amount": 28.76
  },
  {
    "merchant": "Skiplagged Service Fee",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "e0b95d0d-deff-4f9a-9134-96a763974031",
    "amount": 10
  },
  {
    "merchant": "Skiplagged Service Fee",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-12-03T00:00:00.000Z",
    "trans_id": "9ccc447b-41f0-47c7-a245-8144c0cedbf7",
    "amount": 26.8
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-12-02T00:00:00.000Z",
    "trans_id": "c081954e-d837-485e-a3e2-cb47968ba640",
    "amount": 6
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-02T00:00:00.000Z",
    "trans_id": "0e916457-ae9f-4e6b-80d0-4e16d0183e3c",
    "amount": 4
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-12-02T00:00:00.000Z",
    "trans_id": "d54df43f-db24-4c7d-9e25-e13c9ba9e6ec",
    "amount": 3.83
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-12-01T00:00:00.000Z",
    "trans_id": "d8fd9e95-0e87-464a-bbbb-dd9cf63e0c61",
    "amount": 9.37
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2019-12-01T00:00:00.000Z",
    "trans_id": "12e5795a-ed0a-404a-b087-7177d39ab62d",
    "amount": 9.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-01T00:00:00.000Z",
    "trans_id": "4259b75c-7b17-4c93-a6c4-b9a7280e5683",
    "amount": 7.33
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-12-01T00:00:00.000Z",
    "trans_id": "eb6add44-3483-4e15-9ffb-8c25d0e52a36",
    "amount": 11.36
  },
  {
    "merchant": "Fandango",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-11-30T00:00:00.000Z",
    "trans_id": "09af24cb-7d34-4869-aa67-28243c70e728",
    "amount": 56.07
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-30T00:00:00.000Z",
    "trans_id": "f31a5538-0d83-4fc5-bdd4-5549a7926105",
    "amount": 35.64
  },
  {
    "merchant": "Chong Qing Xiao Mian",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-29T00:00:00.000Z",
    "trans_id": "776ce2b6-f600-4050-84ee-64c91e7e0af6",
    "amount": 11.2
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-29T00:00:00.000Z",
    "trans_id": "e0a2c4df-aef4-42ed-aabc-4b0cb091c43c",
    "amount": 59.31
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-29T00:00:00.000Z",
    "trans_id": "ecde6407-4b68-4869-9c22-6d3a5afa7144",
    "amount": 9.58
  },
  {
    "merchant": "Sunctryair Ny7eja",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-11-29T00:00:00.000Z",
    "trans_id": "21ee98ae-408f-40e5-853a-27db4fc51231",
    "amount": 304
  },
  {
    "merchant": "Amc",
    "icon": "amc",
    "category": "Entertainment",
    "trans_date": "2019-11-29T00:00:00.000Z",
    "trans_id": "a74c4fbf-d625-4a7e-a2a4-6fd4d1023d34",
    "amount": 14.28
  },
  {
    "merchant": "Rooster &Amp; Rice",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-29T00:00:00.000Z",
    "trans_id": "d2e246ec-bd6d-4476-b41d-0ced1c68cbfe",
    "amount": 19.21
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "17b96c76-b474-458b-99f1-a7cd483d71ad",
    "amount": 6
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "1270909c-0c9c-45e1-b570-4430e109a245",
    "amount": 9.54
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "84f87c09-1d8e-465a-8021-c3cd347c11dd",
    "amount": 11.35
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "90c23335-c4db-4b3d-a473-c87542070d5f",
    "amount": 12.76
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "b8f3a83d-d9fe-43c3-ac85-a69c751c0622",
    "amount": 17.68
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "18893dea-880c-42a8-898c-5d30f3f3db4f",
    "amount": 54.82
  },
  {
    "merchant": "Stratechery",
    "icon": "stratechery",
    "category": "Professional Services",
    "trans_date": "2019-11-28T00:00:00.000Z",
    "trans_id": "dc2eec32-9cbc-4289-a90b-7b1cf6f30abd",
    "amount": 10
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "e9519745-917f-4c75-b38f-69d6d94414ed",
    "amount": 25.09
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "8ef13d95-097f-41e5-b539-72a982d62a22",
    "amount": 6
  },
  {
    "merchant": "Cvs",
    "icon": "cvs",
    "category": "Health & Wellness",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "dfb7a1ef-cdd7-43bf-a29a-e716c7581e80",
    "amount": 2.86
  },
  {
    "merchant": "Noir Lounge",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "2dfa9970-5847-4783-8b4f-4a16fbe7b625",
    "amount": 9.97
  },
  {
    "merchant": "Amano San Francisco",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "ed2134c7-d4c8-4af1-99c4-c643a6aa6f34",
    "amount": 35.05
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "73815a91-b0bb-433f-8e20-14ceea61df23",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "da011fc1-eaf8-4758-a61e-3aa1d0355bcd",
    "amount": 14.23
  },
  {
    "merchant": "Poke Bar",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-27T00:00:00.000Z",
    "trans_id": "8c71c478-20d7-4886-93a8-8ff50965eedb",
    "amount": 18.67
  },
  {
    "merchant": "Rangoon Ruby Burmese Cui",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-26T00:00:00.000Z",
    "trans_id": "4f94365b-029a-45f3-bd91-267b945e8afa",
    "amount": 60.72
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2019-11-26T00:00:00.000Z",
    "trans_id": "cfdc9f4b-b3b6-46c2-9908-9b77df7e3c02",
    "amount": 5
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-26T00:00:00.000Z",
    "trans_id": "8ccd4213-6d0b-4da4-8b57-52354961038a",
    "amount": 8.73
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-26T00:00:00.000Z",
    "trans_id": "5c2c0d3e-cf0e-42da-b9a9-42c90bb7d501",
    "amount": 8.18
  },
  {
    "merchant": "Wahlburgers",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-26T00:00:00.000Z",
    "trans_id": "f0fd78f0-2968-4a25-8191-00c28c61475d",
    "amount": 6.53
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-25T00:00:00.000Z",
    "trans_id": "4eccc5fa-4cfd-4124-9262-e1fc5b375419",
    "amount": 4.42
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-11-25T00:00:00.000Z",
    "trans_id": "fe1ce5eb-9a83-481e-b693-190498e5968b",
    "amount": 64.79
  },
  {
    "merchant": "Patagonia",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-11-25T00:00:00.000Z",
    "trans_id": "302a30d5-f7af-451e-89b4-cfcefb3f4251",
    "amount": 249.88
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-11-25T00:00:00.000Z",
    "trans_id": "c6aa6142-94e5-4556-9c16-8ae649aee705",
    "amount": 13.22
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-11-24T00:00:00.000Z",
    "trans_id": "e1666a82-ec0e-4fd3-a56a-da6b0c3b494b",
    "amount": 16.19
  },
  {
    "merchant": "The Information",
    "icon": "theinformation",
    "category": "Professional Services",
    "trans_date": "2019-11-24T00:00:00.000Z",
    "trans_id": "eeeab655-d109-4a8b-93a9-060f504b2940",
    "amount": 39
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-24T00:00:00.000Z",
    "trans_id": "89cd1155-3c24-4ee6-bf7e-3dde924948d1",
    "amount": 16.89
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-11-24T00:00:00.000Z",
    "trans_id": "9800d891-8f90-44aa-9c17-ce5b6a7233a0",
    "amount": 5.45
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-24T00:00:00.000Z",
    "trans_id": "cdc6d2c7-2377-4f0b-8770-3d6f95702afa",
    "amount": 14.67
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-11-24T00:00:00.000Z",
    "trans_id": "65d6e206-65e2-42fa-92f4-1916fdbbeced",
    "amount": 13.19
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-11-23T00:00:00.000Z",
    "trans_id": "1279ab09-cfd7-4bf7-91c8-0ec3ce6f2619",
    "amount": 5.45
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-23T00:00:00.000Z",
    "trans_id": "2f8a03b1-54fc-429f-8737-74ef7d861c22",
    "amount": 15.9
  },
  {
    "merchant": "Audible",
    "icon": "audible",
    "category": "Bills & Utilities",
    "trans_date": "2019-11-23T00:00:00.000Z",
    "trans_id": "8af0cec1-2a90-403d-966b-eec88d8ab564",
    "amount": 14.95
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-23T00:00:00.000Z",
    "trans_id": "bd357b67-af71-4844-82a1-c3af1fd9a2e8",
    "amount": 8.04
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-22T00:00:00.000Z",
    "trans_id": "7f549f6c-d2bd-42f4-8ba7-4f5437121423",
    "amount": 8.73
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-11-22T00:00:00.000Z",
    "trans_id": "86f5ada0-349e-42c9-b848-5ffe375b7837",
    "amount": 2.15
  },
  {
    "merchant": "Netflix",
    "icon": "netflix",
    "category": "Bills & Utilities",
    "trans_date": "2019-11-22T00:00:00.000Z",
    "trans_id": "b3b5d5a9-9510-4c4b-8047-3ee0765ffd05",
    "amount": 15.99
  },
  {
    "merchant": "Poke Bar",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-21T00:00:00.000Z",
    "trans_id": "697cfaf6-ed0e-4cc2-958c-6dd501827c3e",
    "amount": 34.18
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-21T00:00:00.000Z",
    "trans_id": "776defb3-9018-4436-b543-ecaa0a2f87e6",
    "amount": 16.85
  },
  {
    "merchant": "Getform",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-11-21T00:00:00.000Z",
    "trans_id": "c3063ae5-a932-49fd-8eda-5f46c5557a73",
    "amount": 9
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-11-21T00:00:00.000Z",
    "trans_id": "c5bf0fff-2b23-4519-9158-32c741805099",
    "amount": 2.65
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2019-11-20T00:00:00.000Z",
    "trans_id": "b6e5a278-56d0-49d2-b03a-2bc6e378d6b0",
    "amount": 5
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-20T00:00:00.000Z",
    "trans_id": "0e7aa50d-0425-4a81-8f39-70362d755c13",
    "amount": 5.56
  },
  {
    "merchant": "Chase Center",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-20T00:00:00.000Z",
    "trans_id": "054b3db4-755d-4b25-bcb2-64e03c4cff2c",
    "amount": 29
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-20T00:00:00.000Z",
    "trans_id": "72f8f556-d347-4d4d-bcb1-19fefc0424e2",
    "amount": 7.55
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-11-20T00:00:00.000Z",
    "trans_id": "32166512-dfa9-4ea4-86d9-cb6c1b292ebf",
    "amount": 6.5
  },
  {
    "merchant": "Micro Market Vend",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-11-20T00:00:00.000Z",
    "trans_id": "fd20b4c7-27d3-42a4-bf90-f52d421b48d8",
    "amount": 1.17
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-19T00:00:00.000Z",
    "trans_id": "254e551c-f7ea-4513-bb19-9275c2fc6b03",
    "amount": 9.82
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-11-19T00:00:00.000Z",
    "trans_id": "b6638124-e44c-49a2-920c-906faa6bb50f",
    "amount": 16.19
  },
  {
    "merchant": "Smitten Ice Cream - 00",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-18T00:00:00.000Z",
    "trans_id": "4c795c42-193b-4a16-8447-7134f5f6ddc2",
    "amount": 8.13
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-18T00:00:00.000Z",
    "trans_id": "b3febbf3-be66-4c8f-9d88-d59c4a60aeb4",
    "amount": 7.64
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-17T00:00:00.000Z",
    "trans_id": "0a4c9cfd-fc9e-4738-8484-db73e8e9b5df",
    "amount": 4.05
  },
  {
    "merchant": "Spotify",
    "icon": "spotify",
    "category": "Bills & Utilities",
    "trans_date": "2019-11-17T00:00:00.000Z",
    "trans_id": "1b9da575-9758-4b95-8bc2-35c8a04c8b5a",
    "amount": 9.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-17T00:00:00.000Z",
    "trans_id": "a77c228b-2fe4-42b6-ae60-e75806febe63",
    "amount": 3.26
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-17T00:00:00.000Z",
    "trans_id": "12f722f8-12dd-4b71-b4a0-70a2291ebf96",
    "amount": 3.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-17T00:00:00.000Z",
    "trans_id": "ec6421bc-dbf8-4c1e-b99f-cac65a651938",
    "amount": 10.87
  },
  {
    "merchant": "Noir Lounge",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-17T00:00:00.000Z",
    "trans_id": "99037997-93e8-4bb4-9370-e931e92d0f01",
    "amount": 21.23
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-11-16T00:00:00.000Z",
    "trans_id": "80487dbd-3dfb-4426-97b5-2df2860f084f",
    "amount": 6
  },
  {
    "merchant": "La Boulangerie Hayes",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-16T00:00:00.000Z",
    "trans_id": "7a119f02-9b49-49d9-a539-8cbf88828705",
    "amount": 3.9
  },
  {
    "merchant": "Chambers",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-16T00:00:00.000Z",
    "trans_id": "490a3bae-67ed-4bb5-80db-fd246d0d5860",
    "amount": 97.38
  },
  {
    "merchant": "Wise Sons Bagel &Amp; Cof",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-16T00:00:00.000Z",
    "trans_id": "4667cb75-f5b8-4f37-8c17-a45017956ec9",
    "amount": 7.92
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-15T00:00:00.000Z",
    "trans_id": "b5c54988-82aa-430a-8e38-7ba248a3517c",
    "amount": 6.54
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-11-15T00:00:00.000Z",
    "trans_id": "3871612f-fbb6-41fd-8560-5468f902a2cd",
    "amount": 6.47
  },
  {
    "merchant": "Wave",
    "icon": "billsandutilities",
    "category": "Bills & Utilities",
    "trans_date": "2019-11-14T00:00:00.000Z",
    "trans_id": "e43463f5-1b41-47bb-adf1-4d10f1b0de92",
    "amount": 116.24
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-11-14T00:00:00.000Z",
    "trans_id": "4f87cad4-926b-4a4c-a0da-6f2a57192bf0",
    "amount": 19.29
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-14T00:00:00.000Z",
    "trans_id": "689f1a61-6055-4f20-ad3b-ebf5925be2f5",
    "amount": 15.08
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-14T00:00:00.000Z",
    "trans_id": "2c7800a3-ab3e-4925-b36e-e71ff74c1e2f",
    "amount": 15.38
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-14T00:00:00.000Z",
    "trans_id": "001011bb-de9d-42e0-99e0-a6e960637759",
    "amount": 8.73
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "2203914c-02f5-4b6a-b659-e243bfc15769",
    "amount": 36.67
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "a1a3f9a9-e459-4e72-b729-70b58f9e37a0",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "32a01ab4-1642-4069-b429-044a79706e03",
    "amount": 4.67
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "6fe53345-57fe-4299-ba6d-006c37c33cf0",
    "amount": 13.14
  },
  {
    "merchant": "Crunchbase Inc.",
    "icon": "professionalservices",
    "category": "Professional Services",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "d7c35307-3bb9-4c1f-b508-c33bb3444947",
    "amount": 348
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "b9a921a8-bef7-4475-9398-c2b02f2a8faa",
    "amount": 18.1
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "7d6b8295-bea7-44fe-9912-942a7abb7d81",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-13T00:00:00.000Z",
    "trans_id": "433c74c0-bf1c-42b7-8c86-d21e32cd7087",
    "amount": 15.54
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-12T00:00:00.000Z",
    "trans_id": "8b24a903-183c-4b59-9c69-afeb1e387d12",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-12T00:00:00.000Z",
    "trans_id": "a92abf84-690e-482d-8825-de65df97d697",
    "amount": 15.25
  },
  {
    "merchant": "Chase Center",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-12T00:00:00.000Z",
    "trans_id": "c54f352b-8a77-4202-810a-8c20530a98c4",
    "amount": 16
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2019-11-12T00:00:00.000Z",
    "trans_id": "979892f6-c336-402a-b1c2-898dad91f139",
    "amount": 32.39
  },
  {
    "merchant": "Chase Center",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-12T00:00:00.000Z",
    "trans_id": "eab1d5c6-f17d-4d46-b2ee-08c911ffb984",
    "amount": 16
  },
  {
    "merchant": "Chase Center",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-12T00:00:00.000Z",
    "trans_id": "d7e12e65-ceb6-4a01-a22b-df9089b45885",
    "amount": 12
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-11T00:00:00.000Z",
    "trans_id": "241fe2c4-c206-47b6-b601-f136e62c4de0",
    "amount": 14.51
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-11T00:00:00.000Z",
    "trans_id": "582f7cb0-62c0-4f0a-82ad-7a204dd93ec0",
    "amount": 4
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-11T00:00:00.000Z",
    "trans_id": "57869204-b9aa-4797-aabd-56c1eea31152",
    "amount": 13.18
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-11T00:00:00.000Z",
    "trans_id": "5205cf86-45d2-49c5-93b6-6e58202c1c4d",
    "amount": 14.65
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-10T00:00:00.000Z",
    "trans_id": "69187ec1-712a-4378-bf26-aa5710113085",
    "amount": 10.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-10T00:00:00.000Z",
    "trans_id": "f432d4b9-c92d-49ef-aeee-c8f6ee870d03",
    "amount": 12.24
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-11-10T00:00:00.000Z",
    "trans_id": "5ca16a67-1b3f-4b80-8cf1-1b3c8a60e6b6",
    "amount": 32.53
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-10T00:00:00.000Z",
    "trans_id": "b6981590-8c8a-40a6-a0f5-3b056f5a9e19",
    "amount": 9.13
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-09T00:00:00.000Z",
    "trans_id": "1562b802-4fa5-42bc-a805-bad5d4002d72",
    "amount": 14.17
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-09T00:00:00.000Z",
    "trans_id": "83cb7c1b-935c-4f06-844a-00ad60f4f923",
    "amount": 19.99
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-11-09T00:00:00.000Z",
    "trans_id": "7196a676-f281-4888-8a99-0ba1b59b2c27",
    "amount": 8.9
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-11-08T00:00:00.000Z",
    "trans_id": "039be2a9-7e20-4288-bd69-300c9272d79d",
    "amount": 23
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-08T00:00:00.000Z",
    "trans_id": "5469ad6e-ea3a-4eac-b1ad-c30e20175a87",
    "amount": 13.93
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-08T00:00:00.000Z",
    "trans_id": "e270600b-920c-47cd-a743-e342d6ffbc59",
    "amount": 8.73
  },
  {
    "merchant": "Arya Global Cuisine Rwc",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-07T00:00:00.000Z",
    "trans_id": "3c2d2976-5155-4e9d-b4e6-75f1f2c1b4f7",
    "amount": 73.4
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-07T00:00:00.000Z",
    "trans_id": "45f2036f-085d-4267-a2da-d562b2cd3486",
    "amount": 3.32
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-06T00:00:00.000Z",
    "trans_id": "90dcf878-e16d-4a86-afec-1790cef252ec",
    "amount": 15.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-06T00:00:00.000Z",
    "trans_id": "65fd30bd-2bf3-48e3-8856-95b79431c4db",
    "amount": 14.15
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-11-06T00:00:00.000Z",
    "trans_id": "954e77e6-2584-4961-947e-107b6ada828f",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-05T00:00:00.000Z",
    "trans_id": "bb7fb469-3b58-4eed-a31c-6e10a3adebcd",
    "amount": 10.42
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-05T00:00:00.000Z",
    "trans_id": "d4bdd90c-e2dc-454b-b6f4-4f4bc208d82d",
    "amount": 5.73
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-05T00:00:00.000Z",
    "trans_id": "8e480e1b-fd29-46a2-b1cb-99edb2577294",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-05T00:00:00.000Z",
    "trans_id": "ab997d64-7c56-4460-9e08-8a7484a6fd6e",
    "amount": 11.71
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-11-05T00:00:00.000Z",
    "trans_id": "3b78c1a5-d0cc-4c01-b16d-03ea1d12e948",
    "amount": 31.29
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "e39b80c3-61ba-40ac-8d83-0906a166a58c",
    "amount": 18.32
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "9e3ca094-5af6-4c87-8f5b-eda35456a8a4",
    "amount": 17.99
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "ea207d0f-302a-463c-8681-6097927279a8",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "fe0c3766-697a-4012-a507-4fe289e9ec24",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "6dfb50f9-48ee-413b-bf04-dd447d1740c2",
    "amount": 15.51
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "141a9dc5-16a9-4799-ba2e-4d8e5359705f",
    "amount": 20.81
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "cfd6bf34-2d0c-476d-94b2-7e8868b9972f",
    "amount": 4
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-04T00:00:00.000Z",
    "trans_id": "e5881ee7-2ee0-4507-a22a-64f714726bce",
    "amount": 6.55
  },
  {
    "merchant": "Supercuts",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "8ae9153b-2790-4e3b-b3fb-72ba66a2aec3",
    "amount": 19.5
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "33ba612e-e67f-4818-a09b-b26d810e84e1",
    "amount": 29.13
  },
  {
    "merchant": "Ikea",
    "icon": "ikea",
    "category": "Home",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "c9f31ae1-ab0d-4e6b-bcd1-49d23ed2af2f",
    "amount": 273.27
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "6dcbfd59-a76f-495b-a23f-e67722bfe460",
    "amount": 19.59
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "6d3eaa0d-bd2a-4219-abdf-eb633368ce6e",
    "amount": 6.35
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "1233db2b-7ada-4c95-9497-45f810dab563",
    "amount": 31.29
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "9416863e-2e93-45b3-8b19-717ee421ba43",
    "amount": 16.21
  },
  {
    "merchant": "Ikea",
    "icon": "ikea",
    "category": "Home",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "6901e75d-6814-4f04-b908-c524a1b53e50",
    "amount": 242.42
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "0bb2067b-8c8f-42b7-9add-cd9c9554c560",
    "amount": 17.45
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "d33d7b90-3405-4569-beb1-faa74cc2b620",
    "amount": 8.94
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-03T00:00:00.000Z",
    "trans_id": "cf426836-6807-4145-a6ef-7a1849e4acb1",
    "amount": 11.27
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-02T00:00:00.000Z",
    "trans_id": "1d087204-5c5f-4427-aec1-6beb0c141a1b",
    "amount": 15.61
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-02T00:00:00.000Z",
    "trans_id": "b09fdbdf-8e3a-446b-a077-444af63e0cb7",
    "amount": 15.27
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-02T00:00:00.000Z",
    "trans_id": "06e9b6d4-22f3-4225-9bb9-4f79bd4a247f",
    "amount": 17.99
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-11-02T00:00:00.000Z",
    "trans_id": "1eb93c9c-2264-4f0a-a655-a0f0337de342",
    "amount": 17.44
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-02T00:00:00.000Z",
    "trans_id": "6682d7d0-be59-414d-b865-7c35cdb8d397",
    "amount": 16.89
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-02T00:00:00.000Z",
    "trans_id": "91290243-bd48-4e43-9f4a-32b72fd441c5",
    "amount": 18.12
  },
  {
    "merchant": "Restaurant 3000",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "7e139e98-153d-47a0-aeef-479035dfc60a",
    "amount": 15.3
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "21bc9348-256e-4f2d-9bd5-09561d87eacf",
    "amount": 13.9
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "be48f213-a592-45b8-9f37-87f82f4e6fc7",
    "amount": 3.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "17ce5a92-9b86-412b-8b9f-e05a43b65d63",
    "amount": 41.12
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "b31d2348-f0d4-480d-ad63-cc817201227f",
    "amount": 19.58
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "25dfd1bc-a161-4d5c-86b4-1674532d8218",
    "amount": 46.05
  },
  {
    "merchant": "Restaurant 3000",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-11-01T00:00:00.000Z",
    "trans_id": "cde74ada-2033-49ff-a000-b4b49a90914e",
    "amount": 18.3
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2019-10-31T00:00:00.000Z",
    "trans_id": "28c03db4-c6cb-4581-966d-9d0803e61e6d",
    "amount": 9.99
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-31T00:00:00.000Z",
    "trans_id": "c39dd157-bd0a-40b3-8ec7-3ad6b2fb1e4d",
    "amount": 7.64
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-31T00:00:00.000Z",
    "trans_id": "7cea4b77-0116-4c00-90f8-ae567f8d6c4c",
    "amount": 68.78
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-10-31T00:00:00.000Z",
    "trans_id": "b669a080-3360-4980-ac74-940c839112db",
    "amount": 16.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-31T00:00:00.000Z",
    "trans_id": "fb1fcfe3-99a2-412f-8460-736e6324e91a",
    "amount": 16.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-31T00:00:00.000Z",
    "trans_id": "b970604e-8a8e-4a6b-8570-8ebd59211f23",
    "amount": 40.94
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-30T00:00:00.000Z",
    "trans_id": "7c0ada39-9a6f-4277-a897-6e2b30e085f2",
    "amount": 15.31
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-10-30T00:00:00.000Z",
    "trans_id": "7822a4e9-7997-4262-b849-855ce08922a0",
    "amount": 5.25
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-30T00:00:00.000Z",
    "trans_id": "5fc9072f-b899-42fb-89ea-a2f35a15cc9a",
    "amount": 71.19
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-30T00:00:00.000Z",
    "trans_id": "26cba3e5-06db-4ae4-b7d7-1544edd2bf0f",
    "amount": 15.16
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-30T00:00:00.000Z",
    "trans_id": "1eb34d03-820b-472d-9712-152eff60d4a4",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-29T00:00:00.000Z",
    "trans_id": "2c91bb4d-efb7-4ad5-9cc4-3c28cae2cebd",
    "amount": 17.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-29T00:00:00.000Z",
    "trans_id": "2db0ef85-ecae-40fa-bd06-76155ad97add",
    "amount": 10.48
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-29T00:00:00.000Z",
    "trans_id": "6b98c281-3a86-4964-8fa5-9ebd7144f452",
    "amount": 15.27
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-29T00:00:00.000Z",
    "trans_id": "b96bc6c2-b3f4-44a0-880d-d8dae554bb5e",
    "amount": 15.46
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-29T00:00:00.000Z",
    "trans_id": "9bdca6b4-6056-4075-b10b-00e421a4638e",
    "amount": 35
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "28dbc88c-266c-4146-8569-7208a27745d0",
    "amount": 13.21
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "c378a4c8-f7b1-4ede-849d-1e2e1f006cd3",
    "amount": 13.9
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "7502b1b7-383e-43f2-9dc9-c383a7162455",
    "amount": 6.91
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "b7018134-2caa-4f82-80f1-c23992c825a6",
    "amount": 8.73
  },
  {
    "merchant": "Stratechery",
    "icon": "stratechery",
    "category": "Professional Services",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "52ca9c8b-b959-490b-84a2-07239bc29b61",
    "amount": 10
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "aecd1b07-1f80-47db-a023-15b8104a4c5d",
    "amount": 14.47
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "891f7bcf-521a-46a3-8f06-06ae10cd65bf",
    "amount": 10.32
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-28T00:00:00.000Z",
    "trans_id": "35784f69-0112-46e9-be1e-0cbad876e7c5",
    "amount": 17.24
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-10-27T00:00:00.000Z",
    "trans_id": "aab2b749-06fd-4924-962b-e755cf0239bd",
    "amount": 17.98
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-27T00:00:00.000Z",
    "trans_id": "8e48f85f-b9a3-4767-b733-90c4a7e7efe2",
    "amount": 4.09
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-27T00:00:00.000Z",
    "trans_id": "06e4d782-193f-4610-9b07-f8dc69185919",
    "amount": 36.36
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-27T00:00:00.000Z",
    "trans_id": "bcc7d624-9510-43b0-8958-9edcd3c2b8d9",
    "amount": 20.46
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-27T00:00:00.000Z",
    "trans_id": "d000643e-1b38-42fa-8184-c9c5aef5d5d9",
    "amount": 51.46
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-27T00:00:00.000Z",
    "trans_id": "3cb02cb7-0355-4a2a-a2bc-332b93a1cc38",
    "amount": 16.9
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "5beeee10-bc47-4748-858a-abdd5d3f233d",
    "amount": 5.25
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "ce4b254e-ae05-4e69-af5c-e389c35a97e2",
    "amount": 13.9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "c86ee097-ca20-4890-8f42-b49c53f90572",
    "amount": 15.21
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "ded04158-774e-41ce-8e23-345caab45b17",
    "amount": 17.98
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "c2576dde-0344-4d7e-b010-8114cf37b56d",
    "amount": 32.39
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "a9051fbc-99de-418d-9b45-6cd03591e2d8",
    "amount": 14.07
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-10-26T00:00:00.000Z",
    "trans_id": "fce72d4e-70de-448d-a829-061e2a6312c5",
    "amount": 19.17
  },
  {
    "merchant": "Itunes.Com/Bill",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-10-25T00:00:00.000Z",
    "trans_id": "bb286be6-3ab8-48e8-9b83-6d41fe4b2200",
    "amount": 64.79
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-25T00:00:00.000Z",
    "trans_id": "ba5c8849-36ea-481a-9d68-3bfe379ebc7c",
    "amount": 28.45
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-25T00:00:00.000Z",
    "trans_id": "4dcd23a1-4c45-4c91-b809-883477e5a683",
    "amount": 9.66
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-10-25T00:00:00.000Z",
    "trans_id": "690122bc-7cdb-46e2-ad27-1c70bf385d63",
    "amount": 16.19
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-25T00:00:00.000Z",
    "trans_id": "eddf87b1-39e0-43b5-91df-c6ca9b48b892",
    "amount": 14.74
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "2cd7f262-25a6-485e-aa38-869e33142c2d",
    "amount": 15.74
  },
  {
    "merchant": "Adventure Cat",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "7930b2f5-6b5e-49f4-bbd5-9feaa27056c0",
    "amount": 24.15
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "b6f5d01d-6a3d-4192-ad54-ed3d2ae18b08",
    "amount": 18.64
  },
  {
    "merchant": "Sanraku - Metreon",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "45dc3ba7-c992-45a9-8c3b-395d3d8520a8",
    "amount": 30.49
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "ed14d45d-d3ce-4d20-b579-3a8f2b291923",
    "amount": 6
  },
  {
    "merchant": "Pier 39 - Only In Sf",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "0d58eb7a-ef61-4973-9a6a-f4e358ad46bf",
    "amount": 3.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "63f5c904-6c03-4a41-a6f3-6fae215f3778",
    "amount": 15.34
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-10-24T00:00:00.000Z",
    "trans_id": "1c97f44a-bd90-4a59-a047-6d47e0d430d9",
    "amount": 6
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-23T00:00:00.000Z",
    "trans_id": "3ab54a19-97b7-4a2e-82c0-bd32c5754f94",
    "amount": 5.7
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-23T00:00:00.000Z",
    "trans_id": "90d5c3d1-a5af-4001-9f4b-bf18f300e6dd",
    "amount": 18.65
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-23T00:00:00.000Z",
    "trans_id": "d30e4ae2-afc4-4240-a065-a61b3339b1fb",
    "amount": 15.31
  },
  {
    "merchant": "Audible",
    "icon": "audible",
    "category": "Bills & Utilities",
    "trans_date": "2019-10-23T00:00:00.000Z",
    "trans_id": "2a549d71-f6db-4520-83e7-a9ff5503c3a6",
    "amount": 14.95
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-22T00:00:00.000Z",
    "trans_id": "5588a815-eb66-4386-a5f4-32362a9717c8",
    "amount": 15.05
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-22T00:00:00.000Z",
    "trans_id": "30f2634b-7d49-4fc2-8651-2672e351c0b1",
    "amount": 6.18
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-22T00:00:00.000Z",
    "trans_id": "00a8fad2-28ca-4f0e-abc2-6b25b3290093",
    "amount": 14.7
  },
  {
    "merchant": "Netflix",
    "icon": "netflix",
    "category": "Bills & Utilities",
    "trans_date": "2019-10-22T00:00:00.000Z",
    "trans_id": "a09251bb-ba90-4524-a2e5-8e065e58c4d4",
    "amount": 15.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-22T00:00:00.000Z",
    "trans_id": "fb4f637d-7d7b-4178-ad9b-567e11c80bac",
    "amount": 14.26
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "2516f235-e633-4fdf-bdad-db402ce7a1f7",
    "amount": 15.5
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "1e173b3d-2f1b-494d-85b5-cc1fc3476103",
    "amount": 6.61
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "1d70fc19-0488-4bf1-9d31-a3aba5e7d638",
    "amount": 15.52
  },
  {
    "merchant": "Apizza",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "f15cbf26-dcf7-4d26-883a-5d5841f396ee",
    "amount": 10.91
  },
  {
    "merchant": "Usps Po 0558040192",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "a25fcaa4-7ae8-4617-9891-870f7cd4f84d",
    "amount": 7.9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "170acfbb-2724-488e-968e-5706805baf46",
    "amount": 15.23
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "b6f62f78-8d01-4a11-b9fb-d86a70f7d513",
    "amount": 37.32
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "84389f63-e9e0-4adf-8929-84d944f6e127",
    "amount": 5.25
  },
  {
    "merchant": "Jane On Fillmore",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "f43af15d-d604-4d47-92c6-a593c824bd8a",
    "amount": 9.2
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-21T00:00:00.000Z",
    "trans_id": "133d068d-31a8-49d9-8897-115df6126aa7",
    "amount": 34.07
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-20T00:00:00.000Z",
    "trans_id": "dfec3188-6880-4245-a32c-cd350865b02d",
    "amount": 29.19
  },
  {
    "merchant": "Getform",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-10-20T00:00:00.000Z",
    "trans_id": "f67ec33a-5025-4959-97d7-6007fa6d97f4",
    "amount": 9
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-20T00:00:00.000Z",
    "trans_id": "f2514d5c-65e0-4438-acd3-e9efeb4c1e15",
    "amount": 17.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-20T00:00:00.000Z",
    "trans_id": "e5e26985-18a9-4b8e-9dab-3ac9d612411c",
    "amount": 16.55
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-19T00:00:00.000Z",
    "trans_id": "9cd8483e-07b7-4b65-8b78-d5d318e08aed",
    "amount": 18.33
  },
  {
    "merchant": "Coupa",
    "icon": "coupa",
    "category": "Food & Drink",
    "trans_date": "2019-10-19T00:00:00.000Z",
    "trans_id": "c277e9b3-96da-465e-91a0-be58358f0e47",
    "amount": 16.9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-19T00:00:00.000Z",
    "trans_id": "259f9ebb-cdff-4b19-b523-85bec803dabe",
    "amount": 10.59
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-19T00:00:00.000Z",
    "trans_id": "d6bcf5d1-59c9-4ea6-aa79-7deb40928856",
    "amount": 15.4
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-19T00:00:00.000Z",
    "trans_id": "9cf2aa10-df3d-4e41-b62c-ab3f264d45c4",
    "amount": 9.92
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-10-19T00:00:00.000Z",
    "trans_id": "1bbc6c9d-433a-496c-851e-363385491051",
    "amount": 13.76
  },
  {
    "merchant": "Yoho Yogurt",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "9d8149d5-1035-4318-a40f-12bfb438e6b0",
    "amount": 9.97
  },
  {
    "merchant": "Spotify",
    "icon": "spotify",
    "category": "Bills & Utilities",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "e5a1dc5f-7971-478b-85ce-ca70377379f0",
    "amount": 9.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "3a9f914a-e409-4c32-b349-16376107a6bc",
    "amount": 13.76
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "b8600a6c-3872-430d-9912-77e02a7e9c32",
    "amount": 2.72
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "55c1854a-5438-430f-82ee-1e65e79f272b",
    "amount": 15.53
  },
  {
    "merchant": "Yokohama Japanese Bistro",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "b5001e7f-f450-4168-ad4d-af2b33b86ef0",
    "amount": 22.1
  },
  {
    "merchant": "Cvs",
    "icon": "cvs",
    "category": "Health & Wellness",
    "trans_date": "2019-10-18T00:00:00.000Z",
    "trans_id": "3aaefb5f-cca4-439d-a55a-81f9925534ef",
    "amount": 4.39
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-17T00:00:00.000Z",
    "trans_id": "8b80d0f3-5ab8-4bd4-8bf7-5f8cf230e51a",
    "amount": 12.23
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-17T00:00:00.000Z",
    "trans_id": "8efdf8bd-c2a4-4494-a34d-05d3728df551",
    "amount": 4.34
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-17T00:00:00.000Z",
    "trans_id": "19c84dc0-3bbd-40c5-bc03-976314240161",
    "amount": 15.98
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-17T00:00:00.000Z",
    "trans_id": "37d68352-b056-461c-bbb5-607dee3f8112",
    "amount": 14.79
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-16T00:00:00.000Z",
    "trans_id": "674737d5-7a61-48aa-a3ad-d88fae49d81c",
    "amount": 40.81
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-10-16T00:00:00.000Z",
    "trans_id": "fca02ff5-2d4e-4fab-807a-26665677f0cb",
    "amount": 5.25
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-16T00:00:00.000Z",
    "trans_id": "1fe648f2-0298-4d68-8439-237d95fab597",
    "amount": 11.65
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-16T00:00:00.000Z",
    "trans_id": "e2f2729f-6ab4-4ced-bcd0-e66e97fa78a2",
    "amount": 28.45
  },
  {
    "merchant": "Roses Florist",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-10-16T00:00:00.000Z",
    "trans_id": "d8db4d01-7f3a-4eba-9591-375a93e3a431",
    "amount": 137.15
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-16T00:00:00.000Z",
    "trans_id": "4fd32669-99cf-4c78-9169-aae29330f220",
    "amount": 15.54
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-15T00:00:00.000Z",
    "trans_id": "41ddc652-c210-4e9d-9e2e-8a39723731a6",
    "amount": 15.8
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-15T00:00:00.000Z",
    "trans_id": "d7b1acf7-c6ca-4e34-a728-680ae0c25178",
    "amount": 6.11
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-15T00:00:00.000Z",
    "trans_id": "b3a91d1f-3a00-42ac-b6e0-74d527606005",
    "amount": 25.41
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "7987bc7a-d273-4748-8dc1-5957f8073cc6",
    "amount": 13.42
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "bf2cc1cf-78d7-497d-b8f7-c3ded20519fc",
    "amount": 15.03
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "cc2c512f-9a04-4430-aee8-bcb2fe2e5e0c",
    "amount": 9.32
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "85433ae2-446b-4322-9abf-3a627d8a6361",
    "amount": 17.8
  },
  {
    "merchant": "Postmates Cf3c4 Tai Pa",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "762d389a-2645-45f8-a19e-609d20fef5a4",
    "amount": 32.7
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "509208f4-36b1-493c-a411-cdf11a37e902",
    "amount": 14.61
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "bb3ba2dd-f377-454a-bcc4-ace081414ad7",
    "amount": 5.19
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-14T00:00:00.000Z",
    "trans_id": "cea5c31f-7175-43a3-a7ea-3294c88fd5ce",
    "amount": 35
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-13T00:00:00.000Z",
    "trans_id": "e50bc032-8621-4c3e-a260-1d3af616f53e",
    "amount": 16.04
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-12T00:00:00.000Z",
    "trans_id": "f8d79214-9e1c-4298-a048-66e35895933a",
    "amount": 27.24
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-12T00:00:00.000Z",
    "trans_id": "e7c60145-f66d-4a1e-b601-e0b1b04611ac",
    "amount": 35
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2019-10-12T00:00:00.000Z",
    "trans_id": "af6f2a26-9f93-4f39-b277-b26d480c8e49",
    "amount": 32.39
  },
  {
    "merchant": "Postmates Cf3c4 Tai Pa",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-12T00:00:00.000Z",
    "trans_id": "40503dca-13ae-4113-b9a1-b440cac7a89c",
    "amount": 37.26
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-12T00:00:00.000Z",
    "trans_id": "fd67b758-51b1-47b4-a131-90dc5fe2f026",
    "amount": 15.43
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2019-10-11T00:00:00.000Z",
    "trans_id": "823a22da-acfa-4746-8685-dd47fac64c1f",
    "amount": 12.09
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-11T00:00:00.000Z",
    "trans_id": "25d7410c-53d5-48e2-8189-6a5a7c077895",
    "amount": 8.73
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-10-11T00:00:00.000Z",
    "trans_id": "ce8e13e5-2519-4a31-866e-db9eff955be5",
    "amount": 10.28
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-10T00:00:00.000Z",
    "trans_id": "2f098fa4-615f-428e-800d-4d8454310d5e",
    "amount": 14.81
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-10T00:00:00.000Z",
    "trans_id": "a142b094-90e8-4583-92a0-945b921ae3a4",
    "amount": 5.88
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-10-10T00:00:00.000Z",
    "trans_id": "ac4085bd-46c1-4cf5-b040-6b59634a0517",
    "amount": 8.25
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-10T00:00:00.000Z",
    "trans_id": "d25cf686-a818-4a20-a914-48c280d9128e",
    "amount": 19.65
  },
  {
    "merchant": "Guest Services Of Ame",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-10-10T00:00:00.000Z",
    "trans_id": "dd0858a4-572e-48f7-8446-ba15243f67a0",
    "amount": 10
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-10-10T00:00:00.000Z",
    "trans_id": "123fb00e-9566-45b7-b2b7-7e5ba8af67d3",
    "amount": 14.98
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-09T00:00:00.000Z",
    "trans_id": "947a0dbc-a427-499f-ab76-804d6f96276f",
    "amount": 6.93
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-09T00:00:00.000Z",
    "trans_id": "350d2220-665d-4e1a-84c3-96ea89ca151c",
    "amount": 41.92
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-09T00:00:00.000Z",
    "trans_id": "aaf730a1-9533-4c80-8c15-69c82a9ec6d0",
    "amount": 4.42
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-08T00:00:00.000Z",
    "trans_id": "3624cd7c-29b0-46b5-b21f-6c5ff06b6c42",
    "amount": 35
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-10-08T00:00:00.000Z",
    "trans_id": "1cefc3f8-d283-4167-9ff4-8436d84f62f7",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-08T00:00:00.000Z",
    "trans_id": "363b29e3-67f0-4935-b4f1-6bc646882787",
    "amount": 13.93
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-10-08T00:00:00.000Z",
    "trans_id": "6912f217-4ebf-41d0-84c0-a88873bc1c64",
    "amount": 3.25
  },
  {
    "merchant": "Jane On Larkin",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-07T00:00:00.000Z",
    "trans_id": "f93ed445-85a8-4a39-9a53-1fce52b2ab69",
    "amount": 17.48
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-07T00:00:00.000Z",
    "trans_id": "d583f97a-509c-4ed3-8c2c-b1bd55a07bf5",
    "amount": 6.45
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2019-10-07T00:00:00.000Z",
    "trans_id": "c891f855-14c4-4457-a346-bbe75b3e0e4c",
    "amount": 4
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-07T00:00:00.000Z",
    "trans_id": "e55832da-7a8d-4674-b590-76a8517a3e03",
    "amount": 6.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-07T00:00:00.000Z",
    "trans_id": "62287c52-b4ed-403a-805d-a417a59e4d68",
    "amount": 7.11
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-07T00:00:00.000Z",
    "trans_id": "c4e0d1a3-3323-4c40-be93-0fca3d782808",
    "amount": 9.02
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2019-10-06T00:00:00.000Z",
    "trans_id": "267c93a3-35c2-4ee8-a91b-98e0ca83ba14",
    "amount": 9.93
  },
  {
    "merchant": "Taqueria El Buen Sabor",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-06T00:00:00.000Z",
    "trans_id": "26fd7e28-8a17-41b5-921a-662e0dd1b9be",
    "amount": 14.44
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-10-06T00:00:00.000Z",
    "trans_id": "5ef445cd-3908-47c0-a4af-8adaddee0387",
    "amount": 6
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-05T00:00:00.000Z",
    "trans_id": "6c8b1d61-0d06-4351-9ea2-2f30159d0eb5",
    "amount": 19.92
  },
  {
    "merchant": "Amc",
    "icon": "amc",
    "category": "Entertainment",
    "trans_date": "2019-10-05T00:00:00.000Z",
    "trans_id": "e334cbcf-b804-4de8-8b23-bf3c87530f37",
    "amount": 20.18
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-05T00:00:00.000Z",
    "trans_id": "de985c26-5842-435d-b5b9-0443163a8a61",
    "amount": 15.25
  },
  {
    "merchant": "Stacks",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-05T00:00:00.000Z",
    "trans_id": "1756b5e4-8a6d-43c5-9be9-480063821ecb",
    "amount": 19.47
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-05T00:00:00.000Z",
    "trans_id": "073cab9b-5919-4259-acb7-7b61c5ad31e1",
    "amount": 15.9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "2cfba201-4c5a-4e01-ba4a-9723301a3091",
    "amount": 15.17
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "793565f9-2404-422d-a20e-d26547f35163",
    "amount": 6
  },
  {
    "merchant": "Walgreens",
    "icon": "walgreens",
    "category": "Health & Wellness",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "6c4832fc-208b-4dad-bc93-3f0fea0de159",
    "amount": 12.95
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "8eea04d6-217e-48f0-bac6-8d7f33b3c8b0",
    "amount": 4.76
  },
  {
    "merchant": "Bart Millbrae Stat Qps",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "020654fb-0a67-415f-b31e-d911d1ff76b0",
    "amount": 9
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "8f28150f-0c57-48c6-98ac-adf770457c14",
    "amount": 13.73
  },
  {
    "merchant": "Tai Pan",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-04T00:00:00.000Z",
    "trans_id": "70eddd28-b017-4cdb-8cd8-c4facd2e51de",
    "amount": 43.85
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-03T00:00:00.000Z",
    "trans_id": "14a2b7fe-0f15-4581-9f39-2fc5a6f17420",
    "amount": 15.18
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-03T00:00:00.000Z",
    "trans_id": "5f7344db-5df3-40a4-bbd0-afc12f2ba8e0",
    "amount": 3.27
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-03T00:00:00.000Z",
    "trans_id": "a6a7c891-cad2-4e94-a46d-7e13e739d468",
    "amount": 8.73
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-10-03T00:00:00.000Z",
    "trans_id": "5e1b0229-a93a-4545-99e3-b9a1a6e12b58",
    "amount": 36.59
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-10-02T00:00:00.000Z",
    "trans_id": "6fa0d65b-1d70-422b-ac80-08a2b6a112cf",
    "amount": 10.5
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-02T00:00:00.000Z",
    "trans_id": "939204a1-c277-46c3-854b-c14f1dfe4bfa",
    "amount": 65.5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-02T00:00:00.000Z",
    "trans_id": "78d4ed51-7444-4a07-8ab0-ca6d98f84574",
    "amount": 15.12
  },
  {
    "merchant": "Sushirrito Palo Alto",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-10-02T00:00:00.000Z",
    "trans_id": "bf91adf8-cc08-4c39-a129-57efaad3125d",
    "amount": 14.3
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-10-02T00:00:00.000Z",
    "trans_id": "7c88990a-5f79-455f-aa7a-5483bb214b55",
    "amount": 20.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-10-01T00:00:00.000Z",
    "trans_id": "3ee90e23-0dad-45c2-abbc-52476106f701",
    "amount": 13.77
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2019-10-01T00:00:00.000Z",
    "trans_id": "03c4ae47-036b-4409-84b3-0c448cc06369",
    "amount": 9.99
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-10-01T00:00:00.000Z",
    "trans_id": "36320df9-171f-4a50-b741-245b3725adc5",
    "amount": 15.38
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-10-01T00:00:00.000Z",
    "trans_id": "4fe3ae36-f4e9-45e8-9f21-29be82cc0525",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-30T00:00:00.000Z",
    "trans_id": "1f20a18e-99b8-42c2-8035-c1b71a15ea51",
    "amount": 18.87
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-30T00:00:00.000Z",
    "trans_id": "95dd1a62-97e5-445f-9c0b-a79e4907fdc9",
    "amount": 8.73
  },
  {
    "merchant": "Siam Royal",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-30T00:00:00.000Z",
    "trans_id": "ea0a6be9-eddc-4207-833e-0113f378acc1",
    "amount": 24.2
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-30T00:00:00.000Z",
    "trans_id": "a5e389cd-fba4-444c-94af-e7bf930c99ac",
    "amount": 34.87
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "c6d05e18-d5a4-4a2f-8bd8-4107843b0d9c",
    "amount": 42.65
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "f00ec9cd-8b88-4e07-ac5d-3b860bc738be",
    "amount": 9.34
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "9ebfbf3a-0efc-4439-90de-e01c8e85fcdb",
    "amount": 16
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "a2d0bd1a-148c-4c3a-9c2b-4a68219e1cdb",
    "amount": 35.62
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "aa60947e-15b4-48d5-b7fa-1c3e68f75ac3",
    "amount": 32.6
  },
  {
    "merchant": "Yayoi",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "a3a5d96a-a0b8-49b4-8672-4f60efa99a84",
    "amount": 48.51
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-29T00:00:00.000Z",
    "trans_id": "90042709-b3d5-403f-b8ab-cec6beff1be1",
    "amount": 13.16
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "eddbbfd7-3141-4537-8c78-2f65263eed9a",
    "amount": 6.86
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "35bfc332-4992-49ff-8e43-545aff234f32",
    "amount": 12
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "d684b3ce-1a65-4526-81f4-cd66209b2c47",
    "amount": 13.99
  },
  {
    "merchant": "Cafe Borrone",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "ab5caf17-ac84-498f-84c9-de052b7e1114",
    "amount": 35.68
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "8478bf32-6059-463a-8d99-a22e5e1eb68c",
    "amount": 77.05
  },
  {
    "merchant": "Gott S Roadside - Fe",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "6277adef-c57b-40b2-a8d2-a4f8f977e08d",
    "amount": 14.1
  },
  {
    "merchant": "Stratechery",
    "icon": "stratechery",
    "category": "Professional Services",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "9c42961b-1b7f-4ff1-8446-72c0db59b2ff",
    "amount": 10
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "9eb67322-db76-4f5e-af26-bb9a30ee8ace",
    "amount": 10.59
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-28T00:00:00.000Z",
    "trans_id": "53435383-8291-45fa-99af-a05832c7b42c",
    "amount": 9.77
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-27T00:00:00.000Z",
    "trans_id": "d0f81e0b-af9a-40eb-b21d-773938b87256",
    "amount": 8.25
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-09-27T00:00:00.000Z",
    "trans_id": "78b5170a-38fa-4b81-ad69-3e9be9b12161",
    "amount": 2.15
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-27T00:00:00.000Z",
    "trans_id": "e782874f-b8d3-46c8-adae-b4b711abb428",
    "amount": 40.85
  },
  {
    "merchant": "Century Theatres 399",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-09-27T00:00:00.000Z",
    "trans_id": "5b0255bf-78c1-469a-8493-17077f2dbfde",
    "amount": 10
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-09-27T00:00:00.000Z",
    "trans_id": "59782dd8-4bda-4fa8-928f-01ccefae4b67",
    "amount": 5.62
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "2efc5182-60ec-46b7-9d0a-2d908393d2a2",
    "amount": 20.39
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "bcaa95db-024a-421e-a61d-b73f5a48807d",
    "amount": 11.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "0c953750-258a-4eb1-860b-0ad83e3c97e1",
    "amount": 14.76
  },
  {
    "merchant": "7i9q88ug3",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "4afce5c0-0930-45a0-a03c-77f9c40b4759",
    "amount": 11.99
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "183b677c-a70d-41cf-9702-e37a365eba19",
    "amount": 8.73
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "9779f81d-91f1-4792-bd25-f626f1ae45bc",
    "amount": 15.29
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-26T00:00:00.000Z",
    "trans_id": "1353348b-dabf-4b22-80b0-5f2ff4ce19f3",
    "amount": 152.94
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "40dfff92-a363-4cb8-8a54-ff4d7b01a7cd",
    "amount": 58.36
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "33018217-9311-4593-ac78-d01be978d7f0",
    "amount": 8.73
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "66713e52-d602-41fc-a00e-9f05ed5f4960",
    "amount": 23
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "ed41e4b9-05bd-4865-aa8e-fdacb781373e",
    "amount": 11.83
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "9320f2e4-4823-4646-a824-830491e0b684",
    "amount": 19.25
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "8e667229-7d75-463f-901f-c0bddd35dfcb",
    "amount": 64.79
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-25T00:00:00.000Z",
    "trans_id": "ca2dea05-0a10-402a-8e7b-926e1cd8d1b5",
    "amount": 31.14
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "9df3696f-5e1d-4069-bb98-b27eeedc7014",
    "amount": 1083.92
  },
  {
    "merchant": "Century Theatres 399",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "da9fe60b-a770-470e-801d-0ca3f7a8f66a",
    "amount": 17.5
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "89b8f51a-c1b3-4ce5-a601-a12c77b30f24",
    "amount": 24.75
  },
  {
    "merchant": "The Information",
    "icon": "theinformation",
    "category": "Professional Services",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "bcc46968-829f-49ac-ab47-ce542062bb6f",
    "amount": 10
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "a7af4bb0-dedb-4bfb-9b9f-19c74c8525a7",
    "amount": 16.19
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "f54ebe80-6054-44d0-8ef4-cb9e73d975c5",
    "amount": 5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-24T00:00:00.000Z",
    "trans_id": "3d128c27-a8cb-4bbd-8e6b-b6171462163a",
    "amount": 14.95
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "8ec8304d-9a28-449f-88d9-730933740e12",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "e1430863-5601-440c-a2c5-88f3aa492439",
    "amount": 41.94
  },
  {
    "merchant": "Audible",
    "icon": "audible",
    "category": "Bills & Utilities",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "14011197-e8e3-4aa6-a9ee-222588d267b6",
    "amount": 14.95
  },
  {
    "merchant": "Plentea",
    "icon": "groceries",
    "category": "Groceries",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "0c7b1439-7076-4c9d-8459-c4dd54079665",
    "amount": 4.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "201551d0-4d76-4837-b201-30a2c33f7014",
    "amount": 146.77
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "987d0815-b1ea-46dd-bc57-21ae2c0913c5",
    "amount": 43.89
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-23T00:00:00.000Z",
    "trans_id": "0eb32624-da0f-405e-941a-c1fd7ebf6a73",
    "amount": 31.14
  },
  {
    "merchant": "Netflix",
    "icon": "netflix",
    "category": "Bills & Utilities",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "7079df01-7e0b-4eda-94f6-206a9a650306",
    "amount": 15.99
  },
  {
    "merchant": "Sam Wo Restaurant &Amp; Baker",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "76dcd1ac-a6bc-48cb-a6ad-eae3dd27dc50",
    "amount": 34.96
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "deff9f97-cf74-4fe4-a6f1-486dd71d0167",
    "amount": 151.6
  },
  {
    "merchant": "Cafe Borrone",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "9a8362b6-e941-4af6-8b0f-0e73fbaed024",
    "amount": 31.95
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "36ca2ce1-61fa-4d40-af13-806d6bf9391d",
    "amount": 61.84
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "71902567-a65e-4d99-8d93-4b62316f98ec",
    "amount": 13.45
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "77dca0e9-8dc9-4f4b-8944-50673f2cab1a",
    "amount": 13.39
  },
  {
    "merchant": "Sf Wraps",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-22T00:00:00.000Z",
    "trans_id": "d8872746-1b3b-402f-babf-9cdcfa75c29d",
    "amount": 19.09
  },
  {
    "merchant": "S`Bastians Coffee &Amp; Tea",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-21T00:00:00.000Z",
    "trans_id": "1162c69e-4086-4157-9074-80480fc03555",
    "amount": 11.22
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-21T00:00:00.000Z",
    "trans_id": "1ac62783-3d11-4f68-9bda-c0cdaa2bc629",
    "amount": 146.62
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-21T00:00:00.000Z",
    "trans_id": "2b6113a7-b653-46ab-a005-64dd5261d189",
    "amount": 63.54
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-21T00:00:00.000Z",
    "trans_id": "dcf6d743-595f-4a19-a8c4-f82d4e6eb6d7",
    "amount": 17.12
  },
  {
    "merchant": "Wahlburgers",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-21T00:00:00.000Z",
    "trans_id": "a0e3fbe1-8c6e-456c-9b98-cf311b87f8fc",
    "amount": 19.57
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-20T00:00:00.000Z",
    "trans_id": "c3090989-1020-4039-8328-f4014d393614",
    "amount": 15.18
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-09-20T00:00:00.000Z",
    "trans_id": "10936781-9d28-4909-a489-73335708da3a",
    "amount": 9.71
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-20T00:00:00.000Z",
    "trans_id": "76430108-ab9d-4ac2-bbce-cbf8294b3218",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-20T00:00:00.000Z",
    "trans_id": "cc6b125f-f08e-4596-aca6-0cf03795a41b",
    "amount": 13.81
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-19T00:00:00.000Z",
    "trans_id": "dfc10643-e285-4cc0-879e-1b3649e5154f",
    "amount": 8.73
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-19T00:00:00.000Z",
    "trans_id": "ad40448c-b1a8-4833-9ad9-db9c6beed26e",
    "amount": 73.66
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-19T00:00:00.000Z",
    "trans_id": "87bb0add-25d1-4574-9d4b-bac5f9ff3504",
    "amount": 37.7
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-19T00:00:00.000Z",
    "trans_id": "d4ae1ec6-9169-427b-934d-8aa44527b313",
    "amount": 31.94
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-19T00:00:00.000Z",
    "trans_id": "3ab4eee4-e992-4791-868b-7bc44d2efc2a",
    "amount": 10.58
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-19T00:00:00.000Z",
    "trans_id": "fecdf4fd-2a6f-4a58-bf5b-160131b098c8",
    "amount": 65.98
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "4b3626ac-c968-4223-aa11-149f3f1a73d9",
    "amount": 6
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "b103d9a9-8203-461a-b0dc-1234f841292b",
    "amount": 9.71
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "d86fdbb7-5460-4ed8-baef-c399ed248da5",
    "amount": 28.26
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "c948dcd1-7ec3-4dd7-ab85-99afc1309755",
    "amount": 83.85
  },
  {
    "merchant": "Rooster &Amp; Rice",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "1709a9a7-a535-43af-a18f-ba4e490bc313",
    "amount": 18.64
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "51d73077-54d5-4e62-a7be-22c6796c3f6c",
    "amount": 5.2
  },
  {
    "merchant": "Spotify",
    "icon": "spotify",
    "category": "Bills & Utilities",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "ed1cf312-3bc1-4927-b30f-c61f9fc4cd4d",
    "amount": 9.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-18T00:00:00.000Z",
    "trans_id": "57827e74-8655-4a20-8780-6d04d5ced4bf",
    "amount": 14.86
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-17T00:00:00.000Z",
    "trans_id": "d899c71d-339d-4007-8cae-40020eddc5c0",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-17T00:00:00.000Z",
    "trans_id": "602d2962-602b-427f-8000-2e4e74ab36ba",
    "amount": 41.26
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "c800b03b-fb36-4f8b-a13c-d372caadde2f",
    "amount": 1.41
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "440214e4-11fe-4c5e-bf1c-75652da915c1",
    "amount": 35.02
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "38644f5d-374e-4146-9302-4a4abe253313",
    "amount": 46.23
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "4f83bad1-adc4-43c2-8150-dd2b19b6b263",
    "amount": 12.96
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "0120c65e-def0-4df9-a3b5-ed4836b5ec2c",
    "amount": 5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "558cff6a-fce5-4266-9065-e4b0fd2b6ace",
    "amount": 23.02
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "2a3a36d7-3bdb-4b63-9bf4-dd2ed99ed1da",
    "amount": 28.68
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "01bd0656-22e8-40b1-ba4f-a7d65f9c30b1",
    "amount": 22.51
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "07fcd74f-63bd-4e63-a937-1e411d9469e9",
    "amount": 14.89
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-16T00:00:00.000Z",
    "trans_id": "896ac7b8-489b-4d25-956f-7216e5c8e1e7",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-15T00:00:00.000Z",
    "trans_id": "38e726cf-0be5-408b-8007-6225e278d753",
    "amount": 15.09
  },
  {
    "merchant": "Cafe Borrone",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-15T00:00:00.000Z",
    "trans_id": "bbee286e-3fab-4359-85d5-a9e4fb49650e",
    "amount": 22.21
  },
  {
    "merchant": "Plentea",
    "icon": "groceries",
    "category": "Groceries",
    "trans_date": "2019-09-15T00:00:00.000Z",
    "trans_id": "ba5ec175-cc3f-4a70-9c6e-440012171b78",
    "amount": 4.75
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-14T00:00:00.000Z",
    "trans_id": "d0ca4631-c568-4fe2-b905-d48422c873b7",
    "amount": 10.59
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-14T00:00:00.000Z",
    "trans_id": "0d3dcf24-4a97-4f17-8e36-f2abc7c30b34",
    "amount": 41.35
  },
  {
    "merchant": "Cafe Borrone",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-14T00:00:00.000Z",
    "trans_id": "74127747-99e7-46f1-a5e0-2d99e87097ac",
    "amount": 22.48
  },
  {
    "merchant": "Sushirrito Palo Alto",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-14T00:00:00.000Z",
    "trans_id": "dcaed2bf-6384-4a14-a779-1f96547b5da7",
    "amount": 14.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-13T00:00:00.000Z",
    "trans_id": "7d43ed4c-1fe7-4efe-81f9-a6723a0c3fdd",
    "amount": 15.42
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-09-13T00:00:00.000Z",
    "trans_id": "97e9a350-0443-4a04-b9cc-f3866731ddfd",
    "amount": 3.64
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-13T00:00:00.000Z",
    "trans_id": "a313f7a5-171f-4572-8d8a-e291f08428b7",
    "amount": 28.12
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-13T00:00:00.000Z",
    "trans_id": "c6b39943-aacd-4109-843b-3c4444dfbab6",
    "amount": 6
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-09-13T00:00:00.000Z",
    "trans_id": "4799b44c-499a-4e96-b2e6-6ca3bdc14809",
    "amount": 5.2
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-09-13T00:00:00.000Z",
    "trans_id": "9e4ca6ba-8cc1-4b25-891f-9a5fe2c7930d",
    "amount": 9.71
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "b078f787-2db3-4736-80d9-cd9f7268d7b4",
    "amount": 17.91
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "9e9ae2fc-6360-4276-a8d1-4cc0a4e851db",
    "amount": 8.25
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "a5a61c22-8d9a-469f-9f63-83c482167d71",
    "amount": 7.63
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "b7b5f0ac-cb09-4a0e-9dc7-10478e969aa9",
    "amount": 8.73
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "0e91e37c-0a35-46f9-a857-b55d0c2e2c50",
    "amount": 27.09
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "37f6121a-8a26-40c1-87d9-e85394ebc8d5",
    "amount": 32.39
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-09-12T00:00:00.000Z",
    "trans_id": "543a5461-67c7-4a4d-bd80-8ec389c95f3d",
    "amount": 5.25
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-11T00:00:00.000Z",
    "trans_id": "61e57130-4351-4cc7-a858-5bca763c9d66",
    "amount": 37.19
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-11T00:00:00.000Z",
    "trans_id": "b331a8bd-5675-40a8-9a8f-7b18894d09fa",
    "amount": 6.11
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-11T00:00:00.000Z",
    "trans_id": "67a9006f-5d55-4b2a-8fb6-0bbd98f23a2a",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-11T00:00:00.000Z",
    "trans_id": "0551d8ac-0fb0-4cf5-be82-05f9233490db",
    "amount": 9.05
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-09-11T00:00:00.000Z",
    "trans_id": "f781dd23-d0af-4e20-9390-2da55a02e7be",
    "amount": 16.19
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "fea2e998-7e75-4933-a1fe-1ab1643b5e0b",
    "amount": 9.71
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "56dac89e-5ba8-4277-9373-694ff082564a",
    "amount": 7.2
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "df017cb0-a1ae-45f9-b497-82d795cbec99",
    "amount": 22.66
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "8af62bef-c391-4860-bd9d-0b63b59b1be8",
    "amount": 11.51
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "34e32ae8-597d-48f7-9d6a-951307cddfbd",
    "amount": 6
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "b1284a4c-e2ee-42b9-a714-f6c806e3de49",
    "amount": 8.25
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2019-09-10T00:00:00.000Z",
    "trans_id": "9b7b9be1-0e1f-4508-9f47-eeb4f4536604",
    "amount": 10.98
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "6c74dc6d-9587-444f-8935-bb39b1a6a283",
    "amount": 722.46
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "987b7251-1124-4a77-82f4-4809d630bd73",
    "amount": 31.43
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "26f6d4f2-6bdd-4872-9d48-cc30e4c1b719",
    "amount": 4
  },
  {
    "merchant": "British Bankers Club",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "e8804f7c-f3da-47ea-98b5-be468bb576d4",
    "amount": 18.22
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "218d67bb-b98d-4ca3-b8c7-da8bf6ecc76f",
    "amount": 5.25
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "869bb240-1094-4bc0-94d2-219bf8e01bcb",
    "amount": 15.74
  },
  {
    "merchant": "Blue Line Pizza San Ca",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "7029be24-86b5-4abc-93ae-fb9f99bd1b23",
    "amount": 12.11
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-09T00:00:00.000Z",
    "trans_id": "e0815872-348e-4b50-bfcd-ff4159446076",
    "amount": 9.14
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-09-08T00:00:00.000Z",
    "trans_id": "7cd61f20-7994-4a9d-830d-543b960f9762",
    "amount": 18.53
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-08T00:00:00.000Z",
    "trans_id": "282c43ba-dded-49a1-8c50-543c4f204c0e",
    "amount": 11.15
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-08T00:00:00.000Z",
    "trans_id": "38ffb7bc-3697-4c81-a76e-0947cf1f2a85",
    "amount": 11.23
  },
  {
    "merchant": "Sushirrito Palo Alto",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-08T00:00:00.000Z",
    "trans_id": "b586a118-df29-4c25-b77a-8dd23f894460",
    "amount": 13.65
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-08T00:00:00.000Z",
    "trans_id": "f6dad3df-83a7-4a2f-b844-e21b11d5da5a",
    "amount": 1.79
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-08T00:00:00.000Z",
    "trans_id": "5e84bc4a-b513-4712-94a9-3dc75fcf9ac8",
    "amount": 9.63
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "504458bc-ca7f-4c7b-afce-9d5c91fb0605",
    "amount": 6
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "ebc490b4-3606-4bc8-9bb3-91527daaa15d",
    "amount": 10.52
  },
  {
    "merchant": "Alaska Air",
    "icon": "alaskaairlines",
    "category": "Travel",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "c83e734f-9aaf-4aa9-a710-c2f6bcdbd8d4",
    "amount": 336.61
  },
  {
    "merchant": "Taqueria El Buen Sabor",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "61f314d0-572c-4219-8a43-fb03e04bce79",
    "amount": 23.51
  },
  {
    "merchant": "Caltrain",
    "icon": "caltrain",
    "category": "Travel",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "e0268726-2e2f-4b62-a7c6-f083fafd334b",
    "amount": 6
  },
  {
    "merchant": "Amano San Francisco",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "a6695f5d-6d3e-4045-a577-63390acdb7cd",
    "amount": 35.05
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "48ead5c6-41e7-4b5f-85ac-1609a7002198",
    "amount": 17.31
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "753fc156-416d-4470-8277-77020cda685b",
    "amount": 16.12
  },
  {
    "merchant": "Samovar Tea Lounge Ye",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-07T00:00:00.000Z",
    "trans_id": "240aaa66-31eb-4db4-be3b-2e12c5b1e19e",
    "amount": 28.35
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-09-06T00:00:00.000Z",
    "trans_id": "872b8f66-5f77-4c49-a793-5880f70cf10a",
    "amount": 17.22
  },
  {
    "merchant": "Tootsie'S At The Stan",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-06T00:00:00.000Z",
    "trans_id": "b161127c-47c9-4cd9-beb3-e464c51c90fc",
    "amount": 13.08
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-06T00:00:00.000Z",
    "trans_id": "472c419a-1df0-436c-a796-2798c054d967",
    "amount": 7.63
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-05T00:00:00.000Z",
    "trans_id": "0db14a2e-2111-49d5-9239-a74a9330d7dd",
    "amount": 15.67
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-05T00:00:00.000Z",
    "trans_id": "790dc23a-218f-4d1f-860a-ac4c01c00076",
    "amount": 16.41
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-05T00:00:00.000Z",
    "trans_id": "6e8571b3-026b-4640-ba49-604a38c21e34",
    "amount": 8.73
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-05T00:00:00.000Z",
    "trans_id": "a4d91da5-6725-4840-915e-5ab62380d3bc",
    "amount": 15.16
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-05T00:00:00.000Z",
    "trans_id": "4f36070c-7386-40e2-9dfb-5012725125e2",
    "amount": 5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-05T00:00:00.000Z",
    "trans_id": "05a409ff-9fe5-42e5-8554-353b1cf88654",
    "amount": 16.95
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-09-04T00:00:00.000Z",
    "trans_id": "5980bda3-6097-42c0-aa35-ff8dc1cf249d",
    "amount": 10.91
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-04T00:00:00.000Z",
    "trans_id": "119e51d5-8e5d-4080-80d2-96ab2a5f0e4b",
    "amount": 6.11
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-04T00:00:00.000Z",
    "trans_id": "ecec51f3-8695-4e68-a437-0fd426f4f6c5",
    "amount": 8.73
  },
  {
    "merchant": "City Of La Dot Pvb Pbphw",
    "icon": "billsandutilities",
    "category": "Bills & Utilities",
    "trans_date": "2019-09-04T00:00:00.000Z",
    "trans_id": "6340d89c-fcaf-4955-ab33-751b23016d31",
    "amount": 70
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-04T00:00:00.000Z",
    "trans_id": "4dda6664-d14e-4cb2-85c6-5076f5738bb4",
    "amount": 12.7
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-09-04T00:00:00.000Z",
    "trans_id": "00cda043-ebab-4f30-9015-a4fb16b558fc",
    "amount": 12.75
  },
  {
    "merchant": "Hertz Rent-A-Car",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-09-03T00:00:00.000Z",
    "trans_id": "614c0f28-25d2-4ac3-a89f-c1d9a675eb36",
    "amount": 146.8
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-09-03T00:00:00.000Z",
    "trans_id": "38008cba-e40a-4b0e-a88e-b6e6f5f6f843",
    "amount": 8.73
  },
  {
    "merchant": "Shell Oil 57444214308",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-09-03T00:00:00.000Z",
    "trans_id": "1ab3c42c-66b7-475a-bfcb-a0b086db4c0c",
    "amount": 11.7
  },
  {
    "merchant": "Boba Guys",
    "icon": "bobaguys",
    "category": "Food & Drink",
    "trans_date": "2019-09-03T00:00:00.000Z",
    "trans_id": "4c0c46a8-6d6c-4d5a-af1f-16ea7382449a",
    "amount": 7.25
  },
  {
    "merchant": "Go Fish Poke Bar -Sta",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-03T00:00:00.000Z",
    "trans_id": "e72a4f55-9003-4c58-b966-c8114be37f5b",
    "amount": 16.35
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2019-09-03T00:00:00.000Z",
    "trans_id": "090914b2-1bf0-460c-97c4-86623b48d311",
    "amount": 9
  },
  {
    "merchant": "In-N-Out Burger",
    "icon": "in-n-outburger",
    "category": "Food & Drink",
    "trans_date": "2019-09-02T00:00:00.000Z",
    "trans_id": "8ca09515-f65c-4a2b-847e-8ef838af6178",
    "amount": 13.84
  },
  {
    "merchant": "Chevron 0096293",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-09-02T00:00:00.000Z",
    "trans_id": "30bed813-4025-47ac-9f68-6c14a474c52c",
    "amount": 37.73
  },
  {
    "merchant": "Brite Spot",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-09-01T00:00:00.000Z",
    "trans_id": "ff876f2f-d055-4a73-a659-c5c1b7b20c8d",
    "amount": 38
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2019-09-01T00:00:00.000Z",
    "trans_id": "0030d934-8b42-460e-9daf-adffb5325d09",
    "amount": 9.99
  },
  {
    "merchant": "Yummy Silver Lake",
    "icon": "groceries",
    "category": "Groceries",
    "trans_date": "2019-08-31T00:00:00.000Z",
    "trans_id": "b4e0f305-81fe-4b74-8c89-ad923d62eb4e",
    "amount": 6.08
  },
  {
    "merchant": "Exxonmobil 97648463",
    "icon": "gas",
    "category": "Gas",
    "trans_date": "2019-08-31T00:00:00.000Z",
    "trans_id": "e667fc29-b59f-4b29-bc7c-61d710012fd0",
    "amount": 37.3
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-31T00:00:00.000Z",
    "trans_id": "d68aed9a-a271-4afb-8625-b77801098efc",
    "amount": 14.94
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-30T00:00:00.000Z",
    "trans_id": "0c9bce8e-2c55-4bf6-a4f9-1f87145b833e",
    "amount": 48.69
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-08-30T00:00:00.000Z",
    "trans_id": "457eaf17-b9e3-4eda-b9c7-c89f0a9f1fc0",
    "amount": 10.68
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-08-30T00:00:00.000Z",
    "trans_id": "7463e462-e143-4cf8-aa47-a1b523e875c1",
    "amount": 15.16
  },
  {
    "merchant": "Mcdonald'S F17648",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-30T00:00:00.000Z",
    "trans_id": "bdf85c00-a5a5-42b7-8287-ae8d015e4cdd",
    "amount": 13.07
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-30T00:00:00.000Z",
    "trans_id": "79c15c80-5cb8-41fd-ba87-aaba78b37e2c",
    "amount": 35.31
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-29T00:00:00.000Z",
    "trans_id": "114a8897-51fa-455c-8f00-def92f4803b0",
    "amount": 16.69
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-08-29T00:00:00.000Z",
    "trans_id": "af414ee4-1297-46ac-9566-7239552dff7a",
    "amount": 15.01
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-08-29T00:00:00.000Z",
    "trans_id": "2c080422-9551-40c4-a7f8-36f3faa13188",
    "amount": 104.38
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-08-29T00:00:00.000Z",
    "trans_id": "8d31ea48-8a10-4630-83ad-7d42aef1037b",
    "amount": 10.68
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "65517ae9-be8e-48ad-a91b-921344cca743",
    "amount": 14.14
  },
  {
    "merchant": "Stratechery",
    "icon": "stratechery",
    "category": "Professional Services",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "b9692007-7cfd-47b4-8db2-188511bb2d4a",
    "amount": 10
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "4b0e3fbf-c954-410c-aa55-f5ff877c4925",
    "amount": 20.32
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "41f3bb2e-5915-48f6-b256-566248bc71de",
    "amount": 26.78
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "7aaf744b-5dac-4520-889a-b4b49ba33e24",
    "amount": 13.99
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "93983b9d-b4f2-4f60-8bf2-059c93ada819",
    "amount": 8.73
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-08-28T00:00:00.000Z",
    "trans_id": "56b62c4b-56c2-40c4-95c1-7b2ad0952872",
    "amount": 216.72
  },
  {
    "merchant": "Salt & Straw",
    "icon": "saltandstraw",
    "category": "Food & Drink",
    "trans_date": "2019-08-27T00:00:00.000Z",
    "trans_id": "9c8053c1-f2a6-4d8e-afd3-25574efbef25",
    "amount": 5
  },
  {
    "merchant": "Gap Us 119",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-08-27T00:00:00.000Z",
    "trans_id": "c1859fd6-262f-4329-b57f-3e9178626a96",
    "amount": 132.28
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-08-27T00:00:00.000Z",
    "trans_id": "15c55a7c-3ddd-4e76-be3d-6ff8838de8dc",
    "amount": 70
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-08-27T00:00:00.000Z",
    "trans_id": "e6c9c074-6695-49ec-b537-7952a68c8702",
    "amount": 10.68
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-26T00:00:00.000Z",
    "trans_id": "6a0734e1-1cd6-4ae0-8de7-6c5bc19ae576",
    "amount": 13.07
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-08-26T00:00:00.000Z",
    "trans_id": "67a74623-5cb4-4da2-b8de-c0fd7f986f41",
    "amount": 10.68
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-26T00:00:00.000Z",
    "trans_id": "00d91af8-e0f6-4a66-a509-979093b1026a",
    "amount": 15.86
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-26T00:00:00.000Z",
    "trans_id": "8880b67e-55d9-40a8-ab81-5247885c09f8",
    "amount": 29.67
  },
  {
    "merchant": "Safeway",
    "icon": "safeway",
    "category": "Groceries",
    "trans_date": "2019-08-25T00:00:00.000Z",
    "trans_id": "0d93e9de-f5f5-4144-ba0b-6b9f7609adf7",
    "amount": 21.98
  },
  {
    "merchant": "Cafe Borrone",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-25T00:00:00.000Z",
    "trans_id": "9495ff1d-c022-4c3c-9433-d9585892425d",
    "amount": 23.21
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-08-25T00:00:00.000Z",
    "trans_id": "ed75713a-24eb-4942-ac0c-dbbe283539c6",
    "amount": 64.79
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-25T00:00:00.000Z",
    "trans_id": "3c8df4cc-4a4c-4fa8-a3a5-48a802102cd4",
    "amount": 14.51
  },
  {
    "merchant": "Sushirrito Palo Alto",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-24T00:00:00.000Z",
    "trans_id": "8e83e448-2e95-4d62-b27b-37651403aa6c",
    "amount": 13.65
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-08-24T00:00:00.000Z",
    "trans_id": "624351f9-2b50-49d4-8978-b359013e31cd",
    "amount": 16.19
  },
  {
    "merchant": "The Information",
    "icon": "theinformation",
    "category": "Professional Services",
    "trans_date": "2019-08-24T00:00:00.000Z",
    "trans_id": "69653097-70f8-4ef8-829a-59f8a1440af3",
    "amount": 10
  },
  {
    "merchant": "Morg Stan Cafe",
    "icon": "morgstancafe",
    "category": "Food & Drink",
    "trans_date": "2019-08-23T00:00:00.000Z",
    "trans_id": "13c273d8-1472-4da4-81be-265ae7a9fe09",
    "amount": 8.73
  },
  {
    "merchant": "Taro San",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-23T00:00:00.000Z",
    "trans_id": "82912cd2-ae65-4fc8-b5b9-4dba35cfe147",
    "amount": 28.98
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-23T00:00:00.000Z",
    "trans_id": "c6a3a637-9c24-4457-9004-547e46c70a8e",
    "amount": 5
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-23T00:00:00.000Z",
    "trans_id": "097d467b-d933-4fc3-8df6-7212d3cffef6",
    "amount": 15.34
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-23T00:00:00.000Z",
    "trans_id": "c3227018-b9b9-4f0e-82b2-cfa29e1e79d3",
    "amount": 16.31
  },
  {
    "merchant": "Audible",
    "icon": "audible",
    "category": "Bills & Utilities",
    "trans_date": "2019-08-23T00:00:00.000Z",
    "trans_id": "d58367e4-7247-4777-b588-9f61b8d249ce",
    "amount": 14.95
  },
  {
    "merchant": "Netflix",
    "icon": "netflix",
    "category": "Bills & Utilities",
    "trans_date": "2019-08-22T00:00:00.000Z",
    "trans_id": "8a205419-8c22-47aa-be69-031389c5529b",
    "amount": 15.99
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-08-22T00:00:00.000Z",
    "trans_id": "1c3e05a1-7c23-40ce-979a-9177066b5fe5",
    "amount": 105
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-22T00:00:00.000Z",
    "trans_id": "6f0c8a35-b670-421d-bedb-09ead87424dd",
    "amount": 16.93
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-22T00:00:00.000Z",
    "trans_id": "6586b6e4-2de1-4b11-8b5b-a85e0071e780",
    "amount": 15.92
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-08-21T00:00:00.000Z",
    "trans_id": "1014178f-3a6a-4413-ba3f-9d56525cdcc4",
    "amount": 17.75
  },
  {
    "merchant": "Go Fish Poke Bar -Sta",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-21T00:00:00.000Z",
    "trans_id": "132c0893-4895-4ff4-9075-245c5e0ff532",
    "amount": 16.35
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-08-21T00:00:00.000Z",
    "trans_id": "906e20c9-da17-4230-a0bc-358c68fc3e96",
    "amount": 10.91
  },
  {
    "merchant": "Doordash",
    "icon": "doordash",
    "category": "Food & Drink",
    "trans_date": "2019-08-21T00:00:00.000Z",
    "trans_id": "7d63a4d6-49b6-4708-bbc0-e3b530daa3d4",
    "amount": 30.29
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-21T00:00:00.000Z",
    "trans_id": "f95ea7bd-8518-4287-886f-bdaba2b46e71",
    "amount": 15.65
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-21T00:00:00.000Z",
    "trans_id": "e272665b-dbdf-4b6c-9f18-a10807e66a8a",
    "amount": 20.6
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-08-20T00:00:00.000Z",
    "trans_id": "7cf70acd-ce67-4a54-b013-3c0e244ed647",
    "amount": 8.56
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-19T00:00:00.000Z",
    "trans_id": "4e886b50-a5af-4e71-ab9b-37bf33c1e7ab",
    "amount": 30.27
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-19T00:00:00.000Z",
    "trans_id": "c65b2121-9413-4bd6-9124-8561cab5a9f3",
    "amount": 14.48
  },
  {
    "merchant": "Blue Line Pizza San Ca",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-19T00:00:00.000Z",
    "trans_id": "f1700633-033e-40c8-92b0-0297fdf8e762",
    "amount": 18.11
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-08-19T00:00:00.000Z",
    "trans_id": "1ca1320a-4428-4406-979c-3354f4afc032",
    "amount": 8.56
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-19T00:00:00.000Z",
    "trans_id": "f2adc104-3efc-493d-8f22-7229e22fe857",
    "amount": 8.82
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-18T00:00:00.000Z",
    "trans_id": "1893a921-d36a-45be-98a7-995b9e701dcb",
    "amount": 16.99
  },
  {
    "merchant": "Cafe 220",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-18T00:00:00.000Z",
    "trans_id": "c6c5a3ae-b1e4-46c1-80b1-08139a5b1626",
    "amount": 19.17
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-18T00:00:00.000Z",
    "trans_id": "8119ef6f-51b3-4a3d-9ff9-b8162a3a7f63",
    "amount": 36.05
  },
  {
    "merchant": "Hotwire-Sales Final",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-08-18T00:00:00.000Z",
    "trans_id": "b007babb-0363-4857-815f-ec7cb8094729",
    "amount": 136.64
  },
  {
    "merchant": "Spotify",
    "icon": "spotify",
    "category": "Bills & Utilities",
    "trans_date": "2019-08-18T00:00:00.000Z",
    "trans_id": "57722a32-e824-4134-acbd-a1cd134b05de",
    "amount": 9.99
  },
  {
    "merchant": "Hoteltonightlos Prado",
    "icon": "travel",
    "category": "Travel",
    "trans_date": "2019-08-17T00:00:00.000Z",
    "trans_id": "5caa7775-7285-4174-b3e5-08e780023e6d",
    "amount": 126
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-08-17T00:00:00.000Z",
    "trans_id": "68306fa8-89b1-4e70-abcd-e17276592893",
    "amount": 128.15
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-17T00:00:00.000Z",
    "trans_id": "c4681840-60a4-47ce-a1b2-3c611f81eefa",
    "amount": 4.96
  },
  {
    "merchant": "Cafe Borrone",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-17T00:00:00.000Z",
    "trans_id": "b7bb4bc3-a957-40db-b316-ba9b0e737906",
    "amount": 32.95
  },
  {
    "merchant": "Mendocino Farms #26",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-16T00:00:00.000Z",
    "trans_id": "3386b3df-f4d6-4aed-ac59-ef8ac4be807e",
    "amount": 21.04
  },
  {
    "merchant": "Wahlburgers",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-16T00:00:00.000Z",
    "trans_id": "b944bcdf-c5cc-43f7-9a9b-6c7ba3e90758",
    "amount": 13.04
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-16T00:00:00.000Z",
    "trans_id": "e1f7497f-7625-4707-9238-f779c511a63f",
    "amount": 23.12
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-08-16T00:00:00.000Z",
    "trans_id": "0e533fc1-7cfa-45d2-9d53-98f19f1185bc",
    "amount": 11.44
  },
  {
    "merchant": "Van Leeuwen Ice Cream",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "b0aaf5db-82ba-45d1-95dc-89f469129cc9",
    "amount": 9.26
  },
  {
    "merchant": "Devocion ¦ Flatiron",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "41c5d551-998d-4a44-b3d1-11bd9a93c52e",
    "amount": 4.5
  },
  {
    "merchant": "Madame Vo",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "066c726d-0586-4a96-9046-0d51d78576d1",
    "amount": 19.33
  },
  {
    "merchant": "American Air",
    "icon": "americanair",
    "category": "Travel",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "f8d9bc46-31a2-4fe3-8e15-8e139a4a80db",
    "amount": 30
  },
  {
    "merchant": "Panera Bread #204656",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "93b0af5b-8934-4da7-8d3b-a6adf17643dc",
    "amount": 11.93
  },
  {
    "merchant": "Hudsonnews St1297",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "9ab3401f-a02c-4182-a05b-8265e9262987",
    "amount": 17.93
  },
  {
    "merchant": "La Colombe - Noho",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "04460053-8ef7-4ed6-94b3-54e32121c5d0",
    "amount": 6
  },
  {
    "merchant": "Flower Shop Network",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-08-15T00:00:00.000Z",
    "trans_id": "e68d621f-8af7-49d8-b4bd-724b33ec4d28",
    "amount": 108.59
  },
  {
    "merchant": "Glaze 4th Ave",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-14T00:00:00.000Z",
    "trans_id": "35552026-eb68-4db7-bae0-ab4a6bf7f61b",
    "amount": 11.98
  },
  {
    "merchant": "Shake Shack-1176",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-14T00:00:00.000Z",
    "trans_id": "c349c39d-3635-4354-ac88-352c4dfae8d8",
    "amount": 12.83
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-08-14T00:00:00.000Z",
    "trans_id": "39fcde30-0e7f-44fb-877c-0479fe966999",
    "amount": 5.5
  },
  {
    "merchant": "Blue Stripes Cacao Sh",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-14T00:00:00.000Z",
    "trans_id": "8841ff94-269c-496b-9b16-c777ed645501",
    "amount": 5.99
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Bills & Utilities",
    "trans_date": "2019-08-14T00:00:00.000Z",
    "trans_id": "5d1593b5-5112-46b1-9414-e400a844e6ba",
    "amount": 63.72
  },
  {
    "merchant": "Aroqa",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-14T00:00:00.000Z",
    "trans_id": "9a6520de-34dd-4b7b-aaac-80bea0317bf3",
    "amount": 26.32
  },
  {
    "merchant": "Pj Clarkes Group Llc",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-13T00:00:00.000Z",
    "trans_id": "a759f5d4-7de4-4936-bc65-2d5ff4189681",
    "amount": 41.78
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-08-13T00:00:00.000Z",
    "trans_id": "49e05286-c7bc-4b36-bb10-493e96c9d546",
    "amount": 24.49
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "5e4c9f7c-7917-477b-964b-5ea961539252",
    "amount": 9.74
  },
  {
    "merchant": "B&Amp;H Photo Store",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "3bfa10a5-854a-474c-b161-c5202a807e5d",
    "amount": 112.14
  },
  {
    "merchant": "Ardesia",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "19dcd338-8ad2-4888-8e6b-bd46268db031",
    "amount": 19.33
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "34dd6452-e687-4873-bd85-606da392adcc",
    "amount": 32.67
  },
  {
    "merchant": "Duane Reade",
    "icon": "duanereade",
    "category": "Health & Wellness",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "09c21046-02b7-4aab-a0e0-fb12ecb4c52f",
    "amount": 9.28
  },
  {
    "merchant": "New York Times",
    "icon": "newyorktimes",
    "category": "Bills & Utilities",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "aafe6235-6403-4ba5-b909-001cf590edf2",
    "amount": 4
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2019-08-12T00:00:00.000Z",
    "trans_id": "c9cfe158-7080-439d-8e64-32773a4f1c7b",
    "amount": 32.39
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-08-11T00:00:00.000Z",
    "trans_id": "2248906a-6689-44fa-8724-e9f32aec2208",
    "amount": 22
  },
  {
    "merchant": "Kazunori- Nyc",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-11T00:00:00.000Z",
    "trans_id": "c9a1fedb-13d1-4ec5-853e-10a001c20782",
    "amount": 28.85
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-08-11T00:00:00.000Z",
    "trans_id": "d3ab31fc-cf00-467d-bc64-6cc0cc0fb3ec",
    "amount": 20.5
  },
  {
    "merchant": "2 Bros W. 25th",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-11T00:00:00.000Z",
    "trans_id": "ea85cab1-f84e-4185-98e1-b68d0407e8e0",
    "amount": 2.99
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-10T00:00:00.000Z",
    "trans_id": "ed124ab9-9f1e-4c71-ba59-a94975448c0b",
    "amount": 37.6
  },
  {
    "merchant": "Bar Moga",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-10T00:00:00.000Z",
    "trans_id": "919e5814-45f3-4c73-a867-84679f847946",
    "amount": 41.84
  },
  {
    "merchant": "Rosetta Wines",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-09T00:00:00.000Z",
    "trans_id": "aa087569-3431-4a77-a937-924d5dc2dba7",
    "amount": 20.68
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-08-09T00:00:00.000Z",
    "trans_id": "c5c678b6-f6e2-4f64-a913-cff1c7596f0d",
    "amount": 5.44
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-08-09T00:00:00.000Z",
    "trans_id": "7db9570a-5611-48cd-89d8-a7cf7650010b",
    "amount": 8.71
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-08-09T00:00:00.000Z",
    "trans_id": "476cbd60-cf9a-407d-9b47-53f196561557",
    "amount": 22
  },
  {
    "merchant": "Socarrat Nolita",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-08T00:00:00.000Z",
    "trans_id": "3110db41-0464-4fe8-8646-18ff74067bc9",
    "amount": 117.99
  },
  {
    "merchant": "Enzo Bruni La Pizza Gourm",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-08T00:00:00.000Z",
    "trans_id": "47ddd733-843d-4902-9217-196061cdd524",
    "amount": 14.1
  },
  {
    "merchant": "Death Avenue",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-08T00:00:00.000Z",
    "trans_id": "abb4e3c6-619e-4789-9315-fb7eb16f9050",
    "amount": 49.37
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-08T00:00:00.000Z",
    "trans_id": "1de3fc19-085d-4e0b-b9d7-a53972a82f7a",
    "amount": 19.56
  },
  {
    "merchant": "7-Eleven",
    "icon": "7-eleven",
    "category": "Gas",
    "trans_date": "2019-08-07T00:00:00.000Z",
    "trans_id": "34e9131d-321d-4e4e-a044-3981d1801d9f",
    "amount": 5.43
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-08-07T00:00:00.000Z",
    "trans_id": "0bc177f2-9808-49d8-89b1-b216d1dd61ce",
    "amount": 20
  },
  {
    "merchant": "Gelso &Amp; Grand",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-07T00:00:00.000Z",
    "trans_id": "b4a88abb-7935-4930-9b4f-41d1e5acf849",
    "amount": 74.05
  },
  {
    "merchant": "Balthazar Restaurant",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-06T00:00:00.000Z",
    "trans_id": "2c1f393d-1145-4ecf-a96b-6a0af2f21f41",
    "amount": 89.03
  },
  {
    "merchant": "Zen Ramen &Amp; Sushi",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-06T00:00:00.000Z",
    "trans_id": "96e59018-fd2c-459d-b722-b579d7ae4eec",
    "amount": 26.82
  },
  {
    "merchant": "7-Eleven",
    "icon": "7-eleven",
    "category": "Gas",
    "trans_date": "2019-08-06T00:00:00.000Z",
    "trans_id": "53cc41da-6640-4854-b432-26f8b99957da",
    "amount": 3.99
  },
  {
    "merchant": "Ground Support",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-05T00:00:00.000Z",
    "trans_id": "bd3ba295-a0e5-4734-975e-3ad4d872c9fa",
    "amount": 5.75
  },
  {
    "merchant": "Cupping Room Cafe",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-05T00:00:00.000Z",
    "trans_id": "ef0b844b-5634-49b9-b1ad-7340bcdd8b00",
    "amount": 22
  },
  {
    "merchant": "Duane Reade",
    "icon": "duanereade",
    "category": "Health & Wellness",
    "trans_date": "2019-08-05T00:00:00.000Z",
    "trans_id": "6a029fab-35b6-46b1-bb07-d882521609ce",
    "amount": 5.49
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-08-05T00:00:00.000Z",
    "trans_id": "12e04ca2-b45d-45dd-9c2b-733082784c97",
    "amount": 33.65
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-08-05T00:00:00.000Z",
    "trans_id": "d408a0d6-f26c-4584-8de0-84bedaae9daa",
    "amount": 8.71
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-08-04T00:00:00.000Z",
    "trans_id": "d41652a0-9073-491a-a20a-b7262c348fdd",
    "amount": 20
  },
  {
    "merchant": "Irving Farm Coffee R",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-04T00:00:00.000Z",
    "trans_id": "c3caf35b-e35d-466b-b765-b8351ba89394",
    "amount": 7.5
  },
  {
    "merchant": "Joes Pizza - Times Squ",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-03T00:00:00.000Z",
    "trans_id": "cce6e90a-7538-4458-b6ce-f56e2ea6bb37",
    "amount": 30.97
  },
  {
    "merchant": "Yankee Stdm Concessions",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-03T00:00:00.000Z",
    "trans_id": "ae303ed9-ef29-485d-8a3f-78d8bfc110c8",
    "amount": 10.4
  },
  {
    "merchant": "Yankee Stdm Concessions",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-03T00:00:00.000Z",
    "trans_id": "64213e69-6580-4f1d-a465-e674ec9ad3ac",
    "amount": 11.5
  },
  {
    "merchant": "Yankee Stdm Concessions",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-03T00:00:00.000Z",
    "trans_id": "abf47c10-4e23-4463-80e6-eda7b89f8d1c",
    "amount": 6.3
  },
  {
    "merchant": "Kobeyaki 2",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-03T00:00:00.000Z",
    "trans_id": "16aed38a-9381-4bfa-9f95-fd4c60966550",
    "amount": 33.1
  },
  {
    "merchant": "Kitchen 93",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-02T00:00:00.000Z",
    "trans_id": "505781ba-f9c4-49b6-8ae2-94261dffa248",
    "amount": 16
  },
  {
    "merchant": "Cafe Clover",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-02T00:00:00.000Z",
    "trans_id": "7b78ca4d-b43b-490b-9c08-377a127d3a14",
    "amount": 85
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-08-02T00:00:00.000Z",
    "trans_id": "c915e178-f0a5-4e42-9beb-a59fe2b9ab11",
    "amount": 9.74
  },
  {
    "merchant": "Taxi",
    "icon": "taxi",
    "category": "Travel",
    "trans_date": "2019-08-02T00:00:00.000Z",
    "trans_id": "df8fb39a-7ac3-46bb-895a-f9818ed393ab",
    "amount": 17.76
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-08-01T00:00:00.000Z",
    "trans_id": "8263f135-3c02-41d9-9fd9-a9ce20afc424",
    "amount": 20
  },
  {
    "merchant": "Between The Bread",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-01T00:00:00.000Z",
    "trans_id": "2d31dd02-bee5-4816-9c8e-182c3ff9aaef",
    "amount": 13.88
  },
  {
    "merchant": "Boqueria - Soho",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-08-01T00:00:00.000Z",
    "trans_id": "3a4c08ab-4f0c-4962-bcae-3fb654959a3f",
    "amount": 42.51
  },
  {
    "merchant": "Wall St. Journal",
    "icon": "wsj",
    "category": "Bills & Utilities",
    "trans_date": "2019-08-01T00:00:00.000Z",
    "trans_id": "4a2a3b1a-443d-4774-8ce7-5927aff536f2",
    "amount": 4
  },
  {
    "merchant": "Balthazar Restaurant",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-31T00:00:00.000Z",
    "trans_id": "4ad1a13f-a70d-43e7-a1f4-1db9063acae5",
    "amount": 32.7
  },
  {
    "merchant": "Dim Sum Palace",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-31T00:00:00.000Z",
    "trans_id": "5849ff43-f38e-4ee7-8070-7672f9506107",
    "amount": 32.34
  },
  {
    "merchant": "Duane Reade",
    "icon": "duanereade",
    "category": "Health & Wellness",
    "trans_date": "2019-07-30T00:00:00.000Z",
    "trans_id": "9029aaac-1558-44f5-bb45-6c577b6403e8",
    "amount": 5.78
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-07-30T00:00:00.000Z",
    "trans_id": "75686f90-f6ac-42ef-9324-f270646412b8",
    "amount": 20
  },
  {
    "merchant": "Cafe Select",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-30T00:00:00.000Z",
    "trans_id": "099cecd0-98a5-488c-baea-7a4b7ac131d6",
    "amount": 62.34
  },
  {
    "merchant": "Taxi",
    "icon": "taxi",
    "category": "Travel",
    "trans_date": "2019-07-30T00:00:00.000Z",
    "trans_id": "bfc8cdb5-0e98-4f4c-a3b0-6a8ee40b9d9d",
    "amount": 27.96
  },
  {
    "merchant": "Dill And Parsley",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-30T00:00:00.000Z",
    "trans_id": "ab7fdc40-34e7-40e9-a98d-ee0ff6082453",
    "amount": 10.82
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-07-29T00:00:00.000Z",
    "trans_id": "707aace7-59ad-43dd-9d24-f5caf48471f4",
    "amount": 19.49
  },
  {
    "merchant": "Amazon",
    "icon": "amazon",
    "category": "Shopping",
    "trans_date": "2019-07-29T00:00:00.000Z",
    "trans_id": "077d6b31-bba8-4732-bb7c-23ae9bb2711f",
    "amount": 1.08
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-07-29T00:00:00.000Z",
    "trans_id": "ac953948-2751-480d-9cc0-3417518f59f0",
    "amount": 8.71
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-29T00:00:00.000Z",
    "trans_id": "49ad4c25-f41f-4b6d-8721-227b4bd7cc20",
    "amount": 2.99
  },
  {
    "merchant": "Dill And Parsley",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-29T00:00:00.000Z",
    "trans_id": "0d13dd4f-86f5-4d4c-bb7e-b2733b5a0b12",
    "amount": 10.82
  },
  {
    "merchant": "Levain Bakery",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-07-28T00:00:00.000Z",
    "trans_id": "99453732-3fff-4ac6-8fe2-64a280cce604",
    "amount": 5.75
  },
  {
    "merchant": "Dim Sum Palace",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-28T00:00:00.000Z",
    "trans_id": "db7f828d-8fd3-4757-8fc0-225704915c2d",
    "amount": 22.21
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-07-28T00:00:00.000Z",
    "trans_id": "510d8bb2-8569-4b36-a465-83f2ef56bdca",
    "amount": 25
  },
  {
    "merchant": "Cafe Clover",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-28T00:00:00.000Z",
    "trans_id": "d178912b-427a-48dc-a860-71899b2870dd",
    "amount": 33
  },
  {
    "merchant": "The Smith Lincoln Cen",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-28T00:00:00.000Z",
    "trans_id": "8dd7244b-f202-4fc4-8c2c-8fd36d93e0c1",
    "amount": 61.17
  },
  {
    "merchant": "B&Amp;H Photo Store",
    "icon": "shopping",
    "category": "Shopping",
    "trans_date": "2019-07-28T00:00:00.000Z",
    "trans_id": "3f62ff8b-8c20-4b30-837f-f07148fb3c57",
    "amount": 88.1
  },
  {
    "merchant": "Cloisters Trie18239467",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "aa860b3a-4da6-4fcc-9205-448c93736730",
    "amount": 3.75
  },
  {
    "merchant": "Cloisters Trie18239467",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "c885f88a-b8d3-4666-8487-8d20839d5416",
    "amount": 15
  },
  {
    "merchant": "Ellington In The Park",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "dcfa9d08-e930-4eb6-9fce-889829d4989a",
    "amount": 118.25
  },
  {
    "merchant": "Venmo",
    "icon": "personal",
    "category": "Personal",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "cc1a8cbe-142a-4bbc-a1b5-ef2350b504c4",
    "amount": 18.02
  },
  {
    "merchant": "Met-Cloisters Admissions",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "aff7124e-3df0-4965-a06f-ed7f265a252e",
    "amount": 15
  },
  {
    "merchant": "Stumptown Coffee Roas",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "699cb601-8128-4d1e-8a24-2cc79312b817",
    "amount": 5.36
  },
  {
    "merchant": "Plumbenefits.Com",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-07-27T00:00:00.000Z",
    "trans_id": "83f6e75a-7a1c-4abf-aeb1-6cea6b8ea01e",
    "amount": 166
  },
  {
    "merchant": "7-Eleven",
    "icon": "7-eleven",
    "category": "Gas",
    "trans_date": "2019-07-26T00:00:00.000Z",
    "trans_id": "99ace8e5-3438-4d65-89bd-4a33d6b78bb9",
    "amount": 27.81
  },
  {
    "merchant": "Duane Reade",
    "icon": "duanereade",
    "category": "Health & Wellness",
    "trans_date": "2019-07-26T00:00:00.000Z",
    "trans_id": "54a69b09-7332-4446-b0e9-446e1de0b29c",
    "amount": 9.95
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-26T00:00:00.000Z",
    "trans_id": "c7c31b1a-7b21-49e6-b2af-b21e10e8a053",
    "amount": 2.99
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-07-26T00:00:00.000Z",
    "trans_id": "28196c32-3f50-4927-8293-6ae28bd1962e",
    "amount": 8.71
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-07-25T00:00:00.000Z",
    "trans_id": "110ff0ae-dfab-4d5e-a55a-d5a1610d9023",
    "amount": 20
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-07-25T00:00:00.000Z",
    "trans_id": "a72fd9bb-dd8e-40eb-ab01-a01660735db6",
    "amount": 8.71
  },
  {
    "merchant": "Dill And Parsley",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-25T00:00:00.000Z",
    "trans_id": "1d6193ef-b925-45c5-a09a-fc1ee5356638",
    "amount": 10.82
  },
  {
    "merchant": "Ua Union Square 14",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-07-25T00:00:00.000Z",
    "trans_id": "c9231e68-b28d-4bec-b643-14dce0c70082",
    "amount": 9.46
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-25T00:00:00.000Z",
    "trans_id": "2b0fe366-9f5d-4927-9336-f974b81fc52f",
    "amount": 2.99
  },
  {
    "merchant": "Dill And Parsley",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-24T00:00:00.000Z",
    "trans_id": "f1311b98-8793-4715-ab01-6d00607aeba1",
    "amount": 10.82
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-24T00:00:00.000Z",
    "trans_id": "ab973dfc-b9df-430a-8786-873f768c7552",
    "amount": 2.99
  },
  {
    "merchant": "Glaze 4th Ave",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-24T00:00:00.000Z",
    "trans_id": "0acc1b65-6f53-437c-a1d4-bd5977f5e779",
    "amount": 23.95
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-07-24T00:00:00.000Z",
    "trans_id": "83ff1aa7-736b-46c5-83fa-f6c3dd46510e",
    "amount": 8.71
  },
  {
    "merchant": "Apple",
    "icon": "apple",
    "category": "Shopping",
    "trans_date": "2019-07-24T00:00:00.000Z",
    "trans_id": "e09f882e-5721-4f81-af54-7b002691c9ca",
    "amount": 16.19
  },
  {
    "merchant": "The Information",
    "icon": "theinformation",
    "category": "Professional Services",
    "trans_date": "2019-07-24T00:00:00.000Z",
    "trans_id": "2a2cf1b8-a3c4-4214-8e40-6982611bada0",
    "amount": 10
  },
  {
    "merchant": "Dill And Parsley",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-23T00:00:00.000Z",
    "trans_id": "d606db30-ed8e-4216-b31a-5238daedc88f",
    "amount": 10.82
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-07-23T00:00:00.000Z",
    "trans_id": "907707ce-e01c-4642-8848-29ca3683a69e",
    "amount": 8.71
  },
  {
    "merchant": "Madame Vo",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-23T00:00:00.000Z",
    "trans_id": "62406524-2288-49e1-9071-13aa9c6dd2eb",
    "amount": 87.63
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-07-23T00:00:00.000Z",
    "trans_id": "ce525985-bdd9-4ce3-bf0b-5f6c078f1ed3",
    "amount": 12.79
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-23T00:00:00.000Z",
    "trans_id": "5f111f47-d116-43c0-b492-1bbdf335e991",
    "amount": 2.99
  },
  {
    "merchant": "Uber",
    "icon": "uber",
    "category": "Travel",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "84923ded-d919-4b44-8a39-316e47cde64a",
    "amount": 33.28
  },
  {
    "merchant": "Kobeyaki 1",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "a88f465c-a87d-40c1-a4b9-ec6e078661fe",
    "amount": 10.8
  },
  {
    "merchant": "Mta",
    "icon": "mta",
    "category": "Travel",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "c8eca10f-0153-4b29-a2ef-3ef37c51a64b",
    "amount": 20
  },
  {
    "merchant": "Aiyara Thai",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "55e948a9-b668-4c74-bd47-bac559b1de5f",
    "amount": 17.1
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "c2260eb5-03fb-4ece-9ac2-2bbd6f0e1897",
    "amount": 2.99
  },
  {
    "merchant": "Blue Bottle",
    "icon": "bluebottle",
    "category": "Food & Drink",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "903438bd-d390-41bc-ad83-05082b85557e",
    "amount": 4.9
  },
  {
    "merchant": "Lyft",
    "icon": "lyft",
    "category": "Travel",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "babfd890-1765-4ffe-92a6-35f592961b28",
    "amount": 15.59
  },
  {
    "merchant": "Starbucks",
    "icon": "starbucks",
    "category": "Food & Drink",
    "trans_date": "2019-07-22T00:00:00.000Z",
    "trans_id": "2542bd1c-c59f-4c27-a18d-0d30f27446df",
    "amount": 2.99
  },
  {
    "merchant": "Taxi",
    "icon": "taxi",
    "category": "Travel",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "bb14b0db-7e47-47a2-9f81-d5a0f1a3232b",
    "amount": 13.55
  },
  {
    "merchant": "Taxi",
    "icon": "taxi",
    "category": "Travel",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "57497824-a351-4a14-9b2b-db5abd4fbd61",
    "amount": 13.56
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "5e58332d-8fc2-4c1c-8371-b03882866f81",
    "amount": 9.74
  },
  {
    "merchant": "Adobe Cc",
    "icon": "adobecc",
    "category": "Shopping",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "c579a8fa-9e35-4488-bb9a-bbf31214c771",
    "amount": 15.33
  },
  {
    "merchant": "Ua Union Square 14",
    "icon": "entertainment",
    "category": "Entertainment",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "dc384bde-cdfc-45c6-aa9d-51393dbb3fc1",
    "amount": 34.8
  },
  {
    "merchant": "Market Crates",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "a232b114-a7b1-4473-bc54-59ce4dc173b1",
    "amount": 5
  },
  {
    "merchant": "Cafe Clover",
    "icon": "foodanddrink",
    "category": "Food & Drink",
    "trans_date": "2019-07-21T00:00:00.000Z",
    "trans_id": "e3a004d0-5388-455d-9974-f3ac3666e5ba",
    "amount": 61.17
  },
  {
    "merchant": "Chipotle",
    "icon": "chipotle",
    "category": "Food & Drink",
    "trans_date": "2019-07-20T00:00:00.000Z",
    "trans_id": "6723b48f-634f-4f5a-beb1-930309eedc62",
    "amount": 9.74
  }
]