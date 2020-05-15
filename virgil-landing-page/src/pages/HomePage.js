// core
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import qs from 'qs'

//for Slider
import Slider from 'react-input-slider';

// for waitlist call
import axios from 'axios'

// for video player
import ReactPlayer from 'react-player'

// styling
import '../styles/fonts.css'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import media from '../styles/media'
import AOS from 'aos'

//video
import homeVideo from '../video/video.mp4'

// images
import imgCards from '../video/cards-virgil.png'
import imgDinnerparty from '../img/homepage/dinnerparty.png'
import imgBrands from '../img/homepage/brandbanner.png'
// import logoMirror from '../img/homepage/mirror.png'
// import logoDevialet from '../img/homepage/devialet.png'
// import logoContax from '../img/homepage/contax.png'

// import imgSgrender from '../img/sgrender.png'
// import imgCards from '../img/cards.png'
// import imgBubbles from '../img/img2.png'
import imgPearl from '../img/pearl.JPG'
import imgHassan from '../img/hassan.jpeg'
import imgJasmine from '../img/jasmine.jpeg'
import imgIsaac from '../img/isaac.jpg'
// import imgCursor from "../img/arrow.png"

// icons
import iconAway from '../img/icons/away.png'
import iconEquinox from '../img/icons/equinox.png'
import iconGlossier from '../img/icons/glossier.png'
import iconHbo from '../img/icons/hbo.png'
import iconSweetgreen from '../img/icons/sweetgreen.png'
import iconWsj from '../img/icons/wsj.png'
import iconBluebottle from '../img/icons/bluebottle.png'
import iconHayes from '../img/icons/foodanddrink.png'
import iconShowtime from '../img/icons/showtime.png'
import iconTouchstone from '../img/icons/touchstone.png'
import iconMasterclass from '../img/icons/masterclass.png'
import iconSonos from '../img/icons/sonos.png'
// import iconTicketmaster from '../img/icons/ticketmaster.png'
// import iconSpotify from '../img/icons/spotify.png'
// import iconUnknown from '../img/icons/unknown.png'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import useInterval from '../styles/useInterval'
import { Div } from '../styles/CustomGrid'

// deployment stuff
const waitlistEndpoint = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3000/waitlist'
  : 'https://api.virgilcard.com/waitlist'

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
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  `}
`
const WhiteTitleText = styled(TitleText)`
  color: #FFFFFF;
`
const WhiteBodyText = styled(BodyText)`
  color: #FFFFFF;
`
const Image = styled(Div)`
  background-image: none;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`

const GiveawayImage = styled(Div)`
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`

export default function HomePage() {

  let mobileView = useDetectMobileView()

  useEffect(() => {
    AOS.init()
  }, [])

  return (

    <Div style={{maxWidth: '100vw', overflow: 'hidden'}}>

    {/* <Banner>
      <BodyText style ={{color: '#FFF', padding: '8px 0px 2px 0px'}}>
        <a href='#footer' style={{color:'#fff', textDecoration:'none'}}>
          ENTER OUR GIVEAWAY - PRIZES UP TO $1,800
        </a>
      </BodyText>
    </Banner> */}

    <Div web={12} style={{position:'relative', flexDirection:'column', alignItems:'center', marginTop: mobileView ? '0' : '0'}}>

        <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
          <Link to='/' style={{textDecoration: 'none'}}>
            <HeaderTitle>
              Virgil
            </HeaderTitle>
          </Link>
          {/* <Link to='/howitworks' style={{textDecoration: 'none'}}>
            <BodyText>
              How It Works
            </BodyText>
          </Link> */}
        </HeaderContainer>

        {mobileView ? <></> : <BigBox/> }
        {mobileView ? <></> : <BigTriangle/> }

        <PageOne />
        <ImagineDivider />
        <PageTwo />
        <PageThree />
        <SliderPage />
        <PageFive />
        <GiveawayDivider />

        <Div web={12} style={{backgroundColor:'#000',
          borderTop:'1px solid #000',
          justifyContent:'center', alignItems:'center'}}>
          <FooterContainer web={11}>
            <Div web={6} direction='column'
              style={{justifyContent:'flex-end', alignItems:'flex-start', whiteSpace:'nowrap'}}>              
              <FooterTitle>
                Virgil
              </FooterTitle>
              <WhiteBodyText>
                2020 © Virgil Technologies
              </WhiteBodyText>
            </Div>
            <Div web={6} direction='column'
              style={{justifyContent:'flex-end', alignItems:'flex-end'}}>              
              <WhiteBodyText>
                Terms of Service
              </WhiteBodyText>
              <WhiteBodyText>
                <a href='/privacy' style={{textDecoration: 'none', color:'#FFF'}}>Privacy Policy</a>
              </WhiteBodyText>
            </Div>
          </FooterContainer>
        </Div>

    </Div>
    </Div>
  )
}

const BigBox = styled(Div)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 40vw;
  background-color: #000;
`
const Banner = styled(Div)`
  position: absolute;
  height: 5vh;
  width: 99vw;
  background-color: #000;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #FFF;
  margin: 0px 0px 0px 0px;
  ${media.md`
    height: 50px;
    position: relative;
  `}
`

const BigTriangle = styled(Div)`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 40vw;
  line-height: 0;
  width: 0;
  border-bottom: 100vh solid transparent;
  border-left: 14vw solid black;
`

const HeaderContainer = styled(Div)`
  justify-content: flex-start;
  height: 15vh;
  ${media.md`
    height: 80px;
    justify-content: center;
  `}
