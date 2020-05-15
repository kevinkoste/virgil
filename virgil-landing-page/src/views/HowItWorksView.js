//core
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// styling
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import { Div } from '../styles/CustomGrid'
import { TitleText, BodyText } from '../styles/DefaultStyles'

// data
import howitworksData from '../data/how-it-works-data.js'

// import img1 from '../img/howitworks_images/desktop/1.png'
import img2 from '../img/howitworks_images/desktop/2.png'
import img3 from '../img/howitworks_images/desktop/3.png'
import img4 from '../img/howitworks_images/desktop/4.png'
import img5 from '../img/howitworks_images/desktop/5.png'
import img6 from '../img/howitworks_images/desktop/6.png'
import img7 from '../img/howitworks_images/desktop/7.png'
import img8 from '../img/howitworks_images/desktop/8.png'
import img9 from '../img/howitworks_images/desktop/9.png'
import img10 from '../img/howitworks_images/desktop/10.png'
import img11 from '../img/howitworks_images/desktop/11.png'
import img12 from '../img/howitworks_images/desktop/12.png'
import img13 from '../img/howitworks_images/desktop/13.png'
// import img14 from '../img/howitworks_images/desktop/14.png'

// import imgMobile1 from '../img/howitworks_images/desktop/1.png'
import imgMobile2 from '../img/howitworks_images/mobile/2.png'
import imgMobile3 from '../img/howitworks_images/mobile/3.png'
import imgMobile4 from '../img/howitworks_images/mobile/4.png'
import imgMobile5 from '../img/howitworks_images/mobile/5.png'
import imgMobile6 from '../img/howitworks_images/mobile/6.png'
import imgMobile7 from '../img/howitworks_images/mobile/7.png'
import imgMobile8 from '../img/howitworks_images/mobile/8.png'
import imgMobile9 from '../img/howitworks_images/mobile/9.png'
import imgMobile10 from '../img/howitworks_images/mobile/10.png'
import imgMobile11 from '../img/howitworks_images/mobile/11.png'
import imgMobile12 from '../img/howitworks_images/mobile/12.png'
import imgMobile13 from '../img/howitworks_images/mobile/13.png'
// import imgMobile14 from '../img/howitworks_images/mobile/14.png'

// form stuff
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const waitlistEndpoint = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3000/waitlist'
  : 'https://api.virgilcard.com/waitlist'

const imgMapDesktop = {
  // 'start':img1,
  'rewards':img2,
  'rewards-fees':img3,
  'rewards-points':img4,
  'rewards-interchange':img5,
  'data':img6,
  'data-experience':img7,
  'data-spotify':img8,
  'data-tech':img9,
  'businessmodel':img10,
  'businessmodel-bonuses':img11,
  'businessmodel-chargecard':img12,
  'businessmodel-subscription':img13,
  // 'end':img14
}

const imgMapMobile = {
  // 'start':imgMobile1,
  'rewards':imgMobile2,
  'rewards-fees':imgMobile3,
  'rewards-points':imgMobile4,
  'rewards-interchange':imgMobile5,
  'data':imgMobile6,
  'data-experience':imgMobile7,
  'data-spotify':imgMobile8,
  'data-tech':imgMobile9,
  'businessmodel':imgMobile10,
  'businessmodel-bonuses':imgMobile11,
  'businessmodel-chargecard':imgMobile12,
  'businessmodel-subscription':imgMobile13,
  // 'end':imgMobile14
}


