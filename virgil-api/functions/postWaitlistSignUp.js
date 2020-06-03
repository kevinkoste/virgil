import handler from "../libs/handler-lib"
import ses from "../libs/ses-lib"
// import { GoogleSheetsAppend } from '../libs/googleapis-lib'

/**
 * function to handle waitlist signup from website
 * sends sign-up email via SES and adds email to Google Sheet
 */
export const main = handler(async (event, context) => {

  // parse body
  const requestBody = JSON.parse(event.body)

  // append new email to Google Sheet
  // try {
	// 	GoogleSheetsAppend([[requestBody.email, new Date()]])
	// } catch {
	// 	console.log('Unable to write to Google Sheet')
	// }

  // generate SES message params and try send
  const messageParams = GenerateSignUpMessageParams(requestBody.email)
  try {
    console.log('about to await ses.sendEmail(params)')
    await ses.sendEmail(messageParams)
    return { message: "success" }
  } catch {
    throw new Error("Unable to send sign-up email")
  }

})

// generates SES message params for a given email address
const GenerateSignUpMessageParams = (email) => {

  const htmlBody = `
    <link rel="stylesheet" href="https://use.typekit.net/ile7qys.css">
    <style>
    p {
      font-family: gill-sans-nova, sans-serif;
      font-weight: 400;
      font-style: normal;
      color: #000;
      word-wrap: break-word;
      letter-spacing: 0.5px;

      font-size: 14px;
      line-height: 18px;
    }
    #header {
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
    }
    .image {
      height: 50px;
      width: 200px;
      background-image: url("https://api.virgilcard.com/icons/virgil.png");
      background-size: contain;
      background-repeat: no-repeat;
      margin-top: 30px;
    }
    #wrapper {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    </style>
    <div style="align-items: center;">
    <div id="wrapper">
    <div class="image"></div>
    <div>
      <p id="header">Thanks for requesting access</p> 
      <p>
        We've been working hard to bring a credit card to market that offers simplicity, value, and modern technology in an otherwise antiquated and complex industry.
        We will reach out soon with more details.
      </p>
      <p>Our best,</p><p>The Virgil Team</p>
    </div>
  </div>
  </div>
  `

  const messageParams = {
    Source: 'Virgil <hello@virgilcard.com>',
    Destination: { ToAddresses: [email] },
    ReplyToAddresses: ['aayush@virgilcard.com', 'kevin@virgilcard.com', 'matthew@virgilcard.com'],
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Virgil Access'
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: htmlBody
        }
      }
    }
  }

  return messageParams
}