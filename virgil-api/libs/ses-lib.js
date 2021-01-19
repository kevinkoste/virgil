import AWS from 'aws-sdk'

const ses = new AWS.SES({
  apiVersion: '2010-12-01',
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
})

export default {
  sendEmail: (params) => ses.sendEmail(params).promise(),  
}