`
const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #FFF;
  font-weight: 400;
  ${media.md`
    color: #000;
    font-size: 44px;
  `}
`

const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  border-top: 1px solid #FFF;
  ${media.md`
    height: 150px;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 30px;
  `}
`
const FooterTitle = styled(HeaderTitle)`
  margin-bottom: 10px;
  ${media.md`
    color: #FFF;
  `}
`



const PageOne = () => {

  let mobileView = useDetectMobileView()
  let history = useHistory()

  // get query strings
  let location = useLocation()
  const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true })
  const refer_id = queryObj.ref

  const [postResponse, setPostResponse] = useState(null)
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
      axios.post(waitlistEndpoint, { email: emailInput, refer_id: refer_id} )
        .then(response => {
          console.log('in post success callback, response.data is: ')
          console.log(response.data)
          setPostResponse(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      setEmailInput('')
      setEmailSubmitted(true)
    }
  }

  const handleDashboardSubmit = () => {
    if (postResponse) {
      history.push(`/giveaway?ref=${postResponse.id}`)      
    } else {
      history.push('/')
    }
  }

  return (
    <Div web={11} mobile={12}
      style={{height:(mobileView) ? '' : '85vh',
      alignItems:(mobileView) ? 'center' : '',
      justifyContent:(mobileView) ? 'space-between' : '',
      margin:(mobileView) ? '0px 0px 70px 0px' : '0px',
      flexDirection:(mobileView) ? 'column-reverse' : 'row'}}>

      <Div web={6} mobile={11} style={{flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center', paddingBottom:(mobileView) ? '' : '100px',}}>
      
          <WhiteTitleText style={{color:mobileView?'#000':'', fontSize:42}}>
            A Credit Card Built For You
          </WhiteTitleText>
          <WhiteBodyText style={{color:mobileView?'#000':'', paddingRight:mobileView?'30px':'70px', paddingLeft:mobileView?'30px':'0px'}}>
            Most credit cards are out to get you. Virgil is here to guide you.
          </WhiteBodyText>
          <WhiteBodyText style={{color:mobileView?'#000':'', paddingRight:mobileView?'30px':'70px', paddingLeft:mobileView?'30px':'0px'}}>
            We combine the power of your spending data with human expertise to deliver the future of credit card rewards.
          </WhiteBodyText>
          <Div web={12} mobile={12} style={{flexDirection:'column', marginTop:30, paddingRight:mobileView?'':'70px'}}>
            { (!emailSubmitted)
              ? <FormContainer>
                  <TopEmailInput
                    name="emailInput"
                    type="email"
                    placeholder="YOUR EMAIL"
                    onChange={handleChange}
                    value={emailInput}
                    style={{textAlign:(mobileView)? 'center' : ''}}
                    validationBorder={(invalidInput) ? 'solid red' : mobileView?'solid #000':'solid #FFF'}
                    tabIndex="1"/>
                  <TopEmailButton
                    onClick={handleEmailSubmit}
                    className="Button ml-md-2">
                    Request Invite
                  </TopEmailButton>
                </FormContainer>
              : <WhiteBodyText style={{textAlign: mobileView ? 'center' : 'left', color:mobileView?'#000':''}}>
                  Thanks for requesting an invite. 
                </WhiteBodyText>
              
                // <TopEmailButton style={{alignSelf:'center', width:mobileView ? '80%' : '100%',
                //   margin:mobileView ? '10px 0px 10px 0px' : ''}}
                //   onClick={handleDashboardSubmit}
                //   className="Button ml-md-2">
                //   Go to giveaway dashboard
                // </TopEmailButton>

            }
          </Div>

        </Div>
      </Div>


      <CardsImageContainer web={6} mobile={12}>
        <CardsImage mobile={12} image={imgCards}/>
      </CardsImageContainer>

      {/* <VideoContainer web={6} mobile={12}>
        <ReactPlayer 
          playing={true}
          muted={true}
          playsinline={true}
          url={homeVideo} 
          width='100%'
          height={(mobileView) ? '100%' : '80%'}
          style={{position:'absolute', zIndex:-4, top:0, left: 0}}
          />
      </VideoContainer> */}

    </Div>
  )
}

const CardsImageContainer = styled(Div)`
  position: relative;
  z-index: -3;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${media.md`
    height: 100vw;
    max-height: 100vw;
    padding-bottom: 20px;
  `}
`



const CardsImage = styled(Div)`
  height: 85%;
  width: 85%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${media.md`
    height: 85%;
    width: 85%;
  `}
`

const FormContainer = styled(Div)`
  ${media.md`
    align-items: center;
  `}
