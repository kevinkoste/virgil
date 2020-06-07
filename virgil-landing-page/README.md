# Virgil Landing Page

This is the repo for Virgil's landing page, a React SPA hosted as a static site on AWS S3 [virgilcard.com](https://virgilcard.com)

### About

* Giveaway: In early May, Virgil ran a giveaway that led to 1700 signups in less than a week
* Conversion: The landing page has an email conversion rate of 32%
* Referral System: Users could refer friends and track their odds of winning on their Giveaway Dashboard
* How It Works: Our How It Works click-through explained our business model [virgilcard.com/howitworks](https://virgilcard.com/howitworks)

### Technology

* Server: Node/Express API (AWS EC2 instance in VPC public subnet)
* Database: Postgres (AWS RDS instance in VPC private subnet)
* Email: Personalized emails for new user signups (AWS SES)
* Monitoring: Replicated referral data for quick monitoring and "fraud" detection (Google Sheets API)

### Screenshots

##### Referral Dashboard
 
![Referral Dashboard Image](https://github.com/kevinkoste/virgil-web-app/blob/master/src/img/readme/dashboard.png)

##### How It Works
 
![How It Works Image](https://github.com/kevinkoste/virgil-web-app/blob/master/src/img/readme/howitworks.png)

##### Home on Mobile
![Mobile Image](https://github.com/kevinkoste/virgil-web-app/blob/master/src/img/readme/mobile.png)

