import fs from 'fs'
import readline from 'readline'
import { google } from 'googleapis'

// configure google sheets sheet id, scopes, and credential/token files
const GOOGLE_SHEET_ID_EMAILS = process.env.GOOGLE_SHEET_ID_EMAILS
const SCOPES = ['https://www.googleapis.com/auth/drive']

const TOKEN_PATH = './libs/googleapis-secrets/token.json'
const CREDENTIAL_PATH = './libs/googleapis-secrets/credentials.json'

// G Drive helper functions
function authorize(credentials, callback, data) {
  const {client_secret, client_id, redirect_uris} = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0])
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback, data)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client, data)
  })
}
function getAccessToken(oAuth2Client, callback, data) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client, data)
    })
  })
}

// custom, append to sheet
function appendToSheet(auth, data) {
  const sheets = google.sheets({version: 'v4', auth})
  sheets.spreadsheets.values
    .append({
      spreadsheetId: GOOGLE_SHEET_ID_EMAILS,
      range: 'A1',
      resource: {values: data},
      valueInputOption: 'RAW'
    })
    .then((res) => console.log('Successfully appended to Google Sheet'))
    .catch((err) => console.log(err))
}

export const GoogleSheetsAppend = (data) => {
  fs.readFile(CREDENTIAL_PATH, (err, content) => {
    if (err) {
      console.log('Error loading client secret file:', err)
    } else {
      authorize(JSON.parse(content), appendToSheet, data)
    }
  })
}