`

const ImagineDivider = () => {

  let mobileView = useDetectMobileView()

  if (mobileView) {
    return (
      <Div mobile={12} style={{alignItems:'center'}}>
        <DividerImage image={imgDinnerparty} />
        <Div web={7} mobile={12} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#000000',}}>
          <Div direction='column' web={12} mobile={11} style={{height:'', justifyContent:'center',
            paddingTop:'40px', paddingBottom:'40px'}}>
            <WhiteTitleText style={{fontSize:56, textTransform:'none'}}>
              Virgil is...
            </WhiteTitleText>
            <WhiteBodyText>
              ...a fresh take on credit cards. 
            </WhiteBodyText>
            <WhiteBodyText>
              Credit cards haven’t changed much in 50 years. 
              Using modern technology, we interpret your spending data to offer a curated collection of things to buy, eat, and enjoy.
            </WhiteBodyText>
            <WhiteBodyText>
              Virgil is a concierge in your pocket that offers more than three percent of your spending back in relevant rewards.  
            </WhiteBodyText>
          </Div>
        </Div>
      </Div>
    )
  } else {
    return (
      <DividerImage image={imgDinnerparty}>
        <Div web={7} mobile={11} style={{justifyContent:'center', alignItems:'center'}}>
          <Div direction='column' web={12} mobile={12}
            style={{backgroundColor:'#000000', padding:'30px', marginRight:'4.166vw'}}>
  
            <WhiteTitleText style={{fontSize:72, textTransform:'none'}}>
              Virgil is...
            </WhiteTitleText>
            <WhiteBodyText>
              ...a fresh take on credit cards. 
            </WhiteBodyText>
            <WhiteBodyText>
              Credit cards haven’t changed much in 50 years. 
              Using modern technology, we interpret your spending data to offer a curated collection of things to buy, eat, and enjoy.
            </WhiteBodyText>
            <WhiteBodyText>
              Virgil is a concierge in your pocket that offers more than three percent of your spending back in relevant rewards. 
            </WhiteBodyText>
          </Div>
        </Div>
      </DividerImage>
    )
  }
}

const DividerImage = styled(Div)`
  width: 100vw;
  height: 36vw;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.md`
    width: 100vw;
    height: 40vh;
  `}
`




const PageTwo = () => {

  let mobileView = useDetectMobileView()

  return (
    <Div web={11} mobile={12}
      data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"
      style={{height:(mobileView) ? '' : '100vh',
      alignItems:(mobileView) ? 'center' : 'center',
      margin: mobileView ? '30px 0px 50px 0px' : '',
      justifyContent:(mobileView) ? 'flex-start' : '',
      flexDirection:(mobileView) ? 'column-reverse' : 'row'}}>

      <Div web={6} mobile={11} style={{flexDirection:'column',
        justifyContent:'center', alignItems: 'center'}}>
        <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center'}}>
          <TitleText>
            Tailored To You
          </TitleText>
          <BodyText>
            Credit cards don’t use your data to improve your experience - they sell it. 
            Virgil analyzes your data in-house to improve your rewards experience. 
            We work for you, not the other way around.
          </BodyText>
          <Link to='/howitworks' style={{textDecoration:'none', textDecoration:'underline #000'}}>
            <BodyText>
              Learn more
            </BodyText>
          </Link>
        </Div>
      </Div>

      <CardSpinner />

    </Div>
  )
}

const CardSpinner = () => {

  const cardData = [
    {
      id: 0,
      title: "You've earned a new reward!",
      subtitle: "Recommended: Blue Bottle Coffee",
      body: "You spent over $80 on coffee last month. We think $10 towards Blue Bottle is a perfect reward.",
      icon: iconBluebottle
    },
    {
      id: 1,
      title: "Brunch After a Late Night Out",
      subtitle: "Greenwich Village Restaurants",
      body: "Brunch is on us. Try a new restaurant in Greenwich Village and use a reward credit toward the bill.",
      icon: iconHayes,
    },
    {
      id: 2,
      title: "Your Trial is Ending",
      subtitle: "Showtime",
      body: "Your Showtime trial ends tomorrow. Cancel today to avoid paying for a first month.",
      icon: iconShowtime,
    },
    {
      id: 3,
      title: "Choosing Your Next Gym",
      subtitle: "Touchstone Climbing",
      body: "Your Equinox membership just expired. Want to try something new? Redeem for a free session at Mission Cliffs.",
      icon: iconTouchstone
    },
    {
      id: 4,
      title: "Try Cooking the Italian Way",
      subtitle: "Masterclass",
      body: "We know how much you love Italian food. Redeem for cooking classes taught by Massimo Bottura.",
      icon: iconMasterclass
    },
    {
      id: 5,
      title: "Finding the Right Speaker",
      subtitle: "Recommended: Sonos ",
      body: "We saw you recently returned an item to Bose. How do some credits at Sonos sound?",
      icon: iconSonos
    },
  ]

  const [cardStack, setCardStack] = useState([])
  const [nextCard, setNextCard] = useState(2)

  useEffect(() => {
    setCardStack(cardStack => [{
      id: 0,
      data: cardData[0]
    }, ...cardStack])
    setCardStack(cardStack => [{
      id: 1,
      data: cardData[1]
    }, ...cardStack])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useInterval(() => {
    setCardStack(cardStack => [{
      id: nextCard,
      data: cardData[nextCard%6]
    }, ...cardStack])
    setNextCard(nextCard+1) 
  }, 4500)


  return (
    <CardSpinnerContainer direction='column' web={6} mobile={11}>

      <CardStackContainer web={12}>
        {cardStack.map((item) => 
          <Card
            key={item.id}
            id={item.id}
            data={item.data}
            />
        ).slice(0,10)}
      </CardStackContainer>

      <GradientDiv />
    </CardSpinnerContainer>
  )
}

const CardSpinnerContainer = styled(Div)`
  position: relative;
  height: 80%;
  ${media.md`
    height: 490px;
    text-align: center;
    margin-bottom: 50px;
  `}
`


const CardStackContainer = styled(Div)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  height: 100%;
  ${media.md`
    height: 100%;
    text-align: center;
  `}
`

const GradientDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); 
`

const Card = (props) => {
  // change in props.key prop triggers rerender, dont change that!
  let mobileView = useDetectMobileView()

  return (
    <CardContainer web={10} mobile={12} direction='column' key={props.id}>

      <CardTitleText style={{margin:0, textAlign:'left'}}>
        {props.data.title}
      </CardTitleText>

      <Div web={12} style={{flexDirection:'row', height:'40px',
        alignItems:'center', margin: (mobileView) ? '4px 0px 4px 0px' : '10px 0px 10px 0px'}}>

        <CardIconContainer style={{flexDirection:'row'}}>
          <CardIcon icon={props.data.icon} style={{minWidth:'30px'}}/>
        </CardIconContainer>

        <BodyText style={{marginBottom:0, paddingLeft:'10px'}}>
          {props.data.subtitle}
        </BodyText>

      </Div>

      <BodyText style={{textAlign:'left' }}>
        {props.data.body}
      </BodyText>

      <CardTriangle />

    </CardContainer>
  )
}

const CardTriangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  line-height: 0;
  width: 0;
  border-top: 40px solid transparent;
  border-right: 40px solid black;
`

const cardAnimation = (format) => {

  let totalHeight = (format==='mobile') ? '150px' : '180px'

  return keyframes`
    0% { 
      min-height: 0px;
      max-height: 0px;
      margin-bottom: 0px;
      margin-top: 0px;
      padding: 0px;
      opacity:0
    }
    10% {
      min-height: ${totalHeight};
      max-height: ${totalHeight};
      margin-bottom: 20px;
      margin-top: 20px;
      padding: 15px;
      opacity:0
    }
    20% {
      min-height: ${totalHeight};
      max-height: ${totalHeight};
      margin-bottom: 20px;
      margin-top: 20px;
      padding: 15px;
      opacity:.5
    }
    25% { 
      min-height: ${totalHeight};
      max-height: ${totalHeight};
      margin-bottom: 20px;
      margin-top: 20px;
      padding: 15px;
      opacity: 1
    }
    100% { 
      min-height: ${totalHeight};
      max-height: ${totalHeight};
      margin-bottom: 20px;
      margin-top: 20px;
      padding: 15px;
      opacity: 1
    }
  `
}

const CardContainer = styled(Div)`
  position: relative;
  max-height: 180px;
  min-height: 180px;
  margin: 20px 0px 20px 0px;
  border: solid #000;
  padding: 15px;
  border-width: 1px;
  box-shadow: 8px 8px 8px rgba(0,0,0,.15);
  ${media.md`
      max-height: 150px;
      min-height: 150px;
    `}
  &:first-child {
    animation: ${cardAnimation('web')} 4500ms ease-in-out infinite;
    animation-fill-mode: forwards;
    ${media.md`
      animation: ${cardAnimation('mobile')} 4500ms ease-in-out infinite;
    `}
  }
`

const CardTitleText = styled.h3`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  color: #000;
  word-wrap: break-word;
  letter-spacing: 0.5px;
  font-size: 16px;
  line-height: 24px;
  ${media.md`
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  `}
`

const CardIconContainer = styled(Div)`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  ${media.md`
    flex-direction: row;
  `}
`
const Icon = styled(Div)`
  background-image: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`
const CardIcon = styled(Icon)`background-image: url(${props => props.icon});`


const PageThree = () => {

  let mobileView = useDetectMobileView()

  return (
    <Div web={12} mobile={12}
      style={{height:(mobileView) ? '' : '100vh', backgroundColor: '#000000',
      alignItems:(mobileView) ? 'center' : '',
      justifyContent:(mobileView) ? 'flex-end' : 'center',
      padding: mobileView ? '0px 0px 50px 0px' : '',
      flexDirection:(mobileView) ? 'column-reverse' : 'row-reverse'}}>

      <Div web={5} mobile={11} style={{flexDirection:'column', flex:mobileView? '1' : '',
        justifyContent:'center', alignItems: 'center', paddingTop:mobileView?'30px':'0px'}}>

        <Div web={12} style={{marginBottom:'auto', height:'50px'}}/>
        
        <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center'}}>
          <WhiteTitleText style={{paddingTop:mobileView ? '10px' : ''}}>
            Rewards You Care About
          </WhiteTitleText>
          <WhiteBodyText>
            Most credit card companies partner with old brands to offer rewards.
            Instead, we leverage the quality of our customer base to offer rewards
            from modern brands at a best-in-class rate (more than 3% back).
          </WhiteBodyText>
        </Div>

        <WhiteBodyText style={{marginTop:'auto', width:'83.33%', color:'#E0E0E0',
          fontSize:mobileView?'10px':'12px', lineHeight:'18px', marginBottom:mobileView?'0px':'20px'}}>
          Note: Brands are merchants at which rewards can be redeemed. This does not imply partnership or affiliation of any kind.
        </WhiteBodyText>

      </Div>

      {
        mobileView
        ? <Div web={12} style={{position:'relative'}}>
            <BrandsImage web={7} mobile={12} />
            <BrandsGradientDiv />
          </Div>
        : <BrandsImage web={7} mobile={12} />
      }
      
    </Div>
  )
}

const BrandsImage = styled(Div)`
  border-right: 0.1pt solid #FFF;
  background-image: url(${imgBrands});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.md`
    border-right: unset;
    min-height: 375px;
  `}
`

const BrandsGradientDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); 
`


const SliderPage = () => {
  let mobileView = useDetectMobileView()

  const [state, setState] = useState({ x: 1500, y: 0 });
  var dollar = Math.ceil(state.x/10)*10;
  var credits = Math.ceil(state.x*12/285);

  return (
    <Div web={11} mobile={12}
      data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000"
      style={{height:(mobileView) ? '' : '100vh', position:mobileView?'relative':'',
      padding: (mobileView) ? '50px 0px 50px 0px' : '0px',
      alignItems:(mobileView) ? 'center' : '', borderBottom: mobileView?'':'1px solid #000',
      justifyContent:(mobileView) ? 'flex-end' : 'center',
      flexDirection:(mobileView) ? 'column-reverse' : 'row-reverse'}}>

      <Div web={6} mobile={11} style={{flexDirection:'column',
        justifyContent:'center', alignItems: 'center', paddingTop: mobileView?'30px':'20px'}}>
        <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center'}}>
          { (mobileView)?
          <TitleText> Rewards You'll<br></br>Actually Redeem </TitleText>
          : <TitleText> Rewards You'll Actually Redeem </TitleText>
          }
          <BodyText>
            We surveyed and found that 50% of premium cardholders have never redeemed their points. That's because existing point systems are designed to prevent you from redeeming.
          </BodyText>
          <BodyText>
            Our rewards system is designed so that all incentives are aligned&mdash;yours, brands, and ours.
            We also offer more than 3% in value back, better than the 2% industry standard.
          </BodyText>
          <Link to='/howitworks' style={{textDecoration:'none', textDecoration:'underline #000'}}>
            <BodyText>
              Learn more
            </BodyText>
          </Link>
        </Div>
      </Div>
      
      <Div web={6} mobile={11} style={{height: (mobileView) ? '' : '100%',
        flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
        <Div web={10} mobile={12} direction='column'
          style={{paddingTop: (mobileView) ? '0px' : '30px'}}>

          <BodyText>MONTHLY CARD SPEND</BodyText>

          <CardTitleText style={{fontSize: '64px',
            paddingBottom: '40px', lineHeight: '64px'}}>
            ${dollar}
          </CardTitleText>

          <Div web={12}>
            <Slider
              axis="x"
              x={state.x}
              web={12}
              style={{minWidth: '100%'}}
              styles={{
                track: {backgroundColor: '#eee', borderRadius: '0', maxHeight: '4px' },
                active: {backgroundColor: '#000', borderRadius: '0' },
                thumb: {width: 30, height: 30, opacity: 1, backgroundColor: '#000'}
              }}
              xmin={0}
              xmax={6000}
              onChange={({ x }) => setState(state => ({ ...state, x }))}
            />
          </Div>

          <CardTitleText style={{fontSize: '20px', paddingTop: '50px', paddingBottom: '10px'}}>
            Earn {credits} Credits / Year
          </CardTitleText>

          <BodyText style={{paddingBottom: '30px'}}>
            Earn one credit (~$10) every $285 spent (~3.5% back)
          </BodyText>

          <CardTitleText style={{fontSize: '20px'}}>
            Spend Credits On...
          </CardTitleText>

          <RewardTable />

        </Div>
      </Div>

      {mobileView &&
        <Div mobile={11} style={{position:'absolute', bottom:0,
          left:'4.16vw', borderBottom:'1px solid #202020'}}/>
      }

    </Div>
  )
}

const RewardTable = () => {
  // let mobileView = useDetectMobileView()

  const rewardData = [
    {id:'away', title:'duffel', subtitle:'18 credits'},
    {id:'equinox', title:'one month', subtitle:'20 credits'},
    {id:'glossier', title:'$20 credit', subtitle:'two credits'},
    {id:'hbo', title:'one month', subtitle:'one credit'},
    {id:'sweetgreen', title:'salad fix', subtitle:'one credit'},
    {id:'wsj', title:'one month', subtitle:'two credits'},
  ]

  return (
    <Div web={12} style={{flexDirection:'row'}}>

      <Div web={6} direction='column'>
        <RewardRow data={rewardData[3]} icon={IconHbo}/>
        <RewardRow data={rewardData[4]} icon={IconSweetgreen}/>
        <RewardRow data={rewardData[0]} icon={IconAway}/>
      </Div>

      <Div web={6} direction='column'>
        <RewardRow data={rewardData[2]} icon={IconGlossier}/>
        <RewardRow data={rewardData[5]} icon={IconWsj}/>
        <RewardRow data={rewardData[1]} icon={IconEquinox}/>
      </Div>
  
    </Div>
  )
}

const RewardRow = (props) => {
  let mobileView = useDetectMobileView()

  return (
    <Div web={12} style={{height:'60px', alignItems:'center', margin:'12px 0px 12px 0px', flexDirection:'row'}}>

      <IconContainer style={{marginLeft:(mobileView) ? '10px' : '0px'}}>
        <props.icon style={{minWidth: mobileView?'45px':'50px'}}/>
      </IconContainer>

      <Div direction='column' style={{paddingLeft:(mobileView) ? '10px' : '15px', alignItems:'flex-start'}}>
        <BodyText style={{fontWeight:400, textTransform:'uppercase', margin:0}}>
          {props.data.title}
        </BodyText>
        <BodyText style={{fontWeight:400, textTransform:'capitalize', margin:0}}>
          {props.data.subtitle}
        </BodyText>
      </Div>
    </Div>
  )
}

const IconContainer = styled(Div)`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  ${media.md`
    flex-direction: row;
    height: 45px;
    width: 45px;
  `}
