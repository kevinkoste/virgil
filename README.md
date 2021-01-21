# Virgil

In January 2020, I teamed up with two friends to build a high-engagement consumer credit card. We never launched Virgil, but we did build two products that I'd like to share.

<div align="center"><em><b>Mobile App - Home and Spending</b></em></div>

![Image of Virgil App 1](https://github.com/kevinkoste/kevinkoste.com/raw/main/public/_work/virgil-app-1.png)

The idea was to offer a credit card that uses data to improve the spending experience. It was a paid subscription model, with all interchange passed to the customer as rewards from direct-to-consumer brands. The business would become profitable over time by gaining leverage in the revenue share agreements it struck with reward partners, while keeping customer reward rates the same.

## Mobile App

Before committing to an actual card program, we decided to build a demo credit card app populated with transaction data from Plaid. The screenshots below use my friend's Chase credit card transaction history.

Much of the design, layout, and navigation was lifted from leading consumer fintech apps like Clarity Money, Truebill & Robinhood. To improve the quality of the demo we did a few things manually, like mapping merchant IDs to company logos. It's a React Native app backed by a small Node/Express service and Postgres database to handle the [**Plaid Link flow**](https://plaid.com/docs/link/react-native/).

<div align="center"><em><b>Mobile App - Rewards</b></em></div>

![Image of Virgil App 2](https://github.com/kevinkoste/kevinkoste.com/raw/main/public/_work/virgil-app-2.png)

<div align="center"><em><b>Mobile App - New Reward</b></em></div>

![Image of Virgil App 3](https://github.com/kevinkoste/kevinkoste.com/raw/main/public/_work/virgil-app-3.png)

## Landing Page

We built a landing page to measure interest in the brand & product. The images and copy were designed to address common complaints about existing card offerings while keeping things exciting.

<div align="center"><em><b>Landing Page (Mobile)</b></em></div>

![Image of Virgil Landing Page Mobile](https://github.com/kevinkoste/kevinkoste.com/raw/main/public/_work/virgil-web-4.png)

We also built a [**How It Works click-through article**](https://virgilcard.com/howitworks) to give some background about the card industry and explain Virgil's business model. This was a hit - we got a lot of unsolicited positive feedback on it.

To drive traffic, we ran a giveaway that took place over 5 days. After a visitor entered their email address on the landing page, they were redirected to a "dashboard" where they found their referral link, the number of people that used their link to sign up, and their chance to win.

The giveaway generated a ~1700 person waitlist at a 32% conversion rate. The referral rate distribution was skewed, with a dozen or so people racking up 30+ referrals.

<div align="center"><p><em><b>Landing Page - Referral Dashboard</b></em></p></div>

![Image of Virgil Landing Page 1](https://github.com/kevinkoste/kevinkoste.com/raw/main/public/_work/virgil-web-3.png)

The landing page is a bare React app, which in retrospect makes very little sense. Today, I would probably use [**Next.js**](https://nextjs.org/) for easy static generation and out-of-the-box image optimization.
