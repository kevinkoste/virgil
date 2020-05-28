## Virgil React App

This is the repo for Virgil's website, a React app hosted as a static site on AWS S3. (virgilcard.com)

#### About this project

* Giveaway: In early May, Virgil ran a giveaway to gauge interest in our product. This strategy led to 1700 signups in less than a week.
* Referral System: We built a custom referral system where users could refer friends and track their odds of winning on their Giveaway Dashboard.
* How It Works: We also built a How It Works experience that kept users engaged as we explained our business model. (virgilcard.com/howitworks)


#### Technical specifications

* Server: Node/Express API (EC2 instance in public subnet of VPC)
* Database: Postgres (RDS instance in private subnet of VPC).
* Integrated services:
** Personalized emails for new user signups (AWS SES)
** Replicated referral data for easy monitoring by our team (Google Sheets API)


