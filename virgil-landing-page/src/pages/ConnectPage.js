// core
import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// plaid stuff
import axios from 'axios'
import { usePlaidLink } from 'react-plaid-link'

// styling
import { Grid } from '@material-ui/core/'
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'

export default function ConnectPage() {

  let mobileView = useDetectMobileView()

  const [authenticated, setAuthenticated] = useState(false)

  return (
    <Grid container spacing={0} justify='center'
      style={{minHeight: (mobileView) ? '85vh' : '100vh'}}>

        <Grid item container xs={10} alignItems='center'
          style={{height:(mobileView) ? '15vh' : '17vh'}}
          justify={(mobileView) ? 'center' : 'flex-start'}>

          <Link to='/' style={{textDecoration: 'none'}}>
            <HeaderTitle>
              Virgil
            </HeaderTitle>
          </Link>

        </Grid>


        <Grid item container xs={10} justify='center' alignItems='center'
          direction={(mobileView) ? 'column' : 'row'}
          style={{height:(mobileView) ? '65vh' : '66vh'}}>

            { (authenticated)
              ? <ConnectView />
              : <SecretView 
                setAuthenticated={setAuthenticated}
                />
            }

        </Grid>

        <Grid item container xs={10}  style={{height:(mobileView) ? '5vh' : '17vh'}}>
          <Footer />
        </Grid>

    </Grid>
  )
}

const ConnectView = () => {

  let mobileView = useDetectMobileView()

  const [emailInput, setEmailInput] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (event) => {
    setEmailInput(event.target.value)
    setInvalidInput(event.target.value === '')
  }

  // const PLAID_SERVICE_ADDRESS = 'http://localhost:3000/connect/submit'
  const PLAID_SERVICE_ADDRESS = 'https://api.virgilcard.com/connect/submit'
  const PLAID_PUBLIC_KEY = '8de7a83e5d98f6d70e1f48311550dd'

  const [token, setToken] = useState(null)
  const [metadata, setMetadata] = useState(null)

  // onSuccess callback used by Plaid Link
  const onSuccess = useCallback((token, metadata) => {
    setSubmitted(true)
    setToken(token)
    setMetadata(metadata)
  }, [])

  // hook listens for new token, then makes post request to our backend
  useEffect(() => {
    if (token) {
      axios.post(PLAID_SERVICE_ADDRESS, {
        email: emailInput,
        public_token: token,
        metadata: metadata})
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const config = {
    clientName: 'Virgil',
    env: 'development',
    product: ['auth', 'transactions'],
    publicKey: PLAID_PUBLIC_KEY,
    onSuccess,
  }

  const { open, ready } = usePlaidLink(config)


  const handleClick = () => {
    if (emailInput === '' || !emailInput.includes('@')) {
      setInvalidInput(true)
    } else {
      open()
    }
  }

  return (
    <ContentContainer container xs={(mobileView) ? 12 : 8} justify='center' alignItems='center'
      direction='column'>
      <Grid container direction='column' justify='center' alignItems='center' style={{flex: 1}}>
        { (!submitted)
          ? <TitleText>Connect to Earn a Gift</TitleText>
          : <TitleText>Thanks, We'll be in Touch!</TitleText>
        }
        { (!submitted)
          ? <BodyText>
              The Virgil founders (Aayush, Kevin, and Matt) are trying to get better at recommending products
              based on credit card data. Connect with us by sharing your spending history, and we will send you 
              a gift that we think you'll like.
              <span style={{fontWeight: 'bold'}}> Please use whichever credit or debit card you use for everyday purchases.</span> This experiment is only meant
              for friends and family of the founders. We won't (now or ever!) sell your data, and once we are done with
              this exercise, we will delete any data that we used.
            </BodyText>
          : <BodyText></BodyText>
        }
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center'>
        { (!submitted)
          ? <>
            <EmailInput
              name="emailInput"
              type="email"
              placeholder="YOUR EMAIL"
              value={emailInput}
              onChange={handleChange}
              validationBorder={(invalidInput) ? 'solid red' : 'solid #151515'}
              />
            <ConnectButton onClick={handleClick} disabled={!ready}>
                Connect Account
            </ConnectButton>
          </>
          : <></>
        }
      </Grid>
    </ContentContainer>
  )
}

const SecretView = (props) => {

  let mobileView = useDetectMobileView()

  const [secretInput, setSecretInput] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)
  const handleChange = (event) => {
    setSecretInput(event.target.value)
    if (invalidInput) setInvalidInput(false)
  }

  const handleClick = () => {
    console.log(secretInput)
    console.log(secretInput.toLowerCase())
    if (secretInput.toLowerCase() === ('virgilalpha') ) {
      props.setAuthenticated(true)
    } else {
      setInvalidInput(true)
    }
  }


  return (
    <ContentContainer item container xs={(mobileView) ? 12 : 8} justify='center' alignItems='center'
      direction='column'>
      <Grid container direction='column' justify='center' alignItems='center' style={{flex: 1}}>
        <TitleText>Psst, enter the secret code!</TitleText>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center'>
        <EmailInput
          name="secretInput"
          type="text"
          placeholder="Secret Code"
          value={secretInput}
          onChange={handleChange}
          validationBorder={(invalidInput) ? 'solid red' : 'solid #151515'}
          />
        <ConnectButton onClick={handleClick}>
            Submit
        </ConnectButton>
      </Grid>
    </ContentContainer>
  )
}


const ContentContainer = styled(Grid)`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #151515;
  font-weight: 400;
  ${media.md`
    font-size: 44px;
  `}
`

const Footer = styled.div`
  height: 128px;
`

const TitleText = styled.h2`
  font-family: 'romana';
  font-size: 36px;
  color: #151515;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 30px;
  text-align: center;

  ${media.md`
    font-size: 32px;
  `}
`

const BodyText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #151515;
  letter-spacing: 1px;

  line-height: 27px;
  font-size: 18px;
  text-align: center;

  margin-bottom: 30px;
  ${media.md`
    line-height: 25px;
    font-size: 16px;
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
    margin: 0px 0px 30px 0px;
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

const ConnectButton = styled.button`
	border: none;
  padding: 0;
  width: 214px;

  height: 60px;
  font-size: 18px;

  ${media.md`
    height: 50px;
    width: 100%;
    font-size: 16px;
  `}

  border: solid #151515;
  border-width: 1px;

  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;

  background-color: #FFFFFF;
  color: #151515;
`