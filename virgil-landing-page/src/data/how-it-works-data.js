import React from 'react'

const data = [
  {
    "id": "start",
    "section": "",
    "title": ["How Virgil Works"],
    "body1": "If you’re like us, you like your credit card. It’s shiny, and metal, and gets you free flights and hotel rooms. What’s not to love?",
    "body2": "We felt the same way, but we thought our cards could do more. Here's how we think about 1) rewards, 2) data, and 3) the business model of credit cards.",
    "image": "1.png",
    "nextID": "rewards"
  },
  {
    "id": "rewards",
    "section": "rewards",
    "title": ["Credit Card Rewards Haven’t Changed Since The",<span>&nbsp;</span>,"’90s"],
    "body1": "Credit cards are all about rewards. Since the 1990’s, credit cards have partnered with airlines and hotel chains to offer cardholders flights and hotel rooms.",
    "body2": ["Rewards have been the same for years",<span>&mdash;</span>,"but how do rewards work, and why do I get them each time I swipe my card?"],
    "image": "2.png",
    "nextID": "rewards-fees",
    "progress": 1
  },
  {
    "id": "rewards-fees",
    "section": "rewards",
    "title": "Card Companies Make Money with Every Swipe",
    "body1": "Each time you swipe a credit card, your card issuer (Chase, American Express, Barclays, etc.) collects a fee.",
    "body2": "This fee ranges anywhere from 2.0%-2.5% of the amount you spent. This money, called interchange, funds the rewards or cash back for your cards.",
    "image": "3.png",
    "nextID": "rewards-points",
    "progress": 2,
  },
  {
    "id": "rewards-points",
    "section": "rewards",
    "title": ["Points Were Built to Confuse You"],
    "body1": ["Your credit card company wants to keep that interchange as profit. So they invented clever games",<span>&mdash;</span>,"points, multipliers, and redemption rates",<span>&mdash;</span>,"to make it hard for you to understand how much of your interchange you redeem and how much they keep."],
    "body2": ["33% of credit card rewards earned each year are never redeemed, roughly $15B each year.",<a style={{color:'#000', textDecoration:'underline', verticalAlign:'super',fontSize:10}} target="_blank" rel="noopener noreferrer" href='https://www.creditcards.com/credit-card-news/six-reasons-credit-card-rewards-go-unredeemed-1277.php'>1</a>," "],
    "image": "4.png",
    "nextID": "rewards-interchange",
    "progress": 3,
  },
  {
    "id": "rewards-interchange",
    "section": "rewards",
    "title": "Virgil Gives You Back Your Interchange",
    "body1": ["Virgil doesn’t keep your interchange. It gives it all back to you as rewards. Your 2.0% - 2.5% grows to over 3.5% spent at our favorite brands, better than the competition."],
    "body2": "In the Virgil app, redeeming rewards is like shopping, but everything is free.",
    "image": "5.png",
    "nextID": "data",
    "progress": 4,
  },
  {
    "id": "data",
    "section": "data",
    "title": "Your Data Benefits Card Companies, Not You",
    "body1": ["Your credit card knows a lot about you. What you buy, when you buy, and where you buy. Credit card companies take what they know about you and sell it to hedge funds and advertisers."],
    "body2": ["Every year, it’s a business that brings in $400M, and your data is the product.",<a style={{color:'#000', textDecoration:'underline', verticalAlign:'super',fontSize:10}} target="_blank" rel="noopener noreferrer" href='https://www.forbes.com/sites/petercohan/2018/07/22/mastercard-amex-and-envestnet-profit-from-400m-business-of-selling-transaction-data/#7838f7267722'>2</a>,""],
    "image": "6.png",
    "nextID": "data-experience",
    "progress": 5,
  },
  {
    "id": "data-experience",
    "section": "data",
    "title": "Virgil Uses Your Data to Improve Your Experience",
    "body1": "Virgil doesn't sell your data. Instead, it uses it to drive personalized recommendations for things to buy, eat, and enjoy. It keeps track of your subscriptions, provides spending analysis tools and gets better the more you use it.",
    "body2": ["You can also choose to connect with friends to use their data to drive your recommendations."],
    "image": "7.png",
    "nextID": "data-tech",
    "progress": 6,
  },
  {
    "id": "data-tech",
    "section": "data",
    "title": "Virgil Uses Modern Recommendation Technology",
    "body1": "Why don’t credit cards already use your data this way? In short, they’re behind the times when it comes to technology. Virgil has borrowed modern data science techniques like collaborative filtering and hybrid recommender systems from companies like Spotify and Netflix to analyze spending.",
    "body2": "Curious to see how this works? We’ll analyze your current spending data and send you a gift we think you’ll love. If interested, drop us a line at recommend@virgilcard.com.",
    "image": "9.png",
    "nextID": "businessmodel",
    "progress": 7,
  },
  {
    "id": "businessmodel",
    "section": "business model",
    "title": "They’re Hoping You Miss A Payment",
    "body1": ["60% of people who carry a credit card balance do so because they forget to make their monthly payment.",<a style={{color:'#000', textDecoration:'underline', verticalAlign:'super',fontSize:10}} target="_blank" rel="noopener noreferrer" href='https://www.creditcards.com/credit-card-news/late-payment-survey.php'>3</a>,""],
    "body2": ["Card companies love it when you miss payments, since 83% of their revenues come from interest.",<a style={{color:'#000', textDecoration:'underline', verticalAlign:'super',fontSize:10}} target="_blank" rel="noopener noreferrer" href='https://www.creditcards.com/credit-card-news/late-payment-survey.php'>4</a>,""],
    "image": "10.png",
    "nextID": "businessmodel-chargecard",
    "progress": 8,
  },
  {
    "id": "businessmodel-chargecard",
    "section": "business model",
    "title": "Virgil Doesn’t Let You Hold a Balance",
    "body1": ["Virgil is a charge card",<span>&mdash;</span>,"which means it needs to be paid off in full at the end of each month."],
    "body2": "It works just like any other credit card, but you can’t hold a balance, and you’ll never be charged interest.",
    "image": "12.png",
    "nextID": "businessmodel-subscription",
    "progress": 9,
  },
  {
    "id": "businessmodel-subscription",
    "section": "business model",
    "title": "Virgil Charges A Transparent Membership Fee",
    "body1": "We don’t try to get you with interest or interchange. Instead, we charge an annual fee of $300 and offer a sign-on bonus of $150. We wanted to develop a clear, upfront pricing structure in exchange for offering best-in-class rewards, a personalized experience, and unparalleled service.",
    "body2": ["No games or gimmicks, just one annual fee",<span>&mdash;</span>,"fair and square."],
    "image": "13.png",
    "nextID": "end",
    "progress": 10,
  },
  {
    "id": "end",
    "section": "",
    "title": "Request an Invite",
    "body1": "Virgil will launch with a group of early members in the New York, San Francisco, and Los Angeles areas. Add your email below to request access.",
    "body2": "We’re glad to have you along for this journey.",
    "image": "14.png",
    "nextID": "start"
  }
]


export default data