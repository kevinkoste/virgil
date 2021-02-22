//core
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// styling
import { Grid } from '@material-ui/core/'
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'

// simple end text
export default function SignUpView () {

  let mobileView = useDetectMobileView()

  const history = useHistory()

  const waitlistEndpoint = 'https://api.virgilcard.com/waitlist'

  const [emailInput, setEmailInput] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)

  const handleChange = (event) => {
    setEmailInput(event.target.value)
    setInvalidInput(event.target.value === '')
  }

  const handleEmailSubmit = () => {
    if (emailInput === '' || !emailInput.includes('@')) {
      setInvalidInput(true)
    } else {
      history.push('recs')
      axios.post(waitlistEndpoint, { email: emailInput} )
        .then(response => console.log(response))
        .catch(error => console.log(error))
      setEmailInput('')
    }
  }

  if (mobileView) {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={12} justify='center' alignItems='center'
          direction='column' style={{height:'100%'}}>

          <Grid container direction='column' justify='space-between' alignItems='center' style={{flex: 1}}>

          <QuestionText>
            Get your results
          </QuestionText>

          <EmailInput
            name="emailInput"
            type="email"
            placeholder="YOUR EMAIL"
            tabindex="1"
            value={emailInput}
            onChange={handleChange}
            validationBorder={(invalidInput) ? 'solid red' : 'solid #151515'}
            />

          <SubmitButton onClick={handleEmailSubmit}>
            UNLOCK
          </SubmitButton>

          </Grid>

          <SkipButton onClick={() => history.push('recs')}>
            Skip
          </SkipButton>

  
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container item xs={12} justify='center' alignItems='center'
        style={{height:'100%'}}>
        <Grid container item xs={8} justify='space-between' alignItems='center'
          direction='column' style={{height:'100%'}}>

          <QuestionText>
            Get your results
          </QuestionText>

          <FormContainer>

            <EmailInput
              name="emailInput"
              type="email"
              placeholder="YOUR EMAIL"
              tabindex="1"
              value={emailInput}
              onChange={handleChange}
              validationBorder={(invalidInput) ? 'solid red' : 'solid #151515'}
              />

            <SubmitButton onClick={handleEmailSubmit}>
              UNLOCK
            </SubmitButton>

          </FormContainer>

          <SkipButton onClick={() => history.push('recs')}>
            Skip
          </SkipButton>

        </Grid>
      </Grid>
    )
  }
}

const QuestionText = styled.h2`
  font-family: 'romana';
  font-size: 36px;
  color: #151515;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: capitalize;
  ${media.md`
    font-size: 32px;
    text-align: center;
    margin-top: 30px;
  `}
`

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.md`
    flex-direction: column;
    margin-bottom: 20px;
  `}
`

const EmailInput = styled.input`
  flex: 1;
  height: 60px;
  font-size: 18px;
  margin: 0px 30px 0px 30px;
  ${media.md`
    flex: none;
    height: 50px;
    font-size: 16px;
    width: 100%;
    margin: 0px 0px 0px 0px;
  `}
  
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 10px 15px;

  border: none;
  border-bottom: ${props => props.validationBorder};
  border-width: 1px;

  ::placeholder {
    color: #D0D0D0;
  }
  :focus::placeholder {
    opacity: 0;
  }
`

const SubmitButton = styled.button`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 0;
  padding: 0;
  border: none;
  width: 240px;
  height: 60px;
  font-size: 18px;
  margin: 0px 30px 0px 30px;

  ${media.md`
    align-self: center;
    height: 50px;
    width: 100%;
    font-size: 16px;
    margin: 0px 0px 30px 0px;
  `}

  border: solid #151515;
  border-width: 1px;


  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
`

const SkipButton = styled.button`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 0;
  padding: 0;
  border: none;
  width: 240px;
  height: 60px;
  font-size: 18px;

  ${media.md`
    align-self: center;
    height: 50px;
    width: 100%;
    font-size: 16px;
  `}

  border: solid #E0E0E0;
  border-width: 1px;

  font-family: gill-sans-nova, sans-serif;
  color: #E0E0E0;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
`


