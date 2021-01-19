# Virgil Mobile API (work in progress)

This repo contains all of the services and resources backing Virgil's React Native mobile app

### Features

* Plaid: Provides service for React Native Plaid Link integration
* Webhooks: Implements Plaid webhooks to give users immediate updates to their transaction data
* Authentication: Supports in-app onboarding with MFA and SMS verification

### Technology
* Serverelss architecture handles all API requests and business logic (AWS Lambda)
* YML files orchestrate deployment of ~70 AWS resources (AWS CloudFormation)
* Authentication and sign-up emails triggered based on business logic (AWS SES)
* Integrated with external APIs (Google Sheets, Plaid, Fidel)