`
const IconAway = styled(Icon)`background-image: url(${iconAway});`
const IconEquinox = styled(Icon)`background-image: url(${iconEquinox});`
const IconGlossier = styled(Icon)`background-image: url(${iconGlossier});`
const IconHbo = styled(Icon)`background-image: url(${iconHbo});`
const IconSweetgreen = styled(Icon)`background-image: url(${iconSweetgreen});`
const IconWsj = styled(Icon)`background-image: url(${iconWsj});`



const PageFive = () => {
  let mobileView = useDetectMobileView()

  return (
    <Div web={11} mobile={12}
      style={{height:(mobileView) ? '' : '100vh',
      padding: (mobileView) ? '10px 0px 50px 0px' : '0px',
      alignItems:(mobileView) ? 'center' : '',
      justifyContent:(mobileView) ? 'center' : 'center',
      flexDirection:(mobileView) ? 'column-reverse' : 'row'}}>

      <Div web={6} mobile={11} style={{flexDirection:'column',
        justifyContent:'center', alignItems: 'center'}}>
        <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center'}}>
          <TitleText>
            Curated by Real People
          </TitleText>
          <BodyText>
          We source rewards and recommendations from our network of human tastemakers. 
          Find a dinner spot in the Village, a new cafe in Hayes Valley, or a dance club in Echo Park. 
          Discover new brands you’ll love in our curated rewards collection.
          </BodyText>
        </Div>
      </Div>

      <Div web={6} mobile={12} style={{justifyContent:'center', alignItems:'center',
        height:mobileView ? '580px' : '100%', maxWidth: '100vw'}}>
        <IsaacPolaroid />
        <JasminePolaroid />
        <HassanPolaroid />
        <PearlPolaroid />
      </Div>

    </Div>
  )
}


const PearlPolaroid = () => {

  let mobileView = useDetectMobileView()
  const [clicked, setClicked] = useState(0)
  const [activated, setActivated] = useState(false)
  const [index, setIndex] = useState(1000)
  const handleClick = () => {
    setClicked(clicked+1)
    setIndex(index-4)
    setActivated(true)
  }

  useInterval(() => {
    if (!activated) {
      setClicked(clicked+1)
      setIndex(index)
    }
  }, 4000)

  return (
    
    <PolaroidStyling web={9} mobile={9} clicked={false} key={clicked}
      zindex={index+4} zend={index} tilted={true} wiggling={!activated}
      style={{ flexDirection:'column', boxShadow: '10px 10px 20px rgba(0,0,0,.1)'}}>

      <PolaroidImageContainer web={12} mobile={12} onClick={handleClick}>
        <ImagePearl web={12} mobile={12}></ImagePearl>
      </PolaroidImageContainer>
      <Div style={{flexDirection:'column', paddingTop: (mobileView) ? '5px' : '20px', alignItems: 'flex-start', }}>
        <PolaroidText style={{textTransform: 'uppercase',}}>
          Pearl, 23
        </PolaroidText>
        <PolaroidText>
          Clinton Hill, NY
        </PolaroidText>
        <PolaroidText style={{textAlign: 'left'}}>
          Ask Me About: Hosting a Dinner Party
        </PolaroidText>
        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/pearl.b_/'>
          <PolaroidText style={{paddingBottom: '10px',textDecoration: 'underline'}}>
            @pearl.b_
          </PolaroidText>
        </a>
      </Div>
    </PolaroidStyling>
  )
}

const HassanPolaroid = () => {

  let mobileView = useDetectMobileView()
  const [clicked, setClicked] = useState(0)
  const [index, setIndex] = useState(999)
  const handleClick = () => {
    setClicked(clicked+1)
    setIndex(index-4)
  }

  return (
    <PolaroidStyling web={9} mobile={9} clicked={clicked} key={clicked} zindex={index+4} zend={index} tilted={false}
      style={{flexDirection:'column', boxShadow: '10px 10px 20px rgba(0,0,0,.1)', marginLeft:'10px', marginTop:'-10px'}}>
      <PolaroidImageContainer web={12} mobile={12} onClick={handleClick}>
        <ImageHassan web={12} mobile={12}></ImageHassan>
      </PolaroidImageContainer>
      <Div style={{flexDirection:'column', paddingTop: (mobileView) ? '5px' : '20px', alignItems: 'flex-start'}}>
        <PolaroidText style={{textTransform: 'uppercase'}}>
          Hassan, 22
        </PolaroidText>
        <PolaroidText>
          Silver Lake, LA
        </PolaroidText>
        <PolaroidText style={{textAlign: 'left'}}>
          Ask Me About: Up and Coming Musicians
        </PolaroidText>
        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/by.hassan/'>
          <PolaroidText style={{paddingBottom: '10px',textDecoration: 'underline'}}>
            @by.hassan
          </PolaroidText>
        </a>
      </Div>
    </PolaroidStyling>
  )
}

const JasminePolaroid = () => {

  let mobileView = useDetectMobileView()
  const [clicked, setClicked] = useState(0)
  const [index, setIndex] = useState(998)
  const handleClick = () => {
    setClicked(clicked+1)
    setIndex(index-4)
  }

  return (
    <PolaroidStyling web={9} mobile={9} clicked={clicked} key={clicked} zindex={index+4} zend={index} tilted={true}
    style={{flexDirection:'column',boxShadow: '10px 10px 20px rgba(0,0,0,.1)',marginLeft:'0px',marginTop:'-20px'}}>

      <PolaroidImageContainer web={12} mobile={12} onClick={handleClick}>
        <ImageJasmine web={12} mobile={12}></ImageJasmine>
      </PolaroidImageContainer>
      <Div style={{flexDirection:'column', paddingTop: (mobileView) ? '5px' : '20px', alignItems: 'flex-start'}}>
        <PolaroidText style={{textTransform: 'uppercase',}}>
          Jasmin, 25
        </PolaroidText>
        <PolaroidText >
          Williamsburg, NY
        </PolaroidText>
        <PolaroidText style={{textAlign: 'left'}}>
          Ask Me About: Day Trips in NY
        </PolaroidText>
        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/jasescher/'>
          <PolaroidText style={{paddingBottom: '10px',textDecoration: 'underline'}}>
            @jasescher
          </PolaroidText>
        </a>
      </Div>
    </PolaroidStyling>
  )
}

const IsaacPolaroid = () => {

  let mobileView = useDetectMobileView()
  const [clicked, setClicked] = useState(0)
  const [index, setIndex] = useState(997)
  const handleClick = () => {
    setClicked(clicked+1)
    setIndex(index-4)
  }

  return (
    <PolaroidStyling web={9} mobile={9} clicked={clicked} key={clicked} zindex={index+4} zend={index} tilted={false}
    style={{flexDirection:'column', boxShadow: '10px 10px 20px rgba(0,0,0,.1)', marginLeft:'-10px', marginTop:'-30px'}}>
      <PolaroidImageContainer web={12} mobile={12} onClick={handleClick}>
        <ImageIsaac web={12} mobile={12} />
      </PolaroidImageContainer>
      <Div style={{flexDirection:'column', paddingTop: (mobileView) ? '5px' : '20px', alignItems: 'flex-start'}}>
        <PolaroidText style={{textTransform: 'uppercase'}}>
          Isaac, 35
        </PolaroidText>
        <PolaroidText>
          East Village, NY
        </PolaroidText>
        <PolaroidText style={{textAlign: 'left'}}>
          Ask Me About: Music and LES Nightlife
        </PolaroidText>
        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/isaaclikes_/'>
          <PolaroidText style={{paddingBottom: '10px',textDecoration: 'underline'}}>
            @isaaclikes_
          </PolaroidText>
        </a>
      </Div>
    </PolaroidStyling>
  )
}

const PolaroidKeyframesForward = (zindex, endindex, tilted, mobile, wiggling) => {

  let tilt = (tilted) ? 'rotate(3deg)' : 'rotate(0deg)'
  let endtilt = (wiggling) ? 'rotate(5deg)' : 'rotate(15deg)'
  let mobileTranslate = (mobile) ? (wiggling) ? 'translate(20vw,-1vh)' : 'translate(90vw,-8vh)' : (wiggling) ? 'translate(5vw,-1vh)' : 'translate(50vw,-8vh)'
  let startPosition = (tilted) ? 'translate(-5px,0px)' : 'translate(0px,0px)'

  return(keyframes`
    0% {
      transform: ${tilt} ${startPosition};
      z-index: ${zindex};
    }
    50% {
      transform: ${endtilt} ${mobileTranslate};
      z-index: ${zindex};
    }
    51% {
      transform: ${endtilt} ${mobileTranslate};
      z-index: ${endindex};
    }
    100% {
      transform: ${tilt} ${startPosition};
      z-index: ${endindex};
    }
