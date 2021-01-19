// core
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'
import axios from 'axios'

// styling
import styled from 'styled-components'
import media from '../styles/media'

// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import { Div } from '../styles/CustomGrid'
// import { useTable } from 'react-table'

// media
import logoMirror from '../img/homepage/mirror.png'
import logoDevialet from '../img/homepage/devialet.png'
import logoContax from '../img/homepage/contax.png'

// deployment stuff
const waitlistEndpoint = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3000/waitlist'
  : 'https://api.virgilcard.com/waitlist'


// const refData = {
//   refer_id: 'aiCEDLlLr',
//   refer_count: 11,
//   refer_points: 67,
//   top_five: [
//     {
//       refer_count: 78,
//       refer_points: 3082,
//     },
//     {
//       refer_count: 67,
//       refer_points: 2279,
//     },
//     {
//       refer_count: 46,
//       refer_points: 1082,
//     },
//   ],
//   total_points: 12278
// }


export default function DashboardPage() {

  let mobileView = useDetectMobileView()
  let location = useLocation()

  const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true })
  const refer_id = queryObj.ref
  console.log('my ref id: '+refer_id)

  // refData has refer_id, email, refer_count, refer_points, and top_five
  const [refData, setRefData] = useState({})
  const [validRef, setValidRef] = useState(true)

  useEffect(() => {
    // const queryObj = qs.parse(location.search, { ignoreQueryPrefix: true })
    // const refer_id = queryObj.ref
    // console.log('my ref id: '+refer_id)

    if (refer_id) {
      axios.get(waitlistEndpoint + '?ref=' + refer_id)
        .then(response => {
          console.log('Successfully got ref data!')
          console.log(response.data)
          setRefData(response.data)
        })
        .catch(error => {
          console.log('Error while getting api.virgilcard.com/waitlist')
          console.log(error)
          setValidRef(false)
        })
    } else {
      setValidRef(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // return invalid ref page if not working
  // if (!validRef) {
  //   return (
  //     <Div web={12} style={{backgroundColor:'#000', flexDirection:'column', alignItems:'center', minHeight: '100vh'}}>

  //       <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
  //         <Link to='/' style={{textDecoration: 'none'}}>
  //           <HeaderTitle>
  //             Virgil
  //           </HeaderTitle>
  //         </Link>
  //       </HeaderContainer>

  //       <Div web={11} mobile={10} style={{height: mobileView ? '71vh' : '60vh',
  //         alignItems: 'center', justifyContent: 'center'}}>
  //         <TitleText style={{color:'#FFF', textTransform:'capitalize'}}>
  //           Oh no!<br></br><br></br>Your giveaway link isn't working.
  //         </TitleText>
  //       </Div>

  //       <FooterContainer web={11}>
  //         <Div web={6} direction='column'
  //           style={{justifyContent:'flex-end', alignItems:'flex-start'}}>              
  //           <FooterTitle>
  //             Virgil
  //           </FooterTitle>
  //           <BodyText style={{color:'#FFF'}}>
  //             2020 © Virgil Technologies
  //           </BodyText>
  //         </Div>
  //         <Div web={6} direction='column'
  //           style={{justifyContent:'flex-end', alignItems:'flex-end'}}>              
  //           <BodyText style={{color:'#FFF'}}>
  //             Terms of Service
  //           </BodyText>
  //           <Link to='/privacy' style={{textDecoration: 'none'}}>
  //             <BodyText style={{color:'#FFF'}}>
  //               Privacy Policy
  //             </BodyText>
  //           </Link>
  //         </Div>
  //       </FooterContainer>

  //     </Div>
  //   )
  // }

  return (
    <Div web={12} style={{backgroundColor:'#000', flexDirection:'column', alignItems:'center', minHeight:'100vh'}}>

      <HeaderContainer web={11} style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <HeaderTitle>
            Virgil
          </HeaderTitle>
        </Link>
      </HeaderContainer>

      <Div web={11} mobile={12}
        style={{minHeight: mobileView ? '45vh' : '45vh',
        marginTop: mobileView ? '50px' : '5vh',
        marginBottom: mobileView ? '50px' : '5vh',
        alignItems: mobileView ? 'center' : '',
        justifyContent: mobileView ? 'flex-start' : '',
        flexDirection: mobileView ? 'column' : 'row'}}>

        <Div web={6} mobile={12} style={{flexDirection:'column',
          justifyContent:'center', alignItems: 'center'}}>
          <Div web={10} mobile={11} style={{flexDirection:'column', justifyContent:'center', 
          alignItems: mobileView ? 'center' : 'flex-start'}}>
            <TitleText style={{color:'#FFF', marginBottom: mobileView ? '40px' : ''}}>
              Refer to Win
            </TitleText>

            <Div web={12} mobile={12} style={{flexDirection:mobileView ? 'column' : 'row', paddingBottom: '15px'}}>

              <Div style={{flexDirection:'column', marginRight: mobileView ? '' : '40px', marginBottom: mobileView ? '15px' : ''}}>
                <Div style={{height:'20px',margin:'10px 0px 10px 0px'}}>
                  <Image src={logoMirror}/>
                </Div>
                <BodyText style={{color:'#FFF'}}>
                  <a target="_blank" rel="noopener noreferrer" style={{color:'#FFF', textDecoration: 'underline'}}
                    href='https://www.mirror.co/shop/mirror'>
                    Mirror
                  </a>
                  <br></br>
                  ~$1,800 value
                </BodyText>
              </Div>

              <Div style={{flexDirection:'column', marginRight: mobileView ? '' : '40px', marginBottom: mobileView ? '15px' : ''}}>
                <Div style={{height:'20px', margin:'10px 0px 10px 0px'}}>
                  <Image src={logoContax}/>
                </Div>
                <BodyText style={{color:'#FFF'}}>
                  <a target="_blank" rel="noopener noreferrer" style={{color:'#FFF', textDecoration: 'underline'}}
                    href='https://www.ebay.com/itm/NEAR-MINT-Contax-G2-Camera-Biogon-28mm-f-2-8-Lens-w-TLA200-from-JAPAN-285/303556783050'>
                    Contax G2
                  </a>
                  <br></br>
                  ~$1,400 value
                </BodyText>
              </Div>

              <Div style={{flexDirection:'column', marginRight: mobileView ? '' : '40px', marginBottom: mobileView ? '15px' : ''}}>
                <Div style={{height:'20px', margin:'10px 0px 10px 0px'}}>
                  <Image src={logoDevialet}/>
                </Div>
                <BodyText style={{color:'#FFF'}}>
                  <a target="_blank" rel="noopener noreferrer" style={{color:'#FFF', textDecoration: 'underline'}}
                    href='https://www.devialet.com/en-us/buy-phantom-reactor-900/'>
                    Phantom Reactor 900
                  </a>
                  <br></br>
                  ~$1,300 value
                </BodyText>
              </Div>

            </Div>

            <BodyText style={{color:'#FFF', paddingLeft: mobileView ? '50px' : '', paddingRight: mobileView ? '50px' : '', display: mobileView ? '' : ''}}>
              {/* The Virgil giveaway is closed to new entries.
              We will randomly select the winner and make an announcement on or before Monday, May 11. Follow us{" "}
              <a target="_blank" rel="noopener noreferrer" style={{color:'#FFF', textDecoration: 'underline'}}
                href='https://www.instagram.com/virgil.card/'>
                @virgil.card
              </a>
              {" "}for updates. */}
              Thanks for requesting to be among our earliest users.<br></br>
              Refer friends to earn more entries to our giveaway.<br></br>
              The winner will get to choose one of the above items.<br></br>
              Details below.
            </BodyText>
          </Div>
        </Div>

        <Div web={6} mobile={11} style={{flexDirection:'column',
          justifyContent:'center', alignItems: 'center',
          paddingTop: mobileView ? '30px' :''}}>


          <Div web={10} mobile={12} style={{flexDirection:'column', justifyContent:'center', paddingBottom: mobileView ? '30px' : '30px'}}>
            <TitleText style={{color:'#FFF'}}>
              Your Referral Link
            </TitleText>
              <BodyText style={{color:'#FFF'}}>
                
              </BodyText>
            {refData && <BodyText style={{color:'#FFF'}}>
              virgilcard.com/?ref={refData.refer_id}
            </BodyText>}
            {mobileView && <BodyText style={{color:'#FFF'}}>
              <a style={{color:'#FFF',textDecoration:'underline'}} href={`sms:&body=virgilcard.com%2F%3Fref%3D${refData.refer_id}`}>Send A Text</a>
            </BodyText>}
          </Div>

          { refData.top_five && <Div web={10} mobile={10} style={{flexDirection:'column', justifyContent:'center'}}>
            <TitleText style={{color:'#FFF'}}>
              Leaderboard
            </TitleText>
              <table>
              <thead>
                <tr>
                  <TH style={{width:mobileView?'13%':''}}>
                    Rank
                  </TH>
                  <TH>
                    Referrals
                  </TH>
                  <TH>
                    Entries
                  </TH>
                  <TH style={{width:'30%'}}>
                    Chance To Win
                  </TH>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderTop: '1px solid white'}}>
                  <TD>1</TD>
                  <TD>{refData.top_five[0].refer_count}</TD>
                  <TD>{refData.top_five[0].refer_points}</TD>
                  <TD>{Math.round(100*(refData.top_five[0].refer_points/refData.total_points))}%</TD>
                </tr>
                <tr style={{borderTop: '1px solid white'}}>
                  <TD>2</TD>
                  <TD>{refData.top_five[1].refer_count}</TD>
                  <TD>{refData.top_five[1].refer_points}</TD>
                  <TD>{Math.round(100*(refData.top_five[1].refer_points/refData.total_points))}%</TD>
                </tr>
                <tr style={{borderTop: '1px solid white'}}>
                  <TD>3</TD>
                  <TD>{refData.top_five[2].refer_count}</TD>
                  <TD>{refData.top_five[2].refer_points}</TD>
                  <TD>{Math.round(100*(refData.top_five[2].refer_points/refData.total_points))}%</TD>
                </tr>
                {/* <tr style={{borderTop: '1px solid white'}}>
                  <TD>4</TD>
                  <TD>{refData.top_five[3].refer_count}</TD>
                  <TD>{refData.top_five[3].refer_points}</TD>
                  <TD>{Math.round(100*(refData.top_five[3].refer_points/refData.total_points))}%</TD>
                </tr>
                <tr style={{borderTop: '1px solid white'}}>
                  <TD>5</TD>
                  <TD>{refData.top_five[4].refer_count}</TD>
                  <TD>{refData.top_five[4].refer_points}</TD>
                  <TD>{Math.round(100*(refData.top_five[4].refer_points/refData.total_points))}%</TD>
                </tr> */}
              </tbody>
            </table>
          </Div> }
        </Div>

      </Div>

      <Div web={12} style={{flexDirection:'column',justifyContent:'center',
        alignItems:'center',backgroundColor:'#FFF'}}>
        <Div web={11} mobile={12}
          style={{minHeight: mobileView ? '20vh' : '', backgroundColor:'#FFF',
          marginTop: mobileView ? '50px' : '5vh',
          marginBottom: mobileView ? '50px' : '5vh',
          alignItems: mobileView ? 'center' : '',
          justifyContent: mobileView ? 'center' : 'space-evenly',
          flexDirection: 'column'}}>

          <Div web={12} mobile={10} style={{flexDirection:mobileView ? 'row' : 'row',
            height:(mobileView) ? '75px' : '15vh',
            paddingBottom: mobileView ? '30px' : ''}}>
            <Div web={11} mobile={12} style={{flexDirection:'column',
              justifyContent:'center', alignItems:'center'}}>
              <NumberText style={{margin:'0px'}}>
                {refData.refer_count}
              </NumberText>
              <BodyText>
                Your Referrals
              </BodyText>
            </Div>
            <Div web={11} mobile={12} style={{flexDirection:'column',
              borderRight:mobileView?'':'1px solid #000',
              borderLeft:mobileView?'':'1px solid #000',
              justifyContent:'center', alignItems:'center'}}>
              <NumberText style={{margin:'0px'}}>
                {refData.refer_points}
              </NumberText>
              <BodyText>
                Your Entries
              </BodyText>
            </Div>
            <Div web={11} mobile={12} style={{flexDirection:'column',
              justifyContent:'center', alignItems:'center'}}>
              <NumberText style={{margin:'0px'}}>
                {refData.total_points}
              </NumberText>
              <BodyText>
                Total Entries
              </BodyText>
            </Div>
          </Div>

          <Div web={12} mobile={11} style={{flexDirection:'column',
            justifyContent:'center', alignItems: 'center', height:(mobileView) ? '' : '15vh'}}>
            <Div web={11} mobile={10} style={{flexDirection:'column', justifyContent:'center'}}>
              <SubText>
                For each additional friend you refer, you will receive entries equal to one plus the number of friends referred prior.
              </SubText>  
              <SubText style={{fontWeight:'600'}}>
                You’ve referred {refData.refer_count} friends, so the next friend you refer (referral {refData.refer_count+1}) will add {refData.refer_count+1} entries to your total.
              </SubText>
              <SubText>
                Giveaway entries will close at 11:59PM PT on May 6th
              </SubText>
              <SubText>
                <a href='/sweepstakes-rules' style={{textDecoration:'underline', color:'#000'}}>See Terms and Conditions</a>
              </SubText>
            </Div>
          </Div>

        </Div>
      </Div>


      {/* little strop of black */}
      <Div style={{height:mobileView ?'0':'5vh',
        backgroundColor:'#FFF'}} />

      <FooterContainer web={11}>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-start'}}>              
          <FooterTitle>
            Virgil
          </FooterTitle>
          <BodyText style={{color:'#FFF'}}>
            2020 © Virgil Technologies
          </BodyText>
        </Div>
        <Div web={6} direction='column'
          style={{justifyContent:'flex-end', alignItems:'flex-end'}}> 
          <BodyText style={{color:'#FFF'}}>
            Terms of Service
          </BodyText>
          <Link to='/privacy' style={{textDecoration: 'none'}}>
            <BodyText style={{color:'#FFF'}}>
              Privacy Policy
            </BodyText>
          </Link>
        </Div>
      </FooterContainer>

    </Div>
  )
}

const TH = styled.th`
  border: none;
  background: black;
  color: black;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  word-wrap: break-word;
  letter-spacing: 0.5px;
  width: 23.33%;
  font-size: 18px;
  line-height: 24px;
  ${media.md`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  `}
`

const TD = styled.td`
  background: black;
  color: black;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  word-wrap: break-word;
  letter-spacing: 0.5px;
  ${media.md`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  `}
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

const NumberText = styled.h2`
  font-family: gill-sans-nova, sans-serif;
  font-size: 64px;
  color: #000;
  font-weight: 600;
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
    text-align: center;
  `}
`
const SubText = styled(BodyText)`
  font-size: 14px;
  margin: 0px;
  line-height: 18px;
  ${media.md`
    line-height: 24px;
    margin-bottom: 5px;
  `}
`

const Image = styled(Div)`
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`