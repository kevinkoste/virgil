# Virgil Mobile API

This monorepo contains all of the services and resources backing Virgil's React Native mobile app

### Features

* Plaid: Provides service for React Native Plaid Link integration
* Webhooks: Implements Plaid webhooks to give users immediate updates to their transaction data
* Authentication: Supports in-app onboarding with MFA and SMS verification

### Technology
* Stateless, event-driven architecture handles all API requests and business logic (AWS Lambda)
* YML files orchestrate deployment of ~50 AWS resources (Serverless Framework, CloudFormation)
* Data is stored in managed NoSQL tables that trigger Lambda functions using Streams (AWS DynamoDB)
* Authentication and sign-up emails triggered based on business logic (AWS SES)
* Logs are dumped to static storage (AWS S3)
* Multiple integrations with non-AWS APIs (Google Sheets, Plaid, Fidel)

### To Do
* Build monitoring/debugging web app fed by logs dumped to S3
* Implement RDS Postgres database in parallel with NoSQL tables to support fast join operations and improve security