`)
}


const PolaroidStyling = styled(Div)`
  animation: ${props => PolaroidKeyframesForward(props.zindex, props.zend, props.tilted, false, props.wiggling)} 1s ease-in-out 1;
  animation-fill-mode: forwards;
  position: absolute;
  margin-left: 20px;
  background-color: white;
  border-style: solid;
  border-color: #888;
  border-width: 1px;
  height: 80vh;
  width: 60vh;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 15px;
  ${media.md`
    height: 450px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 35px;
    animation: ${props => PolaroidKeyframesForward(props.zindex, props.zend, props.tilted, true, props.wiggling)} 1s ease-in-out 1;
    animation-fill-mode: forwards;
  `}
`


const GiveawayDivider = () => {

  let mobileView = useDetectMobileView()
  let history = useHistory()

  // get query strings
  let location = useLocation()
  const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true })
  const refer_id = queryObj.ref

  const [postResponse, setPostResponse] = useState(null)
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
      axios.post(waitlistEndpoint, { email: emailInput, refer_id: refer_id} )
        .then(response => {
          console.log('in post success callback, response.data is: ')
          console.log(response.data)
          setPostResponse(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      setEmailInput('')
      setEmailSubmitted(true)
    }
  }

  // const handleDashboardSubmit = () => {
  //   if (postResponse) {
  //     history.push(`/giveaway?ref=${postResponse.id}`)      
  //   } else {
  //     history.push('/')
  //   }
  // }

  return (
    <Div web={12} direction='column' id="footer" style={{minHeight:'unset', backgroundColor:'#000',
      justifyContent:'center', alignItems:'center', paddingTop: '50px', paddingBottom: '50px'}}>

        <WhiteTitleText style={{paddingBottom: mobileView ? '25px' : '10px'}}>
          Request an invite
        </WhiteTitleText>

        {/* <Div web={8} mobile={12} style={{flexDirection:mobileView ? 'column' : 'row', paddingBottom: '20px', justifyContent: 'center'}}>
          <Div style={{flexDirection:'column', marginRight: mobileView ? '' : '40px', marginLeft: mobileView ? '' : '40px', marginBottom: mobileView ? '15px' : ''}}>
            <Div style={{height:'20px', margin:'10px 0px 10px 0px'}}>
              <GiveawayImage src={logoMirror}/>
            </Div>
            <BodyText style={{color:'#FFF', textAlign: 'center'}}>
              <a target="_blank" rel="noopener noreferrer"
                style={{color:'#FFF', textDecoration: 'underline'}} href='https://www.mirror.co/shop/mirror'>
                Mirror
              </a>
              <br></br>
              ~$1,800 value
            </BodyText>
          </Div>

          <Div style={{flexDirection:'column', marginRight: mobileView ? '' : '40px', marginLeft: mobileView ? '' : '40px', marginBottom: mobileView ? '15px' : ''}}>
            <Div style={{height:'20px', margin:'10px 0px 10px 0px'}}>
              <GiveawayImage src={logoDevialet}/>
            </Div>
            <BodyText style={{color:'#FFF', textAlign: 'center'}}>
              <a target="_blank" rel="noopener noreferrer" style={{color:'#FFF', textDecoration: 'underline'}}
                href='https://www.devialet.com/en-us/buy-phantom-reactor-900/'>
                Phantom Reactor 900
              </a>
              <br></br>
              ~$1,350 value
            </BodyText>
          </Div>

          <Div style={{flexDirection:'column', marginRight: mobileView ? '' : '40px', marginLeft: mobileView ? '' : '40px', marginBottom: mobileView ? '15px' : ''}}>
            <Div style={{height:'20px', margin:'10px 0px 10px 0px'}}>
              <GiveawayImage src={logoContax}/>
            </Div>
            <BodyText style={{color:'#FFF', textAlign: 'center'}}>
              <a target="_blank" rel="noopener noreferrer" style={{color:'#FFF', textDecoration: 'underline'}}
                href='https://www.ebay.com/itm/NEAR-MINT-Contax-G2-Camera-Biogon-28mm-f-2-8-Lens-w-TLA200-from-JAPAN-285/303556783050'>
                Contax G2
              </a>
              <br></br>
              ~$1,400 value
            </BodyText>
          </Div>

        </Div> */}


        <Div web={4} mobile={10} style={{flexDirection: 'column', textAlign: 'center'}}>
          <WhiteBodyText style={{ margin:(mobileView)? '0px 0px 20px 0px' : '0px 0px 30px 0px'}}>
            Virgil will launch with a group of early members in the New York, San Francisco, and Los Angeles areas. Add your email below to request an invite. 
          </WhiteBodyText>
          {/* <WhiteBodyText style={{margin:(mobileView)? '' : '0px 0px 10px 0px'}}>
            <strong>We’re glad to have you along for this journey.</strong>
          </WhiteBodyText> */}
        </Div>

        <Div web={4} mobile={12} style={{flexDirection:'column', marginTop:'30px'}}>
          { (!emailSubmitted)
            ? <FormContainer>
                <BottomEmailInput
                  name="emailInput"
                  type="email"
                  placeholder="YOUR EMAIL"
                  onChange={handleChange}
                  value={emailInput}
                  validationBorder={(invalidInput) ? 'solid red' : 'solid #FFF'}
                  style={{textAlign:(mobileView)? 'center' : ''}}
                  tabIndex="1"/>
                <BottomEmailButton
                  onClick={handleEmailSubmit}
                  className="Button ml-md-2">
                  REQUEST INVITE
                </BottomEmailButton>
              </FormContainer>
            : <WhiteBodyText style={{textAlign: mobileView ? 'center' : 'center', color:mobileView?'#000':''}}>
                Thanks for requesting an invite. 
              </WhiteBodyText>
            //   <BottomEmailButton style={{alignSelf:'center', width:mobileView ? '80%' : '100%'}}
            //     onClick={handleDashboardSubmit}
            //     className="Button ml-md-2">
            //     Go to giveaway dashboard
            //   </BottomEmailButton>
          }
        </Div>

    </Div>
  )
}



const PolaroidText = styled(BodyText)`
  margin-bottom: 0;
  text-align: left;
