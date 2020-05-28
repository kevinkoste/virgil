## Virgil React App

This is the repo for Virgil's website, a React app hosted as a static site on AWS S3. (virgilcard.com)

#### About this project

* Giveaway: In early May, Virgil ran a giveaway that led to 1700 signups in less than a week
* Referral System: Users could refer friends and track their odds of winning on their Giveaway Dashboard
* How It Works: Our How It Works experience kept users engaged while we explained our business model (virgilcard.com/howitworks)

#### Technical specifications

* Server: Node/Express API (EC2 instance in public subnet of VPC)
* Database: Postgres (RDS instance in private subnet of VPC).
* Email: Personalized emails for new user signups (AWS SES)
* Monitoring: Replicated referral data for quick monitoring and "fraud" detection (Google Sheets API)

