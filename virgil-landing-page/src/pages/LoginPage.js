// core
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// styling
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import { Div } from '../styles/CustomGrid'

// media


// deployment stuff
const loginEndpoint = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:8080/login'
  : 'https://api.virgilcard.com/login'

export default function IntentPage() {

  let mobileView = useDetectMobileView()

  const [submitted, setSubmitted] = useState(false)

  const [inputUser, setInputUser] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const [invalidInputUser, setInvalidInputUser] = useState(false)
  const [invalidInputPassword, setInvalidInputPassword] = useState(false)


  const handleSubmit = () => {
    axios.post(loginEndpoint, {user: inputUser, password: inputPassword})
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Div web={12} style={{backgroundColor:'#000', flexDirection:'column', alignItems:'center', minHeight:'100vh'}}>

      <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <HeaderTitle>
            Virgil
          </HeaderTitle>
        </Link>
      </HeaderContainer>

      <Div web={12} style={{minHeight:mobileView?'10vh':'15vh', flexDirection:'column', 
        justifyContent:'center', alignItems:'center'}}>
        <Div web={10} mobile={10} style={{flexDirection:'column', justifyContent:'center'}}>
          <TitleText style={{color:'white',textAlign: mobileView?'center':'left'}}>
            Login
          </TitleText>
        </Div>
      </Div>

      <Div web={12} style={{minHeight:mobileView?'80vh':'70vh', backgroundColor:'white', 
        flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

        {/* <Div web={10} mobile={10} style={{flexDirection:mobileView?'column':'row'}}> */}

          {/* <Div web={6} mobile={12} style={{flexDirection:'column', alignItems:'center'}}>
            <BodyText>
              Virgil is a credit card that allows its members to use earned rewards credits to purchase personalized rewards from modern brands.
            </BodyText>
            <BodyText>
              When customers purchase rewards, revenue is shared between Virgil and its partner brands at rates comparable to affiliate marketing commissions.
            </BodyText>
            <BodyText>
              Virgil enables brands to: 1) find an engaged, high-intent customer on a frictionless commerce platform, 2) guarantee ROAS with no-cost clicks and impressions, and 3) be a part of the future of consumer credit cards.
              By entering your name, you are communicating interest in being among Virgil's initial brand partners.
            </BodyText>
          </Div> */}

          

          { (!submitted)
          ? <Div web={6} mobile={12} style={{flexDirection:'column',
              alignItems:mobileView?'center':'center', justifyContent:'flex-end'}}>
              <Div web={8} mobile={12} style={{flexDirection:'row', alignItems:'center', padding:'10px 0px 10px 0px'}}>
                <InputTemplate 
                  input={inputUser}
                  setInput={setInputUser}
                  placeholder={'Username'}
                  invalidInput={invalidInputUser}
                  setInvalidInput={setInvalidInputUser}
                  />
              </Div>

              <Div web={8} mobile={12} style={{flexDirection:'row', alignItems:'center', padding:'10px 0px 10px 0px'}}>
                <InputTemplate 
                  input={inputPassword}
                  setInput={setInputPassword}
                  placeholder={'Password'}
                  invalidInput={invalidInputPassword}
                  setInvalidInput={setInvalidInputPassword}
                  />
              </Div>

              <Div web={8} mobile={12} style={{flexDirection:'row', alignItems:'center', padding:'10px 0px 10px 0px'}}>
                <StyledButton style={{margin:'20px 0px 0px 0px'}} onClick={handleSubmit}>
                  Submit
                </StyledButton>
              </Div>
            </Div>
          : <Div web={6} mobile={12} style={{flexDirection:'column',
              alignItems:'center', justifyContent:'center'}}>
              <BodyText>
                You logged in!
              </BodyText>
            </Div>
          }

        </Div>

      {/* </Div> */}

      {/* little strip of black */}
      <Div style={{height:mobileView ? '0':'5vh',
        backgroundColor:'#FFF'}} />

      <FooterContainer web={11}>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-start'}}>    
          <Link to='/' style={{textDecoration: 'none'}}>
            <FooterTitle>
              Virgil
            </FooterTitle>
          </Link>        
          <BodyText style={{color:'#FFF'}}>
            2020 © Virgil Technologies
          </BodyText>
        </Div>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-end'}}>              
          <BodyText style={{color:'#FFF'}}>
            Terms of Service
          </BodyText>
          <BodyText style={{color:'#FFF'}}>
            Privacy Policy
          </BodyText>
        </Div>
      </FooterContainer>

    </Div>
  )
}


// pass parents local state as props: input, setInput
// pass constant as props: placeholder, 
const InputTemplate = (props) => {

  const handleChange = (event) => {
    if (props.invalidInput) {
      props.setInvalidInput(false)
    }
    props.setInput(event.target.value)
  }

  return (
    <StyledInput
      name="input"
      type="text"
      placeholder={props.placeholder}
      onChange={handleChange}
      value={props.input}
      validationBorder={(props.invalidInput) ? 'solid red': 'solid #000'}
    />
  )
}


const StyledInput = styled.input`
  border-radius: 0;
  box-shadow: none;
  flex: 1;
  min-height: 30px;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
  font-size: 14px;
  border: none;
  border-bottom: ${props => props.validationBorder};
  border-width: 1px;
  margin-right: 10px;

  background-color: #FFF;
  color: #000;

  ${media.md`
    margin-right: 0px;
    width: 100%;
  `}
  ::placeholder {
    color: #D0D0D0;
  }
  :focus::placeholder {
    opacity: 0;
  }
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
`



const StyledButton = styled.button`
  width: 100%;
  min-height: 30px;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 14px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #000;
  ${media.md`
    width: 100%;
    margin-top: 20px;
  `}
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
`


const HeaderContainer = styled(Div)`
  justify-content: flex-start;
  height: 15vh;
  ${media.md`
    height: 9vh;
    justify-content: center;
  `}
`
const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #FFF;
  font-weight: 400;
  ${media.md`
    font-size: 44px;
  `}
`

const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  border-top: solid #FFF;
  border-width: 1px;
  ${media.md`
    height: 20vh;
    flex-direction: row;
    justify-content: center;
    border-top: unset;
    padding-bottom: 5vh;
  `}
`
const FooterTitle = styled(HeaderTitle)`
  margin-bottom: 10px;
`

const TitleText = styled.h2`
  font-family: 'romana';
  font-size: 48px;
  color: #000;
  font-weight: 400;
  text-transform: capitalize;
  word-wrap: break-word;
  margin-bottom: 20px;
  ${media.md`
    font-size: 32px;
    text-align: center;
  `}
`

const BodyText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #000;
  word-wrap: break-word;
  letter-spacing: 0.5px;

  font-size: 18px;
  line-height: 24px;

  ${media.md`
    font-size: 14px;
    line-height: 18px;
  `}
`