`

const VideoContainer = styled(Div)`
  position: relative;
  z-index: -3;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${media.md`
    height: 100vw;
    max-height: 100vw;
    padding-bottom: 20px;
  `}
`

const PolaroidImageContainer = styled(Div)`
  height: 78%;  
  justify-content: flex-start;
  align-items: center;
  display: block;
  cursor: pointer;
  ${media.md`
    padding-bottom: 0px;
    text-align: center;
  `}
`


const ImagePearl = styled(Image)`
  background-image: url(${imgPearl});
  background-size: cover;
`
const ImageHassan = styled(Image)`
  background-image: url(${imgHassan});
  background-size: cover;
`
const ImageJasmine = styled(Image)`
  background-image: url(${imgJasmine});
  background-size: cover;
  background-position: top;
`
const ImageIsaac = styled(Image)`
  background-image: url(${imgIsaac});
  background-size: cover;
`



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

  background-color: #000;
  color: #FFF;

  ${media.md`
    background-color: #FFF;
    color: #000;
    margin-right: 0px;
    width: 80%;
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
  width: 200px;
  min-height: 30px;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 14px;
  background-color: #000;
  color: #FFF;
  border: 1px solid #FFF;
  ${media.md`
    background-color: #FFF;
    color: #000;
    border: 1px solid #000;
    margin-top: 20px;
    width: 80%;
  `}
  &:active,
  &:focus,
  &:focus:active {
    background-image: none;
    outline: 0;
    box-shadow: none;
  }
`

const BottomEmailInput = styled(TopEmailInput)`
  ${media.md`
    background-color: #000;
    color: #FFF;
  `}
  ::placeholder {
    ${media.md`
      color: #FFF;
    `}
  }
`

const BottomEmailButton = styled(TopEmailButton)`
  ${media.md`
    background-color: #000;
    color: #FFF;
    border: 1px solid #FFF;
  `}
`
