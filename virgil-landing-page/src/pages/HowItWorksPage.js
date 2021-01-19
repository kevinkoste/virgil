// core
import React, { useState, useEffect } from 'react'
import { useRouteMatch, useHistory, Switch, Route, Redirect, Link } from 'react-router-dom'

// styling
import styled from 'styled-components'
import media from '../styles/media'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { animateScroll as scroll } from 'react-scroll'


// custom
import useDetectMobileView from '../styles/useDetectMobileView'
import HowItWorksView from '../views/HowItWorksView'
import { Div } from '../styles/CustomGrid'
import { BodyText } from '../styles/DefaultStyles'

import howitworksData from '../data/how-it-works-data.js'

export default function SurveyPage() {

  let history = useHistory()
  let match = useRouteMatch()
  let mobileView = useDetectMobileView()

  const [inProgress, setInProgress] = useState(false)
  // const [showingProgress, setShowingProgress] = useState(false)
  // const [progress, setProgress] = useState(0)

  // helper to redirect to first question on refresh or bad link
  // also kicks off image preload
  useEffect(() => {
    setInProgress(true)
    scroll.scrollToTop()

    howitworksData.map(item => item.image).forEach((image) => {
      if (image) {
        new Image().src = require('../img/howitworks_images/mobile/'+image)
        new Image().src = require('../img/howitworks_images/desktop/'+image)
      }
    })

  }, [])

  const handleSubmit = (pageID) => {
    history.push(`${match.path}/${pageID}`)
    scroll.scrollToTop()
  }

  return (

    <Div web={12} style={{flexDirection:'column', justifyContent:'space-between', backgroundColor:'#000',
      alignItems:'center', minHeight:'100vh'}}>

      <Div web={12} style={{minHeight:mobileView?'':'100vh', flexDirection:'column',justifyContent:'center',
        backgroundColor:'#FFF', alignItems:'center'}}>

        <AnimationWrapper>
          <Route render={({ location }) => 
            <SwitchTransition mode='out-in'>
              <CSSTransition key={location.key}
                timeout={{enter: 400, exit: 400}}
                classNames={'fade'}>

                <Switch location={location} >

                  <Route path={`${match.path}/:pageID`} >
                    { (inProgress)
                      ? <HowItWorksView
                          handleSubmit={handleSubmit}
                          />
                      : <Redirect to={`${match.path}/start`} />
                    }
                  </Route>

                  <Route path={`${match.path}/`} >
                    <Redirect to={`${match.path}/start`} />
                  </Route>

                </Switch>

              </CSSTransition>
            </SwitchTransition>
          }/>
        </AnimationWrapper>

      </Div>

      <Div web={12} style={{height:mobileView?'5vh':'5vh',
        backgroundColor:mobileView?'#FFF':'#000'}}/>

      <FooterContainer web={11}>
        <Div web={6} direction='column' style={{justifyContent:'flex-end', alignItems:'flex-start', whiteSpace:'nowrap'}}>             
          <Link to='/' style={{textDecoration: 'none'}}>
            <FooterTitle style={{color:'#FFF'}}>
              Virgil
            </FooterTitle>
          </Link>
          <BodyText style={{color:'#FFF'}}>
            2020 © Virgil Technologies
          </BodyText>
        </Div>
        <Div web={6} direction='column' style={{justifyContent:'flex-end', alignItems:'flex-end'}}> 
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

      {/* { (showingProgress)
        ? <ProgressBar>
            <Progress style={{width: `${100*pageID.progress/13}%` }} />
          </ProgressBar>
        : <></>
      } */}

    </Div>

  )
}

const HeaderTitle = styled.h1`
  font-family: 'romana';
  font-size: 60px;
  color: #000;
  font-weight: 400;
  ${media.md`
    font-size: 44px;
  `}
`

const FooterContainer = styled(Div)`
  height: 25vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  background-color: #000;
  color: #FFF;
  border-top: 1px solid #FFF;
  ${media.md`
    height: 150px;
    flex-direction: row;
    justify-content: center;
    border-top: unset;
    padding-bottom: 30px;
  `}
`
const FooterTitle = styled(HeaderTitle)`
  margin-bottom: 10px;
  /* ${media.md`
    color: #FFF;
  `} */
`
const AnimationWrapper = styled.div`
  height: 100%;
  width: 100%;

  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 400ms, transform 400ms;
  }
`

// const ProgressBar = styled.div`
//   position: absolute;
//   bottom: 20px;
//   height: 5px;
//   width: 83.33vw;
//   border-bottom: solid #151515;
//   border-width: 1px;
// `

// const Progress = styled.div`
//   height: 5px;
//   background-color: #151515;
// `