// takes pageID from path and renders appropriate data
export default function HowItWorksView(props) {

  let mobileView = useDetectMobileView()
  let { pageID } = useParams()

  const [pageData, setPageData] = useState(howitworksData.find(item => item.id === pageID))

  // get pageData on update
  useEffect(() => {
    setPageData(howitworksData.find(item => item.id === pageID))
  }, [pageID])


  const handleClick = () => {
    props.handleSubmit(pageData.nextID)
  }


  return (
    <Div web={12} style={{justifyContent:'center', alignItems:'center'}}> 

    <Div web={10} mobile={12} style={{ 
      flexDirection:mobileView?'column-reverse':'row',
      justifyContent:mobileView?((pageData.id==='start')||(pageData.id==='end'))?'center':'flex-end':'space-between',
      alignItems:mobileView?'center':'center',
      minHeight:mobileView?'100vh':'100vh',
      // border:mobileView?'1px solid #000':'1px solid #000', 
      // padding:mobileView?'30px 0px 30px 0px':'30px 30px 30px 30px',
      // boxShadow: "10px 10px 10px rgba(0,0,0,.12)",
      }}>

      <Div web={5} mobile={10} style={{
        alignItems: mobileView ? '' : '', 
        flexDirection:'column',
        textAlign: 'left'}}>

          <Div web={12}>
            <SectionText style={{textAlign:'left', marginBottom: mobileView ? '' : '5px'}}>
              {pageData.section}
            </SectionText>
          </Div>
          <Div web={12}>
            <TitleText style={{textAlign:'left', marginBottom: mobileView ? '' : '5px'}}>
              {pageData.title}
            </TitleText>
          </Div>
          <BodyText style={{textAlign:'left'}}>
            {pageData.body1}
          </BodyText>
          <BodyText style={{textAlign:'left'}}>
            {pageData.body2}
          </BodyText>

          { (pageData.id !== 'end') &&
            <Div web={12} style={{flexDirection:mobileView?'column':'row', 
              alignItems: mobileView ? 'flex-start' : '', 
              justifyContent:mobileView?'':''}}>
              <NextButton onClick={handleClick}>
                Move Forward
              </NextButton>
            </Div>
          }

          { (pageData.id === 'end') && 
            <EmailForm />
          }

      </Div>

      <Div web={1} mobile={0}/>

      { (mobileView)
        ? (pageData.id !== 'start') && (pageData.id !== 'end') && <Image web={12} mobile={12} image={imgMapMobile[pageData.id]} />
        : (pageData.id !== 'start') && (pageData.id !== 'end') && <Div style={{minHeight: '90vh'}}> 
            <Image web={6} image={imgMapDesktop[pageData.id]} />
          </Div>
      }

    </Div>
    </Div>
  )
}

const Image = styled(Div)`
  /* min-height: 100%; */
  max-width: 500px;
  min-width: 500px;
  margin: 0;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
  background-size: 500px 600px;
  background-position: center;
  background-repeat: no-repeat;
  /* border: 1px solid #000; */
  ${media.md`
    max-height: unset;
    min-height: unset;
    max-width: unset;
    min-width: unset;
    background-size: contain;
    border: none;
    height: 100vw;
    width: 100vw;
    background-position: center;
    border: none;
    margin: 0px 0px 30px 0px;
  `}
`

const SectionText = styled(BodyText)`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  font-size: 16px;
`


const NextButton = styled.button`
  align-self: flex-start;
	border: none;
  padding: 10px 15px 13px 15px;
  margin: 20px 20px 0px 0px;

  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;

  background-color: #000;
  color: #FFF;

  font-size: 16px;

  ${media.md`
    font-size: 16px;
  `}
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
`


const EmailForm = () => {

  let mobileView = useDetectMobileView()
  let history = useHistory()

  // get query strings
  // let location = useLocation()
  // const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true })
  // const refer_id = queryObj.ref

  // const [postResponse, setPostResponse] = useState(null)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [invalidInput, setInvalidInput] = useState(false)
  const handleChange = (event) => {
    setEmailInput(event.target.value)
    if (invalidInput) setInvalidInput(false)
  }

  const handleEmailSubmit = () => {
    if (emailInput === '' || !emailInput.includes('@')) {
      setInvalidInput(true)
    } else {
      console.log('posted to api')
      axios.post(waitlistEndpoint, { email: emailInput, refer_id: ''} )
        .then(response => {
          console.log('in post success callback, response.data is: ')
          console.log(response.data)
          // setPostResponse(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      setEmailInput('')
      setEmailSubmitted(true)
    }
  }

  const handleReturnSubmit = () => {
    history.push('/')
  }
  
  return (
    <Div web={12} style={{padding:mobileView?'20px 0px 10px 0px':'20px 0px 0px 0px'}}>
      {(!emailSubmitted)
      ? <Div web={12} style={{alignItems:mobileView?'center':''}}>
          <TopEmailInput
            name="emailInput"
            type="email"
            placeholder="YOUR EMAIL"
            onChange={handleChange}
            value={emailInput}
            style={{textAlign:(mobileView)? 'center' : ''}}
            validationBorder={(invalidInput) ? 'solid red' : 'solid #000'}
            tabIndex="1"/>
          <TopEmailButton
            onClick={handleEmailSubmit}
            className="Button ml-md-2">
            Request Invite
          </TopEmailButton>
        </Div>
      : <TopEmailButton style={{alignSelf:'center', width:mobileView ? '100%' : '100%',
          margin:mobileView ? '10px 0px 10px 0px' : ''}}
          onClick={handleReturnSubmit}
          className="Button ml-md-2">
          Return To Homepage
        </TopEmailButton>
      }
    </Div>
  )
}

const TopEmailInput = styled.input`
  border-radius: 0;
  box-shadow: none;
  flex: 1;
  min-height: 30px;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
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
    ${media.md`
      color: #000;
    `}
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

const TopEmailButton = styled.button`
  width: 170px;
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
    margin-top: 20px;
    width: 100%;
  `}
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
`